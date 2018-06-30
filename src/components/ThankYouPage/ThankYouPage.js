import React, {Component} from 'react'
import { connect } from 'react-redux'


const mapReduxStateToProps = (reduxStore) => ({
    // this.props.reduxStore will contain the entire store
    // reduxStore: reduxStore
    // To only render when secondReducer is changed =>
    reduxStore 
    // this.props.colors will be an array
});

class ThankYouPage extends Component {

      handleChange = (event) => {
          console.log(`Handling supported change`, event.target.value)
          this.setState({
              ...this.state, supported: event.target.value
          })
      }

      handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.sendToDatabase(this.reduxStore);
      }

      sendToDatabase(){
        console.log(`sending to the database`)
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