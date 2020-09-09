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
      },
    };
  }
  componentDidMount() {
    //fetch rooms and Doctors here
  }
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
    this.setState({
      inputs: {
        InputAllocType: "",
        allocDate: "",
        selectTimeSlot: "",
        allocRoomTxt: "",
        doctorTxt: "",
      },
    });
  };

  render() {
    return (
      <Card>
        <div className="card">
          <h4 class="card-header card-header-info">Allocation Data</h4>

          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="InputAllocType">Allocation Type:</label>
                <input
                  value={this.state.inputs.InputAllocType}
                  onChange={this.handleInputChange}
                  type="AllocType"
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
                <select
                  value={this.state.inputs.selectTimeSlot}
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="selectTimeSlot"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
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
            </form>
          </div>
        </div>
      </Card>
    );
  }
}

export default AllocationCard;
