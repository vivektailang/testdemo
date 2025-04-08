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

  posts: any[] = [];
  toppers: any[] = [];
  summary: { title: string; paragraphs: string[] } | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('notifications.json').subscribe((data) => {
      this.posts = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });


    this.http.get<any[]>('toppers.json').subscribe((data) => {
      this.toppers = data;
    });

    this.http.get<{ title: string; paragraphs: string[] }>('welcome.json')
      .subscribe(data => {
        this.summary = data;
      });
  }
}
