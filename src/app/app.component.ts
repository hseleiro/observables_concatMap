import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  let numns = [1, 2, 3, 4, 5];

  let data$ = new Observable((observer) => {
    numns.forEach((num) => {
      observer.next(num);
    });
  });

  data$.pipe(mergeMap((numns) => of(numns))).subscribe((num) => {
  console.log(num);


});

}
