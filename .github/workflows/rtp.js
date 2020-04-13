const currentJackpotAmount = 50000000;


let getCoinWinOfBall = function(dragonBallTypeUserWinned)
{
    const listCoin = [0, 30000,	60000,	150000,	500000,	2000000, 10000000, currentJackpotAmount]; 
    let coinWin = listCoin[dragonBallTypeUserWinned];
    return coinWin;
}

/*

let randomWinDragonBall = function(dragonBallTypeUserWinned, bulletMultiple) {
    if(dragonBallTypeUserWinned >= 7)
      return 7;
    const per = 0.01;
    const listRateByDragonBallType = [
      [0.6452* per,    0.3226* per,   0.1075* per,   0.0269* per,   0.0054* per,  0.0009* per,  0.00020000* per                  ,   0 ], //0
      [2          ,    0.7743* per,   0.1667* per,   0.0368* per,   0.0074* per,  0.0013* per,  0.00020012* per                  ,   0 ], // 1
      [2          ,    2          ,   0.2868* per,   0.0525* per,   0.0105* per,  0.0019* per,  0.00020024* per                  ,   0 ], // 2
      [2          ,    2          ,   2          ,   0.0906* per,   0.0157* per,  0.0028* per,  0.00020060* per                  ,   0 ], // 3
      [2          ,    2          ,   2          ,   2          ,   0.0299* per,  0.0045* per,  0.00020202* per                  ,   0 ], // 4
      [2          ,    2          ,   2          ,   2          ,   2          ,  0.0110* per,  0.00020833* per                  ,   0 ], // 5
      [2          ,    2          ,   2          ,   2          ,   2          ,  2          ,  0.00196000* per                  ,   0 ], // 6
    ];

    const rangeRandom = listRateByDragonBallType[dragonBallTypeUserWinned];
    const numRandom = Math.random();

    let indexRangeRadom = -1;
    for (let i = 0; i < rangeRandom.length - 1; i++) {
      const minNum = rangeRandom[i + 1];
      const maxNum = rangeRandom[i + 1] + rangeRandom[i];
      if(numRandom > minNum && numRandom < maxNum)
        indexRangeRadom = i;
    }

    return  indexRangeRadom + 1;
};

*/



let randomWinDragonBall = function(dragonBallTypeUserWinned, bulletMultiple) {
    if(dragonBallTypeUserWinned >= 7)
      return 7;
    const per = 0.01;

    const fac = bulletMultiple/1000;
    const listRateByDragonBallType = [
        [0.6452* per * fac,   0.3226* per * fac,   0.1075* per * fac,   0.0269* per * fac,   0.0054* per * fac,  0.0009* per * fac,  0.00020000* per * fac                  ,   0 ], //0
        [2               ,    0.7743* per * fac,   0.1667* per * fac,   0.0368* per * fac,   0.0074* per * fac,  0.0013* per * fac,  0.00020012* per * fac                  ,   0 ], // 1
        [2               ,    2                ,   0.2868* per * fac,   0.0525* per * fac,   0.0105* per * fac,  0.0019* per * fac,  0.00020024* per * fac                  ,   0 ], // 2
        [2               ,    2                ,   2                ,   0.0906* per * fac,   0.0157* per * fac,  0.0028* per * fac,  0.00020060* per * fac                  ,   0 ], // 3
        [2               ,    2                ,   2                ,   2                ,   0.0299* per * fac,  0.0045* per * fac,  0.00020202* per * fac                  ,   0 ], // 4
        [2               ,    2                ,   2                ,   2                ,   2                ,  0.0110* per * fac,  0.00020833* per * fac                  ,   0 ], // 5
        [2               ,    2                ,   2                ,   2                ,   2                ,  2                ,  0.0024500* per * fac                  ,   0 ], // 6
      ];
    

    const rangeRandom = listRateByDragonBallType[dragonBallTypeUserWinned];
    const numRandom = Math.random();

    for (let i = rangeRandom.length - 2; i > -1; i--) {
        let currentAnchor = rangeRandom[i];
        let sumValueBefore = 0;
        for (let j = i + 1; j < rangeRandom.length - 1; j++) {
            sumValueBefore += rangeRandom[j];
        }

        const minNum = sumValueBefore;
        const maxNum = sumValueBefore + currentAnchor;
        if(numRandom > minNum && numRandom <= maxNum)
        {
            return i + 1;
        }
    }

    return 0;
};

/*

let listBall = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];


for (let curBallType = 0; curBallType < 7; curBallType++) {
    for (let i = 0; i < 10000000; i++) {
        let newBallType = randomWinDragonBall(curBallType, 1000);
        listBall[curBallType][newBallType]++;
    }
}


console.log("listBall ", listBall);*/

const MAX_USER = 20000000;
const MAX_BULLET = 10;

let listRateBall = [0,0,0,0,0,0,0,0];
let listBullletCount = [];
for (let i = 0; i < MAX_BULLET; i++) {
    listBullletCount.push(0);
}

let listSumBetEeachUser = [];
for (let i = 0; i < MAX_USER; i++) {
    listSumBetEeachUser.push(0);
}

let sumCoinAllUser = 0;


let listBulletValue = [1000, 3000, 5000, 7000, 10000,  20000, 30000];
for (let sttUser = 0; sttUser < MAX_USER; sttUser++) {
    let curBallType = 0;
    for (let numShot = 0; numShot < MAX_BULLET; numShot++) {
        
        let indexBullet = Math.round(Math.random()*listBulletValue.length);
        indexBullet = indexBullet >= listBulletValue.length ? listBulletValue.length - 1 : indexBullet;
        const valueBullet = listBulletValue[indexBullet];
        sumCoinAllUser += valueBullet;
        curBallType = randomWinDragonBall(curBallType, valueBullet);
        if(curBallType == 7)
        {
            listBullletCount[numShot]++;
            break;
        }
    }
    listRateBall[curBallType]++;
}

console.log("listRateBall ", listRateBall);
console.log("SUM GOLD ", sumCoinAllUser);
// console.log("listBullletCount ",listBullletCount);
for (let i = 0; i < listBullletCount.length; i++) {
    const bulletCount = listBullletCount[i];
    if(bulletCount > 0)
    {
        console.log( " soviendan " + (i + 1) + " ----> solantrung " + bulletCount);
    }
    
}
