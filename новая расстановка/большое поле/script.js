//создание игрового поля

let field = [];
let containerForGame = document.querySelector(".containerForGame");

for (let i = 0; i<=199; i++) {
    field[i] = [];
}

function makeGameField(size) {
    for (let i=1; i<=size; i++) {
        makeGameField[`containerNum${i}`] = document.createElement('div');
        makeGameField[`containerNum${i}`].classList.add('string',`containerNum${i}`); 
        containerForGame.append(makeGameField[`containerNum${i}`]);
            for (let j = 0; j<=size-1;j++) {
                field[i-1][j] = document.createElement('div');
                field[i-1][j].classList.add('square',`x${i}y${j+1}`);
                field[i-1][j].label=false;
                field[i-1][j].labelShooting=false;
                field[i-1][j].shipIsHere=0;
                makeGameField[`containerNum${i}`].append(field[i-1][j]);
                }
    }
}

makeGameField(200);
//функция для генерации случайного числа
function getRandom (min,max) {
    return Math.floor(Math.random ()*(max+1-min)+min);
}
//функция для генерации случайного булева значения
function getRandomBoolean() {
    let x = getRandom(0,1);
    if (x==1) {
        return true;
    }
    else {
        return false;
    }
}
let fieldAI = [];
function fillFieldAI() {
    for(let i=0;i<39999;i++) {
        fieldAI[i] = i;
    }
}
fillFieldAI();
//генерация кораблей
function autoPlasing(lengthOfShip,NumberOfShip) {
    //let I = getRandom (0,9);
    //let J = getRandom (0,9);
    let K = fieldAI[getRandom (0,fieldAI.length-1)];
    let I = Math.floor(K/200);
    let J = K%200;
    let direction = getRandomBoolean();
   
autoPlasingInt();
function autoPlasingInt() {
    field[I][J].classList.add('ship1');
    field[I][J].shipIsHere=lengthOfShip;
    field[I][J].numberOfThisTypeShip=NumberOfShip;
    intLabel(I,J);
    if (direction==true) {
        for (let i=1;i<=lengthOfShip-1;i++) {
            if ((I+(lengthOfShip-1))<=199) {
                field[I+i][J].classList.add('ship1');
                field[I+i][J].shipIsHere=lengthOfShip;
                field[I+i][J].numberOfThisTypeShip=NumberOfShip;
                intLabel(I+i,J);
            }
            else {
                field[I-i][J].classList.add('ship1');
                field[I-i][J].shipIsHere=lengthOfShip;
                field[I-i][J].numberOfThisTypeShip=NumberOfShip;
                intLabel(I-i,J);
            }
        }
    }
    else {
        for (let j=1;j<=lengthOfShip-1;j++) {
            if ((J+(lengthOfShip-1))<=199) {
                field[I][J+j].classList.add('ship1');
                field[I][J+j].shipIsHere=lengthOfShip;
                field[I][J+j].numberOfThisTypeShip=NumberOfShip;
                intLabel(I,J+j);
            }
            else {
                field[I][J-j].classList.add('ship1');
                field[I][J-j].shipIsHere=lengthOfShip;
                field[I][J-j].numberOfThisTypeShip=NumberOfShip;
                intLabel(I,J-j);
            }
        }
    }

}

}
console.time("autoplasing");
for (let z=1;z<=7100;z++){
autoPlasing(1,1);
}
console.timeEnd("autoplasing");

//функция для создания метки (чтоб корабль не ставился)
function intLabel(i,j) {

    field[i][j].label = true;
    let a = 200*i+j;
    let b = 200*(i+1)+j;
    let c = 200*(i-1)+j;
    fieldAI.splice(fieldAI.indexOf(a),1);

try {
    if (field[i+1][j].label==false) {
    field[i+1][j].label = true;
    fieldAI.splice(fieldAI.indexOf(b),1);
    }

    
} 
catch (a) {}
try {
    if (field[i+1][j+1].label==false) {
    field[i+1][j+1].label = true;
    fieldAI.splice(fieldAI.indexOf(b+1),1);
    }

} 
catch (a) {}
try {
    if (field[i+1][j-1].label==false) {
    field[i+1][j-1].label = true;
    fieldAI.splice(fieldAI.indexOf(b-1),1);
}}
catch (a) {}
try {
    if (field[i][j+1].label==false) {
    field[i][j+1].label = true;
    fieldAI.splice(fieldAI.indexOf(a+1),1);
    }
} 
catch (a) {}
try {
    if (field[i][j-1].label==false) {
    field[i][j-1].label = true;
    fieldAI.splice(fieldAI.indexOf(a-1),1);
    }
}
catch (a) {}
try {
    if (field[i-1][j].label==false) {
    field[i-1][j].label = true;
    fieldAI.splice(fieldAI.indexOf(c),1);
    }
}
catch (a) {}
try {
    if (field[i-1][j+1].label==false) {
    field[i-1][j+1].label = true;
    fieldAI.splice(fieldAI.indexOf(c+1),1);
    }
}
catch (a) {}
try {
    if (field[i-1][j-1].label==false) {
    field[i-1][j-1].label = true;
    fieldAI.splice(fieldAI.indexOf(c-1),1);
    }
}
catch (a) {}
}
