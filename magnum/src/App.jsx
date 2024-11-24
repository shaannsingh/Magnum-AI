import Sidebar from "./components/Sidebar";
import './App.css'
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <SearchBar />
      </div>
    </div>
  )
}

export default App