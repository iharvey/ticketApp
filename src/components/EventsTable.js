import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';

export default class EventsTable extends Component {
  componentWillMount() {
    this.props.doFetch();
  }

  getMessages(props) {
    let filterMessages = [...this.props.events];

    for (let property in this.props.filters) {
      if (this.props.filters.hasOwnProperty(property)) {
        filterMessages = filterMessages.filter(event => {
          if (property === 'query') {
            if (event.title.toLowerCase().search(this.props.filters[property].toLowerCase()) >= 0) {
              return event;
            }
          }
          if (property === 'type') {
            if (event.type.search(this.props.filters[property]) >= 0) {
              return event;
            }
          }
          if (property === 'locale') {
            if (event.venue.search(this.props.filters[property]) >= 0) {
              return event;
            }
          }
          return null;
        });
      }
    }

    return filterMessages;
  }

  render() {
    const columns = [
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (text, record) => <img src={text} alt='' width='150px' role='presentation' />,
      },
      {
        title: 'Event Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Venue',
        dataIndex: 'venue',
        key: 'venue',
      },
      {
        title: 'View',
        key: 'view',
        dataIndex: 'id',
        render: id =>
          <Link to={`/e/${id}`}>
            <Button>View</Button>
          </Link>,
      },
    ];

    return (
      <div>
        <Table dataSource={this.getMessages(this.props)} columns={columns} rowKey='id' />
      </div>
    );
  }
}
