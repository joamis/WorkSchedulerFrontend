import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CalculateScheduleService} from '../../services/calculate-schedule.service';

@Component({
  selector: 'app-calculate-schedule',
  templateUrl: './calculate-schedule.component.html',
  styleUrls: ['./calculate-schedule.component.css']
})
export class CalculateScheduleComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private calculateScheduleService: CalculateScheduleService) {
  }

  isScheduleCalculated = null;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.updateScheduleCalculated();
  }

  goBack() {
    this.notify.emit('Back to admin view');
  }

  calculateSchedule() {
    this.calculateScheduleService.calculateSchedule().subscribe(() => {
      this.updateScheduleCalculated();
    });
  }

  updateScheduleCalculated() {
    this.calculateScheduleService.isScheduleCalculated().subscribe((result) => {
      if (result) {
        this.isScheduleCalculated = result;
      } else {
        this.isScheduleCalculated = false;
      }
      console.log(this.isScheduleCalculated);
    });
  }

  resetCalculateSchedule() {
    this.calculateScheduleService.resetCalculateSchedule().subscribe(() => {
      this.updateScheduleCalculated();
    });

  }
}
