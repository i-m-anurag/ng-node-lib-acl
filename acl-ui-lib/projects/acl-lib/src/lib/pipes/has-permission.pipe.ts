import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasPermission',
})
export class HasPermissionPipe implements PipeTransform {
  transform(value: any): boolean {
    return true;
  }
}
