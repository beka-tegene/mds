import { Route, Routes } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { CompanyPetition } from "./Pages/CompanyPetition";
import { Comment } from "./Pages/Comment";
import { CompleteSupport } from "./Pages/Landing/CompleteSupport";
import { NextIndex } from "./Pages/Landing/CompleteSupport/NextIndex";
import { Admin } from "./Pages/Admin";
import { Auth } from "./Pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/login" element={<Auth />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/complete-support" element={<CompleteSupport />} />
      <Route path="/complete-support-next" element={<NextIndex />} />
      <Route path="/modern-day-slavery/company/:id" element={<CompanyPetition />} />
      <Route path="/admin/modern-day-slavery" element={<Admin />} />
    </Routes>
  );
}

export default App;
