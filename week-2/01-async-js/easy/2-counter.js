// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let i =0;
let limit = 10;
for(var j=0;j<limit;j++){
    function solve(j){
        setTimeout(()=>{
            console.log(j);
        },1000*j)
    }
    solve(j)
}

// (Hint: setTimeout)