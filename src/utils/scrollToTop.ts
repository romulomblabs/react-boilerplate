const scrollToTop = (duration = 300) => {
  const step = -window.scrollY / (duration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, step);
    } else clearInterval(scrollInterval);
  }, 15);
};

export default scrollToTop;
