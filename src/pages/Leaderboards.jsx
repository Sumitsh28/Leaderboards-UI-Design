import { useState } from "react";
import "./Leaderboards.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import searchPng from "../assets/search.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { initialData } from "../constants/initialData";
import Form from "../components/Form";

const LeaderBoards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [data, setData] = useState(initialData);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      const aValue = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const bValue = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];
      if (aValue < bValue) {
        return direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.direction === "asc") {
      return a[sortConfig.key] - b[sortConfig.key];
    } else {
      return b[sortConfig.key] - a[sortConfig.key];
    }
  });

  const filteredData = sortedData.filter((row) => {
    return (
      String(row.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(row.cr).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(row.op).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(row.adp).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(row.win).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <main className="table" id="leaderboards_table">
      <section className="table__header">
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Leaderboards</h1>
        <div className="rhs">
          <div className="input-group">
            <input
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <img src={searchPng} alt="Search Icon" />
          </div>
          <Form />
        </div>
      </section>
      <section className="table__body">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {[
                  { key: "rank", label: "Rank" },
                  { key: "name", label: "Name" },
                  { key: "cr", label: "Calmar Ratio" },
                  { key: "op", label: "Overall Profit" },
                  { key: "adp", label: "Avg. Daily Profit" },
                  { key: "win", label: "Win %(Day)" },
                  { key: "price", label: "Price (Rs)" },
                  { key: "action", label: "Action" },
                ].map(({ key, label }) => (
                  <th key={key} onClick={() => handleSort(key)}>
                    {label}
                    {label !== "Action" && (
                      <span className="icon-arrow">
                        {sortConfig.direction === "asc" ? (
                          <BsArrowDown />
                        ) : (
                          <BsArrowUp />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.rank}</td>
                  <td>{row.name}</td>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FaArrowTrendUp style={{ color: "green" }} />
                    <td>{row.cr}</td>
                  </div>
                  <td>{row.op}</td>
                  <td>{row.adp}</td>
                  <td>{row.win}</td>
                  <td>{row.price}</td>
                  <td>
                    <p className={`action action_${row.action}`}>
                      {row.action}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default LeaderBoards;
