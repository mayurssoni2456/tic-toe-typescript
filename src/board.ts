
const size = 3;

export default class Board {
    matrix:Array<Array<string>>;

    constructor() {
        for (let i = 0; i < size; i++) {
            this.matrix.push(new Array(size).fill("_"))
        }
    }

    createRows(): string {
        let rows:string[] = [];
        for (let row of this.matrix) {
            rows.push(row.join('\t'))
        }
        return rows.join('\n')
    }
}