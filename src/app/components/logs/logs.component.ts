import { Component, Input } from "@angular/core";
import { QueueService } from "src/app/services/Queue.service";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html'
})
export class LogsComponent {
  constructor(public queueService: QueueService) {}
}
