/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */
(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(root);
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.LazyLoad = factory(root);
  }
})(typeof global !== 'undefined' ? global : window || global, function (root) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    root = window;
  }

  const defaults = {
    src: 'data-src',
    backgroundImage: 'data-background-image',
    srcset: 'data-srcset',
    selector: '.lazyload',
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  /**
   * Merge two or more objects. Returns a new object.
   * @private
   * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */
  const extend = function () {
    let extended = {};
    let deep = false;
    let i = 0;
    let length = arguments.length;

    /* Check if a deep merge */
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    /* Merge the object into the extended object */
    let merge = function (obj) {
      for (let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          /* If deep merge and property is an object, merge properties */
          if (
            deep &&
            Object.prototype.toString.call(obj[prop]) === '[object Object]'
          ) {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    /* Loop through each object and conduct a merge */
    for (; i < length; i++) {
      let obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  function LazyLoad(images, options = {}) {
    this.settings = extend(defaults, options);
    this.images = images || document.querySelectorAll(this.settings.selector);
    this.observer = null;
    this.init();
    this.loadImg = function (el) {
      let src = el.getAttribute(this.settings.src),
        srcset = el.getAttribute(this.settings.srcset),
        backgroundImage = el.getAttribute(this.settings.backgroundImage);

      // 如果标签是img则赋予src，否则使用背景图片
      const getBg = bgs =>
        bgs.map(bg => `url("${bg}")`).join(',') +
        ',' +
        window.getComputedStyle(el).backgroundImage;
      if (el.tagName.toLowerCase() === 'img') {
        if (src) {
          el.src = src;
        }
        if (srcset) {
          el.srcset = srcset;
        }
      } else {
        // el.style.backgroundImage = 'url(' + src + ')';
        if (src) {
          el.style.backgroundImage = getBg([src]);
        }
      }
      if (backgroundImage) {
        el.style.backgroundImage = getBg(backgroundImage.split(','));
      }
    };
  }

  LazyLoad.prototype = {
    init: function () {
      /* Without observers load everything and bail out early. */
      if (!root.IntersectionObserver) {
        this.loadImages();
        return;
      }

      let self = this;
      let observerConfig = {
        root: this.settings.root,
        rootMargin: this.settings.rootMargin,
        threshold: [this.settings.threshold],
      };

      this.observer = new IntersectionObserver(function (entries) {
        Array.prototype.forEach.call(entries, function (entry) {
          if (entry.isIntersecting) {
            self.observer.unobserve(entry.target);
            self.loadImg(entry.target);
          }
        });
      }, observerConfig);

      Array.prototype.forEach.call(this.images, function (image) {
        self.observer.observe(image);
      });
    },
    loadAndDestroy: function () {
      if (!this.settings) {
        return;
      }
      this.loadImages();
      this.destroy();
    },

    loadImages: function () {
      if (!this.settings) {
        return;
      }

      let self = this;
      Array.prototype.forEach.call(this.images, function (image) {
        self.loadImg(image);
      });
    },

    destroy: function () {
      if (!this.settings) {
        return;
      }
      this.observer.disconnect();
      this.settings = null;
    },
  };

  root.lazyLoad = function (images, options) {
    return new LazyLoad(images, options);
  };

  if (root.jQuery) {
    const $ = root.jQuery;
    $.fn.lazyLoad = function (options) {
      options = options || {};
      options.attribute = options.attribute || 'data-src';
      new LazyLoad($.makeArray(this), options);
      return this;
    };
  }

  return LazyLoad;
});
