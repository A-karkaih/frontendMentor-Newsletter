import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsLetter from "./pages/NewsLetter";
import Thanks from "./pages/Thanks";
const App = () => {
  return (
    <div className="flex sm:justify-center sm:items-center sm:w-screen sm:h-screen sm:bg-[#222642]  ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsLetter />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
