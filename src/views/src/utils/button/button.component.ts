import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: string = 'active';

  btnClass() {
    if (this.type === 'active') {
      return '--active';
    }
    return '--danger';
  }
}
