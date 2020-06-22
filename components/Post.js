import React, {Component} from "react"

export default class Post extends Component{
	constructor(props){
		super(props);
		this.state={
			info:""
		}
	}

	componentDidMount() {
		
  	}

  	handleChange=(e)=> {
   		this.setState({ [e.target.name] : e.target.value });
	}
  	
	sendData = ()=>{
  		this.props.addMessage(this.state.info);
  	}


	render(){
		return (
			<div className="col-md-12 well">
				<textarea type="text"
					className="form-control" 
					name="info"
					rows="4" 
					cols="10"
					placeholder="whats on your mind"
					value={this.state.info} 
					onChange={this.handleChange}
				></textarea><br/>
				<button onClick={this.sendData}>Submit!</button>
			</div>
		)
	}
}