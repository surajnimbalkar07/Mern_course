import Posts from "./components/Posts";
import SearchPosts from "./components/SearchPosts";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
    <h1 className="font-bold text-center ">UseEffect Advance</h1>
      <Posts />
      <SearchPosts/>
    </div>
  );
}

export default App;