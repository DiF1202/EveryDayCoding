const mySetTimeout = (fn, delay) => {
  const timer = () => {
    setInterval(() => {
      clearInterval(timer);
      fn();
    }, delay);
  };
};
