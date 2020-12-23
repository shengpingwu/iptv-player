import { Figure } from "react-bootstrap";
import VideoPlayer from "./Videoplayer";
import React, { useEffect, useState } from "react";
import { useLocation, useHistory} from "react-router-dom";
import {Button} from 'react-bootstrap';


export interface IVideoPlayerPage {
  name: string;
  logo: string;
  url: string;
}

interface LocationState {
    detail: IVideoPlayerPage
};

const VideoPlayerPage = () => {
  const location = useLocation<LocationState>();
  const [nameVideo, SetNameVideo] = useState<string>(location.state.detail.name);
  const [logoVideo, SetLogoVideo] = useState<string>(location.state.detail.logo);
  const [videoUrl, SetVideoUrl] = useState<string>(location.state.detail.url);

  const history = useHistory();

  useEffect(() => {
    console.log("Name: " + nameVideo);
    console.log("Logo: " + logoVideo);
    console.log("URL: " + videoUrl);
  }, []);

  const navBack = () => {
    history.goBack();
  }
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    sources: [
      {
        //src: 'http://vjs.zencdn.net/v/oceans.mp4',
        //src: 'https://y5w8j4a9.ssl.hwcdn.net/andprivehd/tracks-v1a1/index.m3u8',
        src: videoUrl,
        //type: 'video/mp4'
        type: "application/x-mpegURL",
      },
    ],
  };
  return (
    <div>
      <h1>{nameVideo}</h1>
      <Figure>
        <Figure.Image width={60} height={50} src={logoVideo} />
      </Figure>
      <VideoPlayer {...videoJsOptions} />
      <Button onClick={() => navBack()}>Back</Button>
    </div>
  );
};

export default VideoPlayerPage;
