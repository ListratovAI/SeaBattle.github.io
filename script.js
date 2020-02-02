//создание игрового поля

let field = [[],[],[],[],[],[],[],[],[],[]];
let userField = [[],[],[],[],[],[],[],[],[],[]];
let containerForGame = document.querySelector(".containerForGame");

function makeGameField(size) {
    for (let i=1; i<=size; i++) {
        makeGameField[`containerNum${i}`] = document.createElement('div');
        makeGameField[`containerNum${i}`].classList.add('string',`containerNum${i}`); 
        containerForGame.append(makeGameField[`containerNum${i}`]);
            for (let j = 0; j<=size-1;j++) {
                field[i-1][j] = document.createElement('div');
                field[i-1][j].classList.add('square',`x${i}y${j+1}`);
                field[i-1][j].label=false;
                field[i-1][j].shipIsHere=0;
                makeGameField[`containerNum${i}`].append(field[i-1][j]);
                }
    }
}

makeGameField(10);
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
function autoPlasing(lengthOfShip) {
    let I = getRandom (0,9);
    let J = getRandom (0,9);
    let direction = getRandomBoolean();
    let bad = false;
    //функция для проверки на возможность установки в данном месте корабля
    function checkByLabel(shipLength) {
        if (direction==true && (I+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I+k][J].label==true) {
                    autoPlasing(lengthOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==true && (I+(shipLength-1))>9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I-k][J].label==true) {
                    autoPlasing(lengthOfShip);
                    bad = true;
                    return;                  
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I][J+k].label==true) {
                    autoPlasing(lengthOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))>9){
            for (let k=0;k<=shipLength-1;k++){
                if (field[I][J-k].label==true) {
                    autoPlasing(lengthOfShip);
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
    field[I][J].shipIsHere=true;
    intLabel(I,J);
    if (direction==true) {
        for (let i=1;i<=lengthOfShip-1;i++) {
            if ((I+(lengthOfShip-1))<=9) {
                colorShip((I+i),J,lengthOfShip);
                field[I+i][J].shipIsHere=lengthOfShip;
                intLabel(I+i,J);
            }
            else {
                colorShip((I-i),J,lengthOfShip);
                field[I-i][J].shipIsHere=lengthOfShip;
                intLabel(I-i,J);
            }
        }
    }
    else {
        for (let j=1;j<=lengthOfShip-1;j++) {
            if ((J+(lengthOfShip-1))<=9) {
                colorShip(I,(J+j),lengthOfShip);
                field[I][J+j].shipIsHere=lengthOfShip;
                intLabel(I,J+j);
            }
            else {
                colorShip(I,(J-j),lengthOfShip);
                field[I][J-j].shipIsHere=lengthOfShip;
                intLabel(I,J-j);
            }
        }
    }
}
}
autoPlasing(4); 
autoPlasing(3); 
autoPlasing(3); 
autoPlasing(2); 
autoPlasing(2); 
autoPlasing(2); 
autoPlasing(1); 
autoPlasing(1); 
autoPlasing(1); 
autoPlasing(1);
//функция для создания метки (чтоб корабль не ставился)
function intLabel(i,j) {
field[i][j].label = true;
try {field[i+1][j].label = true;} 
catch (a) {console.log ("не поставилось");}
try {field[i+1][j+1].label = true;} 
catch (a) {console.log ("не поставилось");}
try {field[i+1][j-1].label = true;}
catch (a) {console.log ("не поставилось");}
try {field[i][j+1].label = true;} 
catch (a) {console.log ("не поставилось");}
try {field[i][j-1].label = true;}
catch (a) {console.log ("не поставилось");}
try {field[i-1][j].label = true;}
catch (a) {console.log ("не поставилось");}
try {field[i-1][j+1].label = true;}
catch (a) {console.log ("не поставилось");}
try {field[i-1][j-1].label = true;}
catch (a) {console.log ("не поставилось");}
}

function intLabelUser(i,j) {
    userField[i][j].label = true;
    try {userField[i+1][j].label = true;} 
    catch (a) {console.log ("не поставилось");}
    try {userField[i+1][j+1].label = true;} 
    catch (a) {console.log ("не поставилось");}
    try {userField[i+1][j-1].label = true;}
    catch (a) {console.log ("не поставилось");}
    try {userField[i][j+1].label = true;} 
    catch (a) {console.log ("не поставилось");}
    try {userField[i][j-1].label = true;}
    catch (a) {console.log ("не поставилось");}
    try {userField[i-1][j].label = true;}
    catch (a) {console.log ("не поставилось");}
    try {userField[i-1][j+1].label = true;}
    catch (a) {console.log ("не поставилось");}
    try {userField[i-1][j-1].label = true;}
    catch (a) {console.log ("не поставилось");}
    }


//Создаём поле пользователя
let containerForUserField = document.querySelector(".containerForUserField");
function makeGameUserField(size) {
    for (let i=1; i<=size; i++) {
        makeGameUserField[`containerNum${i}`] = document.createElement('div');
        makeGameUserField[`containerNum${i}`].classList.add('string',`containerNum${i}`); 
        containerForUserField.append(makeGameUserField[`containerNum${i}`]);
            for (let j = 0; j<=size-1;j++) {
                userField[i-1][j] = document.createElement('div');
                userField[i-1][j].classList.add('square',`x${i}y${j+1}`);
                userField[i-1][j].label=false;
                userField[i-1][j].shipIsHere=false;
                makeGameUserField[`containerNum${i}`].append(userField[i-1][j]);
                }
    }
}
makeGameUserField(10);

//код для ручной расстановки кораблей

let buttonShip4 = document.createElement('button');
buttonShip4.classList.add('buttonShip4');
containerForUserField.appendChild (buttonShip4);

let buttonShip3 = document.createElement('button');
buttonShip3.classList.add('buttonShip3');
containerForUserField.appendChild (buttonShip3);

let buttonShip2 = document.createElement('button');
buttonShip2.classList.add('buttonShip2');
containerForUserField.appendChild (buttonShip2);

let buttonShip1 = document.createElement('button');
buttonShip1.classList.add('buttonShip1');
containerForUserField.appendChild (buttonShip1);

let i1;
let j1;
let desk;
let counter3=2;
let counter2=3;
let counter1=4;
let userDirection = false;
let userBad = false;
let xAttackAI;
let yAttackAI;
let counterShips=10;
let addEventListenerForAIField = false;


//меняем направление корабля по пробелу
document.addEventListener('keydown', function (event) {
    if (event.code == 'Space' && userDirection == false && desk>=1 && desk<=4) {
        userDirection=true;
        cleanColor();
    }
    else if (event.code == 'Space' && userDirection == true && desk>=1 && desk<=4) {
        userDirection=false;
        cleanColor();
    } 
});

//подчищаем поле от теней кораблей при повороте на пробел
function cleanColor() {
    for (let i=0;i<=9;i++){
        for (let j=0;j<=9;j++) {
            userField[i][j].classList.remove(`mouseOver${desk}`);
            userField[i][j].classList.remove(`mouseOverBad${desk}`);
        }
    }
}

//общая функция для расстановки кораблей
function addShips() {
    userBad=false;

if (userDirection==true) {
    for (let i=0;i<desk;i++) {
        if ((i1+desk-1)<=9 && userField[i1+i][j1].label==true) {
            userBad=true;
        }
        else if ((i1+desk-1)>9 && userField[i1-i][j1].label==true) {
            userBad=true;
        }
    }
}
else {
    for (let j=0;j<desk;j++) {
        if ((j1+desk-1)<=9 && userField[i1][j1+j].label==true) {
            userBad=true;
        }
        else if ((j1+desk-1)>9 && userField[i1][j1+j].label==true) {
            userBad=true;
        }
    }
}


if (userBad==false){
    addShipsInt();
}


function addShipsInt() {
//проверка на количество установленных кораблей данного типа
        if (desk==4){
            buttonShip4.removeEventListener('click', addShip4 );
        }
        else if (desk==3 && counter3==1){
            buttonShip3.removeEventListener('click', addShip3 );
        }
        else if (desk==3 && counter3!=1){
            counter3--;
        }
        else if (desk==2 && counter2==1){
            buttonShip2.removeEventListener('click', addShip2 );
        }
        else if (desk==2 && counter2!=1){
            counter2--;
        }
        else if (desk==1 && counter1==1){
            buttonShip1.removeEventListener('click', addShip1 );
        }
        else if (desk==1 && counter1!=1){
            counter1--;
        }
//установка кораблей
    if (userDirection==true){
        for (let i=0;i<desk;i++){
            if ((i1+desk-1)<=9) {
                userField[i1+i][j1].classList.remove(`mouseOver${desk}`);
                userField[i1+i][j1].classList.add(`userShip${desk}`);
                userField[i1+i][j1].shipIsHere=true;
                intLabelUser(i1+i,j1);
            } else {
                userField[i1-i][j1].classList.remove(`mouseOver${desk}`);
                userField[i1-i][j1].classList.add(`userShip${desk}`);
                userField[i1-i][j1].shipIsHere=true;
                intLabelUser(i1-i,j1);
            }
        }
    }
    else {
        for (let j=0;j<desk;j++){
            if ((j1+desk-1)<=9) {
                userField[i1][j1+j].classList.remove(`mouseOver${desk}`);
                userField[i1][j1+j].classList.add(`userShip${desk}`);
                userField[i1][j1+j].shipIsHere=true;
                intLabelUser(i1,j1+j);
            } else {
                userField[i1][j1-j].classList.remove(`mouseOver${desk}`);
                userField[i1][j1-j].classList.add(`userShip${desk}`);
                userField[i1][j1-j].shipIsHere=true;
                intLabelUser(i1,j1-j);
            }
        }
    }

    //удаление всех EventListenerов
        for (let k=0;k<=9;k++) {
                for (let q = 0; q <= 9; q++) {
                    userField[k][q].removeEventListener("mouseover",mouseIn);
                    userField[k][q].removeEventListener("mouseout",mouseOut);
                    userField[k][q].removeEventListener('click', addShips);
                }
            } 
            counterShips--;
    if (counterShips==0) {AttackAI();}
}

}

// информация о количестве палуб и ссылка на функцию расстановки кораблей
function addShip4 () {
    desk = 4;
    buttonShip4.classList.add('selectedButtonShip4');
    addShipInt();
}
function addShip3 () {
    desk=3;
    buttonShip3.classList.add('selectedButtonShip3');
    addShipInt();
}
function addShip2 () {
    desk=2;
    buttonShip2.classList.add('selectedButtonShip2');
    addShipInt();
}
function addShip1 () {
    desk=1;
    buttonShip1.classList.add('selectedButtonShip1');
    addShipInt();
}
//все eventlistenerы
function addShipInt() {
    for (let i=0;i<=9;i++) {
        for (let j=0;j<=9;j++) {
            userField[i][j].addEventListener("mouseover", function () {
                i1=i;
                j1=j;
            });
            userField[i][j].addEventListener("mouseover",mouseIn);
            userField[i][j].addEventListener("mouseout", function () {
                i1=i;
                j1=j;
            });
            userField[i][j].addEventListener("mouseout",mouseOut); 
            userField[i][j].addEventListener("click", function () {
                i1=i;
                j1=j;
            });
            userField[i][j].addEventListener("click",addShips);
    }
}
}

//добавление тени корабля при наводе мышки
function mouseIn() {
if (userDirection==true){
    for (let i=0;i<desk;i++){
        if ((i1+desk-1)<=9 && userField[i1+i][j1].label==false) {
            userField[i1+i][j1].classList.add(`mouseOver${desk}`);
        } 
        else if ((i1+desk-1)>9 && userField[i1-i][j1].label==false) {
            userField[i1-i][j1].classList.add(`mouseOver${desk}`);
        }
        else if ((i1+desk-1)<=9 && userField[i1+i][j1].label==true) {
            userField[i1+i][j1].classList.add(`mouseOverBad${desk}`);
        } 
        else if ((i1+desk-1)>9 && userField[i1-i][j1].label==true) {
            userField[i1-i][j1].classList.add(`mouseOverBad${desk}`);
        }

    }
}
else {
    for (let j=0;j<desk;j++){
        if ((j1+desk-1)<=9 && userField[i1][j1+j].label==false) {
            userField[i1][j1+j].classList.add(`mouseOver${desk}`);
        } 
        else if ((j1+desk-1)>9 && userField[i1][j1-j].label==false) {
            userField[i1][j1-j].classList.add(`mouseOver${desk}`);
        }
        else if ((j1+desk-1)<=9 && userField[i1][j1+j].label==true) {
            userField[i1][j1+j].classList.add(`mouseOverBad${desk}`);
        }
        else if ((j1+desk-1)>9 && userField[i1][j1-j].label==true) {
            userField[i1][j1-j].classList.add(`mouseOverBad${desk}`);
        }
    }
}
}
// удаление тени корабля при уходе мышки
function mouseOut() {
if (userDirection==true){
    for (let i=0;i<desk;i++){
        if ((i1+desk-1)<=9 && userField[i1+i][j1].label==false) {
            userField[i1+i][j1].classList.remove(`mouseOver${desk}`);
        } else if ((i1+desk-1)>9 && userField[i1-i][j1].label==false) {
            userField[i1-i][j1].classList.remove(`mouseOver${desk}`);
        }
        else if ((i1+desk-1)<=9 && userField[i1+i][j1].label==true) {
            userField[i1+i][j1].classList.remove(`mouseOverBad${desk}`);
        } 
        else if ((i1+desk-1)>9 && userField[i1-i][j1].label==true) {
            userField[i1-i][j1].classList.remove(`mouseOverBad${desk}`);
        }
    }
}
else {
    for (let j=0;j<desk;j++){
        if ((j1+desk-1)<=9 && userField[i1][j1+j].label==false) {
            userField[i1][j1+j].classList.remove(`mouseOver${desk}`);
        } 
        else if ((j1+desk-1)>9 && userField[i1][j1-j].label==false) {
            userField[i1][j1-j].classList.remove(`mouseOver${desk}`);
        }
        else if ((j1+desk-1)<=9 && userField[i1][j1+j].label==true) {
            userField[i1][j1+j].classList.remove(`mouseOverBad${desk}`);
        }
        else if ((j1+desk-1)>9 && userField[i1][j1-j].label==true) {
            userField[i1][j1-j].classList.remove(`mouseOverBad${desk}`);
        }
    }
}
}


buttonShip4.addEventListener('click', addShip4 );
buttonShip3.addEventListener('click', addShip3 );
buttonShip2.addEventListener('click', addShip2 );
buttonShip1.addEventListener('click', addShip1 );


//напишем функцию для атаки на моё поле


function AttackAI() {
    xAttackAI = getRandom(0,9);
    yAttackAI = getRandom(0,9);
    if (userField[xAttackAI][yAttackAI].shipIsHere==true) {
        userField[xAttackAI][yAttackAI].classList.add('crackShip');
        alert ('В Вас попали!');
        AttackAI();
    }
    else if (userField[xAttackAI][yAttackAI].shipIsHere==false) {
        userField[xAttackAI][yAttackAI].classList.add('FailShot');
        alert ('В Вас не попали!');
        AttackUser();
    }

}

//функция для атаки на вражеское поле 
function AttackUser() {
if (addEventListenerForAIField==false) {
    for (let i=0;i<=9;i++) {
        for (let j=0;j<=9;j++) {
            field[i][j].addEventListener("click", function () {
                i1=i;
                j1=j;
            });
            field[i][j].addEventListener("click",AttackUserInt);
    }
}
addEventListenerForAIField=true;
}

function AttackUserInt() {
    if (field[i1][j1].shipIsHere==1 || field[i1][j1].shipIsHere==2 || field[i1][j1].shipIsHere==3 || field[i1][j1].shipIsHere==4) {
        field[i1][j1].classList.add('crackShip');
        alert ('Вы попали!');
        AttackUser();
    }
    else if (field[i1][j1].shipIsHere==0) {
        field[i1][j1].classList.add('FailShot');
        alert ('Вы не попали!');
        AttackAI();
    }

}
}