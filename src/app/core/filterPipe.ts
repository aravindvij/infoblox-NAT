import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterServers'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input:any): any {
    if(input){
      return value.filter((val:any) => val.name.toLowerCase().includes(input.toLowerCase()));
    }else{
      return value;
    }
  }

}