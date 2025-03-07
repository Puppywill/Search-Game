import { useState } from "react";
import { Search } from "lucide-react";
import "./style.css";

export default function SearchApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setResults([`You searched for: "${query}"`, `Another match for "${query}"`]);
  };

  return (
    <div className="app-container">
      <div className="search-box">
        <h1>Search App</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <Search className="search-icon" />
          </button>
        </div>
      </div>
      <div className="results-container">
        {results.length > 0 ? (
          <div className="fade-in">
            {results.map((item, index) => (
              <div key={index} className="result-card">{item}</div>
            ))}
          </div>
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </div>
  );
}
