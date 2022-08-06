import { Component, Input, OnInit } from '@angular/core';
import { SvgIconEnum } from './svg-icon.enum';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.svg',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  public SvgIcon = SvgIconEnum;
  @Input() public fill: string = '';
  @Input() public width: number = 24;
  @Input() public height: number = 24;
  @Input() public filled: boolean = false;
  @Input() public svgClass: string = '';
  @Input() public type: SvgIconEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
