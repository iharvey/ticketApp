import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EventsHeader from "./EventsHeader";
import EventsTable from "./EventsTable";

import { filter } from "../actions/filterActions"; // filterQuery, filterType,
import { fetchEvents } from "../actions/eventsActions";

const mapStateToProps = state => {
  return {
    events: state.events.events,
    filters: state.filter.filters,
    unique: state.events.unique
  };
};

const dispatchObject = {
  onFilter: filter,
  doFetch: fetchEvents
};

@connect(mapStateToProps, dispatchObject)
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>TA Events</h1>
        <EventsHeader unique={this.props.unique} onFilter={this.props.onFilter} />
        <EventsTable events={this.props.events} filters={this.props.filters} doFetch={this.props.doFetch} />
      </div>
    );
  }
}
