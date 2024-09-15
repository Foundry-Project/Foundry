import { Image } from 'react-native';

// Define Image Arrays for Each Category
const electronicsImages = [
  require('./assets/Electronics/1.0.webp'),
  require('./assets/Electronics/1.1.jpg'),
  require('./assets/Electronics/1.2.jpg'),
  require('./assets/Electronics/1.3.jpg'),
  require('./assets/Electronics/1.4.webp'),
];

const jewelryImages = [
  require('./assets/Jewlery/2.0.jpg'),
  require('./assets/Jewlery/2.1.jpg'),
];

const clothesImages = [
  require('./assets/Clothes/3.0.jpg'),
  require('./assets/Clothes/3.1.jpg'),
  require('./assets/Clothes/3.2.jpg'),
];

const petsImages = [
  require('./assets/Pets/4.0.jpg'),
  require('./assets/Pets/4.1.jpg'),
  require('./assets/Pets/4.2.jpg'),
];

const vehiculesImages = [
  require('./assets/Vehicules/5.0.jpg'),
  require('./assets/Vehicules/5.1.jpg'),
  require('./assets/Vehicules/5.2.jpg'),
];

// Export a function to get a random image based on the category
export const getRandomImageForCategory = (categoryId) => {
  let selectedImage = null;

  switch (categoryId) {
    case 1: // Electronics
      selectedImage = electronicsImages[Math.floor(Math.random() * electronicsImages.length)];
      break;
    case 2: // Jewelry
      selectedImage = jewelryImages[Math.floor(Math.random() * jewelryImages.length)];
      break;
    case 3: // Clothes
      selectedImage = clothesImages[Math.floor(Math.random() * clothesImages.length)];
      break;
    case 4: // Pets
      selectedImage = petsImages[Math.floor(Math.random() * petsImages.length)];
      break;
    case 5: // Vehicles
      selectedImage = vehiculesImages[Math.floor(Math.random() * vehiculesImages.length)];
      break;
    default:
      return null; // Default case if the category is not found
  }

  // Resolve the actual URI for logging
  const resolvedImage = Image.resolveAssetSource(selectedImage).uri;
  console.log(`Selected Image for category: ${categoryId} is: ${resolvedImage}`);
  return resolvedImage;
};
