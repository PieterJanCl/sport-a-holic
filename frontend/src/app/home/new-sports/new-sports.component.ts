import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sports-component',
  templateUrl: './new-sports.component.html',
  styleUrls: ['./new-sports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSportComponent {
  @Input() sports;
  @Output() addNewSport = new EventEmitter();
  question = false;

  addSport() {
    if (this.question) {
      const newSport = (document.getElementById('sportName') as HTMLInputElement).value;
      this.addNewSport.emit(newSport);
    }
    this.question = !this.question;
  }
}
