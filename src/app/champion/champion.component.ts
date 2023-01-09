import { Component } from '@angular/core';
import { ChampionServiceService } from './champion-service.service';
import { Champions } from './champions';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent {
  public champion!: Champions
  public champion1: any;
  public invocateurname!: string;
  constructor(private championservice: ChampionServiceService) { }

  ngOnInit() {

  }
  chargerDonnees(){
    this.championservice.getData(this.invocateurname)
      .subscribe(data => {
        this.champion1 = data
        console.log(this.champion1)
    })
  }
  bouton() {
    console.log(this.invocateurname)
  }

}
