 //======rest paramaters function and addsum ===========//
function sum(numbers){
   let total= numbers.reduce((a,b)=> a+b,0);

    if(total%2===0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
    return total;
}
console.log(sum([1,2,3,4,5]));

// ============ use in tranary oprator =========== //

function sum( numbers){
    let result=numbers.reduce((a,b)=> a+b);
    console.log(result% 2===0 ? "even":"odd")
    return result
}
console.log(sum([1,2,3,4,5,6,8]))

//============= max and min value sum withuse reduce method ================//
 let numbers = [1,2,3,4,5]
 
let max = numbers.reduce(()=> (a,b) {
    return a > b ? "max":"min"
})
 console.log(max)

 //========= this method ============ //
// const user ={
//     nmae:"muspar",
//     normalfun: function(){
//         setTimeout(function(){
//             console.log("normal fun"+this.name)
//         },1000);
//     }
//     arrowfun: function(){
//         setTimeout(function()=>{
//             console.log("Arow Fun"+this.name)
//         },1000)
//     }
// }
//  console.log(user.arrowfun())