import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.interface';
import { GoleadoresService } from 'src/app/services/goleadores.service';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: ['./goleadores.component.css']
})
export class GoleadoresComponent implements OnInit {

  goleadores: Jugador[] = [];

  constructor(private goleadoresService: GoleadoresService) {}

  ngOnInit(): void {
    this.goleadoresService
      .getGoleadores()
      .subscribe((goleadores) => this.goleadores = goleadores["scorers"]);
  }

}
