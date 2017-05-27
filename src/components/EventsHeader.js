import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
const Search = Input.Search;

class EventsTable extends Component {
  render() {
    var buttonStyle = {
      margin: 4
    };

    return (
      <div>
        <h3>Event Query</h3>
        <Search
          placeholder="input search text"
          style={{ width: 200 }}
          onSearch={query => this.props.onFilter({ query })}
        />
        <div>
          <h3>Event Types</h3>
          {this.props.unique.types.map(type => (
            <Button key={type} onClick={() => this.props.onFilter({ type })} style={buttonStyle}>
              {type}
            </Button>
          ))}
        </div>
        <div>
          <h3>Event Locations</h3>
          {this.props.unique.locales.map(locale => (
            <Button key={locale} onClick={() => this.props.onFilter({ locale })} style={buttonStyle}>
              {locale}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}
export default EventsTable;
