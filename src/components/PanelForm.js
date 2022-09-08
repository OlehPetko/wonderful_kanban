import styles from './PanelForm.module.css'
import Button from "../UI/Button";
import {CgAddR} from "react-icons/cg";
import {useState} from "react";

const PanelForm = ({addTask}) => {
    const [userText, setNewTask] = useState('')
    const addTaskHandler = () => {
        addTask(userText)
        setNewTask('')
    }
    return (
        <div className={styles.panelForm}>
            <input placeholder='Add new task' value={userText} onChange={e => setNewTask(e.target.value)}/>
            <Button onClick={addTaskHandler}><CgAddR/></Button>
        </div>
    )
}
export default PanelForm