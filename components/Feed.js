import React, {Component} from "react"
import Post from "./Post"
import Status from "./Status"

export default class Feed extends Component{
	constructor(props){
		super(props);


		this.state={
			posts:[
				{id:"1", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"},
				{id:"2", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"},
				{id:"3", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"},
				{id:"4", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"},
			]
		}
	}

	componentDidMount() {
		//make an ajax call and get all the posts
  	}

  	addMessage=(message)=>{
  		var data = {id:Date.now().toString(), content:message};
  		this.setState({posts: [data, ...this.state.posts]});
  	}

	render(){
		return (
			<div>
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<Post addMessage={this.addMessage}/>
						{
							this.state.posts.map((x,i)=>{
								return (<Status data={x} />)
							})
						}
					</div>
					<div className="col-md-4">

					</div>
				</div>
			</div>
		)
	}
}