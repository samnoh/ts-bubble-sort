import { NumbersCollection, CharactersCollection, LinkedList } from './utils';

const charactersCollection = new CharactersCollection('zookeeper');
const numbersCollection = new NumbersCollection([9, 3, 6, 10, 7, 1]);
const linkedList = new LinkedList()
    .add(9)
    .add(3)
    .add(6)
    .add(10)
    .add(7)
    .add(1);

charactersCollection.sort().print();
numbersCollection.sort().print();
linkedList.sort().print();
