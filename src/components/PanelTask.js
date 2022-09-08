import styles from './PanelTask.module.css'
import Task from "./Task";

const PanelTask = ({ status, tasks }) => {
  return (
      <div className={styles.panelTask}>
          <h2>{status}</h2>
          {tasks.filter(task => task.status === status).map(task => <Task key={task.id} task={task} />)}

      </div>
  )
}

export default PanelTask