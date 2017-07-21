import { Component, OnInit } from '@angular/core';
import { NgServiceWorker } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public _sw: NgServiceWorker
  ) {}
  title = 'app';

  ngOnInit() {
    this._sw.updates.subscribe(event => {
      if (event.type === 'pending') {
        this._sw.activateUpdate(event.version);
      } else {
        location.reload();
      }
    });
  }

}
