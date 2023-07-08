export interface Subscriber {
  update(newValue);
  getId();
}

export interface Display extends Subscriber {
  update(state): void;
  display();
  getId();
}

class HumidityDisplay implements Display {
  private humidity: number;
  private id: string = 'humidity-display';

  update(state): void {
    this.humidity = state.humidity;
    this.display();
  }

  display(): number {
    return this.humidity;
  }

  getId() {
    return this.id;
  }
}

class TemperatureDisplay implements Display {
  private temperature: number;
  private id: string = 'temperature-display';

  update(state): void {
    this.temperature = state.temperature;
    this.display();
  }

  display(): number {
    return this.temperature;
  }

  getId() {
    return this.id;
  }
}
