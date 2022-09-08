import './App.css';
import PanelTask from "./components/PanelTask";
import {useState} from "react";
import PanelForm from "./components/PanelForm";

function App() {
  const statuses = ['Todo', 'Progress', 'Review', 'Done']
  const [tasks, setTasks] = useState([])
    const addTask = (userText) => {
      setTasks([...tasks, {id: Math.random(), status: statuses[0], isCompleted: false, title: userText}])
    }

  return (
    <div className="App">
      <h1>Kanban App</h1>
      <PanelForm addTask={addTask}/>
      {statuses.map(status => <PanelTask key={status} status={status} tasks={tasks}/>)}
    </div>
  );
}

export default App;
