import Magician from '../Magician';

describe('класс Magician', () => {
  test('Проверка значения по умолчанию', () => {
    const magician = new Magician('Мерлин');
    expect(magician).toEqual({
      name: 'Мерлин',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('Проверка имени - меньше 2 символов', () => {
    expect(() => new Magician('A')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - больше 10 символов', () => {
    expect(() => new Magician('СлишкомДлинноеИмя')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - не строка', () => {
    expect(() => new Magician(123)).toThrowError('Неверное имя');
  });

  test('Проверка метода levelUp() - по умолчанию', () => {
    const magician = new Magician('Мерлин');
    magician.levelUp();
    expect(magician).toEqual({
      name: 'Мерлин',
      type: 'Magician',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    });
  });

  test('Проверка метода levelUp() - ошибка', () => {
    expect(() => {
      const magician = new Magician('Мерлин');
      magician.health = -10;
      magician.levelUp();
    }).toThrowError('Нельзя повысить уровень умершего');
  });

  test('Проверка метода damage() - по умолчанию', () => {
    const magician = new Magician('Мерлин');
    magician.damage(18);
    expect(magician.health).toBeCloseTo(89.2);
  });

  test('Проверка метода damage() - ошибка', () => {
    expect(() => {
      const magician = new Magician('Мерлин');
      magician.health = -1;
      magician.damage(18);
    }).toThrowError('Персонаж мёртв');
  });
});
