
function distanceFromHqInBlocks( x ) {
    if (x >= 42) {
return x - 42;
} else if (x < 42) {
    return 42 - x;
}
}

function distanceFromHqInFeet(x) {
    if (x >= 42) {
        return (x - 42) * 264;
        } else if (x < 42) {
            return (42 - x) * 264;
}
}

function distanceTravelledInFeet(x, y) {
if (x >= y) {
    return (x - y) * 264;
} else if (y > x) {
    return (y - x)* 264;
}
}

function calculatesFarePrice(x, y) {
    if (x <= y) {
        if ((y - x) * 264 <= 400) {
        return 0
        } else if ((y - x) * 264 < 2000) {
            return (((y - x) * 264) - 400) * .02
        } else if ((y - x) * 264 <= 2499) {
            return 25
        } else if ((y - x) * 264 >= 2500) {
            return 'cannot travel that far'
        }
 
} else if (x > y) {
    if ((x - y) * 264 <= 400) {
        return 0
        } else if ((x - y) * 264 < 2000) {
            return (((x - y) * 264) - 400) * .02
        } else if ((x - y) * 264 <= 2499) {
            return 25
        } else if ((x - y) * 264 >= 2500) {
            return 'cannot travel that far'
        }
    }
  
}