import { Component, OnInit } from '@angular/core';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public faAlignRight = faAlignRight;
  public faGithubAlt = faGithubAlt;
  public faLinkedinIn = faLinkedinIn;
  public faTelegramPlane = faTelegramPlane;
  public faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
