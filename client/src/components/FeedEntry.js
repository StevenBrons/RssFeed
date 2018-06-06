import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeedEntry extends Component {
  render() {
    const { entry } = this.props;
    return (
      <div className="FeedEntry">
        <Link to={entry.key}>
          {entry.title}
        </Link>
      </div>
    );
  }
}

export default FeedEntry;
 