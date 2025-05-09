type FilterCallback<U> = (value: U, indes?: number, array?: U[],) => boolean;
export function meuFilter<T>
(
  array: T[],
  callbackfn: FilterCallback<T>
): T[]{
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if( callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltadroOriginal = arra.filter((value) => value < 5);
const arrayFiltrado = meuFilter(arra, (value) =>  value < 5);

console.log(arrayFiltadroOriginal);
