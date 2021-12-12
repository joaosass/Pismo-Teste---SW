import getMovies from "../getMovies";

describe('testing getMovies util', () => {
  test('getting all movies', async () => {
    let result = await getMovies();

    expect(result).not.toBe(false);
    expect(typeof (result)).toBe('object');
    expect(result.length).toBe(6);
  });

  test('getting one movie', async () => {
    let result = await getMovies('1');

    expect(result).not.toBe(false);
    expect(typeof (result)).toBe('object');
    expect(result.episode_id).toBe(4);
  });

  test('getting inexisting movie', async () => {
    let result = await getMovies('abc');

    expect(result).toBe(false);
  });

  test('getting movie with boolean param', async () => {
    let result = await getMovies(true);

    expect(result).toBe(false);
  });

  test('getting movie with array param', async () => {
    let result = await getMovies([1, 2, 3]);

    expect(result).toBe(false);
  });
});