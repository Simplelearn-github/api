import React, { Component } from 'react'
import axios from 'axios'




export default class  Apitable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
  render() {
    return (
      <div>
        <table>
            <thead>
            <tr>
                <th>sno</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((ddata)=>{
                     return(
                        <tr>
                            <td>{ddata.id}</td>
                            <td>{ddata.title}</td>
                            <td>{ddata.body}</td>
                        </tr>
                     )
                    }
                    )
                }
              
  
            </tbody>
        </table>
      </div>
    )
  }
}
