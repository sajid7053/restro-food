import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
export default class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
      this.getList()
    }
    getList() {
        fetch("http://localhost:3000/restaurants").then((resp) => {
            resp.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id) {
        fetch("http://localhost:3000/restaurants/"+id,{
            method:"DELETE",
            
        }).then((resp)=>{
            resp.json().then((result)=>{
                alert("Restaurant has been deleted")
                this.getList()
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantList</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Restaurant Name</th>
                                        <th>Restaurant Address</th>
                                        <th>Rating</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} /></Link><span onClick={()=>{this.delete(item.id)}}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                                            </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>:<p>Please wait....</p>
                }
            </div>
        )
    }
}
