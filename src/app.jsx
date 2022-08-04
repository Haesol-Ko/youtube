import './app.css';
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import {useEffect, useState} from "react";
import VideoPage from "./components/videoPage";

function App() {
    const [contents, setContents] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const [clickedVideo, setClickedVideo] = useState();

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect( () => {
        const getMostPopularVideos = async () => {
            try {
                let response, responseJson;
                response = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBXQapvezFFdXhbP9U-2Z2MbbCDvAzRJQc", requestOptions);
                responseJson = await response.json();
                setContents(responseJson.items);
            } catch (e) {
                console.error('most popular fetch Error :: ', e);
            }
        };
        getMostPopularVideos();
    }, []);

    const onSubmit = async query => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        try {
            let response, responseJson;
            response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBXQapvezFFdXhbP9U-2Z2MbbCDvAzRJQc`, requestOptions);
            responseJson = await response.json();
            setContents(responseJson.items);
            setShowVideo(false);
        } catch (e) {
            console.error('search fetch Error :: ', e);
        }
    }

    const onListClick = (video) => {
        // dispatch clicked video id, related videos
        setClickedVideo(video);
        setShowVideo(true);
    }

    const onClickLogo = () => {
        setShowVideo(false);
    }

    return (
        <div className="youtube">
            <Header
                onSubmit={onSubmit}
                onClickLogo={onClickLogo}/>
            { !showVideo &&
                <Dashboard
                    contents={contents}
                    videoMode={showVideo}
                    onListClick={onListClick}/>
            }
            {showVideo &&
                <VideoPage
                    video={clickedVideo}
                    contents={contents}
                    videoMode={showVideo}
                    onListClick={onListClick}/>
            }
        </div>
    )
}

export default App;

// AIzaSyBXQapvezFFdXhbP9U-2Z2MbbCDvAzRJQc