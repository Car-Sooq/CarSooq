import React, { Component } from 'react';
import axios from "axios";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangecolour = this.onChangecolour.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
      brand: "",
      year : "",
      colour : ""
    }
}

componentDidMount() {
  axios.get('http://localhost:3000/Update/:id')



    .then(response => {
      console.log(response)

      this.setState({
        brand: response.data.brand,
        year: response.data.year,
        colour: response.data.colour
      })
      console.log(this.state)
console.log(this.props.params)
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
      const carForm = {
        brand: this.state.brand,
        year: this.state.year,
        colour:this.state.colour

      }

console.log()

      axios.post("http://localhost:3000/Update/${this.props.match.params.id}" ,carForm)
      .then(res => console.log(res.data));
      console.log(this.param)

      // window.location = '/RenderedCars'
    }


  render (){
    return(
      <div>
<p>hi from edit </p>


            <div>
           <label> Brand </label>
           <select
          type = "text"
          value = {this.state.brand}
          onChange = {this.onChangeBrand}
          >
            <option value="all">Select All</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Dodge">Dodge</option>
            </select>
        </div>


        <div>
          <label> Year </label>
          <select
          type = "text"
          value = {this.state.year}
          onChange = {this.onChangeYear}
          >
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2017">2017</option>
            <option value="2020">2020</option>
          </select>
        </div>




        <div>
          <label> colour </label>
          <select
          type = "text"
          value = {this.state.colour}
          onChange = {this.onChangecolour}
          >
           <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
          </select>

        </div>

        <div>
                <button type="submit" value = "Submit" onClick = {this.onSubmit} >Edit</button>
                </div>
}
      </div>
    )
   }
 }