import React from 'react';
import Videoplayerlist from './component/Videoplayerlist';
import VideoPlayerPage from './component/VideoPlayerPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/home" />
        <Switch>
            <Route path="/home" component={Videoplayerlist} />
            <Route path="/channel" component={VideoPlayerPage} />
            <Route path="*" component={() => <div>404</div> } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
