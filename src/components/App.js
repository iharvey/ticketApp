import React, { Component } from "react";
import EventsHeader from "./EventsHeader";
import EventsTable from "./EventsTable";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>TA Events</h1>
        <EventsHeader />
        <EventsTable />
      </div>
    );
  }
}
