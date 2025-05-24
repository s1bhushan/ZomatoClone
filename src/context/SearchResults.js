import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import foodData from "../data/foodData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = foodData.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
      <div className="pt-20">
    <div className="p-4 max-w-2xl mx-auto mt-20">
      <h2 className="text-xl font-bold mb-4">
        Search Results for: <span className="text-red-500">{query}</span>
      </h2>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((item) => (
            <li key={item.id} className="p-4 border rounded-md shadow">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-500">No results found.</p>
      )}
    </div>
    </div>
  );
};

export default SearchResults;
