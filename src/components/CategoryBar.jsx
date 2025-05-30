import { useRef, useEffect } from 'react';
import '../styles/CategoryBar.css';

const CategoryBar = ({ categories, activeCategory, onCategoryClick }) => {
  const categoryBarRef = useRef(null);
  const categoryRefs = useRef({});

  // Register refs for each category button
  const registerCategoryRef = (category, element) => {
    if (element) {
      categoryRefs.current[category] = element;
    }
  };

  // Scroll the active category into view when it changes
  useEffect(() => {
    if (activeCategory && categoryRefs.current[activeCategory] && categoryBarRef.current) {
      // Use requestAnimationFrame to optimize scrolling
      requestAnimationFrame(() => {
        const container = categoryBarRef.current;
        const element = categoryRefs.current[activeCategory];
        
        // Calculate positions
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        
        // Check if element is fully visible
        const isFullyVisible = 
          elementRect.left >= containerRect.left && 
          elementRect.right <= containerRect.right;
        
        // If not fully visible, scroll to center it
        if (!isFullyVisible) {
          // Calculate scroll position to center the element
          const scrollLeft = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
          
          // Ensure we don't scroll past the beginning
          const finalScrollLeft = Math.max(0, scrollLeft);
          
          // Smooth scroll to the position with a slightly faster duration for better responsiveness
          // We'll use a custom animation instead of the native scrollTo for smoother performance
          const startPosition = container.scrollLeft;
          const distance = finalScrollLeft - startPosition;
          const duration = 300; // ms
          const startTime = performance.now();
          
          const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              // Easing function for smoother animation
              const progress = elapsedTime / duration;
              const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
              container.scrollLeft = startPosition + distance * easeProgress;
              requestAnimationFrame(animateScroll);
            } else {
              container.scrollLeft = finalScrollLeft;
            }
          };
          
          requestAnimationFrame(animateScroll);
        }
      });
    }
  }, [activeCategory]);

  return (
    <div className="category-bar" ref={categoryBarRef}>
      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            ref={(el) => registerCategoryRef(category, el)}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
