import React, { Component } from 'react';
import '../Main.css';


import Form from './Form';
class Main extends Component {
  state = {
    formTexts: ['Стоял солнечный день. Небо голубое, птицы поют. За зелёными кустами кто-то прятался, было хорошо слышно шелест сочных зелёных листьев. Там сидел маленький крольчонок и мирно пожёвывал травку, одуванчики, клевер и листочки. Заметив меня, он заторопился и, дожевав последний лист, ринулся в сторону леса. Только и видно было, как он заскочил в дальние кусты, слышно было громкий шелест и чириканье, и как множество маленьких птичек выпорхнуло из-за кустов, и эта небольшая стайка скрылась за высокими деревьями.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus felis, vehicula eget viverra eu, aliquet vitae felis. Etiam auctor mi lorem. Integer scelerisque in augue in imperdiet. Donec nec neque dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam magna diam, porttitor at elit eget, pretium sagittis augue. Etiam ipsum urna, efficitur non nunc in, lobortis ultricies augue. Phasellus eu eleifend dui. Nulla sit amet risus tellus. ',
    'Donec nec purus eu eros rutrum fermentum vitae non sapien. Fusce quis tortor ultricies, varius orci ut, consequat ligula. Fusce bibendum, odio sed pharetra rhoncus, massa metus scelerisque erat, quis cursus velit nisl ut felis. Vestibulum at tellus vestibulum nibh congue elementum nec a enim. Phasellus fringilla, quam ut interdum tempor, lorem mi luctus lectus, quis volutpat nisl sapien non metus. Quisque aliquam nibh vel purus eleifend, nec hendrerit felis consequat. Duis iaculis odio diam, eu ullamcorper justo scelerisque ornare.  :)',
    'Mauris dignissim hendrerit viverra. Praesent quis ante mattis, hendrerit sem in, condimentum nisi. Cras vel aliquam quam. Nullam a augue eu urna imperdiet viverra. Donec eu consectetur eros, ut aliquam lectus. Integer at libero vel enim laoreet hendrerit vel sit amet massa. In lacinia ut metus et tempus. Curabitur id varius neque. Nulla lobortis auctor dapibus. Donec non quam a nisl vulputate vulputate. Quisque mattis, augue at gravida tempus, sem nisl cursus elit, congue efficitur velit orci sit amet elit. Curabitur nec metus et sem suscipit hendrerit eget vitae dui. Sed blandit tempus nisl, ac ullamcorper metus tincidunt nec. Etiam non hendrerit lectus. Aliquam consectetur tincidunt convallis. ',
    'Pellentesque eget libero ullamcorper, rhoncus purus in, gravida ligula. Nam metus risus, interdum vel scelerisque vitae, interdum ut urna. In quam nibh, porta quis pulvinar id, ullamcorper eu purus. Mauris viverra dolor ut posuere consequat. Nam ultrices metus ultrices, egestas mauris quis, iaculis libero. In dignissim quam id nunc porta, tincidunt dictum orci suscipit. Nulla a venenatis urna, quis fermentum arcu. Etiam porttitor dapibus lorem, at facilisis elit convallis non. Duis vel consectetur tortor. ',
  ],
  };

  createForms = () => {
    var forms = [];
    for (var i = 0; i < this.state.formTexts.length; i++) {
      forms.push(<Form text = {this.state.formTexts[i]} key={i} indext={i}/>);
    }
    return forms;
  }

  render() {
    return(
      <div class="Main">
        <Form text = {'А вот меня заполнили'}/>
        {this.createForms()}
        <Form/>
      </div>
    );
  }
}

export default Main;
