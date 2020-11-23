import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pares",
})
export class ParesPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    const pares = arr.reduce((resultado, valorActual, indice, array) => {
      if (indice % 2 === 0) {
        resultado.push(array.slice(indice, indice + 2));
      }
      return resultado;
    }, []);
    console.log('pares', pares);
    return pares;
  }
}
