import Undead from '../Undead';

describe('класс Undead', () => {
  test('Проверка значения по умолчанию', () => {
    const undead = new Undead('Тихоходка');
    expect(undead).toEqual({
      name: 'Тихоходка',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('Проверка имени - меньше 2 символов', () => {
    expect(() => new Undead('A')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - больше 10 символов', () => {
    expect(() => new Undead('СлишкомДлинноеИмя')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - не строка', () => {
    expect(() => new Undead(123)).toThrowError('Неверное имя');
  });

  test('Проверка типа - по умолчанию', () => {
    const undead = new Undead('Тихоходка');
    expect(undead.type).toBe('Undead');
  });

  test('Проверка типа - с указанием типа', () => {
    const undead = new Undead('Тихоходка', 'Undead');
    expect(undead.type).toBe('Undead');
  });

  test('Проверка типа - ошибка', () => {
    expect(() => new Undead('Тихоходка', 'Dragon')).toThrowError('Неверный тип');
  });

  test('Проверка метода levelUp() - по умолчанию', () => {
    const undead = new Undead('Тихоходка');
    undead.levelUp();
    expect(undead).toEqual({
      name: 'Тихоходка',
      type: 'Undead',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    });
  });

  test('Проверка метода levelUp() - ошибка', () => {
    expect(() => {
      const undead = new Undead('Тихоходка');
      undead.health = -10;
      undead.levelUp();
    }).toThrowError('Нельзя повысить уровень умершего');
  });

  test('Проверка метода damage() - по умолчанию', () => {
    const undead = new Undead('Тихоходка');
    undead.damage(25);
    expect(undead.health).toBeCloseTo(81.25);
  });

  test('Проверка метода damage() - ошибка', () => {
    expect(() => {
      const undead = new Undead('Тихоходка');
      undead.health = -1;
      undead.damage(25);
    }).toThrowError('Персонаж мёртв');
  });
});
