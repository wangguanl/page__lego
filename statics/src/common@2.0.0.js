(() => {
  lazyLoad?.(
    document.querySelectorAll(
      '[__lego__lazy-load_image],[__lego__lazy-load_background-image]'
    ),
    {
      src: '__lego__lazy-load_image',
      backgroundImage: '__lego__lazy-load_background-image',
    }
  );

  // 轮播初始化实例
  if (__Lego.elements.swiper && __Lego.elements.swiper.length) {
    __Lego.elements.swiper.forEach((o = {}) => {
      const { id, on = {}, pagination, navigation } = o;
      const options = {
        ...o,
        pagination: pagination
          ? {
              el: `#${id} .swiper-pagination`,
            }
          : {},
        navigation: navigation
          ? {
              nextEl: `#${id} .swiper-button-next`,
              prevEl: `#${id} .swiper-button-prev`,
            }
          : {},
        on: {
          ...on,
          slideChangeTransitionStart() {
            lazyLoad?.(document.querySelectorAll(`#${id} [_lazy-load]`));
            on.slideChangeTransitionStart?.(this);
          },
        },
      };
      window['swiper-' + id] = new Swiper(`#${id}`, options);
      if (o.hasOwnProperty('pagination') && !o.pagination) {
        $(`#${id} .swiper-pagination`).hide();
      }
      if (o.hasOwnProperty('navigation') && !o.navigation) {
        $(`#${id} .swiper-button-next, #${id} .swiper-button-prev`).hide();
      }
    });
  }
})();
