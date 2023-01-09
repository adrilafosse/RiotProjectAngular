import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChampionServiceService {
  constructor(private http:HttpClient) { }

  getData(invocateurname: string) {
    const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+invocateurname+'?api_key=RGAPI-af2fe4f7-fea8-4818-a7fa-b871c2aa9e91'
    return this.http.get(url);
  }
}
