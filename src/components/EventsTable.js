import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchEvent} from "../actions/eventActions";
import {fetchEvents} from "../actions/eventsActions";
import {filterEvents, filter} from "../actions/filterActions";
import { Table } from 'antd';

const columns = [{
  title: 'Image',
  dataIndex: 'image',
  key: 'image',
  render: (text, record) => (
    <img src={text} width="150px" role="presentation"/>
  )
}, {
  title: 'Event Title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Date',
  dataIndex: 'date',
  key: 'date',
}, {
  title: 'Venue',
  dataIndex: 'type',
  key: 'type',
}];

@connect((store) => {
  return {
    events: store.events.events,
    eventsFiltered: store.filter.eventsFiltered,
    filters: store.filter.filters,
  };
})
export default class EventsTable extends Component {
  componentWillMount() {
    this.props.dispatch(fetchEvents());
  }
  eventRowClick(row) {
    this.props.dispatch(fetchEvent(row.id));
  }
  getDataSource(props) {
    return props.events
    // return props.eventsFiltered.length ? props.eventsFiltered : props.events;
  }
  render() {
    return <div>
             <Table
              dataSource={this.getDataSource(this.props)}
              columns={columns}
              rowKey="id"
              onRowClick={this.eventRowClick.bind(this)}
              />
          </div>
  }
}
