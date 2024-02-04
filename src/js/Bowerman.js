import Character from './Character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Bowerman';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
