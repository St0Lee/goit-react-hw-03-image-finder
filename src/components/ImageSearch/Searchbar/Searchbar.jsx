import { Component } from "react";

import styles from "./searchbar.module.css"

class Searchbar extends Component {
    state = {
        search: ""
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState ({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.setState({
            search: ""
        })
    }

    render() {
        const {handleChange, handleSubmit} = this;
        const {search} = this.state;

        return (
            <header className={styles.searchForm}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <button type="submit" className={styles.button}>
                        <span className={styles.buttonLabel}>Find</span>
                    </button>
                    <input 
                    value={search} 
                    onChange={handleChange} 
                    required type="text" 
                    autocomplete="off" 
                    name="search" 
                    autofocus
                    placeholder="Search images and photos"
                    className={styles.searchElements}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;
