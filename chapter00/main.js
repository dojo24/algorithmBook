// The Basic 13

// #1 Print 1-255
for(var i=1; i<=255; i++) {
    console.log(i)
}

// #2 Print Sum 0-255 (print each and also the sum)
sum = 0
for(var i=0; i <=255; i++) {
    sum += i
    console.log("Current Int = ", i, "Current Sum is = ", sum)
}

// #3 Find and Print Max
arr03 = [5, 7, 9, 10, 5, 70, 30, 20]
var max = null
for(var i = 0; i< arr03.length; i++) {
    var curr = arr03[i]
    console.log("curr: ", curr, "max: ", max)
    if (curr > max) {
        max = curr
    }
}
console.log("max: ", max)

// #4 Array with Odds