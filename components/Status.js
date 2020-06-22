import React, {Component} from "react"

export default class Status extends Component{
	constructor(props){
		super(props);


		this.state={
			
		}

		
	}

	componentDidMount() {
		
  	}

  	reply=()=>{

  	}

	render(){
		return (
			<div className="col-md-12 well">
				<p>{this.props.data.content}</p>
				<textarea type="text"
					className="form-control" 
					name="info"
					placeholder="write a reply"
					value={this.state.info} 
					onChange={this.handleChange}
				></textarea><br/>
			</div>
		)
	}
}