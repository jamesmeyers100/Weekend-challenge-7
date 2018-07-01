import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FeedbackRow from './FeedbackRow';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});

class FeedbackPage extends Component {

    getFeedback = () => {
        axios.get('/feedback')
        .then((response) => {
            console.log(response.data);
            const action = {type: 'FILL_TABLE', payload: response.data};
            this.props.dispatch(action);
        })
        .catch((error) => { 
            console.log(error)
        })
    }

    deleteFeedback(){
        axios.delete(`/feedback/${id}`)
        .then()
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.props.reduxStore.adminReducer.map( (feedback, id) => 
                            <FeedbackRow key={id} feedback={feedback}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FeedbackPage)