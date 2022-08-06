import { Component } from '@angular/core';
import { SvgIconEnum } from "./fragments/svg-icon/svg-icon.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public SvgIcon = SvgIconEnum;

  title = 'angular-datatables';
}
