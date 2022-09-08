import styles from './Button.module.css'

const Button = (props) => {
    const {disabled, children} = props
  return (
      <div className={styles.button}>
          <button disabled={disabled} {...props}>{children}</button>
      </div>
  )
}
export default Button