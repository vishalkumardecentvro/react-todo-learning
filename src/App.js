import './App.css';
import './myDesign.css'
import Header from './Component/Header';
import './index.css';
import Tasks from './Component/Tasks';
import { useState, useEffect } from 'react'
import AddTask from './Component/AddTask';
import Footer from './Component/Footer';
import About from './Component/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }



    getTasks()

  }, [])


  // Fetch task
  const fetchTasks = async () => {

    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    console.log(data)

    return data

  }


  const fetchTask = async (id) => {

    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)

    return data

  }


  // Add Task

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // Delete task

  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {

      method: 'DELETE'

    })


    setTasks(tasks.filter((task) => task.id !== id))

  }

  // Toggle reminder

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {

      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask),

    })

    const data = res.json()
    console.log(id)
    console.log("vishal i clicked a task")

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <Router>

      <div className="container">

        <Header title={"Task tracker"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />



        <Route path='/' exact render={(props) => (
          <>

            {showAddTask && <AddTask
              onAdd={addTask}
            />}

            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}

            />


          </>
        )}></Route>

        <Route path='/about' component={About}></Route>

        <Footer />

      </div>
    </Router>




  );
}

export default App;
