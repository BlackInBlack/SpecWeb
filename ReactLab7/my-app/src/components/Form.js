import React, { Component } from 'react';
import '../Form.css';
import Button from './Button';
import FormInfoItem from './FormInfoItem';
import Header from './Header';

class Form extends Component {
  state = {
    head: 'Очень интересная статья :)',
    text: this.props.text,
    hideText: this.props.text,
    isShow: true
  };

  updateData = (value,vtext) => {
    if (this.state.isShow) {
      this.setState({ head: value, text: vtext, isShow: false });
    } else {
      alert("Ну ладно, смотри!");
      this.setState({ text: this.state.hideText, isShow: true });
    }
  }

  render() {
    return(
      <div class="Form" ind={this.props.key}>
        <h3>State: {this.state.head}</h3>
        {this.state.text}

        <Button updateData={this.updateData}/>
        <FormInfoItem />
      </div>
    );
  }
}

Form.defaultProps = {
  text: 'Меня не заполнили :('
};



export default Form;
