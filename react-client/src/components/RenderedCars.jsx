import React, { Component } from "react";
// import Edit from './edit';
// import { Link } from 'react-router-dom';
import axios from "axios";


 const RenderCars = props => (
     <tr>
         <td>{props.item.brand}</td>
         <td>{props.item.year}</td>
         <td>{props.item.colour}</td>
     </tr>
 )

export default class RenderedCars extends Component {

    constructor(props) {
        super(props);

        this.state = {
          carInfo: []
        }
    }

    componentDidMount() {
         axios.get("http://localhost:3000/render")
            .then( res => {
                this.setState({carInfo: res.data})
                // console.log(this.state.carInfo);
            })
            .catch((error) => {
                console.log(error);
            })
    }

   CarsList() {
        return this.state.carInfo.map(currentItem => {
            return <RenderCars car = { currentItem }/>;
            // deleteItem = { this.deleteItem } key = { currentItem._id }
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
                     </tr>
                 </thead>
                 <tbody>
                     {this.CarsList()}
                 </tbody>
                 </table>
            </div>
        )
    }
}