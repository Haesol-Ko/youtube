import React, {memo, useRef} from 'react';
import styles from './header.module.css';

const Header = memo((props) => {
    const inputRef = useRef();
    const formRef = useRef();
    const handleSubmit = async e => {
        e.preventDefault();

        const query = inputRef.current.value;
        await props.onSubmit(query);
        formRef.current.reset();
    }
    return (
        <div className={styles.header}>
            <div className={styles.logo}
                onClick={props.onClickLogo}>
                <i className='fa-brands fa-youtube'></i>
                <span>Youtube</span>
            </div>

            <form
                onSubmit={handleSubmit}
                ref={formRef}>
                <input
                    placeholder='Search..'
                    ref={inputRef}/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
})

export default Header;