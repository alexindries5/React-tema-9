import React from "react";

export default class Tasklists extends React.Component {
	render() {
	  const tasklistsList = this.props.tasklists.map( project => {
		return <div key={project.id}>{project.name}</div>
	  })
	  return <div>{tasklistsList}</div>
	}
}