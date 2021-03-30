import { Component, Input, OnDestroy, OnInit } from "@angular/core";

import { QueueService } from "src/app/services/Queue.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})

export class MassagesComponent {
  constructor(public queueService: QueueService) {}
}
