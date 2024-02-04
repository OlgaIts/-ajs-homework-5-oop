import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Swordsman';
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
