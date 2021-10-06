
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

setName(input)
{
    this.name=input;
}

getAge()
{
    return this.age
}
setAge(input)
{
    this.age=input
}

person()
{
    return `${this.name}, is ${this.age} years old.`
}

}

const who = new Person('John', 19);
console.log(who.person());