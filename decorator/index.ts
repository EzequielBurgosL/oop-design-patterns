interface Ticket {
  checkin(): TicketDTO;
}

type TicketDTO = {
  code: string;
  origin: string;
  destination: string;
  date: string;
  extras: Extra[];
};

class ConcreteTicket implements Ticket {
  public checkin(): TicketDTO {
    return {
      code: '123',
      origin: 'Bogota',
      destination: 'Medellin',
      date: '2021-10-10',
      extras: [],
    };
  }
}

class Extra implements Ticket {
  protected Ticket: Ticket;

  constructor(Ticket: Ticket) {
    this.Ticket = Ticket;
  }

  public checkin(): TicketDTO {
    return this.Ticket.checkin();
  }
}

class LuggageExtra extends Extra {
  constructor(Ticket: Ticket, private luggage: string) {
    super(Ticket);
  }

  public checkin(): TicketDTO {
    const baseTicket = super.checkin();
    baseTicket.extras.push(this);
    return baseTicket;
  }
}

class ConcreteDecoratorB extends Extra {
  public checkin(): TicketDTO {
    return super.checkin();
  }
}

let simple = new ConcreteTicket();
simple = new LuggageExtra(simple, '1-luggage-bag');
simple = new ConcreteDecoratorB(simple);
