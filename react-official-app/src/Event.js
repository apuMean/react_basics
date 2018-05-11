import React,{Component} from 'react';
export default class Event extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: 'Toggle Button is not yet clicked',
           isToggleOn: true
        }
        this.updateState = this.updateState.bind(this);

     };
     updateState() {
        this.state.data=='Toggle Button is not yet clicked'?this.setState({data: 'You clicked it just now'}):this.setState({data: 'Toggle Button is not yet clicked'});
     }
     render() {
         var myStyle={
            marginLeft:500,
            marginTop: -420,


         }
        return (
           <div >
              <button className="btn btn-large btn-warning" onClick = {this.updateState}>Toggle Data</button>
             
              <h4>{this.state.data}</h4>
           </div>
        );
     }
}