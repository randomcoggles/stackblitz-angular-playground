import { Component, HostBinding } from "@angular/core";

@Component({
  selector: 'app-alerts',
  templateUrl: 'alerts.component.html',
  styles: [`.floated{ border: solid 3px red; }`]
})
export class AppAlertsComponent {
  @HostBinding('class.floated')
  get shouldLabelFloat(): boolean {
    return true;
  }
  onAlertClose() { console.log('Alert has been closed!'); }
}