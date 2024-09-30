import { Injectable } from "@angular/core"


@Injectable()
export class DataService {

  getDetails(): Promise<string> {
    return new Promise((resolv) => {
      setTimeout(() => {
        resolv("Data");
      }, 1500);
    });
  }
}
