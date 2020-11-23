import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RespuestaMDB } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.api_key;

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private popularesPage: number = 0;

  constructor(private http: HttpClient) {}

  private ejecutarQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_language_image=es`;
    return this.http.get<T>(query);
  }

  getPeliculasPopulares(){
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getCartelera() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if(mes < 10){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    let dateInicio = `${hoy.getFullYear()}-${mesString}-01`;
    let dateFin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    console.log('dateInicio', dateInicio);
    console.log('dateFin', dateFin);
    
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${dateInicio}&primary_release_date.lte=${dateFin}`);
  }
}
