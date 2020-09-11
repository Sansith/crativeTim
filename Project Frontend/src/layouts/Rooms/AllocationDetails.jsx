import React, { Component } from "react";
import TableCompo from "./TableCompo";
import { Button } from "reactstrap";
class AllocationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [[]],
    };
  }
  fields = [
    "AllocID",
    "AllocType",
    "AllocDate",
    "Time Slot",
    "Alloc Room",
    "Doctor",
    "No of Appointments",
    "Current Appointments",
    "Actions",
  ];

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
          "0",
          <div>
            <Button
              onClick={this.deleteRecord("id")}
              className="btn btn-danger btn-simple btn-sm m-1"
            >
              Delete
            </Button>
            <Button
              onClick={() =>
                this.props.history.push("/rooms/allocationData/update/1")
              }
              className="btn btn-warning btn-simple btn-sm m-1"
            >
              Update
            </Button>
          </div>,
        ],
      ],
    });
  }
  getTableActions(delId) {
    return <div></div>;
  }
  handleEditClick() {}
  deleteRecord(id) {
    //call delete API
    console.log("delete");
  }

  render() {
    return (
      <div>
        <div class="modal" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  <i class="tim-icons icon-simple-remove"></i>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item ">Login</li>
            <li class="breadcrumb-item ">Rooms</li>
            <li class="breadcrumb-item active" aria-current="page">
              Allocation Details
            </li>
          </ol>
        </nav>

        <div className="card card-nav-tabs">
          <div className="card-header card-header-warning">
            Allocation Details
          </div>
          <TableCompo
            data={this.state.tableData}
            fields={this.fields}
          ></TableCompo>
        </div>
      </div>
    );
  }
}

export default AllocationDetails;
