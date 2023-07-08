export interface _Socket {
  disconnect();
  sendRealTimeData(callback);
}

class WeatherSocket implements _Socket {
  private interval = null;
  private ms = 1000;

  getRealTimeData() {
    const humidity = Math.trunc(Math.random() * 100);
    const temperature = Math.trunc(Math.random() * 50);

    return { humidity, temperature };
  }

  sendRealTimeData(callback) {
    this.interval = setInterval(
      () => callback(this.getRealTimeData()),
      this.ms,
    );
  }

  disconnect() {
    clearInterval(this.interval);
  }
}
