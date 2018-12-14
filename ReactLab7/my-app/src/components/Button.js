import React, { Component } from 'react';
import '../Button.css';



class Button extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: "А вот и полное название тебе дружище :)",
    welcome: "Скрыть текст статьи!",
    hide: "Ну и пожалуйста.",
    hideText: "Теперь не прочитать."
  };
}
 
// handleClick() {
//   alert("Wow click on button!");
// }

  render() {
    return(
      <div class="Button" onClick={() => { this.props.updateData(this.state.hide,this.state.hideText)}}>
        {this.state.welcome}
      </div>
    );
  }
}

export default Button;