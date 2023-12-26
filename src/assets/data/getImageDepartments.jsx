
function importAllImagesDepartment(context) {
    let images = {};
    context.keys().forEach((key) => {
      const imageId = key.replace(/^\.\/(.*)s\.png$/, '$1');
      images[imageId] = context(key).default;
    });
    return images;
  }
  
  const imageContext = require.context('!!file-loader!../img/departamentos', false, /\.(png)$/);
  const imageMap = importAllImagesDepartment(imageContext);
  
  export function getImageUrlDepmnt(department) {
    try {
      const image = imageMap[department.imageId];
      return image || ''; 
    } catch (error) {
      console.error("Error loading image:", error);
      return '';
    }
  }
  