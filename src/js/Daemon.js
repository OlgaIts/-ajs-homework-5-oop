import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Daemon';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
