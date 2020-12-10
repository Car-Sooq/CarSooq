import React, { Component } from 'react';
import axios from "axios";
import { storage } from "./firebase"
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


import Header from "./header.jsx";

export default class AddCars extends Component {
    constructor(props) {
        super(props);


        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeColour = this.onChangeColour.bind(this);
        // this.onChangePrice = this.onChangePrice.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeimg = this.onChangeimg.bind(this);
        this.state = {
          brand: "all",
          year : "2007",
          colour : "black",
        // price : "jjj",
        // description :""
        image : null,
        url: ""
        }

      }

      onChangeBrand(event) {
        this.setState({
         brand : event.target.value
        });
        //console.log(this.state.brand)
      }

      onChangeYear(event) {
        this.setState({
         year : event.target.value
        });
        //console.log(this.state.year)
      }

      onChangeColour(event) {
        this.setState({
         colour : event.target.value
        });
        //console.log(this.state.colour)
      }

    //   onChangePrice(event) {
    //     this.setState({
    //      price : event.target.value
    //     });
    //   }

      onChangeDescription(event) {
        this.setState({
         description : event.target.value
        });
        //console.log(this.state.description)
      }



      onChangeimg(e) {
        console.log(e.target.files[0])
        if(e.target.files[0]){
          this.setState({
              image : e.target.files[0]
            });
        }else console.log("error in onchangeimg")
      }




      handleUpload() {
        // e.preventDefault();
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            console.log(error, "error");
          },
          () => {
            storage
            .ref("images")
            .child(this.state.image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({
                url: url
              })
               console.log(this.state.url,"im the url")
            });
          }
        )
      }


      onSubmit(event) {
        event.preventDefault();
        const carInfo = {
          brand : this.state.brand,
          year : this.state.year,
          colour : this.state.colour,
          image:this.state.url
        //   price : this.state.price,
          // description : this.state.description
        }
        console.log(carInfo);
        // console.log(this.state.brand);

        axios.post("http://localhost:3000/AddCars", carInfo)
        .then(res =>  {console.log(res.data),window.location = '/RenderedCars';} )

        .catch(err => res.status(400).json('Error: ' + err));
      }


    render() {
        return (
          <div>
            <Header />
            <br /><br />
            <br /><br />

             <h2 style = {{color: "#d41a0d", fontFamily: "Century Gothic"}}><b>Sell Car Form</b></h2>

             <div>
              <FormControl>
                <InputLabel>Brand</InputLabel>
                <Select
                required
                value={this.state.brand}
                onChange={this.onChangeBrand}
                >
                  <MenuItem value="all">Select</MenuItem>
                  <MenuItem value="BMW">BMW</MenuItem>
                  <MenuItem value="Ford">Ford</MenuItem>
                  <MenuItem value="Chevrolet">Chevrolet</MenuItem>
                  <MenuItem value="Dodge">Dodge</MenuItem>
                </Select>
              </FormControl>
          </div>

          <br /><br />

            <div>
              <FormControl>
                <InputLabel>Year</InputLabel>
                <Select
                  required
                  value={this.state.year}
                  onChange={this.onChangeYear}
                >
                  <MenuItem value="2007">2007</MenuItem>
                  <MenuItem value="2008">2008</MenuItem>
                  <MenuItem value="2010">2010</MenuItem>
                  <MenuItem value="2011">2011</MenuItem>
                  <MenuItem value="2012">2012</MenuItem>
                  <MenuItem value="2013">2013</MenuItem>
                  <MenuItem value="2014">2014</MenuItem>
                  <MenuItem value="2017">2017</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  </Select>
              </FormControl>
            </div>

            <br /><br />

            <div>
              <FormControl>
                <InputLabel>Color</InputLabel>
                <Select
                  required
                  value={this.state.colour}
                  onChange={this.onChangeColour}
                  >
                  <MenuItem value="black">Black</MenuItem>
                  <MenuItem value="gray">Gray</MenuItem>
                  <MenuItem value="white">White</MenuItem>
                  <MenuItem value="blue">Blue</MenuItem>
                  <MenuItem value="orange">Orange</MenuItem>
                </Select>
              </FormControl>
            </div>

            <br /><br />

            <div className = "col">
                <InputLabel>Add Image </InputLabel>
                <TextField
                  type = "file"
                  onChange = {this.onChangeimg}/>

                <Button onClick = {this.handleUpload}>Upload</Button>

            <br /><br />

                <img width="100px" src = {this.state.url || "http://via.placeholder.com/1000x1000"} alt = "firebase-image" />

            </div>

            <br /><br />

            <div>
                <Button variant="outlined" color="secondary" type="submit" value = "Submit" onClick = {this.onSubmit}>
                  Submit
                </Button>

            </div>

        </div>

        )
    }
};