import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AlertService {
  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAfterRouteChanges = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChanges) {
          this.keepAfterRouteChanges = false;
        } else {
          this.clear();
        }
      }
    });
  }

  success(message: string, keepAfterRouteChanges = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChanges);
  }

  warning(message: string, keepAfterRouteChanges = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChanges);
  }

  danger(message: string, keepAfterRouteChanges = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChanges);
  }

  info(message: string, keepAfterRouteChanges = false) {
    this.alert(AlertType.INFO, message, keepAfterRouteChanges);
  }

  private alert(
    alertType: AlertType,
    message: string,
    keepAfterRouteChanges = false
  ) {
    this.keepAfterRouteChanges = keepAfterRouteChanges;
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  clear() {
    this.alertSubject.next(null);
  }
}
