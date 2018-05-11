import React,{Component} from 'react';
import Image from './images/img1.jpg';
import Content from './Content'

export default class Example1 extends Component {
    render(){
        return (
            // <Content myProp="Image"/>
            <div >
             <img src={Image} />
            </div>
        )
    }
}