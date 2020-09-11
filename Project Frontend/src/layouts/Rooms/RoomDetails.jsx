import React, { Component } from "react";
import TableCompo from "./TableCompo";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class RoomDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [[]],
    };
  }
  fields = [
    "Room Id",
    "Name",
    "Type",
    "Location",
    "Description",
    "Status",
    "Actions",
  ];

  deleteRecord(id) {
    //call delete API
    // console.log("deletebhj");
    const newstate = this.state.tableData.filter((data) => data[0] !== id);
    this.setState({ tableData: newstate });
  }
  componentDidMount() {
    //fetch data from API
    //api should return values as array of array
    this.setState({
      tableData: [
        [
          "1",
          "fsgfsg",
          "23-43-2333",
          "1.00-2.00",
          "Room1",
          "Doc1",
          "200",
          <div>
            <Button
              onClick={() => this.deleteRecord("1")}
              className="btn btn-danger btn-simple btn-sm m-1"
            >
              Delete
            </Button>
            <Link to={"/rooms/roomData/updateRoom/1"}>
              <Button className="btn btn-warning btn-simple btn-sm m-1">
                Update
              </Button>
            </Link>
          </div>,
        ],
      ],
    });
  }

  render() {
    return (
      <div>
        <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item ">Login</li>
            <li class="breadcrumb-item ">Rooms</li>
            <li class="breadcrumb-item active" aria-current="page">
              Room Details
            </li>
          </ol>
        </nav>

        <div className="card card-nav-tabs">
          <h4 className="card-title m-3  ">Room Details</h4>
          <div className="form-group">
            <Link to="/rooms/roomData/addRoom">
              <button
                // onClick={this.handleClear}

                type="button"
                className="btn btn-success m-3 btn-simple"
              >
                Add Room
              </button>
            </Link>
          </div>

          <div className="m-3">
            <TableCompo
              data={this.state.tableData}
              fields={this.fields}
            ></TableCompo>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomDetails;
