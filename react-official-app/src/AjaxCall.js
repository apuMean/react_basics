import React,{Component} from 'react';

export default class AjaxCall extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:4000/api/users/getUsers")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.data
              });
              console.log(this.state.items,"<<<<<<<<<")
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      render() {
        var tableStyle = {
            marginLeft:230
        }
        var cell = {
            textAlign: "center",
            fontSize: 20

        }
        return (
        <table style={tableStyle}className="table table-hover" >
        <tbody >
        <tr >
             <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>contact</th>
            </tr>
            {this.state.items.map((arr, i) => <Data key={i}
                data={arr} />)}
        </tbody>
    </table>
  
        );
      }
}
class Data extends React.Component {
    render() {
        var cell = {
            textAlign: "center",
            fontSize: 20

        }
        return (
            
            <tr>            
                <td>{this.props.data.firstname}</td>
                <td>{this.props.data.lastname}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.contact}</td>
            </tr>);
    }
}