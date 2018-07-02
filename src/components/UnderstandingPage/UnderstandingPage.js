import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});
class UnderstandingPage extends Component {
    constructor(){
        super();
        this.state = {
          understanding: ''
        }
      }

      handleChange = (event) => {
          console.log(`Handling understanding change`, event.target.value)
          this.setState({
              ...this.state, understanding: event.target.value
          })
      }

      handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.sendToRedux(this.state);
      }

      sendToRedux(){
        const action = {type: 'ADD_UNDERSTANDING', payload: this.state.understanding};
        this.props.dispatch(action);
      }
    render() {
        console.log('Rendering UnderstandingPage')
        return(
            <div>
                <h2>How are you understanding everything?</h2>
                <h2>2 of 4 pages</h2>
                {/* <h4>Progress Bar</h4> */}
                <div onChange={this.handleChange}>
                    <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.understanding} name="understanding"/>
                    <button onClick={this.handleSubmit}><Link to="/supported">Next</Link></button>
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(UnderstandingPage)