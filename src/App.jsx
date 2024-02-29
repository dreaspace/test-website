import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let heroData = [
    {text1:"First",text2:"text"},
    {text1:"Second",text2:"text"},
    {text1:"Third",text2:"text"}
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
    </div>
  )
}

export default App