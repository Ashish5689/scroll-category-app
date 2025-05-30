import { useState, useRef } from 'react'
import CategoryBar from './components/CategoryBar'
import DataSection from './components/DataSection'
import { categories, mockData } from './data/mockData'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [isManualClick, setIsManualClick] = useState(false)
  const scrollTimeoutRef = useRef(null)

  // Handle category click from the navbar
  const handleCategoryClick = (category) => {
    // Set the flag to indicate this is a manual click (not from scrolling)
    setIsManualClick(true)
    setActiveCategory(category)
    
    // Reset the flag after a delay to allow for the scroll to complete
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsManualClick(false)
    }, 1000) // Adjust timeout as needed
  }

  // Handle category change from scrolling
  const handleScrollCategoryChange = (category) => {
    if (!isManualClick) {
      setActiveCategory(category)
    }
  }

  return (
    <div className="app-container">
      <CategoryBar 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryClick={handleCategoryClick} 
      />
      <DataSection 
        data={mockData} 
        activeCategory={activeCategory} 
        setActiveCategory={handleScrollCategoryChange}
        isManualClick={isManualClick}
      />
    </div>
  )
}

export default App
