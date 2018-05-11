import React,{Component} from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';

export default class AddUser extends Component {
 
    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            contact: '',
            email: '',
            password: '',
            error: null,
            isLoaded: false,
            items: [],
            data:''
    
        };
        this.submitData=this.submitData.bind(this);
        // this.clearData=this.clearData.bind(this);
       }
      //  clearData(e){
      //   this.setState({  firstname: '',
      //   lastname: '',
      //   contact: '',
      //   email: '',
      //   password: '', })
      //  }
       submitData() {
        var self = this;
        var payload = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                contact: this.state.contact,
                email: this.state.email,
                password: this.state.password
         
        }
           console.log("eeeeeeeeeeeeeee",payload)
        axios.post('http://localhost:4000/api/users/registerUser',payload)
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result.data
              });
              this.setState({ display: true });

              console.log(this.state.data,"<<<<<<<<<")
            })
            .catch((error) => {
              this.setState({
                isLoaded: true,
                error
              });
              this.setState({ show: true });

            })
       }
             
     

      render() {
        var formStyle={
          marginTop:50
        }
        var btnStyle={
          float: 'right',
        }
            return (
            <div className="container">
            <form style={formStyle}>
                            <div className="form-group col-sm-6 col-md-6">
                              <label >Firstname</label>
                              <input type="text" className="form-control"  placeholder="Firstname"
                        value={this.props.firstname}
                        onChange = {(event) => this.setState({firstname:event.target.value})}/>
                            </div>
                            <div className="form-group col-sm-6 col-md-6">
                              <label >Lastname</label>
                              <input type="text" className="form-control" placeholder="Lastname"
                              value={this.props.lastname}
                              onChange =  {(event) => this.setState({lastname:event.target.value})}/>
                            </div>
                          <div className="form-group col-sm-6 col-md-6">
                              <label>Email</label>
                              <input type="email" className="form-control" placeholder="Email"
                              value={this.props.email}
                              onChange = {(event) => this.setState({email:event.target.value})}/>
                            </div>
                          <div className="form-group col-sm-6 col-md-6">
                            <label >Contact</label>
                            <input type="text" className="form-control"  placeholder="Contact"
                            value={this.props.contact}
                            onChange = {(event) => this.setState({contact:event.target.value})}/>
                          </div>
                          <div className="form-group col-sm-6 col-md-6">
                              <label >Password</label>
                              <input type="password" className="form-control"  placeholder="Password"
                              value={this.props.password}
                              onChange ={(event) => this.setState({password:event.target.value})}/>
                            </div>
                      <button style={btnStyle}type="button" onClick={this.submitData} className="btn btn-primary btn-md">Submit</button>
                    
                    </form>
                    <SweetAlert
        show={this.state.display}
        title="Success"
        text="New user added successfully!"
        onConfirm={() => this.setState({ display: false })}
      />
      <SweetAlert
        show={this.state.show}
        title="Error"
        text="Error in adding new user!"
        onConfirm={() => this.setState({ show: false }) && this.clearData}
      />
           </div>
        );
      }
}
