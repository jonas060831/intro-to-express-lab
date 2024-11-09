const randomNumberGenerator = (min, max) => {
    //i want to get a random number including min and max
    return Math.floor((Math.random() * (max + 1) + min) + min)
}

module.exports = randomNumberGenerator