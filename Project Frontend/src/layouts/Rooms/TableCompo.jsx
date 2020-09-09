import React, { Component } from "react";
// import { element } from "prop-types";
class TableCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { fields = [], data = [] } = this.props;
    return fields.lenght !== 0 || data.lenght !== 0 ? (
      <table class="table">
        <thead>
          <tr>
            {fields.map((f, i) => (
              <th key={i}>{f}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                {d.map((el, x) => {
                  return <td key={x}>{el}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <p className="card-body">--No Data avaiable--</p>
    );
  }
}

export default TableCompo;
