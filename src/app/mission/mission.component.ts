import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  mission: { title: string, paragraphs: string[] } | null = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ title: string; paragraphs: string[] }>('mission.json')
      .subscribe(data => {
        this.mission = data;
      });
  }
}
