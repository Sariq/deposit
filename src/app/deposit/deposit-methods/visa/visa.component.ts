import { Component, OnInit , ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./visa.component.css','../../../../../node_modules/nouislider/distribute/nouislider.css']

})
export class VisaComponent implements OnInit {
sliderValue = 10;

sideSlideConfig:any = {
    behaviour: 'drag',
  connect:  [true, false],

    range: {
      min: 100,
      max: 5000
    },
    pips: {
     	mode: 'values',
      density: 10,
      values: [100,1000,2000,3000,4000,5000]
    },
    orientation: 'vertical',
    direction:'rtl'
  };
  constructor() { }

  ngOnInit() {
  }

}
