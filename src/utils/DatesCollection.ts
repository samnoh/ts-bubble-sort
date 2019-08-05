import { Sorter } from './Sorter';

export class DatesCollection extends Sorter {
    static sortAndPrint(data: Date[]): void {
        return new DatesCollection(data).sort().print();
    }

    constructor(public data: Date[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].getTime() > this.data[rightIndex].getTime();
    }

    swap(leftIndex: number, rightIndex: number): void {
        [this.data[leftIndex], this.data[rightIndex]] = [
            this.data[rightIndex],
            this.data[leftIndex]
        ]; // swap
    }

    print(): void {
        console.log(this.data);
    }
}
