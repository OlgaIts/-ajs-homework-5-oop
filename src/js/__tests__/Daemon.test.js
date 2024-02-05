import Daemon from '../Daemon';

describe('класс Daemon', () => {
  test('Проверка значения по умолчанию', () => {
    const daemon = new Daemon('Страшный');
    expect(daemon).toEqual({
      name: 'Страшный',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('Проверка имени - меньше 2 символов', () => {
    expect(() => new Daemon('A')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - больше 10 символов', () => {
    expect(() => new Daemon('СлишкомДлинноеИмя')).toThrowError('Минимальное кол-во символов 2, максимальное 10');
  });

  test('Проверка имени - не строка', () => {
    expect(() => new Daemon(123)).toThrowError('Неверное имя');
  });

  test('Проверка типа - по умолчанию', () => {
    const daemon = new Daemon('Страшный', 'Daemon');
    expect(daemon.type).toBe('Daemon');
  });

  test('Проверка типа - ошибка', () => {
    expect(() => new Daemon('Леший', 123)).toThrowError('Неверный тип');
  });

  test('Проверка метода levelUp() - по умолчанию', () => {
    const daemon = new Daemon('Страшный');
    daemon.levelUp();
    expect(daemon).toEqual({
      name: 'Страшный',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    });
  });

  test('Проверка метода levelUp() - ошибка', () => {
    expect(() => {
      const daemon = new Daemon('Страшный');
      daemon.health = -10;
      daemon.levelUp();
    }).toThrowError('Нельзя повысить уровень умершего');
  });

  test('Проверка метода damage() - по умолчанию', () => {
    const daemon = new Daemon('Страшный');
    daemon.damage(30);
    expect(daemon.health).toBe(82);
  });

  test('Проверка метода damage() - ошибка', () => {
    expect(() => {
      const daemon = new Daemon('Страшный');
      daemon.health = -1;
      daemon.damage(30);
    }).toThrowError('Персонаж мёртв');
  });
});
