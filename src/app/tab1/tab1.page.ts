import { RespuestaMDB } from './../interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Pelicula[] = [];
  peliculasPopulares: Pelicula[] = [];
  constructor(private mservice: MoviesService) {}

  ngOnInit(){
    this.mservice.getCartelera().subscribe( resp =>{
      // console.log(resp);
      this.peliculasRecientes = resp.results;
    } );
    this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.mservice.getPeliculasPopulares().subscribe(resp => {
      // this.peliculasPopulares = resp.results; 
      const arrTemp = [...this.peliculasPopulares, ...resp.results];
      this.peliculasPopulares = arrTemp;
      // console.log('Populares', resp);
    });
  }
}
