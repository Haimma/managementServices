import { Component } from "@angular/core";
import { QueueService } from "src/app/services/Queue.service";

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent {
  constructor(public queueService: QueueService) {}
}

