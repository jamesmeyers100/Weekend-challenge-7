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
    
      }

      sendToDatabase(){
        console.log(`sending to the database`)
        const feedback = this.props.reduxStore.feedbackReducer
        axios.post('/feedback', feedback )
        .then((response) => {
            console.log(`able to post to DB`, response)
            const action = {type: 'DELETE_FEEDBACK', payload:''}
            this.props.dispatch(action)
        })
        .catch((error) => {
            console.log('error', error)
        })
      }

      componentDidMount(){
          this.sendToDatabase(this.props.reduxStore.feedbackReducer);
      }

    render() {
        console.log('Rendering ThankYouPage')
        return(
            <div>
                <h1>THANK YOU!</h1>
                <button><Link to="/">Leave New Feedback</Link></button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ThankYouPage)