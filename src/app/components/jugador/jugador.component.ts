import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador.interface';
import { GoleadoresService } from 'src/app/services/goleadores.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugador: Jugador;
  constructor(
    //Instancia al servicio GoleadoresService
    private goleadoresService: GoleadoresService,
    //Para leer el parámetro de la url
    private activatedRoute: ActivatedRoute,
    //Redireccionamiento si el identificador no es válido
    private router: Router
  ) { }

  ngOnInit(): void {

    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identificador --> ', identifier);

    this.goleadoresService.getJugadorById(identifier).subscribe((jugador) => {
      if(!jugador) {
        return this.router.navigateByUrl('/');
      }
      this.jugador = jugador;
      console.log('Jugador --> ', this.jugador);
    });
  }
}
