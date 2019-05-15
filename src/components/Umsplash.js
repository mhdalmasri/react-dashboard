import React, { Component } from 'react'
import "../assets/styles/umsplash.css"

import Memo from "./Memo";
import Clock from "./Clock";
export default class Umsplash extends Component {
   constructor(props) {
  super(props);

  this.state = {
    pics: [],
    url:"https://images.unsplash.com/photo-1554748795-bb013b2fb701?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjY1OTI4fQ",
  };
}
componentDidMount() {
  fetch('https://api.unsplash.com/photos/?client_id=f56e84ec83c1ab9bd834ea6234ecfaa6e93936a240359645e52a3cc3f44cb714')
    .then(response => {
      return(response.json())
  })
  .then(res=>{
    res.forEach(r=>{ 
    console.log(r.urls.full)
    this.setState(state =>{this.state.pics.push(r.urls.full)})
 })
 console.log(this.state.pics[Math.floor((Math.random() * 10))])
  })
 
  .catch(function (err) {
    console.log("Something went wrong!", err)
  })
    } 

 handelClick= (event) => { 
   this.setState({url:this.state.pics[Math.floor((Math.random() * this.state.pics.length))]})
  }
 
render() {
  return ( <React.Fragment>
  <i className="fa fa-refresh fa-spin pointer" onClick={this.handelClick}></i>
  <img src={this.state.url} alt="bg" className="img"></img>
  <Clock />
  <Memo /> 
 </React.Fragment>
  );
  }
}
