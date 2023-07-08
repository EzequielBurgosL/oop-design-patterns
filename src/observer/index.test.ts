import { WeatherStation } from '.';
import { Display } from './displays';
import { _Socket } from './socket';

class MockWeatherSocket implements _Socket {
  disconnect() {}

  sendRealTimeData(callback) {
    callback({ humidity: 50, temperature: 25 });
  }
}

class MockTemperatureDisplay implements Display {
  private temperature;

  display() {
    return this.temperature;
  }

  update(state) {
    this.temperature = state.temperature;
    this.display();
  }

  getId() {
    return 'temperature-display-id';
  }
}

describe('WeatherStation', () => {
  let weatherStation: WeatherStation;
  let weatherSocket: _Socket;
  let temperatureDisplay: Display;

  beforeEach(() => {
    weatherStation = new WeatherStation();
    weatherSocket = new MockWeatherSocket();
    temperatureDisplay = new MockTemperatureDisplay();

    weatherStation.subscribe(temperatureDisplay);
  });

  afterEach(() => {
    weatherStation.unSubscribe(temperatureDisplay.getId());
  });

  test('should update displays with real-time data', async () => {
    weatherStation.attachSocket(weatherSocket);

    expect(temperatureDisplay.display()).toBe(25);
  });
});
