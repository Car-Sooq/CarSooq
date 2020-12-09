import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Header from "./components/header.jsx";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import Search from "./components/Search.jsx";
import SimpleContainer from "./components/qout.jsx";
import Homepage from "./components/Home.jsx";
import { Route, Redirect } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch , Link } from "react-router-dom";
import Login from "./components/login.jsx";
import Signup from "./components/Signup.jsx";
import NaveBar from "./components/profile.jsx";
import AddCars from "./components/AddCars.jsx";
// creat protected routs
function ProtectedRoute({isAuth : isAuth, component:Component, ...rest}){
  return(
      <Route
      {...rest}
      render={(props)=>{
if (isAuth){
  return <Component/>;
}
else
{
  return (
  <Redirect to= {{pathname : '/login', state: {from: props.location}}}/>
     )
  }
}}/>
);
}
//creating Private Routes
// const PrivateRoute = ({component: Component, ...rest}) => {
//   return (
//   //  ender={(props)=>{
//       // if (isAuth){
//       //     return <Component/>;
//       // }
//       // Show the component only when the user is logged in
//       // Otherwise, redirect the user to /signin page
//       <Route {...rest} render={props => (
//           localStorage ?
//               <Component {...props} />
//           : <Redirect to="/signin" />
//       )} />
//   );
// };

function ProtectedRoute({isAuth : isAuth, component:Component, ...rest}){
      return(
          <Route
          {...rest}
          render={(props)=>{
  if (isAuth){
      return <Component/>;
  }
  else
  {
      return (
      <Redirect to= {{pathname : '/login', state: {from: props.location}}}/>
         )
      }
    }}/>
  );
  }
//virfy token
const jwt =require('jsonwebtoken');
var dotenv=require('dotenv');






 //module.exports={requireAuth}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
    this.getData = this.getData.bind(this);
  }

  //getting (retrieving) user choice of filters from the server (token)
  getData(object) {
    var that = this;
    $.ajax({
      url: "/inventory",
      method: "POST",
      data: JSON.stringify({ object }),
      contentType: "application/json",
      success: (data) => {
        that.updateState(data);
        console.log(data);
      },
      error: (err) => {
        console.log("Post Method Failed");
      },
    });
  }

  //Method that handles the "brand" submit input with ajax post request to the server
  handleSubmit(object) {
    this.getData(object);
  }
  //instead of doing a get request use this to get the data in the post request inside the success function
  updateState(data) {
    this.setState({ cars: data });
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: "/allcars",
      method: "GET",
      success: (data) => {
        that.updateState(data);
      },
      error: (err) => {
        console.log("Post Method Failed");
      },
    });
  }


  //redirect to pages using react routes, and express routes handlers back in the server
  render() {
    return (
      <div>

        <Switch>
         <Route exact path="/add">
            {" "}
            <AddCars/>
          </Route>
        {/* <Route exact path ="/Update"
        {" "}
        </Route> */}
          <Route exact path="/">
            {" "}
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* <ProtectedRoute  path="/profile"
            //  {" "}
            // {<NaveBar />}
           component={NaveBar} isAuth={localStorage.length > 0}
          /> */}
          {/* <ProtectedRoute exact path="/profile">
            {" "}
            component={ItemsList} isAuth={localStorage.length>0}
            <NaveBar />
        /> */}
          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/inventory">
            {" "}
            <Search
              onSubmit={this.handleSubmit.bind(this)}
              cars={this.state.cars}
            />{" "}
          </Route>
          <SimpleContainer />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"),
);
