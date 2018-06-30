import React, {Component} from 'react'
import { connect } from 'react-redux'


const mapReduxStateToProps = (reduxStore) => ({
    // this.props.reduxStore will contain the entire store
    // reduxStore: reduxStore
    reduxStore 
});



class FeelingPage extends Component {

    constructor(){
        super();
        this.state = {
          feeling: ''
        }
      }

      handleChange = (event) => {
          console.log(`Handling feedback change`, event.target.value)
          this.setState({
              ...this.state, feeling: event.target.value
          })
      }

      handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.sendToRedux(this.state);
      }

      sendToRedux(){
        const action = {type: 'ADD_FEELING', payload: this.state.feeling};
        this.props.dispatch(action);
      }

    render() {
        console.log('Rendering FeelingPage')
        return(
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>1 of 4 pages</h2>
                <h4>Progress Bar</h4>
                <br />
                <h2>How are you feeling today?</h2>
                <div onChange={this.handleChange}>
                    
                    {/* <select>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select> */}
                    <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.feeling} name="feeling"/>
                    <button onClick={this.handleSubmit}>Next</button>
                </div>


            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FeelingPage)