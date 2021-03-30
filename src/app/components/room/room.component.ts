import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { QueueService } from "src/app/services/Queue.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  // @Input() current: boolean = this.queueService.getCurrent();
  // @Input currnet: check to take it from msg component
  constructor(public queueService: QueueService) {}

  // onAccept() {

  // }
}
