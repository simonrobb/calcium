
import {
  Component
} from 'angular2/core';

@Component({
  selector: 'action-bar',
  template: `<div class="action-bar"><ng-content></ng-content></div>`,
  styleUrls: ['client/dev/action-bar/styles/action-bar.css']
})
export class ActionBar {}