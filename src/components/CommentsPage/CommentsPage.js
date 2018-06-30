import React, {Component} from 'react'
import { connect } from 'react-redux'


const mapReduxStateToProps = (reduxStore) => ({
    // this.props.reduxStore will contain the entire store
    // reduxStore: reduxStore
    // To only render when secondReducer is changed =>
    reduxStore 
    // this.props.colors will be an array
});

class CommentsPage extends Component {
    constructor(){
        super();
        this.state = {
          comment: ''
        }
      }

      handleChange = (event) => {
          console.log(`Handling comment change`, event.target.value)
          this.setState({
              ...this.state, comment: event.target.value
          })
      }

      handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.sendToRedux(this.state);
      }

      sendToRedux(){
        const action = {type: 'ADD_COMMENT', payload: this.state.comment};
        this.props.dispatch(action);
      }
    render() {
        console.log('Rendering CommentPage')
        return(
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>4 of 4 pages</h2>
                <h4>Progress Bar</h4>
                <br />
                <h4>Have anything else you'd like to share?</h4>
                <input onChange={this.handleChange} placeholder="Leave comment here" 
                        value={this.state.comment} name="comment"/>
                    <button onClick={this.handleSubmit}>Next</button>

            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(CommentsPage)