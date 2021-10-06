
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
        return (Math.PI * this.r*this.r*this.h).toFixed(4);
    }
}
const howMuchCylinder= new Volume(5,5);
console.log(howMuchCylinder.ourVolume());

console.log('='.repeat(50)+' Task 3');

class Tv
{
    constructor(brand, channel = 1, volume = 50)
    {
        this.brand=brand;
        this.channel=channel;
        this.volume=volume;
    }

    getBrand()
    {
        return this.brand;
    }

    getChannel()
    {
        return this.channel;
    }

    getVolume()
    {
        return this.volume;
    }

    setVolume(input)
    {   if(input > 100)
        {
          return this.volume = 100;
        }
        if(input < 0)
        {
            return this.volume = 0;
        }
        
            return this.volume = input; 
        
        
    }
    setChannel(min,max)
    {   
        
            min = Math.ceil(min);
            max = Math.floor(max);
            this.channel= Math.floor(Math.random() * (max - min)) + min;
          
          
    }

    reset()
    {
        this.volume=50;
        this.channel=1;
        
    }

    status()
    {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    }
}

const myTv= new Tv('Panasonic', 8, 75);

console.log('First output: ',myTv.status());

myTv.setVolume(-25);
console.log('After setVolume: ',myTv.status());

myTv.setChannel(1,50);
console.log('After randomly channel: ',myTv.status());

myTv.reset();
console.log('After reset: ',myTv.status());
