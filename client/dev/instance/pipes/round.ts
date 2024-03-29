import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'round'})
class Round implements PipeTransform {
  
  public transform(value: number, accuracy: number) {
    
    return value.toFixed(accuracy);
  }
}

export default Round;