import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-teamlistvscroll',
  templateUrl: './teamlistvscroll.component.html',
  styleUrls: ['./teamlistvscroll.component.scss']
})
export class TeamListVscrollComponent implements OnInit {
  data: Team[] = [];

  constructor() { }
  
  ngOnInit(): void {
   this.data = this.generateTeams();
  }

  generateTeams(){
    return Array.from({
      length: 100
    }).map((value, i) => ({
      name: `Equipo ${i}`,
      members: i+10,
      created: new Date()
    })) as Team[];
  }

}
