import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import { Link } from "react-router-dom";
class RoomDeailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        allocRoomTxt: "",
      },
      data: {
        roomId: "",
        roomName: "",
        roomType: "",
        roomLocation: "",
        roomDesc: "",
        roomStatus: "",
      },
    };
  }
  componentDidMount() {
    //   fetch rooms
  }
  handleInputChange = (e) => {
    console.log(e, e.target.id);
    const newSts = { ...this.state };
    newSts.inputs[e.target.id] = e.target.value;
    this.setState(newSts);
  };
  render() {
    const {
      roomId,
      roomName,
      roomType,
      roomLocation,
      roomDesc,
      roomStatus,
    } = this.state.data;
    return (
      <div className="card">
        <div className="card-body">
          <h4 className=" card-title ">Room Details</h4>

          <div className="card">
            <form>
              <div className="form-group">
                <label className htmlFor="roomSearch">
                  Room :
                </label>
                <Autocomplete
                  id="roomSearch"
                  getItemValue={(item) => item.label}
                  items={[
                    { label: "Room1" },
                    { label: "Room2" },
                    { label: "Room3" },
                  ]}
                  renderItem={(item, isHighlighted) => (
                    <div style={{ zIndex: 10 }} class="dropdown-item">
                      {item.label}
                    </div>
                  )}
                  value={this.state.inputs.allocRoomTxt}
                  onChange={(e) =>
                    this.setState({ inputs: { allocRoomTxt: e.target.value } })
                  }
                  onSelect={(val) =>
                    this.setState({ inputs: { allocRoomTxt: val } })
                  }
                />
              </div>
            </form>
          </div>

          <div className="card-body">
            <p className="card-text">Room Id :{roomId}</p>
            <p className="card-text">Room Name :{roomName}</p>
            <p className="card-text">Room Type :{roomType}</p>
            <p className="card-text">Location :{roomLocation}</p>
            <p className="card-text">Description :{roomDesc}</p>
            <p className="card-text">Status :{roomStatus}</p>
          </div>
          <Link to="/rooms/roomData">
            <button
              // onClick={this.handleClear}

              type="button"
              className="btn btn-success"
            >
              View Room Details
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default RoomDeailsCard;
