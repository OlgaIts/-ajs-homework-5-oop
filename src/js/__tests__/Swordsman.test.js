import Swordsman from '../Swordsman';

describe('класс Swordsman', () => {
  test('Проверка значения по умолчанию', () => {
    const swordsman = new Swordsman('Финист');
    expect(swordsman).toEqual({
      name: 'Финист',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('Проверка имени - меньше 2 символов', () => {
    expect(() => new Swordsman('A')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - больше 10 символов', () => {
    expect(() => new Swordsman('СлишкомДлинноеИмя')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - не строка', () => {
    expect(() => new Swordsman(123)).toThrowError('Неверное имя');
  });

  test('Проверка метода levelUp() - по умолчанию', () => {
    const swordsman = new Swordsman('Финист');
    swordsman.levelUp();
    expect(swordsman).toEqual({
      name: 'Финист',
      type: 'Swordsman',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    });
  });

  test('Проверка метода levelUp() - ошибка', () => {
    expect(() => {
      const swordsman = new Swordsman('Финист');
      swordsman.health = -10;
      swordsman.levelUp();
    }).toThrowError('Нельзя повысить уровень умершего');
  });

  test('Проверка метода damage() - по умолчанию', () => {
    const swordsman = new Swordsman('Финист');
    swordsman.damage(15);
    expect(swordsman.health).toBeCloseTo(86.5);
  });

  test('Проверка метода damage() - ошибка', () => {
    expect(() => {
      const swordsman = new Swordsman('Финист');
      swordsman.health = -1;
      swordsman.damage(15);
    }).toThrowError('Персонаж мёртв');
  });
});
