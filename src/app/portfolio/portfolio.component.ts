import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../user'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  user: Observable<User>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.user = this.data.getUser().valueChanges();
    //this.data.createIt()
  }
}