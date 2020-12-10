import React, { Component } from "react";
// import Edit from './edit';
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from "./header.jsx"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Button from "@material-ui/core/Button";



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
            <div style={{ width: '100%' }}>
                <Header></Header>
                <br /><br />
                <br /><br />

                <Table id="container" style = {{ width: 400, margin: 'auto' }}>
                <TableContainer>

                 <h2 style = {{color:"#c94000", fontFamily: "Century Gothic"}}>Cars</h2>

                  <thead>
                      <TableHead>
                          <TableCell>Brand</TableCell>
                          <TableCell>Year</TableCell>
                          <TableCell>Color</TableCell>
                          <TableCell>Image</TableCell>
                      </TableHead>
                  </thead>
                  <TableBody>
                  {this.state.carInfo.map(currentItem => {
                     return (
                        <TableHead>
                         <TableCell>{currentItem.brand}</TableCell>
                         <TableCell>{currentItem.year}</TableCell>
                         <TableCell>{currentItem.colour}</TableCell>
                         <TableCell>
                            <img src= {currentItem.image} width="300" height="200" class="w3-round" alt="Norway"/>
                         </TableCell>
                         <Button variant="outlined" style = {{color:"#c94000"}} type="submit" value = "Submit"
                          onClick = {() => {this.deleteItem(currentItem.id)}}>
                            Delete
                        </Button>
                        {/* <TableCell><Link to ={'/Update/:id'+currentItem.id}>Edit</Link></TableCell> */}
                        </TableHead>
                     )
                 })}
                 </TableBody>
                 </TableContainer>
                </Table>
             </div>

        )
    }
}

                {/* </Header> */}
                {/*}
                <br /><br />
                <br /><br /> */}