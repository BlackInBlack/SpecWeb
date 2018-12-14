import React, { Component } from 'react';
import '../HeadItem.css';



class HeadItem extends Component {
  render() {
    return(
      <div class="HeadItem">
        {this.props.text}
      </div>
    );
  }
}

HeadItem.defaultProps = {
  text: 'Меня не заполнили :('
};

export default HeadItem;