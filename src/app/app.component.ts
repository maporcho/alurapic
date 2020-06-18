import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos = [
    {
      url:
        'https://cdna.artstation.com/p/assets/images/images/008/865/742/large/borislav-mitkov-docbrowntest02.jpg',
      description: 'Doc Brown',
    },
    {
      url: 'https://images.uncyc.org/pt/d/df/Marty_67284_f_97180.jpg',
      description: 'Marty McFly',
    },
    {
      url: 'https://images.uncyc.org/pt/d/df/Marty_67284_f_97180.jpg',
      description: 'Marty McFly',
    },
    {
      url: 'https://images.uncyc.org/pt/d/df/Marty_67284_f_97180.jpg',
      description: 'Marty McFly',
    },
  ];
}
