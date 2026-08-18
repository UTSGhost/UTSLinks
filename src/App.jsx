import { useState } from 'react'
import './App.css'
import Header from './Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  return (
    <div className={`theme-wrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} onToggle={toggleTheme} />
      new website woooo
    </div>
  )
}

export default App
