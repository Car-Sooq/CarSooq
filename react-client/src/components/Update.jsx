import React, { Component } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


export default class Update extends Component {
  constructor(props) {
    super(props);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);

    this.onChangecolour = this.onChangecolour.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      brand : 'Ford',
      year : '2007',
      colour : 'Black',
    }
}
componentDidMount() {
  axios.get('http://localhost:3000/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        brand: response.data.brand,
        year: response.data.year,
        colour: response.data.colour
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

    onChangeBrand(event){
      this.setState({
        brand: event.target.value
      });
    }
    onChangeYear(event){
      this.setState({
        year: event.target.value
      });
    }

    onChangecolour(event){
      this.setState({
        colour: event.target.value
      });
    }

    onSubmit(event) {
      event.preventDefault();
      const car = {
        brand: this.state.brand,
        year: this.state.year,
        colour:this.state.colour
    }

      axios.post('http://localhost:3000/Update/' +this.props.match.params.id, car)
      .then(res => console.log(res.data));
      window.location = '/RenderedCars'
    }
  render (){
    return(
      <div>
      <Header />
      <br /><br />
      <br /><br />

       <h3 style = {{color: "#d41a0d"}}><b>Sell Car Form</b></h3>

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
      // <div>
      //     <div>
      //     <label> Brand </label>
      //     <select
      //     type = 'text'
      //     value = {this.state.brand}
      //     onChange = {this.onChangeBrand}
      //     >
      //       <option value='all'>Select All</option>
      //       <option value='BMW'>BMW</option>
      //       <option value='Ford'>Ford</option>
      //       <option value='Chevrolet'>Chevrolet</option>
      //       <option value='Dodge'>Dodge</option>
      //       </select>
      //   </div>
      //   <div>
      //     <label> Year </label>
      //     <select
      //     type = 'text'
      //     value = {this.state.year}
      //     onChange = {this.onChangeYear}
      //     >
      //       <option value='2007'>2007</option>
      //       <option value='2008'>2008</option>
      //       <option value='2010'>2010</option>
      //       <option value='2011'>2011</option>
      //       <option value='2012'>2012</option>
      //       <option value='2013'>2013</option>
      //       <option value='2014'>2014</option>
      //       <option value='2017'>2017</option>
      //       <option value='2020'>2020</option>
      //     </select>
      //   </div>
      //   <div>
      //     <label> colour </label>
      //     <select
      //     type = 'text'
      //     value = {this.state.colour}
      //     onChange = {this.onChangecolour}
      //     >
      //      <option value='black'>Black</option>
      //       <option value='gray'>Gray</option>
      //       <option value='white'>White</option>
      //       <option value='blue'>Blue</option>
      //       <option value='orange'>Orange</option>
      //     </select>
      //   </div>
      //   <div>
      //           <button type='submit' value = 'Submit' onClick = {this.onSubmit} >Edit</button>
      //           </div>
      // </div>
    )
  }
}