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

// component under items ->
import Dog from "./components/DogDetail";
import Edit from "./components/Edit";
// page not found component
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header className="" />
      {/* content here */}

      <main className="flex-grow-1 position-relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/items" element={<Items />} />
          {/* if i use nested route here it's opens on the same page and i want it to open in as a different page */}
          <Route path="/items/createItem" element={<CreateItem />} />
          <Route path="/items/:dogName" element={<Dog />} />
          {/* edit a specific dog */}
          <Route path="/items/:dogName/editDog" element={<Edit />} />
          {/* pass params of dog clicked*/}
          {/* <Route path="/createitem" element={<CreateItem />} />  should be inside items by instructions*/}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      {/* content end */}
      <Footer className="mt-auto " />
    </div>
  );
}

export default App;
