import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state=({
            name:'',
            password:''
        })
    }
    changeHandler=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    submitHandler=(e)=>
    {
        e.preventDefault();
        const uname=this.state.name;
        const password=this.state.password;
        document.getElementById('pass').innerHTML=" Name :"+this.state.name +"      and Password is:"+this.state.password
    }
    
  render() {
     const {uname,password}=this.state
    return (
        <div className='register'>
        <form onSubmit={this.submitHandler}>
            <div className='div'>
                <h1>Name</h1><br/>
                <input type="text" name='uname' value={uname} onChange={this.changeHandler}/>
            </div>
            <div className='div'>
            <h1>password</h1><br/>
           <input type="text" name='password' value={password} onChange={this.changePassword} />
            </div>
            <div  className='div'  >
                <input style={{backgroundColor:'lightgreen'}} type="submit" />
            </div>
            <div id='pass'></div>
        </form>
    
        </div>
    )
  }
}
