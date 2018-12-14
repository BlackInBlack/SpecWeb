import React, { Component } from 'react';
import '../FormInfoItem.css';

class FormInfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return(
      <div class="FormInfoItem">
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

FormInfoItem.defaultProps = {
  text: 'Меня не заполнили :('
};

export default FormInfoItem;
