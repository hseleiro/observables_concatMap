import {
  Component,
} from '@angular/core';
import {
  concat,
  concatMap,
  mergeMap,
  Observable,
  of,
  tap
} from 'rxjs';
import {
  HttpClient
} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // REMOVE THE ANYS

  constructor(private http:HttpClient) {}

  public saveData(): void {

  const data: any = [
      {
        "id": Math.random(),
        "title": "userTitle_1" ,
        "author": "author_1"
      },
    {
      "id": Math.random(),
      "title": "userTitle_2" ,
      "author": "author_2"
    },
    {
      "id": Math.random(),
      "title": "userTitle_3" ,
      "author": "author_3"
    },
  ];

    const sourceOfData = new Observable((observer) => {
      data.forEach((data: any, i: number) => {
        setTimeout(() => {
          observer.next(data)
        }, i * this.getRandomInt(0, 2000))
      });
    })

    sourceOfData.pipe(
      tap(() => console.log('Saving data')),
      concatMap((data) => this.http.post('http://localhost:3000/data', data)),
    ).subscribe((res) => {
      console.log('res', res);
      // handle data
    })
  }

  public getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private concatOperatorExample(): void {
    const firstRow$ = of('a', 'b');
    const secondRow$ = of('c', 'c');
    const result$ = concat(firstRow$, secondRow$);
    result$.subscribe(console.log);
  }
}

