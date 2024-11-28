import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Logo from "./components/Logo";
import './styles/App.css'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <div className="content-wrapper">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="searchbar-container">
          <SearchBar />
        </div>
        </div>
      </div>
    </div>
  )
}

export default App