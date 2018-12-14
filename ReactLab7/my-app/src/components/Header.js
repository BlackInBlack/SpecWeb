import React, { Component } from 'react';
import '../Header.css';


import HeadItem from './HeadItem';
class Header extends React.Component {
  render() {
    return(
      <div class="Header">
        <HeadItem text = {'+7 999 705 91 54'}/>
        <HeadItem text = {'andrei.aniskin32@yandex.ru'}/>
        <HeadItem text = {'г. Брянск'}/>
        <HeadItem />
      </div>
    );
  }
}


export default Header;
