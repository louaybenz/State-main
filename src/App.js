import React, { Component } from 'react';
import './App.css';
import Photo from "./Jordan.jpg";
import Profile from './Profile'

class App extends Component  {
  constructor(props){
    super(props)
    this.state={person:{
    fullName :"Michael Jordan" ,
    bio :"Michael Jordan, né le 17 février 1963 à Brooklyn, est un joueur de basket-ball américain ayant évolué dans le championnat nord-américain professionnel de basket-ball.",
    profession : "Basket-ball Player",
    photo:<img src ={Photo} alt=''></img>},
    show:false
    }  }  
  render() {
  return (
    <div className="App-header">
             {
      this.state.show?
      <div className="App-header">
         <h1>{this.state.person.fullName}</h1>
        <div>{this.state.person.photo}</div>
        <h2>{this.state.person.profession}</h2>
        <p>{this.state.person.bio}</p>
        <Profile>
    </Profile>
      </div>
      :null
  }
    <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>
      Show
    </button>
     
   </div> 
  );
}
}
export default App;