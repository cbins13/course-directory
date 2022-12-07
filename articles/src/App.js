import React,{useState, useEffect} from "react";
import Articles from "./Articles";

function App() {
  const [articles, setArticles] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json=> setArticles(json));
  },[])

  return (
    <div className="App">
      <Articles articles={articles} />    
    </div>
  );
}

export default App;
