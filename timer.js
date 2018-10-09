var timer = 3000;
var currTime = 0;
var waitInterval = 10;


var percentWaited = 0;
function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(` waiting ... ${p}%`);
}

var interval = setInterval(function () {
    currTime += waitInterval;
    percentWaited = Math.floor(currTime / timer * 100);
    writeWaitingPercent(percentWaited);
    //console.log(`Waiting ${currTime / 1000} seconds....`);
}, waitInterval);

setTimeout(function () {

    clearInterval(interval);
    console.log('\n done');

}, timer);

process.stdout.write('\n\n');
writeWaitingPercent(percentWaited);