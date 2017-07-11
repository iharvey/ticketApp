import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventsHeader from 'components/EventsHeader';
import EventsTable from 'components/EventsTable';

import { fetchEvents, filter } from 'actions';

const mapStateToProps = state => {
  return {
    events: state.events.events,
    filters: state.filter.filters,
    unique: state.events.unique,
  };
};

const dispatchObject = {
  doFetch: fetchEvents,
  onFilter: filter,
};

@connect(mapStateToProps, dispatchObject)
export default class App extends Component {
  render() {
    const { events, filters, unique, doFetch, onFilter } = this.props;

    return (
      <div>
        <h1>TA Events</h1>
        <EventsHeader unique={unique} filters={filters} onFilter={onFilter} />
        <EventsTable events={events} filters={filters} doFetch={doFetch} />
      </div>
    );
  }
}
