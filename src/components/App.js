import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovie from './LastMovieInDb';
import ContentRowMovie from './ContentRowMovies';
import Error404 from './Error404';

import { Route, Switch } from 'react-router-dom';


function App() {

  return (
    

    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Switch>
            <Route path='/' exact component = { ContentWrapper } />
            <Route path='/pages'  component = { GenresInDb } />
            <Route path='/chart'  component = { LastMovie } />
            <Route path='/tables'  component = { ContentRowMovie } />
            <Route component = { Error404 } />

          </Switch>
        </div>
    </React.Fragment>

   
  );
}

export default App;
