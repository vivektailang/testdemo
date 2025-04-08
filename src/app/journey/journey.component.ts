import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class JourneyComponent implements OnInit {
  journeyData: { year: string; events: { date: string; heading: string; description: string }[] }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ year: string; events: { date: string; heading: string; description: string }[] }[]>('journey.json')
      .subscribe(data => {
        this.journeyData = data;
      });
  }
}
