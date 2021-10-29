let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    
}
//Sol1
sum=0
for(let i in salaries){
    if(salaries.hasOwnProperty(i)){
        sum+=salaries[i]
    }
}
console.log(sum)

//Sol2
var johnSalary = salaries["John"]
var annSalary = salaries["Ann"]
var peteSalary = salaries["Pete"]
let total=johnSalary+annSalary+peteSalary
console.log(total)


    