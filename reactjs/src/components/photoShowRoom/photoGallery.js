import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { S3AccessTool } from "../../tools/s3AccessTool";

const decodePrefix = 'data:image/jpeg;base64,';

export default function LazyLoadGallery({ imgSrc }) {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({ 0: true }); // Load only first image initially

  const [imgData, setImgData] = useState();

  useEffect(() => { //get image data from s3 with img name
    if (imgSrc[index]) {
      S3AccessTool({ operation: 'get', 'key': imgSrc[index] }, setImgData);
    }
  }, [index, imgSrc]);

  const nextImage = () => {
    setIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % imgSrc.length;
      setLoadedImages((prev) => ({ ...prev, [nextIndex]: true })); // Load the next image
      return nextIndex;
    });
  };

  const prevImage = () => {
    setIndex((prevIndex) => {
      const prevIndexUpdated = (prevIndex - 1 + imgSrc.length) % imgSrc.length;
      setLoadedImages((prev) => ({ ...prev, [prevIndexUpdated]: true })); // Load the previous image
      return prevIndexUpdated;
    });
  };

  return (
    <>
      <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          {loadedImages[index] && (
            <motion.img
              key={index}
              src={`${decodePrefix}${imgData?.data?.body}`}
              className="w-full h-auto object-cover"
              initial={{ opacity: 0, maxWidth: '1000px', maxHeight:'800px' }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>
      <div>
        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white">
          <ChevronLeft size={24} />
        </button>

        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white">
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}
