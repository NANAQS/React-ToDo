import { useState} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header"
import styles from "./App.module.css"
import TaskForm from './widgets/TaskForm/TaskForm';
import TaskList from './widgets/TaskList/TaskList';

import { ITask } from '../../models/Task';
import Modal from '../../components/Modal/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [id, setId] = useState(0)

  console.log(taskList)
  return (
    <div>
      <Modal id={id} task={taskList} setTaskList={setTaskList} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm btnText='criar tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas</h2>
            <TaskList setId={setId} taskList={taskList} setTaskList={setTaskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
