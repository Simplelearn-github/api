import React, { Component } from 'react'

export default class Aboutus extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     name:'Naveen'
    }
  }
  shouldComponentUpdate(){
    console.log(" shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(preprops,prestate){
    console.log('getSnapshotBeforeUpdate'+prestate.name);
    document.getElementById('snap').innerHTML="sdfgh"+prestate.name
    return null;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
    document.getElementById('new').innerHTML=this.state.name
  }
  onChange=(e)=>{
    this.setState({
      name:'Kiran'
    })
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.onChange}>Click Me</button>
        <div id='snap'></div>
        <div id='new'></div>
      </div>
    )
  }
}
