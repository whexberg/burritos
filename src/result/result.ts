export abstract class Result<T, E extends Error = Error> {
    constructor(public value: T | E) {}
    public abstract isFailure: () => this is Failure<T, E>;
    public abstract isSuccess: () => this is Success<T, E>;
    public static fail = <T, E extends Error = Error>(value: E): Result<T, E> => new Failure<T, E>(value);
    public static ok = <T, E extends Error = Error>(value: T): Result<T, E> => new Success<T, E>(value);
}

export class Failure<T, E extends Error = Error> extends Result<T, E> {
    constructor(public override value: E) { super(value); }
    isFailure = (): this is Failure<T, E> => true;
    isSuccess = (): this is Success<T, E> => false;
}

export class Success<T, E extends Error = Error> extends Result<T, E> {
    constructor(public override value: T) { super(value); }
    isFailure = (): this is Failure<T, E> => false;
    isSuccess = (): this is Success<T, E> => true;
}
