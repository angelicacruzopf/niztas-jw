
function importAllImages(context) {
  let images = {};
  context.keys().forEach((key) => {
    const imageId = key.replace(/^\.\/(.*)s\.png$/, '$1');
    images[imageId] = context(key).default;
  });
  return images;
}

const imageContext = require.context('!!file-loader!../img/products', false, /\.(png)$/);
const imageMap = importAllImages(imageContext);

export function getImageUrl(product, index) {
  try {
    const image = imageMap[product.imageId];
    return image || ''; 
  } catch (error) {
    console.error("Error loading image:", error);
    return '';
  }
}