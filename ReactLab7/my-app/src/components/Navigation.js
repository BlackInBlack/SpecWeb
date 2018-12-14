import React, { Component } from 'react';
import '../Navigation.css';

import NavItem from './NavItem';
class Navigation extends Component {
  render() {
    return(
      <div class="Navigation">
        <NavItem text = {'Главная'} />
        <NavItem text = {'Настройка'} />
        <NavItem text = {'О нас'} />
        <NavItem text = {'Контакты'} />
        <NavItem  />
      </div>
    );
  }
}

export default Navigation;
