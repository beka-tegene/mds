import { Route, Routes } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { CompanyPetition } from "./Pages/CompanyPetition";
import { Comment } from "./Pages/Comment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/modern-day-slavery/company/:id" element={<CompanyPetition />} />
    </Routes>
  );
}

export default App;
