import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterQuery, filterType } from "../actions/eventsActions";
import { Input, Button } from 'antd';
const Search = Input.Search;

@connect((store) => {
  return {
    unique: store.events.unique
  };
})

class EventsTable extends Component {
  filterQuery(query) {
    this.props.dispatch(filterQuery(query));
  }
  filterType(type) {
    this.props.dispatch(filterType(type));
  }

  render() {
    return (
    <div>
      <Search
      placeholder="input search text"
      style={{ width: 200 }}
      onSearch={(query) => this.filterQuery(query)}
      />
      <div>
        <h3>Event Types</h3>
        {this.props.unique.types.map(type =>
          <Button key={type} onClick={() => this.filterType(type)}>{type}</Button>
        )}
      </div>
      <div>
        <h3>Event Locations</h3>
        {this.props.unique.locales.map(locale =>
          <Button key={locale} onClick={() => this.filterType(locale)}>{locale}</Button>
        )}
      </div>
    </div>
    )
  }
}
export default EventsTable;
