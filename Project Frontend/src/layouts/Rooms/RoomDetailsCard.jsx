import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
class RoomDeailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        allocRoomTxt: "",
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
    return (
      <div>
        <div style={{ height: "300px" }} className="card card-nav-tabs">
          <div className="card-header card-header-warning">Room Details</div>
          <div className="card-body">
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="roomSearch">Room:</label>
                {/* <div id="roomSearchContainer" className="m-1"> */}
                <Autocomplete
                  id="roomSearch"
                  getItemValue={(item) => item.label}
                  items={[
                    { label: "apple" },
                    { label: "banana" },
                    { label: "pear" },
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
                {/* </div> */}
              </div>
            </div>
          </div>
          <button
            style={{ zIndex: 0 }}
            type="button"
            className="btn btn-info m-2 "
          >
            View Rooms
          </button>
        </div>
      </div>
    );
  }
}

export default RoomDeailsCard;
