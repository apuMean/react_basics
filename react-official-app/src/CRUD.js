import React,{Component} from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';
import ReactPaginate from 'react-paginate';
export default class CRUD extends Component {
 
    constructor(props) {
        super(props);
      this.state = {
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        userid: '',
        error: null,
        isLoaded: false,
        items: [],
        isDel: '',
        delUser: '',
        getUser: false,
        offset:null,
        perPage:10
      };
        this.getData = this.getData.bind(this);
        this.deleteData=this.deleteData.bind(this);
        this.getUserById=this.getUserById.bind(this);
        this.updateData=this.updateData.bind(this);
      }
      handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);
        this.setState({offset: offset}, () => {
          this.getData();
        });
      };
      componentDidMount(){
        this.getData();
      }
      updateData=()=>{
        var payload = {
          id:this.state.userid,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          contact: this.state.contact,
          email: this.state.email,
          password:this.state.password
        }
        console.log("eeeeeeeeeeeeeee", payload)
        axios.post('http://localhost:4000/api/users/editUser', payload)
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result.data
              });
            
            })
          .catch((error) => {
            this.setState({
              isLoaded: true,
              error
            });

          })
      }
      getUserById=(key)=>{
        console.log(key)
        axios.get("http://localhost:4000/api/users/getUserById",{
          params: {
            id: key
          }
        })
        .then(
          (result) => {
            this.setState({
              getUser: true,
              userid:result.data.data.id,
              firstname:result.data.data.firstname,
              lastname:result.data.data.lastname,
              contact:result.data.data.contact,
              email:result.data.data.email,
              password:result.data.data.password
            });
            console.log("ressss",this.state.userid,this.state.firstname,this.state.lastname,this.state.contact,this.state.email)

          })
          .catch((error) => {
            this.setState({
              getUser: true,
              error
            });
            
          })
       
      }
      getData=() =>{
      axios({
        method: 'get',
        url: 'http://localhost:4000/api/users/getUsers',
        data: {limit: this.state.perPage, offset: this.state.offset}
      }).then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.data.data
              });
            })
            .catch((error) => {
              this.setState({
                isLoaded: true,
                error
              });
              this.setState({ show: true });
            })
         
      }
      
      deleteData=(key)=>{
        console.log(key)
        axios({
          method: 'post',
          url: 'http://localhost:4000/api/users/delUser',
          data: {
            id: key,
          }
        }).then(
        (result) => {
          this.setState({
            isDel: true,
            delUser: result.data.data
          });
          this.setState({ display: true });
        })
        .catch((error) => {
          this.setState({
            isDel: true,
            error
          });
          this.setState({ show: true });
        })  
      }
      render() {
        var modalStyle={
          paddingRight: 134,
          marginLeft: -40
        }
        var tableStyle = {
            marginLeft:230
        }
        return (
            <div  >
                 {/* <button className="btn btn-large btn-warning" onClick = {this.getData}>Get Users Data</button> */}
        <table style={tableStyle}className="table table-hover">
        <tbody >
        <tr>
             <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
            </tr>
            {this.state.items.map((arr, i) => <Table  TBLKEY={arr.id} key={arr.id}
                data={arr} getUserById={this.getUserById} handleDel={this.deleteData}/>)}
        </tbody>
    </table>
    <SweetAlert
        show={this.state.display}
        title="Success"
        text="Operation successfull !"
        onConfirm={() => this.setState({ display: false })}
      />
      <SweetAlert
        show={this.state.show}
        title="Error"
        text="Operation failed !"
        onConfirm={() => this.setState({ show: false })}
      />
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h3 className="modal-title" id="exampleModalLabel">Edit User Data</h3>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div className="modal-body" style={modalStyle}>
                                        <form>
                                          <div className="form-group">
                                            <label >Firstname</label>
                                            <input type="text" className="form-control" placeholder="Firstname"
                                              value={this.state.firstname} onChange={(event) => this.setState({firstname:event.target.value})}/>
                                          </div>
                                          <div className="form-group">
                                            <label >Lastname</label>
                                            <input type="text" className="form-control" placeholder="Lastname"
                                              value={this.state.lastname} onChange={(event) => this.setState({lastname:event.target.value})}/>
                                          </div>
                                          <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Email"
                                              value={this.state.email} onChange={(event) => this.setState({email:event.target.value})}/>
                                          </div>
                                          <div className="form-group">
                                            <label >Contact</label>
                                            <input type="text" className="form-control" placeholder="Contact"
                                              value={this.state.contact} onChange={(event) => this.setState({contact:event.target.value})}/>
                                          </div>
                                                                              
                                        </form>
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={this.updateData}>Save changes</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ReactPaginate previousLabel={"previous"}
                                  nextLabel={"next"}
                                  breakLabel={<a href="">...</a>}
                                  breakClassName={"break-me"}
                                  pageCount={this.state.pageCount}
                                  marginPagesDisplayed={2}
                                  pageRangeDisplayed={5}
                                  onPageChange={this.handlePageClick}
                                  containerClassName={"pagination"}
                                  subContainerClassName={"pages pagination"}
                                  activeClassName={"active"} />
    </div>
        );
      }
}
class Table extends React.Component {
    render() {
    
        return (
            
            <tr >            
                <td>{this.props.data.firstname}</td>
                <td>{this.props.data.lastname}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.contact}</td>
                <td>
                  <button type="button" className="btn btn-sm btn-danger fa fa-trash-o" onClick = {()=>this.props.handleDel(this.props.TBLKEY)}>Delete</button>
                  <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-sm btn-warning fa fa-edit " onClick = {()=>this.props.getUserById(this.props.TBLKEY)}>Edit</button>                             
                </td>
            </tr>);
    }
}