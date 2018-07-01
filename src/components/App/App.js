import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import FeedbackPage from '../FeedbackPage/FeedbackPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={FeelingPage} />
            <Route path="/understanding" component={UnderstandingPage} />
            <Route exact path="/supported" component={SupportedPage} />
            <Route exact path="/comment" component={CommentsPage} />
            <Route exact path="/thankyou" component={ThankYouPage} />
            <Route exact path="/admin" component={FeedbackPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
