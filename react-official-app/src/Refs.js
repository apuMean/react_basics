import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: '',
         default_data:'You are checking refs example!'
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
      this.replaceInput=this.replaceInput.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   replaceInput() {
    this.setState({data: this.state.default_data});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
 }
   render() {
    var myStyle={
      marginLeft:400,
      marginTop: -420,

  }
      return (
         <div >
            <input value = {this.state.data} onChange = {this.updateState} 
               ref = "myInput"></input>
            <button className="btn btn-large btn-primary"onClick = {this.clearInput}>CLEAR</button>
            <button className="btn btn-large btn-warning"onClick = {this.replaceInput}>Replace With Default Value</button>

            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default Refs;