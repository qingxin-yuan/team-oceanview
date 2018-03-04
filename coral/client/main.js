import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import App from '../imports/ui/components/App';
import List from '../imports/ui/components/List';

import './main.html';


const renderRoutes = () => (
  <Router>
      <div>
          <Switch>
              <Route
                  exact
                  path="/"
                  component={App}
                  // currentUserId={Meteor.userId()}
              />
              <Route exact path="/list" component={List} />
              {/* <Route path="*" component={NotFound} /> */}
          </Switch>
      </div>
  </Router>
);



Meteor.startup(()=>{
  render(renderRoutes(), document.getElementById('app'));
})

