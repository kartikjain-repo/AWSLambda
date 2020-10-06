import {Responses} from '../src/utils/responses';

test('Responses is an object', () => {
    expect(typeof Responses).toBe('object');
});

test('_200 works', () => {
    const res = Responses._200({ name: 'The data has been saved' });
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json');
});

test('_400 works', () => {
    const res = Responses._400({ name: 'Bad Request' });
    expect(res.statusCode).toBe(400);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json');
});

test('_500 works', () => {
    const res = Responses._500({ name: 'Internal Server Error' });
    expect(res.statusCode).toBe(500);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json');
});

test('define response', () => {
    const res = Responses.defineResponse(204, { any: 'Random message' });
    expect(res.statusCode).toBe(204);
    expect(res.body).toBe(JSON.stringify({ any: 'Random message' }));
});