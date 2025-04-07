import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Message {
  date: Date;
  text: string;
  createdBy: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  imports: [CommonModule]
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    // Simulate fetching messages from a service or API
    this.messages = [
      {
        date: new Date('2025-04-01T10:00:00'),
        text: "Dear Students, \n as we approach the annual examination period, I encourage all of you to focus on your studies with dedication and determination. This is the perfect opportunity to showcase your hard work, knowledge, and understanding of the subjects you have learned throughout the year. To prepare effectively, create a study schedule that covers all topics while allowing time for regular breaks to refresh your mind. Concentrate on revising key concepts, formulas, and definitions, as these are fundamental to solving problems and answering questions confidently. Practice previous years' papers and sample questions to familiarize yourself with the exam pattern and time management.Remember, preparation is not just about studying harder but also studying smarter.Stay curious, ask questions, and clarify your doubts with your teachers or peers.Believe in your abilities and maintain a positive mindset, as confidence plays a crucial role in performance.Lastly, take care of your health by eating well, staying hydrated, and getting adequate rest.A well- rested mind is more capable of grasping and retaining information.I wish each of you the very best for your exams.Trust yourself, work diligently, and success will follow.Warm regards",
        createdBy: 'Admin'
      },
      {
        date: new Date('2025-04-05T14:30:00'),
        text: 'New batch starting from next week. Enroll now!',
        createdBy: 'Admin'
      },
      {
        date: new Date('2025-04-07T09:00:00'),
        text: 'Congratulations to all our students for their excellent results!',
        createdBy: 'Admin'
      }
    ];
    this.sortMessagesByDate();
  }

  sortMessagesByDate() {
    this.messages.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
