export const utilService = {
    makeId,
    parseTimestamp,
    getRandomInteger
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomInteger(min,max) {
    return Math.round(Math.random() * (max - min) + min)
}

function parseTimestamp(timestamp) {
    const parsedTime = new Date(timestamp)
    return parsedTime.toLocaleString()
}