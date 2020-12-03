import React from "react";

export default class Tasks extends React.Component {
	render() {
	  const tasksList = this.props.tasks.map( project => {
		return <div key={project.id}>{project.name}</div>
	  })
	  return <div>{tasksList}</div>
	}
}