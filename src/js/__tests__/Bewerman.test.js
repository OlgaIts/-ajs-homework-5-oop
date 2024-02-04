import Bowerman from '../Bowerman';

describe('класс Bowerman', () => {
  test('Проверка значения по умолчанию', () => {
    const bowerman = new Bowerman('Леший');
    expect(bowerman).toEqual({
      name: 'Леший',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('Проверка имени - меньше 2 символов', () => {
    expect(() => new Bowerman('A')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - больше 10 символов', () => {
    expect(() => new Bowerman('СлишкомДлинноеИмя')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - не строка', () => {
    expect(() => new Bowerman(123)).toThrowError('Неверное имя');
  });

  test('Проверка метода levelUp() - по умолчанию', () => {
    const bowerman = new Bowerman('Леший');
    bowerman.levelUp();
    expect(bowerman).toEqual({
      name: 'Леший',
      type: 'Bowerman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    });
  });

  test('Проверка метода levelUp() - ошибка', () => {
    expect(() => {
      const bowerman = new Bowerman('Леший');
      bowerman.health = -10;
      bowerman.levelUp();
    }).toThrowError('Нельзя повысить уровень умершего');
  });

  test('Проверка метода damage() - по умолчанию', () => {
    const bowerman = new Bowerman('Леший');
    bowerman.damage(12);
    expect(bowerman.health).toBe(91);
  });

  test('Проверка метода damage() - ошибка', () => {
    expect(() => {
      const bowerman = new Bowerman('Леший');
      bowerman.health = -1;
      bowerman.damage(12);
    }).toThrowError('Персонаж мёртв');
  });
});
