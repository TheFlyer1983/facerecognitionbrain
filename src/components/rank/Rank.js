import React, { Component } from 'react';
import { apiConfig, endpoints } from '../../helpers';

class Rank extends Component {
  constructor() {
    super();
    this.state = {
      emoji: '',
    };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null;
    }
    this.generateEmoji(this.props.entries);
  }

  generateEmoji = (entries) => {
    const token = window.sessionStorage.getItem('token');
    fetch(`${apiConfig}${endpoints.rank}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        entries,
      }),
    })
      .then((res) => res.json())
      .then((data) => this.setState({ emoji: data }))
      .catch(console.log);
  };

  render() {
    const { name, entries } = this.props;
    return (
      <div>
        <div className="white f3">{`${name}, your current entry count is...`}</div>
        <div className="white f1">{entries}</div>
        <div className="white f3">{`Rank Bagde: ${this.state.emoji}`}</div>
      </div>
    );
  }
}

export default Rank;
