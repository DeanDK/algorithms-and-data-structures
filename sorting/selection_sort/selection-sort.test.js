import { selectionSort } from './selection-sort';

test('should return sorted array', () => {
    const array = [2,6,3,10,11,15,12];
    const result = selectionSort(array);
    expect([...result]).toMatchObject([2,3,6,10,11,12,15]);
});

test('should return sorted array 2', () => {
    const array = [98,2,35,12,128,944];
    const result = selectionSort(array);
    expect([...result]).toMatchObject([2,12,35,98,128,944]);
});