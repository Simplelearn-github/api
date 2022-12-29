import React, { Component } from 'react'

export default class Contactuss extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'Naveen'
    }
    console.log('from Constructor');
  }
  static getDerivedStateFromProps()
{
  console.log('from getDerivedStateFromProps');
  return null;
}
componentDidMount(){
  console.log('from componentDidMount');
 
}

  render() {
    console.log('from render');
    return (
      <div>
      <h2>asdfghjk</h2>

      </div>
    )
   
  }
 
}
