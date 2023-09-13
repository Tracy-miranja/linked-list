// we have two types in js : value type, reference type
//value type: string, numbers,bolean, symbol
//reference type: object, array, function
// cloning an object
const circle={
    radius:2,
    draw:function(){
        console.log('draw')
    }
}
//clone
// const another={}
// for(let key in circle)
// another[key]= circle[key]
const another= Object.assign({}, circle)
 console.log(another)

 //memory alocation and de-alocation done by Garbage collector
 //built in object.
 Math.abs(return absolute number)
 Math.random
 Math.max(largest number in the list)
 MessageChannel.includes('mine')
 MessageChannel.replace('fist', 'sec')

