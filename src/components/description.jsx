import React from 'react';
import styles from './description.module.css';

const Description = (props) => {
    const { title, description, publishedAt } = props.video.snippet;

    return (
        <section className={styles.description}>
            <h3>{title}</h3>
            <span>{publishedAt}</span>
            <description>{description}</description>
        </section>
    )
}

export default Description;