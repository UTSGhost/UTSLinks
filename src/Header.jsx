export default function Header({ isDarkMode, onToggle }) {
    return (
        <header className="main-header">
            <h1>UTSGhost</h1>
            
            <button onClick={onToggle} className="theme-toggle">
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </header>
    );
}