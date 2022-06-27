import EventHandler from './EventHandler';
import events, { SoulEggEvents, SoulEggEvent } from './events';
import Role from './Role';

class NotSoulEgg {
  currentTime: number = 0;
  currentEvent: EventHandler;
  role: Role;
  constructor() {
    this.role = new Role();
  }
  getEvent() {
    const incl = includes => {};
    const optionalEvents = events.filter(evnet => {});
  }
  start() {
    console.log(this.role);
    this.getEvent();
  }
}

export default NotSoulEgg;
