import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  transform(objects: object[], id: string): any {
    const countedObjects: object[] = [];

    for (const object of objects) {
      const count: any = objects.filter(obj => obj[id] === object[id]).length;
      const x: any = countedObjects.find(obj => obj[id] === object[id]);
      if (!x ) {
        countedObjects.push({...object, count});
      }
    }

    return countedObjects;
  }

}
