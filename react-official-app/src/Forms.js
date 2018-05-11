import React,{Component} from 'react';
export default class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
              input_data: 'Start typing',
              text_data:'Type inside this textarea',
              select_data:''
        }
        this.updateState = this.updateState.bind(this);
        this.updateText=this.updateText.bind(this);
        this.updateSelect=this.updateSelect.bind(this);
  };
  updateState(e) {
        this.setState({ input_data: e.target.value });
  }
  updateText(e) {
      this.setState({ text_data: e.target.value });
}
updateSelect(e){
      this.setState({ select_data: e.target.value });

}

    render(){
        
        return (
            <div >
            <Input  myDataProp={this.state.input_data}
                              updateStateProp={this.updateState}></Input>
            <Textarea  textareaProp={this.state.text_data}
                              updateStateProp={this.updateText}></Textarea>
            <Select selectProp={this.state.select_data}
                              updateStateProp={this.updateSelect}></Select>
            </div>
        )
    }
}
class Input extends React.Component {
    render() {
      var myStyle={
            marginTop:50
      }
          return (
                <div style={myStyle}>
                      <input type="text" value={this.props.myDataProp}
                            onChange={this.props.updateStateProp} />
                      <h1>{this.props.myDataProp}</h1>
                     
                </div>

          );
    }
}

class Textarea extends React.Component {
      render() {
            var myStyle={
                  marginTop:50
            }
            return (
                  <div style={myStyle}>
                        <textarea type="text" value={this.props.textareaProp}
                            onChange={this.props.updateStateProp} >
                     </textarea>
                      <h1>{this.props.textareaProp}</h1>
                                         </div>
  
            );
      }
  }
  class Select extends React.Component {
      render() {
            var style=
            {    marginLeft: 663
            }
            var myStyle={
                  marginTop:50
            }
            return (
                  <div style={myStyle}>

                          <select style={style}className="form-control" onChange={this.props.updateStateProp}>
                              <option selected disabled hidden>Select your favourite bird</option>
                              <option value="Owl">Owl</option>
                              <option value="Parrot">Parrot</option>
                              <option value="Pigeons">Pigeons</option>
                              <option value="Goose">Goose</option>
                              <option value="Crows">Crows</option>
                              <option value="Sparrow">Sparrow</option>
                              <option value="Kingfisher">Kingfisher</option>
                              <option value="Woodpecker">Woodpecker</option>
                              <option value="Finch">Finch</option>
                              <option value="Sandpiper">Sandpiper</option>

                         </select>
                         <h2>Selected Bird is : </h2><h1>{this.props.selectProp}</h1>
                  </div>
  
            );
      }
  }