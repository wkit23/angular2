/*
    Sample user class. 
    Remember the export
*/
export class User {
    name: string;
    age: number;
    weight: number;
    height: number;

    isOld():boolean {
        return (this.age >= 100);
    }
}

