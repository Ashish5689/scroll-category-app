import { useRef, useEffect } from 'react';
import '../styles/DataSection.css';

const DataSection = ({ data, activeCategory, setActiveCategory, isManualClick }) => {
  const sectionRefs = useRef({});
  const prevCategoryRef = useRef(activeCategory);
  
  // Register refs for each section
  const registerSectionRef = (category, element) => {
    if (element) {
      sectionRefs.current[category] = element;
    }
  };

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '-5% 0px -85% 0px', // Adjusted for better detection
      threshold: [0, 0.1, 0.2] // Multiple thresholds for smoother transitions
    };

    // Use requestAnimationFrame to debounce category changes
    let scheduledAnimationFrame = false;
    
    const handleIntersection = (entries) => {
      if (scheduledAnimationFrame) return;
      
      scheduledAnimationFrame = true;
      requestAnimationFrame(() => {
        // Get the most visible section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by visibility ratio if multiple sections are visible
          const mostVisibleEntry = visibleEntries.reduce((prev, current) => {
            return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
          });
          
          const category = mostVisibleEntry.target.getAttribute('data-category');
          setActiveCategory(category);
        }
        
        scheduledAnimationFrame = false;
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all section elements
    Object.values(sectionRefs.current).forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveCategory]);

  // Scroll to the section when activeCategory changes from a click
  useEffect(() => {
    // Only scroll if the category has changed
    if (activeCategory !== prevCategoryRef.current) {
      prevCategoryRef.current = activeCategory;
      
      if (activeCategory && sectionRefs.current[activeCategory]) {
        // If it's a manual click, force immediate scrolling
        if (isManualClick) {
          // Force immediate scroll with higher priority
          requestAnimationFrame(() => {
            sectionRefs.current[activeCategory].scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          });
        }
      }
    }
  }, [activeCategory, isManualClick]);

  return (
    <div className="data-section">
      {data.map((category) => (
        <section 
          key={category.id}
          data-category={category.name}
          ref={(el) => registerSectionRef(category.name, el)}
          className={`category-section ${activeCategory === category.name ? 'active' : ''}`}
          id={`section-${category.id}`}
        >
          <h2>{category.name}</h2>
          <div className="providers-container">
            {category.providers.map((provider) => (
              <div key={provider.id} className="provider-card">
                <div className="provider-image">
                  <img src={provider.image} alt={provider.name} />
                </div>
                <h3>{provider.name}</h3>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default DataSection;
