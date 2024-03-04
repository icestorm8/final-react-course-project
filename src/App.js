import "./App.css";
// components that are visible throughout all pages
import Footer from "./components/Footer";
import Header from "./components/Header";
// routing
import { Route, Routes } from "react-router-dom";
// components that are visible from certain routes
import Home from "./components/Home";
import About from "./components/About";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header className="" />
      {/* content here */}

      <main className="flex-grow-1 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/createitem" element={<CreateItem />} />
        </Routes>
      </main>

      {/* content end */}
      <Footer className="mt-auto " />
    </div>
  );
}

export default App;
