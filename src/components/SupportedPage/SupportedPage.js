import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    // this.props.reduxStore will contain the entire store
    // reduxStore: reduxStore
    // To only render when secondReducer is changed =>
    reduxStore
});

class SupportedPage extends Component {
    constructor(){
        super();
        this.state = {
          supported: ''
        }
      }

      handleChange = (event) => {
          console.log(`Handling supported change`, event.target.value)
          this.setState({
              ...this.state, supported: event.target.value
          })
      }

      handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.sendToRedux(this.state);
      }

      sendToRedux(){
        const action = {type: 'ADD_SUPPORTED', payload: this.state.supported};
        this.props.dispatch(action);
      }

    render() {
        console.log('Rendering SupportedPage')
        return(
            <div>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <h2>Are you feeling supported?</h2>
                <h2>3 of 4 pages</h2>
                <h4>Progress Bar</h4>
                <br />
                <div onChange={this.handleChange}>
                    {/* <select>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select> */}
                    <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.supported} name="supported"/>
                    <button onClick={this.handleSubmit}><Link to="/comment">Next</Link></button>
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(SupportedPage)