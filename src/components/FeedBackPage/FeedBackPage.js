import React, {Component} from 'react'
import { connect } from 'react-redux'


const mapReduxStateToProps = (reduxStore) => ({
    // this.props.reduxStore will contain the entire store
    // reduxStore: reduxStore
    // To only render when secondReducer is changed =>
    reduxStore 
    // this.props.colors will be an array
});

class FeedbackPage extends Component {


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
                        <tr>
                            <td>Dummy Feeling</td>
                            <td>Dummy Rating</td>
                            <td>Dummy Rating</td>
                            <td>Dummy Comment</td>
                            <button>Delete</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FeedbackPage)