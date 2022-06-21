function oneThroughTwenty() {

    let array = []
    let num = 0
    
    while (num < 20) {
        num++
        array.push(num)   


    }
    console.log(array)
    return array
    
    
}

 
 //call function oneThroughTwenty
 
 
 function evensToTwenty() {
   let array = [] 
   let num=0
 while(num<20){
     num++
     if(num%2==0){
        array.push(num)
     }
     
    
 }
 console.log(array)
    return array
   
 }
 
 //call function evensToTwenty
 
 
 function oddsToTwenty() {
    let array = [] 
 let num=0
 while(num<20){
     num++
     if(num%2!=0){
        array.push(num)
     }
     
    
 }
 console.log(array)
    return array
 }
 
 //call function oddsToTwenty

 
 
 function multiplesOfFive() {
    let array = [] 
 let num=0
 while(num<100){
     num++
     if(num%5==0){
        array.push(num)
     }
     
    
 }
 console.log(array)
    return array
 }
 
 //call function multiplesOfFive
 
 
 function squareNumbers() {
    let array = []
 let num=0
 while(num<100){
     num++
     let quadrado = num**2
     if(quadrado<=100){
        array.push(quadrado)
     }
     
    
 }
 console.log(array)
    return array
 }
 
 //call function squareNumbers
 
 
 function countingBackwards() {
    let array = []
 let num=20
 while(num>=1){
     
     
    array.push(num)
     
     num= num-1
 
     
    
 }
 console.log(array)
    return array
 }
 
 //call function countingBackwards
 
 
 function evenNumbersBackwards() {
    let array = []
 let num=20
 while(num>=1){
     
     if(num%2==0){
        array.push(num)
     }
     
     
     num= num-1
 
    
 }
 console.log(array)
    return array
 }
 
 //call function evenNumbersBackwards
 
 function oddNumbersBackwards() {
    let array = []
 let num=20
 while(num>=1){
     
     if(num%2!=0){
        array.push(num)
     }
     
     
     num= num-1
 
    
 }
 console.log(array)
    return array
 }
 
 //call function oddNumbersBackwards
 function multiplesOfFiveBackwards() {
    let array = [] 
 let num=100
 while(num>1){
     num=num-1
     if(num%5==0){
        array.push(num)
     }
     
    
 }
 console.log(array)
    return array
 }
 
 
 //call function multiplesOfFiveBackwards
 
 multiplesOfFiveBackwards()
 
 
 
 
 
 function squareNumbersBackwards() {
    let array = []
   let num=100
 while(num>=1){
     
     let quadrado = num**2
 
    if(quadrado<=100){
        array.push(quadrado)
    }
    
     
     
     
     num= num-1
 
    
 }
 console.log(array)
    return array
 }
 
 //call function squareNumbersBackwards
