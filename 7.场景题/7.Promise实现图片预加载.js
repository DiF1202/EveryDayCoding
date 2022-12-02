const images = ["./src/imss.jpg", "./src/imss.jpg", "./src/imss.jpg"];

const loader = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      console.log("@success");
      resolve();
    };
    image.onerror = () => {
      console.log("@failed");
      reject();
    };
    image.src = url;
  });
};

const preLoad = () => {
  const preLoaderArray = [];
  imgs.forEach((url) => {
    preLoaderArray.push(loader(url));
  });
  return Promise.allSettled(preLoaderArray);
};
