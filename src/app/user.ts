/*
    Sample user class. 
    Remember the export
*/
export class User {
    name: string;
    password: string;
    age: number;
    weight: number;
    height: number;

    constructor(name:string, age:number, password:string, height:number, weight:number) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.height = height;
        this.weight = weight;
    }

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

