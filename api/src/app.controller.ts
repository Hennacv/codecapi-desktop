import { Controller } from '@nestjs/common';
import { Res, Sse } from '@nestjs/common/decorators';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Response } from 'express';
import { Observable, fromEvent, interval, map } from 'rxjs';

interface MessageEvent {
  data: string | object;
}

@Controller('app')
export class AppController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Sse('events')
  sendEvent(@Res() res: Response): Observable<MessageEvent> {
    this.eventEmitter.on('new-question', (data) => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    });
    return fromEvent(this.eventEmitter, 'order.created').pipe(
      map((_) => ({ data: { hello: 'world' } })),
    );
  }
}
