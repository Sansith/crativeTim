import React, { Component } from "react";
import AllocationCard from "./AllocationCard";
class UpdateAllocationData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const id = this.props.match.params.allocId;
    //call a get API and get related data
  }

  render() {
    return (
      <AllocationCard
        isUpdate={true}
        allocId={this.props.match.params.allocId}
        {...this.props}
      ></AllocationCard>
    );
  }
}

export default UpdateAllocationData;
