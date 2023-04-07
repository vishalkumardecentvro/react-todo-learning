import logo from './logo.svg';
import './App.css';
import './myDesign.css'
import Users from './Component/Users'
import Header from './Component/Header';
import './index.css';
import Tasks from './Component/Tasks';
import { useState } from 'react'
import AddTask from './Component/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {

      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 15th at 2:30pm',
      reminder: true

    },
    {

      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true

    }


  ])

  

  // Delete task

  const deleteTask = (id) => {

    console.log("delete", id)

    setTasks(tasks.filter((task) => task.id !== id))

  }

  // Toggle reminder

  const toggleReminder = (id) => {
    console.log(id)
    console.log("vishal i clicked a task")

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (

    <div className="container">

      <Header title={"Task tracker"} />
      <AddTask/>
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />

    </div>


  );
}

export default App;
