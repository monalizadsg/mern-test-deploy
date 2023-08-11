import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SimpleTodosList from "./components/SimpleTodolist";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Navbar /> */}

          {/* <div className="container"> */}
          <Route path='/' exact element={<SimpleTodosList />} />
          <Route path='/create' element={<CreateTask />} />
          <Route path='/update/:id' element={<EditTask />} />
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
