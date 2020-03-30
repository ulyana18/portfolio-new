import { Component, OnInit } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public faGithubAlt = faGithubAlt;
  public faLinkedinIn = faLinkedinIn;
  public faTelegramPlane = faTelegramPlane;
  public faEnvelope = faEnvelope;
  public faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
