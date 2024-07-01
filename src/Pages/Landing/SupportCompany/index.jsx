import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../Utils/constants";

export const SupportCompany = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}api/company/`)
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center p-10 max-sm:px-2">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-medium">Your voice matters</h1>
        <p>These petitions need your help to achieve victory.</p>
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-4/5">
        {companies.slice(0, 6).map((company) => (
          <div className="shadow-md" key={company._id}>
            <div className="w-full h-60 overflow-hidden">
              <img
                src={company.companyPicture.url}
                alt="brand"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col p-5">
              <h1 className="text-xl font-semibold">
                {company.baseUser.fullName}
              </h1>
              <p>Email: {company.baseUser.email}</p>
            </div>

            <div className="pl-5 py-2 font-bold">
              Status: {company.membershipStatus}
            </div>
          </div>
        ))}
      </div>

      <Link to="/companies" className="font-bold hover:underline">
        See All Companies
      </Link>
    </div>
  );
};
