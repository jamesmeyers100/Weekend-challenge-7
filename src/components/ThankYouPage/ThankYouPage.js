import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    // this.props.reduxStore will contain the entire store
    // reduxStore: reduxStore
    // To only render when secondReducer is changed =>
    reduxStore 
    // this.props.colors will be an array
});

class ThankYouPage extends Component {

      handleSubmit = (event) => {
        console.log(this.props.reduxStore.feedbackReducer);
        event.preventDefault();
        this.sendToDatabase(this.props.reduxStore.feedbackReducer);
      }

      sendToDatabase(){
        console.log(`sending to the database`)
        const feedback = this.props.reduxStore.feedbackReducer
        axios.post('/feedback', feedback )
        .then((response) => {
            console.log(`able to post to DB`)
        })
        .catch((error) => {
            console.log('error', error)
        })
      }

    render() {
        console.log('Rendering ThankYouPage')
        return(
            <div>
                <h1>THANK YOU!</h1>
                <button onClick={this.handleSubmit}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ThankYouPage)