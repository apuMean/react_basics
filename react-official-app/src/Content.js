import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// export default class Content extends Component {
//     // render(){
//     //     if(this.props.myProp=='Image'){
//     //         return(<Image/>)}else{return(<CRUD/>)}
    
//     //     }
//     render(){
//         var myStyle={

//             marginTop: -420,
//         }
//         return (
//             <div style={myStyle}className="content-wrapper">
//                 <section className="content-header">
//                 <div className="row">
//                         <div className="col-md-12">
//                             <div className="box">
//                                 <div className="box-header with-border">
//                                     <h1>This is a sample REACT App</h1>
//                                 </div>
//                                 <div className="box-body">
//                                     <div className="row">
//                                         <div className="col-md-8">
//                                             <p className="text-center">
//                                                 <strong>React is a JavaScript library for building user interfaces. It is maintained by Facebook. </strong>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         )
//     }
// }


const Home=({ match })=> (
    <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to={`${match.url}/GoogleMap`}>GoogleMap</Link>
      </li>
      <li>
        <Link to={`${match.url}/barChart`}>barChart</Link>
      </li>
      <li>
        <Link to={`${match.url}/pieChart`}>pieChart</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);
  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
  export default Home;