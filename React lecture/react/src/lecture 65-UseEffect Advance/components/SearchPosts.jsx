import { useEffect, useState } from "react";
import axios from "axios";

function SearchPosts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // if input empty, don't call API
     if (!searchTerm) {
    setResults([]);
    return;
  }

    const timer = setTimeout(async () => {
      console.log("API called for:", searchTerm);

      const res = await axios.get(
        `https://dummyjson.com/posts/search?q=${searchTerm}`
      );

      setResults(res.data.posts);
    }, 500); // 500ms debounce

    // cleanup (important)
    return () => clearTimeout(timer);

  }, [searchTerm]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Debounced Search</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {results.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          
        </div>
      ))}
    </div>
  );
}

export default SearchPosts;
