// text

var ts = [7,-10,13,8,4,-7.2,-12,-3.7,3.5,-9.6,6.5,-1.7,-6.2,7];


function closestToZero(ts) {
    let distance = 0
    if (ts.length === 0){
        return 0
    }
    let sorted = ts.sort((a,b) => {
        return b-a
    })
    console.log(`sorted = ${sorted}`)

    let firstNegative = 0
    let positionNegative = 0
    for(let i in sorted) {
        if(sorted[i] < 0) {
            firstNegative = sorted[i]
            positionNegative = i
            //console.log(i)
            break;
        }
        
    }
    if(Math.abs(firstNegative) === sorted[i-1]) {
        return sorted[i-1]
    } else if (Math.abs(firstNegative) > sorted[i-1]) {
        return sorted[i-1]
    } else {
        return firstNegative
    }
}
closestToZero(ts)