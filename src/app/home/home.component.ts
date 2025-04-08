import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = [
    { image: 'img/image1.jpg', name: 'Item 1', text: 'Short description for item 1.' },
    { image: 'img/image2.jpg', name: 'Item 2', text: 'Short description for item 2.' },
    { image: 'img/image3.jpg', name: 'Item 3', text: 'Short description for item 3.' },
    { image: 'img/image4.jpg', name: 'Item 4', text: 'Short description for item 4.' },
    { image: 'img/image5.jpg', name: 'Item 5', text: 'Short description for item 5.' },
    { image: 'img/image6.jpg', name: 'Item 6', text: 'Short description for item 6.' },
    { image: 'img/image7.jpg', name: 'Item 7', text: 'Short description for item 7.' },
    { image: 'img/image8.jpg', name: 'Item 8', text: 'Short description for item 8.' },
    { image: 'img/image9.jpg', name: 'Item 9', text: 'Short description for item 9.' },
    { image: 'img/image10.jpg', name: 'Item 10', text: 'Short description for item 10.' },
    { image: 'img/image11.jpg', name: 'Item 11', text: 'Short description for item 11.' },
    { image: 'img/image12.jpg', name: 'Item 12', text: 'Short description for item 12.' },
  ];

  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('notifications.json').subscribe((data) => {
      this.posts = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }
}
