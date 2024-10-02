// import 'react-awesome-lightbox/build/style.css'; // Import the lightbox styles

// import Image from 'next/image';
// import React, { useState } from 'react';
// import Lightbox from 'react-awesome-lightbox';

// // List of image URLs for the portfolio
// const images = [
//   {
//     id: 1,
//     src: '/path-to-your-images/image1.jpg',
//     alt: 'Description of image 1',
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 2,
//     src: '/path-to-your-images/image2.jpg',
//     alt: 'Description of image 2',
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 3,
//     src: '/path-to-your-images/image3.jpg',
//     alt: 'Description of image 3',
//     width: 1200,
//     height: 800,
//   },
//   // Add more images as needed
// ];

// const Photography: React.FC = () => {
//   const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
//         {images.map((image, index) => (
//           <div key={image.id} className="relative overflow-hidden rounded-lg">
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={image.width}
//               height={image.height}
//               className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//               onClick={() => setOpenImageIndex(index)} // Opens lightbox on image click
//             />
//           </div>
//         ))}
//       </div>

//       {openImageIndex !== null && (
//         <Lightbox
//           image={images[openImageIndex].src}
//           title={images[openImageIndex].alt}
//           onClose={() => setOpenImageIndex(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Photography;
