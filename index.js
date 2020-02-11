import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

const STATUS_VALUES = [
  {
    id: "pending",
    value: "en curso"
  },
  {
    id: "finished",
    value: "finalizado"
  }
];

class App extends Component {
  constructor() {
    this.state = {
      value: "",
      status: STATUS_VALUES[0].id,
      arrayStored: []
    };
  }

  onInputText = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { value, status, arrayStored } = this.state;
    arrayStored.push({ todo: value, status: status });
    this.setState({
      arrayStored: arrayStored
    });

    alert(value + "\n" + status);
  };
  onSelect = event => {
    this.setState({
      status: event.target.value
    });
  };

  render() {
    const { value, status, arrayStored } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input onChange={this.onInputText} value={value} />
        <select value={status} onChange={this.onSelect}>
          {STATUS_VALUES.map(option => {
            return <option value={option.id}>{option.value}</option>;
          })}
        </select>
        <button>Submit</button>
        <table>
          <tr>
            <th>todo</th>
            <th>status</th>
          </tr>
          {arrayStored.map((cell, index) => {
            return (
              <tr key={index}>
                <td>{cell.todo}</td>
                <td>
                  {
                    STATUS_VALUES.find(status => cell.status === status.id)
                      .value
                  }
                </td>
              </tr>
            );
          })}
        </table>
      </form>
    );
  }
}

render(<App />, document.getElementById("root"));
