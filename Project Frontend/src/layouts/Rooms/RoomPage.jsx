import React, { Component } from "react";
import AllocationCard from "./AllocationCard";
import RoomDeailsCard from "./RoomDetailsCard";
import Sidebar from "components/Sidebar/Sidebar";
import logo from "assets/img/react-logo.png";
import Footer from "components/Footer/Footer";
class RoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSideBar: true,
    };
  }
  toggleSidebar() {
    this.setState({ toggleSideBar: !this.state.toggleSideBar });
  }
  render() {
    return (
      <div>
        {/* <Sidebar
          {...this.props}
          bgColor="blue"
          logo={{
            outterLink: "https://www.creative-tim.com/",
            text: "Creative Tim",
            imgSrc: logo,
          }}
          toggleSidebar={this.toggleSidebar}
        /> */}

        <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item " aria-current="page">
              Login
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Rooms
            </li>
          </ol>
        </nav>

        <div className="content row">
          <div className="col-md-4 m3">
            <AllocationCard></AllocationCard>
          </div>
          <div className="col-md-5 m3">
            <RoomDeailsCard></RoomDeailsCard>
          </div>
        </div>
        <Footer fluid />
      </div>
    );
  }
}

export default RoomPage;
