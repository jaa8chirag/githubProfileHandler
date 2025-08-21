import { useState } from "react";
import "./App.css";
import User from "./User";

function App() {
  const [userName, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (userName.trim() !== "") {
      fetchGithubData();
    }
  };

  async function fetchGithubData() {
    try {
      setLoading(true);
      setError(null);
      setUserData(null);

      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if (res.ok) {
        setUserData(data);
      } else {
        setError(" User not found!");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub Profile Finder</h1>

      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          placeholder="Enter GitHub Username"
          type="text"
          className="flex-1 p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setUsername(e.target.value)}
          value={userName}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {userData && <User userData={userData} />}
    </div>
  );
}

export default App;
