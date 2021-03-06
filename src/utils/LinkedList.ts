import { Sorter } from './Sorter';

class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    static sortAndPrint(data: number[]): void {
        const linkedList = new LinkedList();
        data.map(num => linkedList.add(num));
        return linkedList.sort().print();
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;

        while (node.next) {
            length++;
            node = node.next;
        }

        return length;
    }

    add(data: number): this {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        node.next = newNode;

        return this;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }

        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        if (!this.head) {
            throw new Error('List is empty');
        }

        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let result = '';
        let node: Node | null = this.head;
        while (node) {
            result += node.data;
            node = node.next;
            if (node) result += ' -> ';
        }

        console.log(result);
    }
}
