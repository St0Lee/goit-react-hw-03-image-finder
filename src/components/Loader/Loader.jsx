import { Audio } from 'react-loader-spinner';
import styles from "./loader.module.css"


const Loader = () => {
    return (
    <div className={styles.Loader}>
        <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
        wrapperClass
        />
    </div>
    )
}

export default Loader;