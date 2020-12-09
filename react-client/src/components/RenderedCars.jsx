import React, { Component } from "react";
// import Edit from './edit';
// import { Link } from 'react-router-dom';
import axios from "axios";


 const RenderCars = props => {
console.log(props);


 }

export default class RenderedCars extends Component {

    constructor(props) {
        super(props);

        this.state = {
          carInfo: []

        }
        this.deleteItem=this.deleteItem.bind(this)
    }

    componentDidMount() {
         axios.get("http://localhost:3000/cars")
            .then( res => {
                this.setState({carInfo: res.data})
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteItem(id) {

        axios.delete("/delete/" + id)
            .then(res => console.log(res.data));

        this.setState({
            carInfo: this.state.carInfo.filter(el => el.id !== id)
        })
    }

    render() {
        return (
            <div>
                  <h2>Cars</h2>
                 <table className = "table">
                 <thead className = "thead">
                     <tr>
                         <th>Brand</th>
                         <th>Year</th>
                         <th>colour</th>
                         <th>image</th>
                     </tr>
                 </thead>
                 <tbody>
                 {this.state.carInfo.map(currentItem => {
                     return (
                        <tr>
                         <td>{currentItem.brand}</td>
                         <td>{currentItem.year}</td>
                        <td>{currentItem.colour}</td>
                      <td><img src= {currentItem.image} width="200" height="200" class="w3-round" alt="Norway"/></td>
                      <button
                       onClick = {() => {this.deleteItem(currentItem.id)}}
                      >Delete</button>
                       </tr>
                     )

                 })}
                 </tbody>
                 </table>
            </div>
        )
    }
}