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

    getBMI():number {
        return this.weight/(this.height * this.height);
    }

    isHealthy():boolean {
        var bmi = this.getBMI();
        return bmi >= 18.5 && bmi <= 24.9;
    }
}

