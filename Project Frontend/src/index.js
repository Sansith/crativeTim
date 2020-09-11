/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import RoomPage from "layouts/Rooms/RoomPage";
import AllocationDetails from "layouts/Rooms/AllocationDetails";
import UpdateAllocationData from "layouts/Rooms/UpdateAllocationData";
import RoomDetails from "layouts/Rooms/RoomDetails";
import RoomsCard from "layouts/Rooms/RoomsCard";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
      <Route
        path="/rooms/allocationData/update/:allocId"
        render={(props) => <UpdateAllocationData {...props} />}
      />
      <Route
        path="/rooms/allocationData"
        render={(props) => <AllocationDetails {...props} />}
      />
      <Route
        path="/rooms/roomData/updateRoom/:roomId"
        render={(props) => <RoomsCard isUpdate={true} {...props} />}
      />
      <Route
        path="/rooms/roomData/addRoom"
        render={(props) => <RoomsCard isUpdate={false} {...props} />}
      />
      <Route
        path="/rooms/roomData"
        render={(props) => <RoomDetails {...props} />}
      />
      <Route path="/rooms" render={(props) => <RoomPage {...props} />} />
      <Route
        path="/rooms/update"
        render={(props) => <AllocationDetails {...props} />}
      />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
