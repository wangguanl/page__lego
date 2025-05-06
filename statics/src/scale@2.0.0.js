((canvas = 750) => {
  const scale = canvas => {
    const clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize =
      (100 * (clientWidth / canvas)).toFixed(4) + 'px';
  };
  scale(canvas);
  window.addEventListener('resize', () => scale(canvas));
})(window.__Lego?.width || 750);
