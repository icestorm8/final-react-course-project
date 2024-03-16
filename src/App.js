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
import { DogArray } from "./functions/fetchData";
// component under items ->
import Dog from "./components/Dog";
// page not found component
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";

function App() {
  var [data, setData] = useState(DogArray);
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header className="" />
      {/* content here */}

      <main className="flex-grow-1 position-relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/items"
            //  setData={setData} data={data}
            element={<Items />}
          />
          {/* if i use nested route here it's opens on the same page and i want it to open in as a different page */}
          <Route
            // setData={setData} data={data} />
            path="/items/:dogName"
            element={<Dog />}
          />
          {/* pass params of dog clicked*/}
          <Route path="/createitem" element={<CreateItem />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      {/* content end */}
      <Footer className="mt-auto " />
    </div>
  );
}

export default App;
