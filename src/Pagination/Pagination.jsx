import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [employees, setEmployees] = useState([]);
  const [pages, setPages] = useState(1);
  const pagesPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        alert("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const totalEmployee = Math.ceil(employees.length / 5);
  const pageHandler = (idx) => {
    console.log(idx);
    if (idx >= 1 && idx <= totalEmployee) {
      
      setPages(idx);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <ul>
        {employees
          .slice(pages * pagesPerPage - pagesPerPage, pagesPerPage * pages)
          .map((item, idx) => {
            return <li key={idx}>{item.name}</li>;
          })}
      </ul>

      <div className="space-x-2">
        <button
          className="bg-gray-300 p-2"
          onClick={() => pageHandler(pages - 1)}
        >
          &lt;
        </button>
        {Array.from({ length: totalEmployee }).map((_, idx) => {
          return (
            <button
              className={
                pages === idx + 1 ? "bg-slate-600 p-2" : "bg-gray-300 p-2"
              }
              onClick={() => setPages(idx + 1)}
            >
              {idx + 1}
            </button>
          );
        })}
        <button
          className="bg-gray-300 p-2"
          onClick={() => pageHandler(pages + 1)}
        >
          &gt;
        </button>
      </div>

      <div>
        {Array.from(totalEmployee).map((_, idx) => {
          return <button className="bg-gray-300 p-2"></button>;
        })}
      </div>
    </div>
  );
};

export default Pagination;
