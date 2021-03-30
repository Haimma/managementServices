import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class QueueService {
  private queue: number[] = [];
  private logs: string[] = [];
  private counter: number = 0;
  private currnet: number = 0;
  private next: number = 0;
  private last: number = 0;

  constructor(private http: HttpClient) { }

  addToQueue(): void {
    this.counter++;
    const oldData = { queue: this.queue, logs: this.logs, next: this.next, last: this.last, counter: this.counter}
    this.http.put<any>('http://localhost:3000/api/queue/addToQueue', oldData)
      .subscribe((newData) => {
        this.queue = newData.data.queue,
        this.logs = newData.data.logs,
        this.next = newData.data.next,
        this.last = newData.data.last
      });
  }

  onAccept(): void {
    const oldData = { queue: this.queue, logs: this.logs, next: this.next, currnet: this.currnet, last: this.last}
    this.http.put<any>('http://localhost:3000/api/room/onAccept', oldData)
      .subscribe((newData) => {
        this.queue = newData.data.queue,
        this.logs = newData.data.logs,
        this.next = newData.data.next,
        this.currnet = newData.data.currnet,
        this.last = newData.data.last
      });
  }

  onSkip(): void {
    const oldData = { queue: this.queue, logs: this.logs, next: this.next, last: this.last}
    this.http.put<any>('http://localhost:3000/api/room/onSkip', oldData)
      .subscribe((newData) => {
        this.queue = newData.data.queue,
        this.logs = newData.data.logs,
        this.next = newData.data.next,
        this.last = newData.data.last
      });

  }

  onOut(): void {
    const oldData = { currnet: this.currnet, logs: this.logs}
    this.http.put<any>('http://localhost:3000/api/room/onOut', oldData)
      .subscribe((newData) => {
        this.currnet = newData.data.currnet,
        this.logs = newData.data.logs
      });


  }

  getQueueSize(): boolean {
    if (this.queue.length) {
      return false;
    }
    return true;
  }

  checkRoom(): boolean {
      if (this.currnet === 0) {
        return false;
      }
      return true;
  }

  getCurrent(): number { return this.currnet }

  getNext(): number { return this.next }

  getLast(): number { return this.last }

  getLogs(): string[] { return this.logs }
}

