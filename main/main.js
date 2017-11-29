module.exports = function main(distance, time) {
    var money;
    if (distance <= 2 && distance >= 0) {
        money = 6 + time * 0.25;
    }
    else if (distance <= 8) {
        money = 6 + (distance - 2) * 0.8 + time * 0.25;
    }
    else {
        money = 10.8 + (distance - 8) * 1.2 + time * 0.25;
    }


    return parseInt(money);
};