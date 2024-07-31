import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status:boolean ): string {
    const STATUS_INVALIDO=(status==undefined) || (status===null);
    if(STATUS_INVALIDO) return 'Status indicponivel ou invalido';

    return status?"Ativo":"Inativo";
  }

}
