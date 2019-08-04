import { NumbersCollection, CharactersCollection } from './helpers';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([9, 3, 6, 10, 7, 1]);
const charactersCollection = new CharactersCollection('zookeeper');
// const sorter = new Sorter(numbersCollection);
const sorter = new Sorter(charactersCollection);
sorter.sort();
sorter.print();
