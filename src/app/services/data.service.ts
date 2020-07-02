import { sub } from 'date-fns';
import { Team } from './../models/team.model';
import { TEAMS } from './teams';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(limit: number = 50) {
    return this.generateTeams(limit);
  }

  generateName() {
    const index = this.getRandomInt(0, TEAMS.length - 1);
    return TEAMS[index];
  }

  generateDate() {
    const days = this.getRandomInt(0, 1000);
    return sub(new Date(), { days });
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateTeam(newName?: string): Team {
    return {
      name: newName ? newName : this.generateName(),
      members: this.getRandomInt(1, 10),
      created: this.generateDate(),
    };
  }

  generateTeams(limit: number = 50): Team[] {
    const result = [];
    for (let index = 0; index < limit; index++) {
      result.push(this.generateTeam());
    }
    return result;
  }
}