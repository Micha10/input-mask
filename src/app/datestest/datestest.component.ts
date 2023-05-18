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

  date1 = moment()
  date2 = moment()

  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    // parser: (value: string) => {
    //   const values = value.split('/');
    //   const year = +values[2];
    //   const month = +values[1] - 1;
    //   const date = +values[0];
    //   return new Date(year, month, date);
    // },
  });

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log((`${type}: ${event.value}`));
  }
}

