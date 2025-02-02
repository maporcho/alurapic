export class Alert {
  constructor(
    public readonly alertType: AlertType,
    public readonly message: String
  ) {}
}

export enum AlertType {
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
}
