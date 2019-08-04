import { NumbersCollection, CharactersCollection, LinkedList } from './utils';

const charactersCollection = new CharactersCollection('zookeeper');
const numbersCollection = new NumbersCollection([9, 3, 6, 10, 7, 1]);
const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(3);
linkedList.add(6);
linkedList.add(10);
linkedList.add(7);
linkedList.add(1);

charactersCollection.sort();
numbersCollection.sort();
linkedList.sort();

charactersCollection.print();
numbersCollection.print();
linkedList.print();
