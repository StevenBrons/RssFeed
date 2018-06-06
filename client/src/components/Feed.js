import React, { Component } from 'react';
import FeedEntry from './FeedEntry';

class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        {this.props.feed.map((feedEntry) => (
          <FeedEntry entry={feedEntry} />
        ))}
      </div>
    );
  }
}

export default Feed;
