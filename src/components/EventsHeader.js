import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterQuery, filterType } from "../actions/eventsActions";
import { Input, Button } from 'antd';
const Search = Input.Search;

@connect((store) => {
  return {
    uniqueTypes: store.events.uniqueTypes
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
        {this.props.uniqueTypes.map(type =>
          <Button key={type} onClick={() => this.filterType(type)}>{type}</Button>
        )}
      </div>
    </div>
    )
  }
}
export default EventsTable;
