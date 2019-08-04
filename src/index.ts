import { NumbersCollection } from './helpers/NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([9, 3, 6, 10, 7, 1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
sorter.print();
