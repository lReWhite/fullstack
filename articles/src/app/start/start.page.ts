import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  pictures = "https://cdn.discordapp.com/attachments/651828634541096970/651829339737817117/rachel-wu-hvPVxVHzmoQ-unsplash.jpg"
  chef = "https://media.discordapp.net/attachments/651828634541096970/651872175392817152/imageedit_1_8532387842.png"
  constructor() { }

  ngOnInit() {
  }

}
