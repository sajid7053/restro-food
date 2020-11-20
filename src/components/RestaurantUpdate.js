import React, { Component } from 'react'

export default class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
            id:null
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/restaurants/"+this.props.match.params.id).then((resp)=>{
            resp.json().then((result)=>{
                this.setState({
                    name:result.name,
                    address:result.address,
                    rating:result.rating,
                    id:result.id
                })
            })
        })
    }
    update() {
        fetch("http://localhost:3000/restaurants/"+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((resp)=>{
            resp.json().then((result)=>{
                alert("Restaurant has been updated")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantUpdate</h1>
                <form className="my-form">
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} />
		            </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text" onChange={(e)=>{this.setState({address:e.target.value})}} value={this.state.address} />
		            </div>
                    <div className="form-group">
                        <label>Rating: </label>
                        <input type="text" onChange={(e)=>{this.setState({rating:e.target.value})}} value={this.state.rating} />
                     </div>
                    <button className="button" onClick={()=>{this.update()}}>Update Restaurant</button>
	            </form>
            </div>
        )
    }
}
