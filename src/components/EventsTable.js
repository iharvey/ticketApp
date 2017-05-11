import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchEvent } from "../actions/eventActions";
import { fetchEvents } from "../actions/eventsActions";
import { filterEvents, filter } from "../actions/filterActions";
import { Table } from 'antd';

const columns = [{
  title: 'Image',
  dataIndex: 'image',
  key: 'image',
  render: (text, record) => ( <img src={text}
    width="150px"
    role="presentation" />
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
  getMessages(props) {
    let filterMessages = [...this.props.events];
    for (let property in this.props.filters) {
      filterMessages = filterMessages.filter(event => {
        if (property === "query") {
          if (event.title.toLowerCase().search(this.props.filters[property].toLowerCase()) >= 0) {
            return event
          }
        }
        if (property === "type") {
          if (event.type.search(this.props.filters[property]) >= 0) {
            return event
          }
        }
        if (property === "locale") {
          if (event.venue.search(this.props.filters[property]) >= 0) {
            return event
          }
        }
      })
    }
    return filterMessages;
  }

  render() {
    return <div>
      <Table
        dataSource={ this.getMessages(this.props) }
        columns={ columns }
        rowKey="id"
        onRowClick={ this.eventRowClick.bind(this) }
    /> </div>
  }
}
