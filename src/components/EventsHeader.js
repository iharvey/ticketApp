import React, { Component } from 'react';
import { connect } from "react-redux";
import { filter } from "../actions/filterActions"; // filterQuery, filterType,
import { Input, Button } from 'antd';
const Search = Input.Search;

@connect((store) => {
  return {
    unique: store.events.unique
  };
})

class EventsTable extends Component {
  filter(type) {
    this.props.dispatch(filter(type));
  }

  render() {
    return (
    <div>
      <Search
      placeholder="input search text"
      style={{ width: 200 }}
      onSearch={(query) => this.filter({query})}
      />
      <div>
        <h3>Event Types</h3>
        {this.props.unique.types.map(type =>
          <Button key={type} onClick={() => this.filter({type})}>{type}</Button>
        )}
      </div>
      <div>
        <h3>Event Locations</h3>
        {this.props.unique.locales.map(locale =>
          <Button key={locale} onClick={() => this.filter({locale})}>{locale}</Button>
        )}
      </div>
    </div>
    )
  }
}
export default EventsTable;
