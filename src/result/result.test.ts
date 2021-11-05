import { Failure, Result, Success } from './result';

describe('Result', () => {
    test('Result.fail returns Success', () => {
        const result = Result.fail(new Error('Hello world'));
        expect(result instanceof Failure).toBe(true);
    });

    test('Result.ok returns Success', () => {
        const result = Result.ok({ typescript: 'burritos' });
        expect(result instanceof Success).toBe(true);
    });

    describe('Failure', () => {
        test('Failure is instanceof Result', () => {
            const result = new Failure(new Error());
            expect(result instanceof Result).toBe(true);
        });

        test('isFailure is true', () => {
            const result = new Failure(new Error());
            expect(result.isFailure()).toBe(true);
        });

        test('isSuccess is false', () => {
            const result = new Failure(new Error());
            expect(result.isSuccess()).toBe(false);
        });
    });

    describe('Success', () => {
        test('Success is instanceof Result', () => {
            const result = new Success({ typescript: 'burritos' });
            expect(result instanceof Result).toBe(true);
        });

        test('isFailure is false', () => {
            const result = new Success(new Error());
            expect(result.isFailure()).toBe(false);
        });

        test('isSuccess is true', () => {
            const result = new Success(new Error());
            expect(result.isSuccess()).toBe(true);
        });
    });
});
