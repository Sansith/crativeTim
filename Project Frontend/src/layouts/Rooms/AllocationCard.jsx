import React, { Component } from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

class AllocationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        InputAllocType: "",
        allocDate: "",
        selectTimeSlot: "",
        allocRoomTxt: "",
        doctorTxt: "",
        fromTime: "",
        toTime: "",
      },
    };
  }
  componentDidMount() {
    if (this.props.isUpdate) {
      //this means the component is going to render in update mode
      // first get the related data to the provied ID and change the State
      const allocId = this.props.allocId;
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
  };

  handleClear = () => {
    if (this.props.isUpdate) {
      this.props.history.push("/rooms/allocationData");
    } else {
      this.setState({
        inputs: {
          InputAllocType: "",
          allocDate: "",
          selectTimeSlot: "",
          allocRoomTxt: "",
          doctorTxt: "",
          noOfAppointments: 0,
          currentAppointment: 0,
          fromTime: "",
          toTime: "",
        },
      });
    }
  };

  render() {
    return (
      <Card>
        <div className="card">
          <h4 class="card-header card-header-info">
            {this.props.isUpdate ? "Update Allocation Data" : "Allocation Data"}
          </h4>

          <div className="card-body">
            <form>
              {this.props.isUpdate ? (
                <div className="form-group">
                  <label htmlFor="InputAllocType">
                    Allocation Id:{this.props.allocId || "N/A"}
                  </label>
                </div>
              ) : (
                <div></div>
              )}
              <div className="form-group">
                <label htmlFor="InputAllocType">Allocation Type:</label>
                <input
                  value={this.state.inputs.InputAllocType}
                  onChange={this.handleInputChange}
                  type="text"
                  className="form-control"
                  id="InputAllocType"
                  aria-describedby="AllocTypeHelp"
                  placeholder="Enter Allocation Type"
                />
              </div>
              <div className="form-group">
                <label htmlFor="allocDate">Allocation Date</label>
                <input
                  type="date"
                  value={this.state.inputs.allocDate}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="allocDate"
                  placeholder="Allocation date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="selectTimeSlot">Time-Slot</label>
                <div class="row">
                  <div class="col">
                    <input
                      onChange={this.handleInputChange}
                      id="fromTime"
                      type="time"
                      class="form-control"
                      placeholder="From"
                    />
                  </div>
                  <div class="col">
                    <input
                      onChange={this.handleInputChange}
                      id="toTime"
                      type="time"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="allocRoomTxt">Allocated Room:</label>
                <select
                  value={this.state.inputs.allocRoomTxt}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="allocRoomTxt"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="doctorTxt">Doctor:</label>
                <select
                  value={this.state.inputs.doctorTxt}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="doctorTxt"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="noOfAppointments">No. of Appointments:</label>
                <input
                  value={this.state.inputs.noOfAppointments}
                  onChange={this.handleInputChange}
                  type="number"
                  className="form-control"
                  id="noOfAppointments"
                  aria-describedby="noOfAppointmentsHelp"
                  placeholder="Enter Number of Appointments"
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentAppointment">
                  Current Appointments:
                </label>
                <input
                  value={this.state.inputs.currentAppointment}
                  onChange={this.handleInputChange}
                  type="number"
                  className="form-control"
                  id="currentAppointment"
                  aria-describedby="noOfAppointmentsHelp"
                  placeholder="Enter Number of Appointments"
                />
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

                  <Link to="/rooms/allocationData">
                    <button
                      // onClick={this.handleClear}

                      type="button"
                      className="btn btn-success"
                    >
                      View Allocation Data
                    </button>
                  </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </Card>
    );
  }
}

export default AllocationCard;
