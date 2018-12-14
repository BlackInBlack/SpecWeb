import React, { Component } from 'react';
import '../NavItem.css';



class NavItem extends Component {
  render() {
    return(
      <div class="NavItem">
        {this.props.text}
      </div>
    );
  }
}

NavItem.defaultProps = {
  text: 'Меня не заполнили :('
};

export default NavItem;