import React from "react";
import Projects from './Projects';
import Tasklists from './Tasklists';
import Tasks from './Tasks';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [],
      tasklists: [],
      tasks: []
    }
  }

  async componentDidMount() {
    const projectsResponse = await fetch('https://app.paymoapp.com/api/projects', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const projects = (await projectsResponse.json()).projects

    const tasklistsResponse = await fetch('https://app.paymoapp.com/api/tasklists', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const tasklists = (await tasklistsResponse.json()).tasklists

    const tasksResponse = await fetch('https://app.paymoapp.com/api/tasks', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const tasks = (await tasksResponse.json()).tasks

    this.setState({projects})
    this.setState({tasklists})
    this.setState({tasks})
  }

  render() {
    return (
      <div>
        <Projects projects={this.state.projects}/>
        <hr/>
        <Tasklists tasklists={this.state.tasklists}/>
        <hr/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    )
  }
}
export default App;
