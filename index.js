// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42)
}

function distanceFromHqInFeet(pickUp) {
   return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(start,destination) {
   return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare;
        if (distance <= 400) {
            fare = 0
        }
        else if (distance > 400 && distance <= 2000) {
            fare = (distance - 400) * .02
        }
        else if (distance > 2000 && distance <= 2500)
            fare = 25
        else if (distance > 2500)
            fare = "cannot travel that far"
    return fare
}