import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "limitSymbols"
})

export class LimitSymbols implements PipeTransform {

  transform(string: string, limit: number) {

    if (string.length > limit) {
      return string.slice(0, limit) + " ...";
    }
    return string;

  }
}