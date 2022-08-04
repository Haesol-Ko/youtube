import React from 'react';

const Video = (props) => {
    return (
        <div className="wrapper"
            style={{    width: '100%',
                height: '0',
                paddingBottom: '56.25%',
                position: 'relative',
                overflow: 'hidden',}}>
            <iframe
                style={{width: '100%', height:'100%', position: 'absolute', top: '0', left: '0'}}
                src={`https://www.youtube.com/embed/${props.video.id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
        </div>
    );
};

export default Video;