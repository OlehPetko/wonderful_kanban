import styles from './Task.module.css'

const Task = ( {task} ) => {
  return (
      <div className={styles.task}>
          {task.title}
      </div>
  )
}
export default Task