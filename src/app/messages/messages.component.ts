import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface Message {
  heading: string;
  description: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  paginatedMessages: Message[] = [];
  currentPage: number = 1;
  messagesPerPage: number = 4; // Display 4 messages per page

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.http.get<Message[]>('message.json').subscribe(data => {
      this.messages = data;
      this.updatePaginatedMessages();
    });
  }

  updatePaginatedMessages() {
    const startIndex = (this.currentPage - 1) * this.messagesPerPage;
    const endIndex = startIndex + this.messagesPerPage;
    this.paginatedMessages = this.messages.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedMessages();
  }

  get totalPages(): number {
    return Math.ceil(this.messages.length / this.messagesPerPage);
  }
}
