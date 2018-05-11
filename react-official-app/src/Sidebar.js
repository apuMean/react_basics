import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Image from './Image';
import Forms from './Forms';
import AjaxCall from './AjaxCall';
import ColorSlider from './ColorSlider';
import Event from './Event';
import Refs from './Refs';
import CRUD from './CRUD';
import Content from './Content';
import AddUser from './AddUser';
import ConditionalRendering from './ConditionalRendering';
import MyFancyComponent from './Map';
import BarChart from './barChart';
import PieChart from './pieChart'

export default class SideBar extends Component {
    render(){
        var nameStyle={
            backgroundColor: 'rgb(159, 207, 249)'
        }
        var headingBg={
            backgroundColor: 'rgb(124, 194, 255)'
        }
        return (
            <Router>
                <div>
            <aside style= {nameStyle}className="main-sidebar">
                <section className="sidebar">
                    <div  className="user-panel">
                        <div className="pull-left">
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                  
                    <ul className="sidebar-menu" data-widget="tree">
                        <li style={headingBg}className="header">MAIN NAVIGATION</li>
                          
                                <div className="list">
                                <li><Link to={'/Home'}>Home</Link></li>
                                    <li><Link to={'/Image'}>Image Display</Link></li>
                                    <li><Link to={'/Forms'}>Form Element</Link></li>
                                    <li><Link to={'/AjaxCall'}>Ajax Call</Link></li>
                                    <li><Link to={'/ColorSlider'}>Color Slider</Link></li>
                                    <li><Link to={'/Event'}>Event Handler</Link></li>
                                    <li><Link to={'/Refs'}>Refs</Link></li>
                                    <li><Link to={'/ConditionalRendering'}>Conditional Rendering</Link></li>
                                    <li><Link to={'/AddUser'}>New User</Link></li>
                                    <li><Link to={'/CRUD'}>CRUD</Link></li>
                                    <li><Link to={'/GoogleMap'}>Google Map</Link></li>
                                    <li><Link to={'/barChart'}>Bar Chart</Link></li>
                                    <li><Link to={'/pieChart'}>Pie Chart</Link></li>                            
                               </div>
                           
                    </ul>
                </section>
            </aside> 
            <Switch>
                                        <Route exact path='/Home' component={Content} />
                                        <Route exact path='/Image' component={Image} />
                                        <Route exact path='/Forms' component={Forms} />
                                        <Route exact path='/AjaxCall' component={AjaxCall} />
                                        <Route exact path='/ColorSlider' component={ColorSlider} />
                                        <Route exact path='/Event' component={Event} />
                                        <Route exact path='/Refs' component={Refs} />
                                        <Route exact path='/CRUD' component={CRUD} />
                                        <Route exact path='/AddUser' component={AddUser} />
                                        <Route exact path='/ConditionalRendering' component={ConditionalRendering}/>
                                        <Route exact path='/GoogleMap' component={MyFancyComponent}/>
                                        <Route exact path='/barChart' component={BarChart}/>
                                        <Route exact path='/pieChart' component={PieChart}/>
                                        <Route  component={Content} />
                                  </Switch>
            </div>
            </Router> 
        )
    }
}
