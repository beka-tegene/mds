import { useState, useEffect } from "react";
import { Navigation } from "../../../Components/Navigation";
import { IoMdSearch } from "react-icons/io";
import { BASE_URL } from "../../../Utils/constants";

const AllCompanies = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [companies, setCompanies] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}api/company/`)
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
        setFilteredCompanies(data);
      })
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  useEffect(() => {
    filterCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus, searchQuery, companies]);

  const filterCompanies = () => {
    let filtered = companies;
    if (filterStatus !== "All") {
      filtered = filtered.filter(
        (company) => company.membershipStatus === filterStatus
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((company) =>
        company.baseUser.fullName
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }
    setFilteredCompanies(filtered);
    setCurrentPage(1);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Joined":
        return "text-green-500";
      case "Decline":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filterOptions = ["All", "Pending", "Joined", "Decline"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <div className="flex justify-between items-center px-20">
        <div className="flex my-4 space-x-2">
          {filterOptions.map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-6 py-1 border rounded ${
                filterStatus === status ? "bg-gray-200" : ""
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center my-4 gap-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-1 rounded outline-none text-sm w-full"
          />

          <button className="border border-black p-1 flex justify-center items-center rounded">
            <IoMdSearch size={20} />
          </button>
        </div>
      </div>

      <div className="flex-grow">
        {filteredCompanies.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">No companies found</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-5 justify-center">
            {filteredCompanies.slice(startIdx, endIdx).map((company) => (
              <div
                className="shadow-md rounded-lg w-1/4 h-80"
                key={company._id}
              >
                <div className="w-full h-40 overflow-hidden">
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
                <div className={`pl-5 py-2 font-bold flex items-center gap-2`}>
                  Status :{" "}
                  <p className={`${getStatusClass(company.membershipStatus)}`}>
                    {company.membershipStatus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredCompanies.length > 0 && (
        <div className="flex justify-center mt-5 font-semibold py-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 border ${
              currentPage === 1 ? "text-gray-400" : "text-black"
            }`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={`px-4 py-2 border ${
                currentPage === pageIndex + 1 ? "bg-gray-200" : ""
              }`}
            >
              {pageIndex + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border ${
              currentPage === totalPages ? "text-gray-400" : "text-black"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCompanies;
