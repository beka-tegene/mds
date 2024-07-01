import { Route, Routes } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { CompanyPetition } from "./Pages/CompanyPetition";
import { Comment } from "./Pages/Comment";
import { CompleteSupport } from "./Pages/Landing/CompleteSupport";
import { NextIndex } from "./Pages/Landing/CompleteSupport/NextIndex";
import AllCompanies from "./Pages/Landing/SupportCompany/AllCompanies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/login" element={<Auth />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/complete-support" element={<CompleteSupport />} />
      <Route path="/complete-support-next" element={<NextIndex />} />
      <Route path="/modern-day-slavery/company/:id" element={<CompanyPetition />} />
      <Route
        path="/modern-day-slavery/company/:id"
        element={<CompanyPetition />}
      />
      <Route path="/companies" element={<AllCompanies />} />
    </Routes>
  );
}

export default App;
