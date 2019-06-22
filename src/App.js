import React, { Component } from 'react';
import './App.css';

class App extends Component {

  showOptions = (data) => data.map(model =><option value={model.name} key={model.name}>{model.name} ({model.year})</option>)

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
        <form id='selectModels'>
          <select>
            <option value="">-- pick a model --</option>
            {this.showOptions(data)}
          </select>
        </form>
        
      </div>
    );
  }
}

export default App;