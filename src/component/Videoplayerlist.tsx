import React, { useState } from "react";
import videolist from "../asset/data/iptv.json";
import {useHistory} from 'react-router-dom';

import { Button, Figure, Table } from "react-bootstrap";
import { IVideoPlayerPage } from './VideoPlayerPage'

const Videoplayerlist = () => {
  const [nameVideo, SetNameVideo] = useState<string>(videolist[0].name);
  const [logoVideo, SetLogoVideo] = useState<string>(videolist[0].logo);
  const [videoUrl, SetVideoUrl] = useState<string>(videolist[1].url);

  const showVideo = (name: string, logo: string, url: string) => {
    SetNameVideo(name);
    SetLogoVideo(logo);
    SetVideoUrl(url);
  };

  let history = useHistory();

  const handleShowChannel = (pName: string, pLogo: string, pUrl: string) => {
    console.log("Videoplayerlist.name: " + pName);
    console.log("Videoplayerlist.logo: " + pLogo);
    console.log("Videoplayerlist.url: " + pUrl);
    let detailVideo: IVideoPlayerPage = {
      name: pName, 
      logo: pLogo,
      url: pUrl
    }
    history.push({
      pathname: '/channel',
      state: {detail: detailVideo}
    })
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ver</th>
            <th>Canal</th>
            <th>Logo</th>
            <th>Idioma</th>
          </tr>
        </thead>
        <tbody>
          {videolist.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                <Button onClick={()=>{handleShowChannel(item.name, item.logo, item.url)}}>Show</Button>
                </td>
                <td>{item.name}</td>
                <td><Figure>
                    <Figure.Image
                      width={60} height={50} src={item.logo}  />
                   </Figure>
                </td>
                <td>{item.country.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Videoplayerlist;
