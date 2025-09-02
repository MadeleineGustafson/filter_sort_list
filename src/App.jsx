import "./App.css";
import ContentCard from "./ContentCard";
import FilterBar from "./FilterBar";

function App() {
  return (
    <>
      <div>
        <p>Search for content</p>
        <input></input>
        <button type="submit">Search</button>
        <FilterBar />
        <ContentCard />
      </div>
    </>
  );
}

export default App;
