import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class SupportedPage extends Component {
    constructor(){
        super();
        this.state = {
          support: ''
        }
      }

      handleChange = (event) => {
          console.log(`Handling supported change`, event.target.value)
          this.setState({
              ...this.state, support: event.target.value
          })
      }

      handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.sendToRedux(this.state);
      }

      sendToRedux(){
        const action = {type: 'ADD_SUPPORTED', payload: this.state.support};
        this.props.dispatch(action);
      }

    render() {
        console.log('Rendering SupportedPage')
        return(
            <div>
                <h2>Are you feeling supported?</h2>
                <h2>3 of 4 pages</h2>
                {/* <h4>Progress Bar</h4> */}
                <br />
                <div onChange={this.handleChange}>
                    <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.support} name="support"/>
                    <button onClick={this.handleSubmit}><Link to="/comment">Next</Link></button>
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(SupportedPage)