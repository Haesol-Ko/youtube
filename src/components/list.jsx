import React from 'react';
import styles from './list.module.css';

const List = (props) => {
    // 데이터 받아와서 섬네일이랑 제목 넣기
    const { video, thumbnail, title, channelTitle } = props;

    const handleListClick = () => {
        props.onListClick(video);
    }

    const contentClassName = props.videoMode ? `${styles.content} ${styles['video-mode']}` : `${styles.content}`;

    return (
        <div
            className={contentClassName}
            onClick={handleListClick}>
            <div className={styles.thumbnail}>
                <img src={thumbnail}/>
            </div>
            <div className={styles.info}>
                <span className={styles.title}>
                    {title}
                </span>
                <span className={styles['channel-title']}>
                    {channelTitle}
                </span>
            </div>
        </div>
    )
}

export default List;