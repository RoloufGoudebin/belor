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
    this.retrieveTutorials();
    console.log(this.texts);
  }


  retrieveTutorials(): void {
    this.databaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.texts = data[0];
      console.log(this.texts[1]);
    });
    console.log(this.texts);
  }

}
