import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

  @Input()
  title: string

  @Input()
  message: any

  @Output()
  api = new EventEmitter();

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges) {
      this.api.emit(`${this.title} : recieved ${simpleChanges.message.currentValue}`);
    }
  }

}
