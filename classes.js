
console.log('='.repeat(50)+' Task 1');
class Person
{   

    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }

getName()
{
    return this.name;
}



getAge()
{
    return this.age
}


person()
{
    return `${this.name}, is ${this.age} years old.`
}

}

const who = new Person('John', 19);
console.log(who.person());

console.log('='.repeat(50)+' Task 2');

class Volume
{
    constructor(radius, height)
    {
        this.r=radius;
        this.h=height;
    }

    getRadius()
    {
        return this.r
    }
    getHeight()
    {
        return this.h
    }
    
    ourVolume()
    {
        return Math.round(Math.PI * this.r*this.r*this.h);
    }
}
const howMuchCylinder= new Volume(5,5);
console.log(howMuchCylinder.ourVolume());
