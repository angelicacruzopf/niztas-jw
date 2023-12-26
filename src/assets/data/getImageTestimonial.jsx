
function importAllImagesReview(context) {
    let images = {};
    context.keys().forEach((key) => {
      const imageId = key.replace(/^\.\/(.*)s\.png$/, '$1');
      images[imageId] = context(key).default;
    });
    return images;
  }
  
  const imageContext = require.context('!!file-loader!../img/review', false, /\.(png)$/);
  const imageMap = importAllImagesReview(imageContext);
  
  export function getImageUrlReview(review) {
    try {
      const image = imageMap[review.imageId];
      return image || ''; 
    } catch (error) {
      console.error("Error loading image:", error);
      return '';
    }
  }
  