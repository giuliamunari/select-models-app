import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addModel } from './actions/addModel';
import './App.css';
import ModelDetails from './components/ModelDetails';

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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  showOptions = (data) => data.map((model, index) => <option value={model.name} key={index} id={index}>{model.name} ({model.year})</option>)

  updateSelection = (event) => {
    this.setState({ name: event.target.value });
  }
  handleSubmit = (event) => event.preventDefault()

  buttonCLick = () => this.props.addModel(this.state, data)

  render() {
    return (
      <div className="App">
        <main>
          {this.props.models.map((model, index) =>
            <ModelDetails
              name={model.name}
              manufacturer={model.manufacturer}
              year={model.year}
              origin={model.origin}
              key={index} 
            />
          )}
          <form id='selectModels' onSubmit={this.handleSubmit}>
            <select value={this.state.value} onChange={this.updateSelection}>
              <option value="">-- pick a model --</option>
              {this.showOptions(data)}
            </select>
            <button onClick={this.buttonCLick}>Add</button>
          </form>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { models: state.models }
}

export default connect(mapStateToProps, { addModel })(App);