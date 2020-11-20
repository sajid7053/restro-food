import React, { Component } from 'react'

export default class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null
        }
    }
    add() {
        fetch("http://localhost:3000/restaurants",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((resp)=>{
            resp.json().then((result)=>{
                alert("Restaurant has been added")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Add Restaurant</h1>
                <form className="my-form">
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} />
		            </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text" onChange={(e)=>{this.setState({address:e.target.value})}} />
		            </div>
                    <div className="form-group">
                        <label>Rating: </label>
                        <input type="text" onChange={(e)=>{this.setState({rating:e.target.value})}} />
                     </div>
                    <button className="button" onClick={()=>{this.add()}}>Add Restaurant</button>
	            </form>
             </div>
        )
    }
}
