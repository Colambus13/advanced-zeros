module.exports = function getZerosCount(number, base){
    const solutionArr = countZeroes(number, base);
    let zeroCounter = solutionArr[0];

    solutionArr.forEach((item) => {
        if (item < zeroCounter){
            zeroCounter = item;
        }
    });
    return zeroCounter;
};

const gettingBasePowers = function getBasePrimePowers(numBase){
    let i = 1;
    let j = 2;
    let baseSystemNotationArray = [];

    while (j < numBase){
        if (numBase % j === 0){
            baseSystemNotationArray[i] = j;
            numBase = numBase / j;
            i++;
        }else {
            j++;
        }
    }

    baseSystemNotationArray[i] = j;
    const baseSystemNotation = {};

    baseSystemNotationArray.forEach((item) => {
        if (!baseSystemNotation[item]){
            baseSystemNotation[item] = 1;
        }else{
            baseSystemNotation[item]++;
        }
    });

    return baseSystemNotation;
};

const countZeroes = function countZeroesAllSystems(number, base){

    let iteration = number;
    let decisionArr = [];
    const baseSystemNotation = gettingBasePowers(base);

    for (let item in baseSystemNotation){
        let itemSum = 0;
        let itemAccumulator = +item;

        while (itemAccumulator <= iteration){
            itemSum += Math.floor(iteration/itemAccumulator);
            itemAccumulator *= +item;
        }

        itemSum = Math.floor(itemSum/baseSystemNotation[item]);
        decisionArr.push(itemSum);
    }
    return decisionArr;
};