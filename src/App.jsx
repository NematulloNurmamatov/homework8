import { BrowserRouter, Route, Routes } from "react-router-dom";

// import HomeP from "./pages/HomeP";
import AboutP from "./pages/AboutP";
import PostsP from "./pages/PostsP";
import CounterP from "./pages/CounterP";
import DashboardP from "./pages/DashboardP";
import PostP from "./pages/PostP";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        {/* <Route index element={<HomeP />} /> */}
        <Route index element={<DashboardP />} />
        <Route path="about" element={<AboutP />} />
        <Route path="posts" element={<PostsP />} />
        <Route path="posts/:id" element={<PostP />} />
        <Route path="counter" element={<CounterP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
