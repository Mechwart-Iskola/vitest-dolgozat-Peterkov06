import { it, describe, expect } from "vitest";
import { countVowels, factorial, findCommonObjects, findLongestWord, isSubset } from "./functions";

describe('testing factorial function', () => 
{
    it('positive integers', () =>
    {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
    });
    it('zero', () => 
    {
        expect(factorial(0)).toBe(1);
    });
    it('negative numbers', () => 
    {
        expect(() =>factorial(-3)).toThrow('Factorial is not defined for negative numbers');
    });
});

describe('testing findLongestWord function', () => 
{
    it('normal sentence', () => 
    {
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe('quick');
    });
    it('one word sentence', () => 
    {
        expect(findLongestWord("Hello")).toBe('Hello');
    });
    it('empty sentence', () => 
    {
        expect(findLongestWord("")).toBe('');
    });
    it('extra space sentence', () => 
    {
        expect(findLongestWord(" A quick test ")).toBe('quick');
    });
});

describe('testing countVowels function', () =>
{
    it('normal text', () =>
    {
        expect(countVowels('Hello World')).toBe(3);
    });
    it('only non-vowels', () =>
    {
        expect(countVowels('bcdfg')).toBe(0);
    });
    it('mixed upper and lowercase vowels', () =>
    {
        expect(countVowels('AeIoU')).toBe(5);
    });
    it('empty string', () =>
    {
        expect(countVowels('')).toBe(0);
    });
});

describe('testing isSubset function', () =>
{
    it('subset', () =>
    {
        const obj1 = { a: 1 };
        const obj2 = { a: 1, b: 2 };
        expect(isSubset(obj1, obj2)).toBe(true);
    });
    it('not subset', () =>
    {
        const obj1 = { a: 3 };
        const obj2 = { a: 1, b: 2 };
        expect(isSubset(obj1, obj2)).toBe(false);
    });
});

describe('testing findCommonObjects function', () =>
{
    it('there are shared objects', () => 
    {
        const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]; 
        const arr2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
        const obj = [{ id: 2, name: 'Bob' }];
        expect(findCommonObjects(arr1, arr2)).toEqual(obj);
    });
    it('there are no shared objects', () => 
    {
        const arr1 = [{ id: 1, name: 'Alice' }]; 
        const arr2 = [{ id: 3, name: 'Charlie' }];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });
    it('empty arrays', () => 
    {
        expect(findCommonObjects([], [])).toEqual([]);
    });
    it('one array is empty', () => 
    {
        const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]; 
        expect(findCommonObjects(arr1, [])).toEqual([]);
    });
});