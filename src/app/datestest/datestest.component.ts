import {Component} from '@angular/core';
import * as moment from "moment";
import {createMask} from "@ngneat/input-mask";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-datestest',
  templateUrl: './datestest.component.html',
  styleUrls: ['./datestest.component.scss']
})
export class DatestestComponent {

  date1 = moment();
  date2 = moment();

  dateInputMask = createMask<moment.Moment>({
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    parser: (value: string) => {
      // const values = value.split('/');
      // const year = +values[2];
      // const month = +values[1] - 1;
      // const date = +values[0];
      let m = moment(value, 'DD.MM.YYYY', true);
      if (m.isValid()) {
        console.log("parser valid", value);
        return m;
      }
      console.log("parser INvalid", value);
      return moment();
      // return moment(value, 'DD.MM.YYYY').toDate();
    },
  });

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    if (type === 'input2') {
      this.date2 = moment(event.value);
    }
    console.log((`${type}: ${event.value}`));
  }
}

