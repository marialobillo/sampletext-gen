import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './Components/Output';
import Select from './Components/Controls/Select';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('http://hipsterjesus.com/api/?paras=' + this.state.paras + '&html=' + this.state.html)
    .then((response) => {
      this.setState({
        text: response.data.text
      }, function(){
        console.log(this.state);
      });
    })
      .catch((err) => {
        console.log(err);
      });
  }

  showHTML(x){
    this.setState({
      html: x,
    }, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
        <h1>ReactJS Sample Text Generator</h1>
        <hr/>
        <form className="class-inline">
          <div className="form-group">
            <label>Include HTML:</label>
            <Select value={this.state.html} onChange={this.showHTML.bind(this)}/>
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
