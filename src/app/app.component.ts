import { Component } from '@angular/core';
import { ChampionServiceService } from './champion/champion-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChampionServiceService]
})
export class AppComponent {

}
