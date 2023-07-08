import { Subscriber } from './displays';
import { _Socket } from './socket';

abstract class Publisher {
  protected subscribers: Subscriber[] = [];
  protected state;

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  unSubscribe(id: string) {
    this.subscribers = this.subscribers.filter(
      subscriber => subscriber.getId() !== id,
    );
  }

  protected notifySubscribers() {
    for (const subscriber of this.subscribers) {
      subscriber.update(this.state);
    }
  }
}

export class WeatherStation extends Publisher {
  private socket: _Socket = null;

  constructor(initialState = { humidity: 0, temperature: 0 }) {
    super();

    this.state = initialState;
  }

  setData(data) {
    this.state = data;
    this.notifySubscribers();
  }

  attachSocket(socket: _Socket) {
    this.socket = socket;
    this.socket.sendRealTimeData(this.setData.bind(this));
  }

  removeSocket() {
    this.socket.disconnect();
    this.socket = null;
  }
}
