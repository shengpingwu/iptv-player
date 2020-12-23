import * as React from "react";
import videojs from "video.js";

import "video.js/dist/video-js.css";

interface VideoPlayerPropsInferface {
  videoJsOptions: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
    controls: true,
    fluid: true,
    controlBar: {
      volumePanel: {
        inline: false
      }
    }
  };

class VideoPlayer extends React.Component {
  private player?: videojs.Player;
  private videoNode?: HTMLVideoElement;
  private options: VideoPlayerPropsInferface;

  constructor(props: VideoPlayerPropsInferface) {
    super(props);
    this.player = undefined;
    this.videoNode = undefined;
    this.options = props;
  }

  componentDidMount() {
    // instantiate video.js
    this.player = videojs(this.videoNode, {...initialOptions, ...this.options}).ready(function () {
      console.log('onPlayerReady', this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div className="c-player">
        <div className="c-player__screen" data-vjs-player="true">
          <video
            ref={(node: HTMLVideoElement) => (this.videoNode = node)}
            className="video-js"
          />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
