
import './App.css';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Show from './components/Show';
function App() {
  const tabsList = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" },
  ];

  //creating a state to hold thee array
  const [ allTabs, setAllTabs] = useState(tabsList);

  const [ currTabs, setCurTabs ] = useState(0);
  return (
    <div className="App">
      <Tabs 
        allTabs = {allTabs}
        currTabs = {currTabs}
        setCurTabs = {setCurTabs}
      />
      
      <Show 
        allTabs = { allTabs }
        currTabs  = {currTabs}
      />
    </div>
  );
}

export default App;
