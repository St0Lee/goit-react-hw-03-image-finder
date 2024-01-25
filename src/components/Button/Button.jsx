import styles from "./button.module.css"

const Button = ({onClick, type = "submit", children}) => {
    return (
    <div className={styles.btnWrap}>
        <button onClick={onClick} type={type}className={styles.btn}>{children}</button>
    </div>
    )
}

export default Button;