import * as utils from '../../src/util/utils.js';

describe('utils', () => {
    describe('isFunction', () => {
        it('should return true if param is a function', () => {
            expect(utils.isFunction(parseInt)).toEqual(true);
        });

        it('should return false if param is not a function', () => {
            expect(utils.isFunction(window)).toEqual(false);
        });
    });

    describe('isUndefined', () => {
        it('should return true if param is undefined', () => {
            expect(utils.isUndefined(undefined)).toEqual(true);
        });

        it('should return false if param is not undefined', () => {
            expect(utils.isUndefined('notUndefined')).toEqual(false);
        });
    });

    describe('isDefined', () => {
        it('should return true if param is not undefined', () => {
            expect(utils.isDefined('notUndefined')).toEqual(true);
        });

        it('should return false if param is defined', () => {
            expect(utils.isDefined(undefined)).toEqual(false);
        });
    });

    describe('isObject', () => {
        it('should return true if param is an object', () => {
            expect(utils.isObject(window)).toEqual(true);
        });

        it('should return false if param is not an object', () => {
            expect(utils.isObject(parseInt)).toEqual(false);
        });
    });

    describe('isArray', () => {
        it('should return true if param passed is an array', () => {
            expect(utils.isArray([5, 6, 7])).toEqual(true);
        });

        it('should return false if param is a normal object', () => {
            expect(utils.isArray({
                foo: 'bar'
            })).toEqual(false);
        });

        it('should return false if param is a scalar value', () => {
            expect(utils.isArray(567)).toEqual(false);
        });
    });
});
