import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "limitSymbols"
})

export class LimitSymbols implements PipeTransform {

  transform(text: string, limit: number) {

    if (text.length > limit) {
      return text.slice(0, limit) + " ...";
    }
    return text;

  }
}