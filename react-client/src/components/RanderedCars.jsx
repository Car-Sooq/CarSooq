import React, { Component } from "react";
// import Edit from './edit';
// import { Link } from 'react-router-dom';
import axios from "axios";


 const RenderCars = props => (
     <tr>
         <td>{props.item.brand}</td>
         <td>{props.item.year}</td>
         <td>{props.item.colour}</td>
         <td>{props.item.description}</td>
         <td>
         <img src= {props.item.image} width="200" height="200" class="w3-round" alt="Norway"/>
         </td>
         <td>
         <Link to ={'/edit/'+props.item._id}>Edit</Link>
         <button type = "button"
        onClick = {() => <Edit/>}>Edit</button>
        <button type = "button"
        className = "btn btn-dark"
        onClick = {() => {props.deleteItem(props.item._id)}}>
        Delete
        </button>
        </td>

     </tr>
 )

export default class RenderedCars extends Component {

    constructor(props) {
        super(props);

        // this.deleteItem = this.deleteItem.bind(this);

        this.state = {
          carInfo: []
        }
    }

    componentDidMount() {
         axios.get("http://localhost:3000/AddCars/")
            .then( res => {
                this.setState({carInfo: res.data})
                console.log(carInfo);
            })
            .catch((error) => {
                console.log(error);
            })
    }

//     // deleteItem(id) {
//     //     axios.delete("http://localhost:3000/AddCars/" + id)
//     //         .then(res => console.log(res.data));
//     //     this.setState({
//     //         items: this.state.carInfo.filter(el => el._id !== id)
//     //     })
//     // }

    // CarsList() {
    //     return this.state.carInfo.map(currentItem => {/>;
    //         return <RenderedCars car = { currentItem }
    //         // deleteItem = { this.deleteItem } key = { currentItem._id }


    //     })
    // }


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

                         {/* <th>Description</th>
                         <th>image</th> */}

                     </tr>
                 </thead>
                 {/* <tbody>
                     {this.CarsList()}
                 </tbody> */}
                 </table>
            </div>
        )
    }
}