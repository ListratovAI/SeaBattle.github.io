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
//генерация кораблей
function autoPlasing(lengthOfShip,NumberOfShip) {
    let I = getRandom (0,199);
    let J = getRandom (0,199);
    let direction = getRandomBoolean();
    let bad = false;
    //функция для проверки на возможность установки в данном месте корабля
    function checkByLabel(shipLength) {
        if (direction==true && (I+(shipLength-1))<=199) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I+k][J].label==true) {
                    autoPlasing(lengthOfShip,NumberOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==true && (I+(shipLength-1))>199) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I-k][J].label==true) {
                    autoPlasing(lengthOfShip,NumberOfShip);
                    bad = true;
                    return;                  
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))<=199) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I][J+k].label==true) {
                    autoPlasing(lengthOfShip,NumberOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))>199){
            for (let k=0;k<=shipLength-1;k++){
                if (field[I][J-k].label==true) {
                    autoPlasing(lengthOfShip,NumberOfShip);
                    bad = true;
                    return;
                }

            }
        }
    } 
checkByLabel(lengthOfShip);
//функция для различных цветов кораблей
function colorShip(i,j,length) {
    if (length==4){
        field[i][j].classList.add('ship4');
    }
    else if (length==3){
        field[i][j].classList.add('ship3');
    }
    else if (length==2){
        field[i][j].classList.add('ship2');
    }
    else if (length==1){
        field[i][j].classList.add('ship1');
    }
}
if (bad==false){
    autoPlasingInt();
}
function autoPlasingInt() {
    colorShip(I,J,lengthOfShip);
    field[I][J].shipIsHere=lengthOfShip;
    intLabel(I,J);
    if (direction==true) {
        for (let i=1;i<=lengthOfShip-1;i++) {
            if ((I+(lengthOfShip-1))<=199) {
                field[I+i][J].classList.add('ship1');
                field[I+i][J].shipIsHere=lengthOfShip;
                intLabel(I+i,J);
            }
            else {
                field[I-i][J].classList.add('ship1');
                field[I-i][J].shipIsHere=lengthOfShip;
                intLabel(I-i,J);
            }
        }
    }
    else {
        for (let j=1;j<=lengthOfShip-1;j++) {
            if ((J+(lengthOfShip-1))<=199) {
                field[I][J+j].classList.add('ship1');
                field[I][J+j].shipIsHere=lengthOfShip;
                intLabel(I,J+j);
            }
            else {
                field[I][J-j].classList.add('ship1');
                field[I][J-j].shipIsHere=lengthOfShip;
                intLabel(I,J-j);
            }
        }
    }

}

}
console.time("autoplasing");
for (let z=1;z<=7100;z++){
autoPlasing(1,1);}
console.timeEnd("autoplasing");
//функция для создания метки (чтоб корабль не ставился)
function intLabel(i,j) {
field[i][j].label = true;
try {field[i+1][j].label = true;} 
catch (a) {}
try {field[i+1][j+1].label = true;} 
catch (a) {}
try {field[i+1][j-1].label = true;}
catch (a) {}
try {field[i][j+1].label = true;} 
catch (a) {}
try {field[i][j-1].label = true;}
catch (a) {}
try {field[i-1][j].label = true;}
catch (a) {}
try {field[i-1][j+1].label = true;}
catch (a) {}
try {field[i-1][j-1].label = true;}
catch (a) {}
}
