import React, { Component } from "react";
import { Card } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class RoomsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        roomName: "",
        roomDescription: "",
        roomType: "",
        roomLocation: "",
        roomStatus: "",
      },
    };
  }
  componentDidMount() {
    if (this.props.isUpdate) {
      //this means the component is going to render in update mode
      // first get the related data to the provied ID and change the State
      const allocId = this.props.match.params.roomId;
    } else {
      //fetch rooms and Doctors here
    }
  }

  handleUpdate = () => {
    //simply call update API here with state data
  };
  handleInputChange = (e) => {
    console.log(e, e.target.id);
    const newSts = { ...this.state };
    newSts.inputs[e.target.id] = e.target.value;
    this.setState(newSts);
  };

  handleSubmit = () => {
    //call submit apis here

    //after submitting data redirect to Rooms table
    this.props.history.push("/rooms/roomData");
  };

  handleClear = () => {
    //in add new record mode clear button will redirect to the table view
    if (!this.props.isUpdate) {
      this.setState({
        inputs: {
          roomName: "",
          roomDescription: "",
          roomType: "",
          roomLocation: "",
          roomStatus: "",
        },
      });
    } else {
      this.props.history.push("/rooms/roomData");
    }
  };

  render() {
    return (
      <Card>
        <div className="card">
          <h4 class="card-header card-header-info">
            {this.props.isUpdate ? "Update Room Data" : "Add New Room"}
          </h4>

          <div className="card-body">
            <form>
              {this.props.isUpdate ? (
                <div className="form-group">
                  <label className="font-weight-bold" htmlFor="">
                    Room Id:{this.props.match.params.roomId || "N/A"}
                  </label>
                </div>
              ) : (
                <div></div>
              )}
              <div className="form-group">
                <label htmlFor="roomName">Room Name:</label>
                <input
                  value={this.state.inputs.roomName}
                  onChange={this.handleInputChange}
                  type="text"
                  className="form-control"
                  id="roomName"
                  aria-describedby="AllocTypeHelp"
                  placeholder="Enter Room Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="roomDescription">Room Description:</label>
                <input
                  type="text"
                  value={this.state.inputs.roomDescription}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="roomDescription"
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="roomType">Room Type:</label>
                <select
                  value={this.state.inputs.roomType}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="roomType"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="roomLocation">Room Location:</label>
                <select
                  value={this.state.inputs.roomLocation}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="roomLocation"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="roomStatus">Room Status:</label>
                <select
                  value={this.state.inputs.roomStatus}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="roomStatus"
                >
                  <option>Available</option>
                  <option>Unavaiable</option>
                </select>
              </div>
              {this.props.isUpdate ? (
                <div>
                  <button
                    onClick={this.handleUpdate}
                    type="button"
                    className="btn btn-info "
                  >
                    Update
                  </button>
                  <button
                    onClick={this.handleClear}
                    type="button"
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={this.handleSubmit}
                    type="button"
                    className="btn btn-info "
                  >
                    Submit
                  </button>
                  <button
                    onClick={this.handleClear}
                    type="button"
                    className="btn btn-danger"
                  >
                    Clear
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </Card>
    );
  }
}

export default RoomsCard;
