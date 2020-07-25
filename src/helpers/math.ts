export class Matrix{
    private _M: number;
    private _N: number;
    private _matrix: number[][]; 
    private _cashedDeterminant? : number;
    get IsSquare(){
        return this._M == this._N;
    }

    get AsArray() : ReadonlyArray<ReadonlyArray<number>>{
        return this._matrix;
    }

    constructor(matrix: number[][]){
        if(matrix.length <= 1 && matrix[0].length <= 1)
            throw "Matrix must contain 2 or more elements in rows and columns";
        this._matrix = matrix;
        this._M = matrix.length; // rows
        this._N = matrix[0].length; // columns
    }

    WithoutColumn(columnIndex){
        let newMatrix = this._matrix.map(row => row.filter((_,i) => i != columnIndex));
        return new Matrix(newMatrix);
    }

    WithoutRow(rowIndex){
        let newMatrix = this._matrix.filter((_, i) => i != rowIndex);
        return new Matrix(newMatrix);
    }

    Determinant(){
        if(this._cashedDeterminant)
            return this._cashedDeterminant;
        if(!this.IsSquare)
            throw "Matrix must be square to find determinant";   
        let m = this._matrix;
        if(this._M == 2)
            return m[0][0] * m[1][1] - m[1][0] * m[0][1];
        else{
            let determinant = 0;
            this._matrix[0].forEach((val, i) => {
                let lowerDeterminant = this.WithoutRow(0).WithoutColumn(i).Determinant(); 
                let result = lowerDeterminant * val * (i % 2 == 0? 1 : -1);
                determinant += result;
            });
            this._cashedDeterminant = determinant;
            return determinant;
        }
    }
}

export class Fns{ // Functions
    static readonly EPSILON = 1E-9;
    static Between (a : number, b : number, c : number){
        return Math.min(a,b) <= c + this.EPSILON && c <= Math.max(a,b) + this.EPSILON;
    }

    static Determinant(a:number, b: number, c: number, d: number){
        return a*b - c*d;
    }
}