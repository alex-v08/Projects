import { SEVERITY } from "./severity.enum";

export class Task {
  constructor(id, name, description, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.serverity = SEVERITY.LOW;
  }
}