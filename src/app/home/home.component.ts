import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ButtonsModule, WavesModule, CollapseModule } from 'ng-uikit-pro-standard';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.scss']
})
export class HomeComponent implements OnInit {

  texts?: any;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }


}
