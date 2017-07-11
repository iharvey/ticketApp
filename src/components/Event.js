import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from 'actions';


@connect(store => {
  return {
    event: store.event
  };
})
export default class Event extends Component {
  componentWillMount() {
    this.props.dispatch(fetchEvent(this.props.match.params.eventID));
  }
  cleanHTML(src) {
    var div = document.createElement('div');
    div.innerHTML = src;
    return div.textContent;
  }

  render() {
    return (
      <div>
        <h1>Event</h1>
        <h2>{this.props.event.event.title}</h2>
        <h3>{this.props.event.event.information_title}</h3>
        <p>Event Location: {this.props.event.event.venue}</p>
        <p>Event Date: {this.props.event.event.date}</p>
        <p>Event Type: {this.props.event.event.type}</p>
        <hr />
        <img style={{ width: 200 }} src={this.props.event.event.image} alt={this.props.event.event.information_title} />
        <div>{this.cleanHTML(this.props.event.event.information_description)}</div>
        <hr />
        <a href={this.props.event.event.url}>View More</a>
      </div>
    );
  }
}
