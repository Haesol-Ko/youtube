import React from 'react';
import List from "./list";
import styles from './dashboard.module.css'

const Dashboard = (props) => {
    const list = props.contents.map(item => {
        const {thumbnails, title, channelTitle} = item.snippet;
            return (
                <List
                    key={item.id.videoId}
                    video={item}
                    thumbnail={thumbnails.default.url}
                    title={title}
                    channelTitle={channelTitle}
                    videoMode={props.videoMode}
                    onListClick={props.onListClick}
                />
            )
        })

    return (
        <div className={styles.dashboard}>
            {list}
        </div>
    );
}

export default Dashboard;