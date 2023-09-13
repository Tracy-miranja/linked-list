//object oriented style of programming.(OOP)- we see a program as a collection of object that talk to each other to perform a task.
//object literal syntax. purpose of object is to group related objects.
//value of a value key pair can be anything in javascript

const circle = {
    radius: 1,
    location:{
        p:20,
        h:10
    },
    isRectangle: true,
    draw: function(){
      console.log('draw')
    }

}

circle.draw()//method

//FACTORY FUNCTION
//camel notation for naming: oneTwoThree
function createCircle(radius){
  return{
  radius:radius,
  draw(){
    console.log('draw');
  }
}
}
const circle1= createCircle(10)
console.log(circle1)

//constructor functions
//We use pascal notation for naming: OneTwoThree
function Circle(){
  //this- refereence to the object thatis executing this piece of code
  this.radius= radius,
  this.draw= function(){
    console.log('draw')
  }
}

const circle3= new Circle(1)
console.log(circle3)
//Dynamic nature of partners

