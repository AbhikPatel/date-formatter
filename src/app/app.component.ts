import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  public dateGroup:FormGroup;

  constructor(
    private _fb:FormBuilder
  ){
    this.dateGroup = this._fb.group({
      birthDate:['']
    });
  }

  ngOnInit(): void {
    this.dateGroup.valueChanges.subscribe((data) => this.calculate(data.birthDate))
  }

  public output:any[] = [
    {
      id:1,
      name:'Day',
      number:'-',
      element:'-',
      finger:'-'
    },
    {
      id:2,
      name:'Month',
      number:'-',
      element:'-',
      finger:'-'
    },
    {
      id:3,
      name:'Year',
      number:'-',
      element:'-',
      finger:'-'
    },
  ];

  public database:any[] = [
    {
      id:0,
      element:'Tam',
      finger:'Rt Th'
    },
    {
      id:1,
      element:'Akash',
      finger:'Rt SF'
    },
    {
      id:2,
      element:'Vayu',
      finger:'Lf SF'
    },
    {
      id:3,
      element:'Agni',
      finger:'Lf If'
    },
    {
      id:4,
      element:'Jal',
      finger:'Rt If'
    },
    {
      id:5,
      element:'Prithvi',
      finger:'Rt RF'
    },
    {
      id:6,
      element:'Kaal',
      finger:'Lf RF'
    },
    {
      id:7,
      element:'Disha',
      finger:'Lf MF'
    },
    {
      id:8,
      element:'Mann',
      finger:'Rt MF'
    },
    {
      id:9,
      element:'Atma',
      finger:'Lf Th'
    },
  ]

  public calculate(date:any){
    const birth = date.split('-');
    
    this.output[2].number = (birth[0].toString().slice(-1)) - 1
    if(this.output[2].number === -1)  
      this.output[2].number = 8;

    const yearData = this.database.find((item) => item.id === this.output[2].number)
    this.output[2].element = yearData.element
    this.output[2].finger = yearData.finger
    
    
    this.output[1].number = (birth[1].toString().slice(-1)) - 1
    if(this.output[1].number === -1)  
    this.output[1].number = 8;

    const monthData = this.database.find((item) => item.id === this.output[1].number)
    this.output[1].element = monthData.element
    this.output[1].finger = monthData.finger
    
    this.output[0].number = (birth[2].toString().slice(-1)) - 1
    if(this.output[0].number === -1)  
    this.output[0].number = 8;

    const dayData = this.database.find((item) => item.id === this.output[0].number)
    this.output[0].element = dayData.element
    this.output[0].finger = dayData.finger
  }
}
