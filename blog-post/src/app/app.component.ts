import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular blog-post';

  posts = [
    {
        title: 'First Post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis ratione harum ut quae eius iure architecto saepe vitae corporis! Temporibus quis quaerat minima, perferendis sit aliquam quasi maxime ipsam!',
        loveIts: 0,
        created_at: new Date()
    },
    {
        title: 'Second Post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis ratione harum ut quae eius iure architecto saepe vitae corporis! Temporibus quis quaerat minima, perferendis sit aliquam quasi maxime ipsam!',
        loveIts: 0,
        created_at: new Date()
    },
    {
        title: 'Third Post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis ratione harum ut quae eius iure architecto saepe vitae corporis! Temporibus quis quaerat minima, perferendis sit aliquam quasi maxime ipsam!',
        loveIts: 0,
        created_at: new Date()
    }
];
}
