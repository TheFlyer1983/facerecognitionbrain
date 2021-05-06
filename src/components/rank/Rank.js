import React, { Component } from 'react';

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
    fetch(`https://1am7641mc9.execute-api.eu-west-2.amazonaws.com/rank?rank=${entries}`)
      .then((res) => res.json())
      .then((data) => this.setState({ emoji: data.input }))
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
