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
                field[i-1][j].labelShooting=false;
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
let fieldAI = [];
function fillFieldAI() {
    for(let i=0;i<100;i++) {
        fieldAI[i] = i;
    }
}
fillFieldAI();
//генерация кораблей
function autoPlasing(lengthOfShip,NumberOfShip) {
    //let I = getRandom (0,9);
    //let J = getRandom (0,9);
    let K = fieldAI[getRandom (0,fieldAI.length-1)];
    let I = Math.floor(K/10);
    let J = K%10;
    let direction = getRandomBoolean();
    let bad = false;
    //функция для проверки на возможность установки в данном месте корабля
    function checkByLabel(shipLength) {
        if (direction==true && (I+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I+k][J].label==true) {
                    autoPlasing(lengthOfShip,NumberOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==true && (I+(shipLength-1))>9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I-k][J].label==true) {
                    autoPlasing(lengthOfShip,NumberOfShip);
                    bad = true;
                    return;                  
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I][J+k].label==true) {
                    autoPlasing(lengthOfShip,NumberOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))>9){
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
    field[I][J].numberOfThisTypeShip=NumberOfShip;
    intLabel(I,J);
    if (direction==true) {
        for (let i=1;i<=lengthOfShip-1;i++) {
            if ((I+(lengthOfShip-1))<=9) {
                colorShip((I+i),J,lengthOfShip);
                field[I+i][J].shipIsHere=lengthOfShip;
                field[I+i][J].numberOfThisTypeShip=NumberOfShip;
                intLabel(I+i,J);
            }
            else {
                colorShip((I-i),J,lengthOfShip);
                field[I-i][J].shipIsHere=lengthOfShip;
                field[I-i][J].numberOfThisTypeShip=NumberOfShip;
                intLabel(I-i,J);
            }
        }
    }
    else {
        for (let j=1;j<=lengthOfShip-1;j++) {
            if ((J+(lengthOfShip-1))<=9) {
                colorShip(I,(J+j),lengthOfShip);
                field[I][J+j].shipIsHere=lengthOfShip;
                field[I][J+j].numberOfThisTypeShip=NumberOfShip;
                intLabel(I,J+j);
            }
            else {
                colorShip(I,(J-j),lengthOfShip);
                field[I][J-j].shipIsHere=lengthOfShip;
                field[I][J-j].numberOfThisTypeShip=NumberOfShip;
                intLabel(I,J-j);
            }
        }
    }

}

}
console.time("autoplasing");
autoPlasing(4,1); 
autoPlasing(3,1); 
autoPlasing(3,2); 
autoPlasing(2,1); 
autoPlasing(2,2); 
autoPlasing(2,3); 
autoPlasing(1,4); 
autoPlasing(1,3); 
autoPlasing(1,2); 
autoPlasing(1,1);
console.timeEnd("autoplasing");
//функция для создания метки (чтоб корабль не ставился)
function intLabel(i,j) {

    field[i][j].label = true;
    if (fieldAI.indexOf(10*i+j)!=(-1)){
    fieldAI.splice(fieldAI.indexOf(10*i+j),1);
    }
try {
    if (field[i+1][j].label==false) {
    field[i+1][j].label = true;
    fieldAI.splice(fieldAI.indexOf(10*(i+1)+j),1);
    }

    
} 
catch (a) {}
try {
    if (field[i+1][j+1].label==false) {
    field[i+1][j+1].label = true;
    fieldAI.splice(fieldAI.indexOf(10*(i+1)+j+1),1);
    }

} 
catch (a) {}
try {
    if (field[i+1][j-1].label==false) {
    field[i+1][j-1].label = true;
    fieldAI.splice(fieldAI.indexOf(10*(i+1)+j-1),1);
}}
catch (a) {}
try {
    if (field[i][j+1].label==false) {
    field[i][j+1].label = true;
    fieldAI.splice(fieldAI.indexOf(10*i+j+1),1);
    }
} 
catch (a) {}
try {
    if (field[i][j-1].label==false) {
    field[i][j-1].label = true;
    fieldAI.splice(fieldAI.indexOf(10*i+j-1),1);
    }
}
catch (a) {}
try {
    if (field[i-1][j].label==false) {
    field[i-1][j].label = true;
    fieldAI.splice(fieldAI.indexOf(10*(i-1)+j),1);
    }
}
catch (a) {}
try {
    if (field[i-1][j+1].label==false) {
    field[i-1][j+1].label = true;
    fieldAI.splice(fieldAI.indexOf(10*(i-1)+j+1),1);
    }
}
catch (a) {}
try {
    if (field[i-1][j-1].label==false) {
    field[i-1][j-1].label = true;
    fieldAI.splice(fieldAI.indexOf(10*(i-1)+j-1),1);
    }
}
catch (a) {}
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
                userField[i-1][j].shipIsHere=0;
                userField[i-1][j].numberOfThisTypeShip=0;
                userField[i-1][j].labelShooting=false;
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
        else if ((j1+desk-1)>9 && userField[i1][j1-j].label==true) {
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
            --counter3;
        }
        else if (desk==3 && counter3!=1){
            --counter3;
        }
        else if (desk==2 && counter2==1){
            buttonShip2.removeEventListener('click', addShip2 );
            --counter2;
        }
        else if (desk==2 && counter2!=1){
            --counter2;
        }
        else if (desk==1 && counter1==1){
            buttonShip1.removeEventListener('click', addShip1 );
        }
        else if (desk==1 && counter1!=1){
            --counter1;
        }
//установка кораблей
    if (userDirection==true){
        loop:
        for (let i=0;i<desk;i++){
            if ((i1+desk-1)<=9) {
                userField[i1+i][j1].classList.remove(`mouseOver${desk}`);
                userField[i1+i][j1].classList.add(`userShip${desk}`);
                userField[i1+i][j1].shipIsHere=desk;
                intLabelUser(i1+i,j1);
                if (desk==2) {
                userField[i1+i][j1].numberOfThisTypeShip = counter2+1;
                continue loop;
                }
                else if (desk==3) {
                userField[i1+i][j1].numberOfThisTypeShip = counter3+1;
                continue loop;
                }
                
                
            } else {
                userField[i1-i][j1].classList.remove(`mouseOver${desk}`);
                userField[i1-i][j1].classList.add(`userShip${desk}`);
                userField[i1-i][j1].shipIsHere=desk;
                intLabelUser(i1-i,j1);
                if (desk==2) {
                userField[i1-i][j1].numberOfThisTypeShip = counter2+1;
                continue loop;
                }
                else if (desk==3) {
                userField[i1-i][j1].numberOfThisTypeShip = counter3+1;
                continue loop;
                }
                
                
            }
        }
    }
    else {
        loop2:
        for (let j=0;j<desk;j++){
            if ((j1+desk-1)<=9) {
                userField[i1][j1+j].classList.remove(`mouseOver${desk}`);
                userField[i1][j1+j].classList.add(`userShip${desk}`);
                userField[i1][j1+j].shipIsHere=desk;
                intLabelUser(i1,j1+j);
                if (desk==2) {
                userField[i1][j1+j].numberOfThisTypeShip = counter2+1;
                continue loop2;
                }
                else if (desk==3) {
                userField[i1][j1+j].numberOfThisTypeShip = counter3+1;
                continue loop2;
                }
                
            } else {
                userField[i1][j1-j].classList.remove(`mouseOver${desk}`);
                userField[i1][j1-j].classList.add(`userShip${desk}`);
                userField[i1][j1-j].shipIsHere=desk;
                intLabelUser(i1,j1-j);
                if (desk==2) {
                userField[i1][j1-j].numberOfThisTypeShip = counter2+1;
                continue loop2;
                }
                else if (desk==3) {
                userField[i1][j1-j].numberOfThisTypeShip = counter3+1;
                continue loop2;
                }
                
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

let shootingXYUser = [[],[]];


let Desk2Ship1Health=2;
let Desk2Ship2Health=2;
let Desk2Ship3Health=2;
let Desk3Ship1Health=3;
let Desk3Ship2Health=3;
let Desk4Ship1Health=4;



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
    if (field[i1][j1].labelShooting==false){
        AttackUserCheckAndPlace();
    }
    function AttackUserCheckAndPlace() {
        
        function eventListnerRemover() {
            for (let i=0;i<=9;i++) {
                for (let j=0;j<=9;j++) {
                    field[i][j].removeEventListener("click",AttackUserInt);
            }
        }
        addEventListenerForAIField=false;
        }
        eventListnerRemover();

    
    if (field[i1][j1].shipIsHere==1) {
        intShootingLabel (i1,j1);
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        alert ('Вы потопили однопалубный корабль!');
        AttackUser();
    }

    // TODO: Как то сократить этот огромный кусок кода
    else if (field[i1][j1].shipIsHere==2 && field[i1][j1].numberOfThisTypeShip==2) {
        
        if (Desk2Ship1Health == 2) {
        shootingXYUser[0][0]=i1;
        shootingXYUser[1][0]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        alert ('Вы попали!');
        Desk2Ship1Health=1;
        AttackUser();
        }
        else if (Desk2Ship1Health == 1) {
        shootingXYUser[0][1]=i1;
        shootingXYUser[1][1]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        intShootingLabel(shootingXYUser[0][0],shootingXYUser[1][0]);
        intShootingLabel(shootingXYUser[0][1],shootingXYUser[1][1]);
        field[shootingXYUser[0][0]][shootingXYUser[1][0]].classList.remove('FailShot');
        field[shootingXYUser[0][1]][shootingXYUser[1][1]].classList.remove('FailShot');
        Desk2Ship1Health=0;
        alert('Вы потопили двухпалубный корабль!');
        AttackUser();
        }
    }
    else if (field[i1][j1].shipIsHere==2 && field[i1][j1].numberOfThisTypeShip==1) {
        
        if (Desk2Ship2Health == 2) {
        shootingXYUser[0][2]=i1;
        shootingXYUser[1][2]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        alert ('Вы попали!');
        Desk2Ship2Health=1;
        AttackUser();
        }
        else if (Desk2Ship2Health == 1) {
        shootingXYUser[0][3]=i1;
        shootingXYUser[1][3]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        intShootingLabel(shootingXYUser[0][2],shootingXYUser[1][2]);
        intShootingLabel(shootingXYUser[0][3],shootingXYUser[1][3]);
        field[shootingXYUser[0][2]][shootingXYUser[1][2]].classList.remove('FailShot');
        field[shootingXYUser[0][3]][shootingXYUser[1][3]].classList.remove('FailShot');
        Desk2Ship2Health=0;
        alert('Вы потопили двухпалубный корабль!');
        AttackUser();
        }
    }
    else if (field[i1][j1].shipIsHere==2 && field[i1][j1].numberOfThisTypeShip==3) {
        
        if (Desk2Ship3Health == 2) {
        shootingXYUser[0][4]=i1;
        shootingXYUser[1][4]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        alert ('Вы попали!');
        Desk2Ship3Health=1;
        AttackUser();
        }
        else if (Desk2Ship3Health == 1) {
        shootingXYUser[0][5]=i1;
        shootingXYUser[1][5]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        intShootingLabel(shootingXYUser[0][4],shootingXYUser[1][4]);
        intShootingLabel(shootingXYUser[0][5],shootingXYUser[1][5]);
        field[shootingXYUser[0][4]][shootingXYUser[1][4]].classList.remove('FailShot');
        field[shootingXYUser[0][5]][shootingXYUser[1][5]].classList.remove('FailShot');
        Desk2Ship3Health=0;
        alert('Вы потопили двухпалубный корабль!');
        AttackUser();
        }
    }
    else if (field[i1][j1].shipIsHere==3 && field[i1][j1].numberOfThisTypeShip==2) {
        
        if (Desk3Ship1Health == 3) {
        shootingXYUser[0][6]=i1;
        shootingXYUser[1][6]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        alert ('Вы попали!');
        Desk3Ship1Health=2;
        AttackUser();
        }
        else if (Desk3Ship1Health == 2) {
            shootingXYUser[0][7]=i1;
            shootingXYUser[1][7]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            alert ('Вы попали!');
            Desk3Ship1Health=1;
            AttackUser();
            }
        else if (Desk3Ship1Health == 1) {
        shootingXYUser[0][8]=i1;
        shootingXYUser[1][8]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        intShootingLabel(shootingXYUser[0][6],shootingXYUser[1][6]);
        intShootingLabel(shootingXYUser[0][7],shootingXYUser[1][7]);
        intShootingLabel(shootingXYUser[0][8],shootingXYUser[1][8]);
        field[shootingXYUser[0][6]][shootingXYUser[1][6]].classList.remove('FailShot');
        field[shootingXYUser[0][7]][shootingXYUser[1][7]].classList.remove('FailShot');
        field[shootingXYUser[0][8]][shootingXYUser[1][8]].classList.remove('FailShot');
        Desk3Ship1Health=0;
        alert('Вы потопили трёхпалубный корабль!');
        AttackUser();
        }
    }
    else if (field[i1][j1].shipIsHere==3 && field[i1][j1].numberOfThisTypeShip==1) {
        
        if (Desk3Ship2Health == 3) {
        shootingXYUser[0][9]=i1;
        shootingXYUser[1][9]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        alert ('Вы попали!');
        Desk3Ship2Health=2;
        AttackUser();
        }
        else if (Desk3Ship2Health == 2) {
            shootingXYUser[0][10]=i1;
            shootingXYUser[1][10]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            alert ('Вы попали!');
            Desk3Ship2Health=1;
            AttackUser();
            }
        else if (Desk3Ship2Health == 1) {
        shootingXYUser[0][11]=i1;
        shootingXYUser[1][11]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        intShootingLabel(shootingXYUser[0][9],shootingXYUser[1][9]);
        intShootingLabel(shootingXYUser[0][10],shootingXYUser[1][10]);
        intShootingLabel(shootingXYUser[0][11],shootingXYUser[1][11]);
        field[shootingXYUser[0][9]][shootingXYUser[1][9]].classList.remove('FailShot');
        field[shootingXYUser[0][10]][shootingXYUser[1][10]].classList.remove('FailShot');
        field[shootingXYUser[0][11]][shootingXYUser[1][11]].classList.remove('FailShot');
        Desk3Ship2Health=0;
        alert('Вы потопили трёхпалубный корабль!');
        AttackUser();
        }
    }
    else if (field[i1][j1].shipIsHere==4) {
        if (Desk4Ship1Health==4) {
            shootingXYUser[0][12]=i1;
            shootingXYUser[1][12]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            alert ('Вы попали!');
            Desk4Ship1Health=3;
            AttackUser();
        }
        else if (Desk4Ship1Health==3) {
            shootingXYUser[0][13]=i1;
            shootingXYUser[1][13]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            alert ('Вы попали!');
            Desk4Ship1Health=2;
            AttackUser();
        }
        else if (Desk4Ship1Health==2) {
            shootingXYUser[0][14]=i1;
            shootingXYUser[1][14]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            alert ('Вы попали!');
            Desk4Ship1Health=1;
            AttackUser();
        }
        else if (Desk4Ship1Health==1) {
            shootingXYUser[0][15]=i1;
            shootingXYUser[1][15]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            intShootingLabel(shootingXYUser[0][12],shootingXYUser[1][12]);
            intShootingLabel(shootingXYUser[0][13],shootingXYUser[1][13]);
            intShootingLabel(shootingXYUser[0][14],shootingXYUser[1][14]);
            intShootingLabel(shootingXYUser[0][15],shootingXYUser[1][15]);
            field[shootingXYUser[0][12]][shootingXYUser[1][12]].classList.remove('FailShot');
            field[shootingXYUser[0][13]][shootingXYUser[1][13]].classList.remove('FailShot');
            field[shootingXYUser[0][14]][shootingXYUser[1][14]].classList.remove('FailShot');
            field[shootingXYUser[0][15]][shootingXYUser[1][15]].classList.remove('FailShot');
            Desk4Ship1Health=0;
            alert('Вы потопили четырёхпалубный корабль!');
            AttackUser();
        }
        
    }
    else if (field[i1][j1].shipIsHere==0) {
        field[i1][j1].classList.add('FailShot');
        field[i1][j1].labelShooting=true;
        alert ('Вы не попали!');
        AttackAI();
    }
}
}
}
function intShootingLabel(i,j) {
    try {field[i+1][j].classList.add('FailShot');
        field[i+1][j].labelShooting = true;} 
    catch (a) {console.log ("не поставилось");}
    try {field[i+1][j+1].classList.add('FailShot');
        field[i+1][j+1].labelShooting = true;} 
    catch (a) {console.log ("не поставилось");}
    try {field[i+1][j-1].classList.add('FailShot');
        field[i+1][j-1].labelShooting = true;}
    catch (a) {console.log ("не поставилось");}
    try {field[i][j+1].classList.add('FailShot');
        field[i][j+1].labelShooting = true;} 
    catch (a) {console.log ("не поставилось");}
    try {field[i][j-1].classList.add('FailShot');
        field[i][j-1].labelShooting = true;}
    catch (a) {console.log ("не поставилось");}
    try {field[i-1][j].classList.add('FailShot');
        field[i-1][j].labelShooting = true;}
    catch (a) {console.log ("не поставилось");}
    try {field[i-1][j+1].classList.add('FailShot');
        field[i-1][j+1].labelShooting = true;}
    catch (a) {console.log ("не поставилось");}
    try {field[i-1][j-1].classList.add('FailShot');
        field[i-1][j-1].labelShooting = true;}
    catch (a) {console.log ("не поставилось");}
    }
    function intShootingLabelAI(i,j) {
        userField[i][j].labelShooting=true;
        try {userField[i+1][j].classList.add('FailShot');
        userField[i+1][j].labelShooting = true;} 
        catch (a) {console.log ("не поставилось");}
        try {userField[i+1][j+1].classList.add('FailShot');
        userField[i+1][j+1].labelShooting = true;} 
        catch (a) {console.log ("не поставилось");}
        try {userField[i+1][j-1].classList.add('FailShot');
        userField[i+1][j-1].labelShooting = true;}
        catch (a) {console.log ("не поставилось");}
        try {userField[i][j+1].classList.add('FailShot');
        userField[i][j+1].labelShooting = true;} 
        catch (a) {console.log ("не поставилось");}
        try {userField[i][j-1].classList.add('FailShot');
        userField[i][j-1].labelShooting = true;}
        catch (a) {console.log ("не поставилось");}
        try {userField[i-1][j].classList.add('FailShot');
        userField[i-1][j].labelShooting = true;}
        catch (a) {console.log ("не поставилось");}
        try {userField[i-1][j+1].classList.add('FailShot');
        userField[i-1][j+1].labelShooting = true;}
        catch (a) {console.log ("не поставилось");}
        try {userField[i-1][j-1].classList.add('FailShot');
        userField[i-1][j-1].labelShooting = true;}
        catch (a) {console.log ("не поставилось");}
        }

     let Desk2Ship1HealthUser=2;
     let Desk2Ship2HealthUser=2;
     let Desk2Ship3HealthUser=2;
     let Desk3Ship1HealthUser=3;
     let Desk3Ship2HealthUser=3;
     let Desk4Ship1HealthUser=4;

     //массив для хранения информации о попадании в корабли
     let shootingXY = [[],[]];

     let needToShootToShip = false;

     let needToShootToShipSecond = false;

     let xCrackedShip1;
     let yCrackedShip1;
     let xCrackedShip2;
     let yCrackedShip2;

    let tempX;
    let tempY;

function AttackAI() {


function getXY() {
    if (needToShootToShip == true) {
        AI();
        return;
    }
    else {
        xAttackAI = getRandom(0,9);
        yAttackAI = getRandom(0,9);
        checkByLabelShootingAI();
    }
}

function AI() {
    needToShootToShip = true;
    if (needToShootToShipSecond == false) {
    let shootToDirection = getRandom(0,3);
    xCrackedShip1 = xAttackAI;
    yCrackedShip1 = yAttackAI;
    if (shootToDirection == 0 && (xAttackAI+1)<=9) {
        xAttackAI=xAttackAI+1;
        checkByLabelShootingAI();
        return;
        }
    else if (shootToDirection == 1 && (xAttackAI-1)>=0) {
        xAttackAI=xAttackAI-1;
        checkByLabelShootingAI();
        return;
    }
    else if (shootToDirection == 2 && (yAttackAI+1)<=9) {
        yAttackAI=yAttackAI+1;
        checkByLabelShootingAI();
        return;
    }
    else if (shootToDirection == 3 && (yAttackAI-1)>=0) {
        yAttackAI=yAttackAI-1;
        checkByLabelShootingAI();
        return;
    }
    else {
        xAttackAI=xCrackedShip1;
        yAttackAI=yCrackedShip1;
        AttackAI();
        return;
    }
}
else if (needToShootToShipSecond == true) {
    xCrackedShip2 = xAttackAI;
    yCrackedShip2 = yAttackAI;
    if (xCrackedShip1-xCrackedShip2==0 && ((userField[xCrackedShip2][yCrackedShip2+1] && userField[xCrackedShip2][yCrackedShip2+1].labelShooting == false && userField[xCrackedShip2][yCrackedShip2-1]) || (userField[xCrackedShip2][yCrackedShip2-1] && userField[xCrackedShip2][yCrackedShip2-1].labelShooting == false && userField[xCrackedShip2][yCrackedShip2+1]))) {
        let shootToDirectionY = getRandom (0,1);
            if (shootToDirectionY == 0 && (yCrackedShip2+1)<=9) {
                yAttackAI = yCrackedShip2+1;
                checkByLabelShootingAI();
                return;
            }
            else if (shootToDirectionY == 1 && (yCrackedShip2-1)>=0) {
                yAttackAI = yCrackedShip2-1;
                checkByLabelShootingAI();
                return;
            }
            else {
                yAttackAI = yCrackedShip2;
                AttackAI();
                return;
            }
    }
    else if (yCrackedShip1-yCrackedShip2==0 && ((userField[xCrackedShip2+1][yCrackedShip2] && userField[xCrackedShip2+1][yCrackedShip2].labelShooting == false && userField[xCrackedShip2-1][yCrackedShip2]) || (userField[xCrackedShip2-1][yCrackedShip2] && userField[xCrackedShip2-1][yCrackedShip2].labelShooting == false && userField[xCrackedShip2+1][yCrackedShip2]))) {
        let shootToDirectionX = getRandom (0,1);
            if (shootToDirectionX == 0 && (xCrackedShip2+1)<=9) {
                xAttackAI = xCrackedShip2+1;
                checkByLabelShootingAI();
                return;
            }
            else if (shootToDirectionX == 1 && (xCrackedShip2-1)>=0) {
                xAttackAI = xCrackedShip2-1;
                checkByLabelShootingAI();
                return;
            }
            else {
                xAttackAI = xCrackedShip2;
                AttackAI();
                return;
            }
    }
    else {
        tempX = xCrackedShip2;
        tempY = yCrackedShip2;
        xCrackedShip2 = xCrackedShip1;
        yCrackedShip2 = yCrackedShip1;
        xCrackedShip1 = tempX;
        yCrackedShip1 = tempY;
        xAttackAI = xCrackedShip2;
        yAttackAI = yCrackedShip2;
        AttackAI ();
        return;
    }

}
    }   
    



function checkByLabelShootingAI() {
    if (userField[xAttackAI][yAttackAI].labelShooting == false) {
        setTimeout (AttackAIInt,500);
        return;
    }
    else if (userField[xAttackAI][yAttackAI].labelShooting == true) {
        {
            if (needToShootToShip == true && needToShootToShipSecond == false) {
            xAttackAI = xCrackedShip1;
            yAttackAI = yCrackedShip1;
            }
            else if (needToShootToShip == true && needToShootToShipSecond == true) {
                xAttackAI = xCrackedShip2;
                yAttackAI = yCrackedShip2;
            }

            AttackAI();
            return;
              
        }
        }}
    getXY ();


        function AttackAIInt() { 
        if (userField[xAttackAI][yAttackAI].shipIsHere==1) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            intShootingLabelAI(xAttackAI,yAttackAI);
            userField[xAttackAI][yAttackAI].classList.remove('FailShot');
            alert ('Ваш однопалубный корабль потопили!');
            needToShootToShip=false;
            needToShootToShipSecond = false;
            AttackAI();
            return;
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==2 && userField[xAttackAI][yAttackAI].numberOfThisTypeShip==1) {
            if (Desk2Ship1HealthUser==2) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            shootingXY[0][0]=xAttackAI;
            shootingXY[1][0]=yAttackAI;
            Desk2Ship1HealthUser=1;
            alert ('В ваш корабль попали!');
            AI();
            return;
            }
            else if (Desk2Ship1HealthUser==1) {
                shootingXY[0][1]=xAttackAI;
                shootingXY[1][1]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (2,shootingXY[0][0],shootingXY[1][0],shootingXY[0][1],shootingXY[1][1],0,0,0,0);
                Desk2Ship1HealthUser=0;
                alert ('Ваш двухпалубный корабль потопили!');
                AttackAI();
                return;
                }
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==2 && userField[xAttackAI][yAttackAI].numberOfThisTypeShip==2) {
            if (Desk2Ship2HealthUser==2) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            shootingXY[0][2]=xAttackAI;
            shootingXY[1][2]=yAttackAI;
            Desk2Ship2HealthUser=1;
            alert ('В ваш корабль попали!');
            AI();
            return;
            }
            else if (Desk2Ship2HealthUser==1) {
                shootingXY[0][3]=xAttackAI;
                shootingXY[1][3]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (2,shootingXY[0][2],shootingXY[1][2],shootingXY[0][3],shootingXY[1][3],0,0,0,0);
                Desk2Ship2HealthUser=0;
                alert ('Ваш двухпалубный корабль потопили!');
                AttackAI();
                return;
                }
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==2 && userField[xAttackAI][yAttackAI].numberOfThisTypeShip==3) {
            if (Desk2Ship3HealthUser==2) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            shootingXY[0][4]=xAttackAI;
            shootingXY[1][4]=yAttackAI;
            Desk2Ship3HealthUser=1;
            alert ('В ваш корабль попали!');
            AI();
            return;
            }
            else if (Desk2Ship3HealthUser==1) {
                shootingXY[0][5]=xAttackAI;
                shootingXY[1][5]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (2,shootingXY[0][4],shootingXY[1][4],shootingXY[0][5],shootingXY[1][5],0,0,0,0);
                Desk2Ship3HealthUser=0;
                alert ('Ваш двухпалубный корабль потопили!');
                AttackAI();
                return;
                }
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==3 && userField[xAttackAI][yAttackAI].numberOfThisTypeShip==1) {
            if (Desk3Ship1HealthUser==3) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            shootingXY[0][6]=xAttackAI;
            shootingXY[1][6]=yAttackAI;
            Desk3Ship1HealthUser=2;
            alert ('В ваш корабль попали!');
            AI();
            return;
            }
            else if (Desk3Ship1HealthUser==2) {
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                userField[xAttackAI][yAttackAI].labelShooting=true;
                shootingXY[0][7]=xAttackAI;
                shootingXY[1][7]=yAttackAI;
                Desk3Ship1HealthUser=1;
                needToShootToShipSecond = true;
                alert ('В ваш корабль попали!');
                AI();
                return;
                }
            else if (Desk3Ship1HealthUser==1) {
                shootingXY[0][8]=xAttackAI;
                shootingXY[1][8]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (3,shootingXY[0][6],shootingXY[1][6],shootingXY[0][7],shootingXY[1][7],shootingXY[0][8],shootingXY[1][8],0,0);
                Desk3Ship1HealthUser=0;
                alert ('Ваш трёхпалубный корабль потопили!');
                AttackAI();
                return;
                }
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==3 && userField[xAttackAI][yAttackAI].numberOfThisTypeShip==2) {
            if (Desk3Ship2HealthUser==3) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            shootingXY[0][9]=xAttackAI;
            shootingXY[1][9]=yAttackAI;
            Desk3Ship2HealthUser=2;
            alert ('В ваш корабль попали!');
            AI();
            return;
            }
            else if (Desk3Ship2HealthUser==2) {
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                userField[xAttackAI][yAttackAI].labelShooting=true;
                shootingXY[0][10]=xAttackAI;
                shootingXY[1][10]=yAttackAI;
                Desk3Ship2HealthUser=1;
                needToShootToShipSecond = true;
                alert ('В ваш корабль попали!');
                AI();
                return;
                }
            else if (Desk3Ship2HealthUser==1) {
                shootingXY[0][11]=xAttackAI;
                shootingXY[1][11]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (3,shootingXY[0][9],shootingXY[1][9],shootingXY[0][10],shootingXY[1][10],shootingXY[0][11],shootingXY[1][11],0,0);
                Desk3Ship2HealthUser=0;
                alert ('Ваш трёхпалубный корабль потопили!');
                AttackAI();
                return;
                }
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==4) {
            if (Desk4Ship1HealthUser==4) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            shootingXY[0][12]=xAttackAI;
            shootingXY[1][12]=yAttackAI;
            Desk4Ship1HealthUser=3;
            alert ('В ваш корабль попали!');
            AI();
            return;
            }
            else if (Desk4Ship1HealthUser==3) {
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                userField[xAttackAI][yAttackAI].labelShooting=true;
                shootingXY[0][13]=xAttackAI;
                shootingXY[1][13]=yAttackAI;
                Desk4Ship1HealthUser=2;
                needToShootToShipSecond = true;
                alert ('В ваш корабль попали!');
                AI();
                return;
                }
            else if (Desk4Ship1HealthUser==2) {
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                userField[xAttackAI][yAttackAI].labelShooting=true;
                shootingXY[0][14]=xAttackAI;
                shootingXY[1][14]=yAttackAI;
                Desk4Ship1HealthUser=1;
                needToShootToShipSecond = true;
                alert ('В ваш корабль попали!');
                AI();
                return;
                    }
            else if (Desk4Ship1HealthUser==1) {
                shootingXY[0][15]=xAttackAI;
                shootingXY[1][15]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (4,shootingXY[0][12],shootingXY[1][12],shootingXY[0][13],shootingXY[1][13],shootingXY[0][14],shootingXY[1][14],shootingXY[0][15],shootingXY[1][15]);
                Desk4Ship1HealthUser=0;
                alert ('Ваш четырёхпалубный корабль потопили!');
                AttackAI();
                return;
                }
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==0) {
            userField[xAttackAI][yAttackAI].labelShooting=true;
            userField[xAttackAI][yAttackAI].classList.add('FailShot');
            alert ('В Вас не попали!');
            if (needToShootToShip == true && needToShootToShipSecond == false) {
                xAttackAI=xCrackedShip1;
                yAttackAI=yCrackedShip1;
            }
            else if (needToShootToShip == true && needToShootToShipSecond == true) {
                xAttackAI=xCrackedShip2;
                yAttackAI=yCrackedShip2;
            } 
            AttackUser();
            return;
        }
    
    }

}


function killShip(deskShip,x1,y1,x2,y2,x3,y3,x4,y4) {
    intShootingLabelAI(x1,y1);
    intShootingLabelAI(x2,y2);
    userField[x1][y1].classList.remove('FailShot');
    userField[x2][y2].classList.remove('FailShot');
    if (deskShip>2) {
        intShootingLabelAI(x3,y3);
        userField[x1][y1].classList.remove('FailShot');
        userField[x2][y2].classList.remove('FailShot');
        userField[x3][y3].classList.remove('FailShot');
        if (deskShip>3){
            intShootingLabelAI(x4,y4);
            userField[x1][y1].classList.remove('FailShot');
            userField[x2][y2].classList.remove('FailShot');
            userField[x3][y3].classList.remove('FailShot');
            userField[x4][y4].classList.remove('FailShot');
        }
    }
    needToShootToShip = false;
    needToShootToShipSecond = false;
}