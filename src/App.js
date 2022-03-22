import React, { Component } from 'react';
import Gantt from './components/Gantt';
import './App.css';

const data = {
  data: [
    { id: 10, text: 'Task #1', start_date: '2019-04-15', duration: 3, progress: 0.6, parent: "0", type: "project", render: "split", open: true },
    { id: 1, text: 'Task #1.1', start_date: '2019-04-15', duration: 2, progress: 0.6, parent: "10" },
    { id: 2, text: 'Task #1.2', start_date: '2019-04-18', duration: 3, progress: 0.4, parent: "10" },
    { id: 3, text: 'Task #1.3', start_date: '2019-04-22', duration: 4, progress: 0.4, parent: "10" }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' },
    { id: 2, source: 2, target: 3, type: '0' }
  ]
};
class App extends Component {
  render() {
    return (
      <div>
        <div className="gantt-container">
          <Gantt tasks={data} />
        </div>
      </div>
    );
  }
}
export default App;
