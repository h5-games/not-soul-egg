import Utils from './Utils';

class Role {
  soul: number;
  gold: number;
  wood: number;
  water: number;
  fire: number;
  earth: number;

  constructor() {
    this.init();
  }

  init() {
    const [gold, wood, water, fire, earth] = Utils.randomStep(5, 5);
    console.log([gold, wood, water, fire, earth]);
    Object.assign(this, {
      soul: Utils.random(10, 100),
      gold,
      wood,
      water,
      fire,
      earth
    });
  }
}

export default Role;
