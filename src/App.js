import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value:''};
    this.updateSelection= this.updateSelection.bind(this);
  }

  showOptions = (data) => data.map(model => <option value={model.name} key={model.name}>{model.name} ({model.year})</option>)

  updateSelection= (event) =>{
    this.setState({value: event.target.value});
  }
  render() {
    const data = [
      {
          name: "Ivel Z3",
          manufacturer: "Ivasim",
          year: 1969,
          origin: "Croatia"
      },
      {
          name: "Bally Astrocade",
          manufacturer: "Bally Consumer Products",
          year: 1977,
          origin: "USA"
      },
      {
          name: "Sord M200 Smart Home Computer",
          manufacturer: "Sord Computer Corporation",
          year: 1971,
          origin: "Japan"
      },
      {
          name: "Commodore 64",
          manufacturer: "Commodore",
          year: 1982,
          origin: "USA"
      }
  ] 
    return (
      <div className="App">
        <main>
          <form id='selectModels'>
            <select value={this.state.value} onChange={this.updateSelection}>
              <option value="">-- pick a model --</option>
              {this.showOptions(data)}
            </select>
          </form>
        </main>
      </div>
    );
  }
}

export default App;