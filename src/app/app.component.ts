import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public dateGroup: FormGroup;
  public default: any[];

  constructor(
    private _fb: FormBuilder,
    private _cdr: ChangeDetectorRef
  ) {
    this.dateGroup = this._fb.group({
      birthDate: [''],
      hour: [''],
      mintue: [''],
    });
    this.default = this.output;
  }

  ngOnInit(): void {
    this.dateGroup.valueChanges.subscribe((data) => this.calculate(data))
  }

  public hours: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  public mintues: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

  public output: any[] = [
    {
      id: 1,
      name: 'Day',
      number: '-',
      element: '-',
      finger: '-'
    },
    {
      id: 2,
      name: 'Month',
      number: '-',
      element: '-',
      finger: '-'
    },
    {
      id: 3,
      name: 'Year',
      number: '-',
      element: '-',
      finger: '-'
    },
    {
      id: 4,
      name: 'Hour',
      number: '-',
      element: '-',
      finger: '-'
    },
    {
      id: 5,
      name: 'Mintue',
      number: '-',
      element: '-',
      finger: '-'
    },
  ];

  public database: any[] = [
    {
      id: 0,
      element: 'Tam',
      finger: 'Rt Th'
    },
    {
      id: 1,
      element: 'Akash',
      finger: 'Rt SF'
    },
    {
      id: 2,
      element: 'Vayu',
      finger: 'Lf SF'
    },
    {
      id: 3,
      element: 'Agni',
      finger: 'Lf If'
    },
    {
      id: 4,
      element: 'Jal',
      finger: 'Rt If'
    },
    {
      id: 5,
      element: 'Prithvi',
      finger: 'Rt RF'
    },
    {
      id: 6,
      element: 'Kaal',
      finger: 'Lf RF'
    },
    {
      id: 7,
      element: 'Disha',
      finger: 'Lf MF'
    },
    {
      id: 8,
      element: 'Mann',
      finger: 'Rt MF'
    },
    {
      id: 9,
      element: 'Atma',
      finger: 'Lf Th'
    },
  ];

  public calculate(data: any) {
    if (data.birthDate) {

      const birth = data.birthDate.split('-');

      this.output[2].number = (birth[0].toString().slice(-1)) - 1
      if (this.output[2].number === -1)
        this.output[2].number = 9;


      const yearData = this.database.find((item) => item.id === this.output[2].number)
      this.output[2].element = yearData.element
      this.output[2].finger = yearData.finger


      this.output[1].number = (birth[1].toString().slice(-1)) - 1
      if (this.output[1].number === -1)
        this.output[1].number = 9;

      const monthData = this.database.find((item) => item.id === this.output[1].number)
      this.output[1].element = monthData.element
      this.output[1].finger = monthData.finger

      this.output[0].number = (birth[2].toString().slice(-1)) - 1
      if (this.output[0].number === -1)
        this.output[0].number = 9;

      const dayData = this.database.find((item) => item.id === this.output[0].number)
      this.output[0].element = dayData.element
      this.output[0].finger = dayData.finger

    }
    if (data.hour) {
      this.output[3].number = data.hour.toString().slice(-1)
      if (this.output[3].number === 0)
        this.output[3].number = 9;

      const hourData = this.database.find((item) => item.id === parseInt(this.output[3].number))
      
      this.output[3].element = hourData.element
      this.output[3].finger = hourData.finger
    }

    if (data.mintue) {
      this.output[4].number = (data.mintue.toString().slice(-1)) - 1
      if (this.output[4].number === -1)
        this.output[4].number = 9;

      const minData = this.database.find((item) => item.id === this.output[4].number)
      this.output[4].element = minData.element
      this.output[4].finger = minData.finger
    }
  };

  public onClear() {
    this.output.map((items) => {
      items.element = '-'
      items.number = '-'
      items.finger = '-'
    })
  }
}
