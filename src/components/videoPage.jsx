import React from 'react';
import List from "./list";
import Video from "./video";
import Description from "./description";
import styles from './videoPage.module.css'
import Dashboard from "./dashboard";

const VideoPage = (props) => {
    return (
        <main>
            <section className={styles.video}>
                <Video
                    video={props.video}/>
                <Description
                    video={props.video}/>
            </section>
            <section className={styles.list}>
                <Dashboard
                    contents={props.contents}
                    videoMode={props.videoMode}
                    onListClick={props.onListClick}/>
            </section>
        </main>
    );
};

export default VideoPage;