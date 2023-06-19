import { useState, useEffect } from 'react';

const ButtonScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setShowButton(scrollTop > 300);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <div
          className="fixed bottom-4 right-4 bg-gray-950 hover:bg-black text-white rounded-full w-12 h-12 flex justify-center items-center cursor-pointer shadow-md z-50"
          onClick={handleScrollTop}
        >
          <svg
            className="w-6 h-6 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 4.586l-7.293 7.293 1.414 1.414L12 7.414l5.879 5.879 1.414-1.414L12 4.586z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ButtonScrollTop;
