import Zombie from '../Zombie';

describe('класс Zombie', () => {
  test('Проверка значения по умолчанию', () => {
    const zombie = new Zombie('Карл');
    expect(zombie).toEqual({
      name: 'Карл',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('Проверка имени - меньше 2 символов', () => {
    expect(() => new Zombie('A')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - больше 10 символов', () => {
    expect(() => new Zombie('СлишкомДлинноеИмя')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - не строка', () => {
    expect(() => new Zombie(123)).toThrowError('Неверное имя');
  });

  test('Проверка метода levelUp() - по умолчанию', () => {
    const zombie = new Zombie('Карл');
    zombie.levelUp();
    expect(zombie).toEqual({
      name: 'Карл',
      type: 'Zombie',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    });
  });

  test('Проверка метода levelUp() - ошибка', () => {
    expect(() => {
      const zombie = new Zombie('Карл');
      zombie.health = -10;
      zombie.levelUp();
    }).toThrowError('Нельзя повысить уровень умершего');
  });

  test('Проверка метода damage() - по умолчанию', () => {
    const zombie = new Zombie('Карл');
    zombie.damage(22);
    expect(zombie.health).toBeCloseTo(80.2);
  });

  test('Проверка метода damage() - ошибка', () => {
    expect(() => {
      const zombie = new Zombie('Карл');
      zombie.health = -1;
      zombie.damage(22);
    }).toThrowError('Персонаж мёртв');
  });
});
