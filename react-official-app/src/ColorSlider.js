import React,{Component} from 'react';
export default class ColorSlider extends Component {
 
      constructor(props) {
        super(props);
        this.state = {
            redValue: 255,
            greenValue: 255,
            blueValue: 255
        };
        this.handleUserInput =  this.handleUserInput.bind(this);
      }
      handleUserInput(redValueFromDOM, greenValueFromDOM, blueValueFromDOM) {
        
        this.setState({
          redValue: redValueFromDOM,
          greenValue: greenValueFromDOM,
          blueValue: blueValueFromDOM 
        });
      }
      render() {
        return (
          <div className="row">
          <div className="col-sm-6">

            <Slider
             redVal={this.state.redValue} 
             greenVal={this.state.greenValue} 
             blueVal={this.state.blueValue}
             onUserInput={this.handleUserInput}
             />
             </div>
             <div className="col-sm-6">

            <ColorBar
            redVal={this.state.redValue}
            greenVal={this.state.greenValue}
            blueVal={this.state.blueValue}
            />
            </div>
          </div>
        )
      }
    }

    class Slider extends Component{
        constructor(props) {
            super(props);
            this.state = {
                redValue: 255,
                greenValue: 255,
                blueValue: 255
            };
            this.updateVal = this.updateVal.bind(this);
          }
        updateVal() {
          this.props.onUserInput(
            this.refs.redVal.value,
            this.refs.greenVal.value,
            this.refs.blueVal.value
          ) 
        }
        render() {
          var slide={
            marginLeft:300,
            paddingTop:40
          }
          return (
            <div style={slide}>
              <div className="form-group row">
                <label className="col-xs-4" htmlFor="redSlider">R - {this.props.redVal}</label>
                <input className="col-xs-8" id="redSlider" ref="redVal" type="range" min="0" max="255" value={this.props.redVal} onChange={this.updateVal} />
              </div>
              <div className="form-group row">
                <label className="col-xs-4" htmlFor="greenSlider">G - {this.props.greenVal}</label>
                <input className="col-xs-8" id="greenSlider" ref="greenVal" type="range" min="0" max="255" value={this.props.greenVal} onChange={this.updateVal} />
              </div>
              <div className="form-group row">
                <label className="col-xs-4" htmlFor="blueSlider">B - {this.props.blueVal}</label>
                <input className="col-xs-8" id="blueSlider" ref="blueVal" type="range" min="0" max="255" value={this.props.blueVal} onChange={this.updateVal} />
              </div>
            </div>
          )
        }
      }
      
      class ColorBar extends Component{
        constructor(props) {
            super(props);
            this.state = {
                redValue: 255,
                greenValue: 255,
                blueValue: 255
            };
          }
        render() {
          var redVal = this.props.redVal,
              greenVal = this.props.greenVal,
              blueVal = this.props.blueVal;
      
          var style = {
            backgroundColor:'rgb(' + redVal + ',' + greenVal + ',' + blueVal + ')',
            height: 150,
            width: 340,
           marginTop:25

          };
          return (
            <div className="color-bar" style={style}></div>
          )
        }
      }

