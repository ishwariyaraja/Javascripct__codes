//=======map ===========

const price = [10,20,30,40,50];
discountvalue = 5
price.map((price)=>{
    return price - discountvalue;
      console.log(price)

})

// =========filter (true or false) mathod la print pannum=========== 

const value = [ 4, 5, 10,40,30,2];
 const fainalvalue = value.filter((value)=>{
    return value <= 10
});
console.log(fainalvalue);

const jewlley =[
     { gold: "chain", gram: "1savaran" },
    { silver: "chain", gram: "2savaran" },
    { diamond: "chain", gram: "2savaran" },
    { platinum: "chain", gram: "1savaran" },
    { withoutgold: "chain", gram: "3savaran" }
];
let gramfilter =jewlley.filter((item)=>{
    return item.gram == "2savaran";
}) 
console.log(gramfilter)

// ===========reduce method ========== //
const numbers = [1,2,3,4,5,6,7,8,9,10];
let totalsum = numbers.reduce((a,b)=>{
    return a+b;
    
},0);
console.log(totalsum)
// arry va single value va result ah kuduka reduce use panram //

//======= flatmap()=========// ithA SENTENCE spilt pannikulan //

const  sentence = ["how are man","who are man"];
let sent =sentence.flatMap((sentence => sentence.split(" ") ))
console.log(sent)
