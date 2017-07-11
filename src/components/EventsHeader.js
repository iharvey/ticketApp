import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
const Search = Input.Search;

class EventsTable extends Component {
  render() {
    const { onFilter, unique, filters } = this.props;
    const buttonStyle = {
      margin: 4,
    };
    const inputStyle = {
      width: '200px',
    };

    return (
      <div>
        <h3>Event Query</h3>
        <Search placeholder='input search text' style={inputStyle} onSearch={query => onFilter({ query })} />
        <div>
          <h3>Event Types</h3>
          {unique.types.map(type =>
            <Button
              type={type === filters.type ? 'primary' : null}
              key={type}
              onClick={() => onFilter({ type })}
              style={buttonStyle}
            >
              {type}
            </Button>,
          )}
        </div>
        <div>
          <h3>Event Locations</h3>
          {unique.locales.map(locale =>
            <Button
              type={locale === filters.locale ? 'primary' : null}
              key={locale}
              onClick={() => onFilter({ locale })}
              style={buttonStyle}
            >
              {locale}
            </Button>,
          )}
        </div>
      </div>
    );
  }
}
export default EventsTable;
