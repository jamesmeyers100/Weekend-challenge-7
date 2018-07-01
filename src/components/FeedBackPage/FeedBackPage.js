import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FeedbackRow from './FeedbackRow';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});

class FeedbackPage extends Component {

    constructor(){
        super();
        this.state = {
          feedback: []
        }
      }
    getFeedback(){
        axios.get('/feedback')
        .then((response) => {
            console.log(response.data);
            this.setState({
                feedback: response.data
            })
            // const action = {type: 'FILL_TABLE', payload: response.data};
            // this.props.dispatch(action);
        })
        .catch((error) => { 
            console.log(error)
        })
    }

    deleteFeedback = (id) => {
        axios.delete(`/feedback/${id}`)
        .then((response) => {
            this.getFeedback();
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    componentDidMount(){
        this.getFeedback();
    }

    render() {
        console.log('Rendering ThankYouPage')
        return(
            <div>
                <h1>Feedback Results</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.feedback.map( (feedback, id) => 
                            <FeedbackRow key={id} feedback={feedback} delete={this.deleteFeedback}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FeedbackPage)