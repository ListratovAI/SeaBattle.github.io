//элементы стартовой страницы
let audioButton = document.createElement("button");
audioButton.classList.add("audioButton");
document.body.appendChild(audioButton);
audioButton.innerHTML = "<p>Включить музыку</p>";

let container = document.createElement("div");
container.classList.add("containerStart");
document.body.appendChild(container);

let seaBattle = document.createElement("div");
seaBattle.classList.add("seaBattle");
container.appendChild(seaBattle);


let seaBattleInt = document.createElement("div");
seaBattleInt.classList.add("seaBattleInt");
let picHelmContainer1 = document.createElement("div");
let picHelmContainer2 = document.createElement("div");
let picHelm = document.createElement("img");
picHelm.src = ("img/helm.png");
let picHelm2 = document.createElement("img");
picHelm2.src = ("img/helm.png");

seaBattle.appendChild(picHelmContainer1);
seaBattle.appendChild(seaBattleInt);
seaBattleInt.innerHTML = "<p>Морской бой</p>";
seaBattle.appendChild(picHelmContainer2);

picHelmContainer1.appendChild(picHelm);
picHelmContainer2.appendChild(picHelm2);

let rules = document.createElement("div");
rules.classList.add("rules");
container.appendChild(rules);
rules.innerHTML ="<p>«Морской бой» — игра для двух участников, в которой игроки по очереди называют координаты на неизвестной им карте соперника.<br><br> Если у соперника по этим координатам имеется корабль (координаты заняты), то корабль или его часть «топится», а попавший получает право сделать ещё один ход. Цель игрока — первым потопить все корабли противника.</p.";

let seaBattleBottom = document.createElement("button");
seaBattleBottom.classList.add("seaBattleBottom");
container.appendChild(seaBattleBottom);
seaBattleBottom.innerHTML = "<p>Начать игру!</p>";


seaBattleBottom.addEventListener('click',SEA_BATTLE_GAME);

let firstGame = true;

let audioON = false;
audioButton.addEventListener("click",audioOnOff);

let runningGame = false;
//кнопка управления музыкой
function audioOnOff() {
    if (audioON == true) {
        audioON = false;
        stopPirates();
        audioButton.innerHTML = "<p>Включить музыку</p>";
    }
    else {
        audioON = true;
        soundPirates();
        audioButton.innerHTML = "<p>Выключить музыку</p>";
    }
}

let audioPirates = document.createElement("audio");
function soundPirates() {
    if (audioON == true && runningGame == false) {
    audioPirates.src = 'audio/pirates.mp3'; 
    audioPirates.autoplay = true; 
    }
}
function stopPirates() {
    audioPirates.pause();
    audioPirates.currentTime = 0;
}

//SEA_BATTLE_GAME();

function SEA_BATTLE_GAME() {

if (firstGame == true) {
    container.removeChild(rules);
    container.removeChild(seaBattleBottom);
    seaBattle.classList.add("seaBattleInGame");
}
//container.removeChild(seaBattle);


let containerInt = document.createElement("div");
let leftField = document.createElement("div");
let centerField = document.createElement("div");
let information = document.createElement("div");
let arrow = document.createElement("img");
let startGame = document.createElement("button");
let replacing = document.createElement("button");
let rightField = document.createElement("div");
let leftFieldText = document.createElement("div");
let rigthFieldText = document.createElement("div");
let containerForGame = document.createElement("div");
let containerForUserField = document.createElement("div");

//container.classList.remove("containerStart");
containerInt.classList.add("container");
leftField.classList.add("leftField");
centerField.classList.add("centerField");
information.classList.add("information");
startGame.classList.add("startGame");
replacing.classList.add("replacing");
arrow.classList.add("arrow");
rightField.classList.add("rightField");
leftFieldText.classList.add("leftFieldText");
rigthFieldText.classList.add("rigthFieldText");
containerForGame.classList.add("containerForGame");
containerForUserField.classList.add("containerForUserField");

arrow.src = ("img/arrow.png");

container.appendChild(containerInt);
containerInt.appendChild(leftField);
containerInt.appendChild(centerField);
containerInt.appendChild(rightField);
leftField.appendChild(leftFieldText);
leftField.appendChild(containerForGame);
centerField.appendChild(information);
centerField.appendChild(startGame);
centerField.appendChild(replacing);
//centerField.appendChild(arrow);
rightField.appendChild(rigthFieldText);
rightField.appendChild(containerForUserField);

startGame.innerHTML = "<p>Начать бой!</p>";
replacing.innerHTML = "<p>Перераспределить корабли</p>";
information.innerHTML = "<p>Расставьте корабли</p>";
leftFieldText.innerHTML = "<p>Поле противника</p>";
rigthFieldText.innerHTML = "<p>Ваше поле</p>";


//звуковые функции
let audioFailClick = document.createElement("audio"); 
let audioCrackShip = document.createElement("audio"); 
let audioDeadShip = document.createElement("audio"); 
let audioWin = document.createElement("audio"); 
let audioFail = document.createElement("audio"); 


function soundFailClick() {
    if (audioON == true) {
    audioFailClick.src = 'audio/failShot.mp3'; 
    audioFailClick.autoplay = true; 
    setTimeout(stopFailClick,2000);
    }
}
function soundCrackShip() {
    if (audioON == true) {
    audioCrackShip.src = 'audio/crackShip.mp3'; 
    audioCrackShip.autoplay = true; 
    setTimeout(stopCrackShip,2000);
    }
}
function soundDeadShip() {
    if (audioON == true) {
    audioDeadShip.src = 'audio/deadShip.mp3'; 
    audioDeadShip.autoplay = true; 
    setTimeout(stopDeadShip,2000);
    }
}
function soundWin() {
    if (audioON == true) {
    audioWin.src = 'audio/win.mp3'; 
    audioWin.autoplay = true; 
    }
}
function soundFail() {
    if (audioON == true) {
    audioFail.src = 'audio/fail.mp3'; 
    audioFail.autoplay = true; 
    }
}

function stopFailClick() {
    audioFailClick.pause();
    audioFailClick.currentTime = 0;
}
function stopCrackShip() {
    audioCrackShip.pause();
    audioCrackShip.currentTime = 0;
}
function stopDeadShip() {
    audioDeadShip.pause();
    audioDeadShip.currentTime = 0;
}

//создание игрового поля

let field = [[],[],[],[],[],[],[],[],[],[]];
let userField = [[],[],[],[],[],[],[],[],[],[]];
//let containerForGame = document.querySelector(".containerForGame");



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
//генерация кораблей
function autoPlasing(fieldAuto,lengthOfShip,NumberOfShip) {
    let I = getRandom (0,9);
    let J = getRandom (0,9);
    let direction = getRandomBoolean();
    let bad = false;
    //функция для проверки на возможность установки в данном месте корабля
    function checkByLabel(shipLength) {
        if (direction==true && (I+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (fieldAuto[I+k][J].label==true) {
                    autoPlasing(fieldAuto,lengthOfShip,NumberOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==true && (I+(shipLength-1))>9) {
            for (let k=0;k<=shipLength-1;k++){
                if (fieldAuto[I-k][J].label==true) {
                    autoPlasing(fieldAuto,lengthOfShip,NumberOfShip);
                    bad = true;
                    return;                  
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (fieldAuto[I][J+k].label==true) {
                    autoPlasing(fieldAuto,lengthOfShip,NumberOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))>9){
            for (let k=0;k<=shipLength-1;k++){
                if (fieldAuto[I][J-k].label==true) {
                    autoPlasing(fieldAuto,lengthOfShip,NumberOfShip);
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
        fieldAuto[i][j].classList.add('ship4');
    }
    else if (length==3){
        fieldAuto[i][j].classList.add('ship3');
    }
    else if (length==2){
        fieldAuto[i][j].classList.add('ship2');
    }
    else if (length==1){
        fieldAuto[i][j].classList.add('ship1');
    }
}
if (bad==false){
    autoPlasingInt();
}
function autoPlasingInt() {
    colorShip(I,J,lengthOfShip);
    fieldAuto[I][J].shipIsHere=lengthOfShip;
    fieldAuto[I][J].numberOfThisTypeShip=NumberOfShip;
    intLabel(I,J);
    if (direction==true) {
        for (let i=1;i<=lengthOfShip-1;i++) {
            if ((I+(lengthOfShip-1))<=9) {
                colorShip((I+i),J,lengthOfShip);
                fieldAuto[I+i][J].shipIsHere=lengthOfShip;
                fieldAuto[I+i][J].numberOfThisTypeShip=NumberOfShip;
                intLabel(I+i,J);
            }
            else {
                colorShip((I-i),J,lengthOfShip);
                fieldAuto[I-i][J].shipIsHere=lengthOfShip;
                fieldAuto[I-i][J].numberOfThisTypeShip=NumberOfShip;
                intLabel(I-i,J);
            }
        }
    }
    else {
        for (let j=1;j<=lengthOfShip-1;j++) {
            if ((J+(lengthOfShip-1))<=9) {
                colorShip(I,(J+j),lengthOfShip);
                fieldAuto[I][J+j].shipIsHere=lengthOfShip;
                fieldAuto[I][J+j].numberOfThisTypeShip=NumberOfShip;
                intLabel(I,J+j);
            }
            else {
                colorShip(I,(J-j),lengthOfShip);
                fieldAuto[I][J-j].shipIsHere=lengthOfShip;
                fieldAuto[I][J-j].numberOfThisTypeShip=NumberOfShip;
                intLabel(I,J-j);
            }
        }
    }

}
//функция для создания метки (чтоб корабль не ставился)
function intLabel(i,j) {
    fieldAuto[i][j].label = true;
    try {fieldAuto[i+1][j].label = true;} 
    catch (a) {}
    try {fieldAuto[i+1][j+1].label = true;} 
    catch (a) {}
    try {fieldAuto[i+1][j-1].label = true;}
    catch (a) {}
    try {fieldAuto[i][j+1].label = true;} 
    catch (a) {}
    try {fieldAuto[i][j-1].label = true;}
    catch (a) {}
    try {fieldAuto[i-1][j].label = true;}
    catch (a) {}
    try {fieldAuto[i-1][j+1].label = true;}
    catch (a) {}
    try {fieldAuto[i-1][j-1].label = true;}
    catch (a) {}
    }
}

autoPlasing(field,4,1); 
autoPlasing(field,3,1); 
autoPlasing(field,3,2); 
autoPlasing(field,2,1); 
autoPlasing(field,2,2); 
autoPlasing(field,2,3); 
autoPlasing(field,1,4); 
autoPlasing(field,1,3); 
autoPlasing(field,1,2); 
autoPlasing(field,1,1);

function removeClasses() {
    for (let i=0; i<=9;i++){
        for (let j=0;j<=9;j++){
            field[i][j].classList.remove("ship4");
            field[i][j].classList.remove("ship3");
            field[i][j].classList.remove("ship2");
            field[i][j].classList.remove("ship1");
        }
    }
}
 removeClasses();

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
//let containerForUserField = document.querySelector(".containerForUserField");
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

let buttomsForChange = document.createElement("div");
buttomsForChange.classList.add("buttomsForChange");
containerForUserField.appendChild(buttomsForChange);

let buttomAutoPlasing = document.createElement("button");
buttomAutoPlasing.classList.add("buttomAutoPlasing");
buttomsForChange.appendChild(buttomAutoPlasing);
buttomAutoPlasing.innerHTML = "АВТОМАТИЧЕСКИ";

let buttomsShips = document.createElement("div");
buttomsShips.classList.add("buttomsShips");
buttomsForChange.appendChild(buttomsShips);

let buttonShip4 = document.createElement('button');
buttonShip4.classList.add('buttonShip4');
buttomsShips.appendChild (buttonShip4);

let buttonShip3 = document.createElement('button');
buttonShip3.classList.add('buttonShip3');
buttomsShips.appendChild (buttonShip3);

let buttonShip2 = document.createElement('button');
buttonShip2.classList.add('buttonShip2');
buttomsShips.appendChild (buttonShip2);

let buttonShip1 = document.createElement('button');
buttonShip1.classList.add('buttonShip1');
buttomsShips.appendChild (buttonShip1);

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

buttomAutoPlasing.addEventListener('click',userAutoPlacing);

//функция для автоматической расстановки кораблей
function userAutoPlacing() {
    dischargeField();
autoPlasing(userField,4,1); 
autoPlasing(userField,3,1); 
autoPlasing(userField,3,2); 
autoPlasing(userField,2,1); 
autoPlasing(userField,2,2); 
autoPlasing(userField,2,3); 
autoPlasing(userField,1,4); 
autoPlasing(userField,1,3); 
autoPlasing(userField,1,2); 
autoPlasing(userField,1,1);
counterShips=0;
try {
buttomsShips.removeChild (buttonShip2);}
catch(e){};
try {
buttomsShips.removeChild (buttonShip3);
}
catch(e){};
try {
buttomsShips.removeChild (buttonShip4);
}
catch(e){};
try {
buttomsShips.removeChild (buttonShip1);
}
catch(e){};
}

//функционал кнопки очищения поля
replacing.addEventListener('click',replacingShips);

function replacingShips() {
    dischargeField();
    buttomsShips.appendChild (buttonShip4);
    buttomsShips.appendChild (buttonShip3);
    buttomsShips.appendChild (buttonShip2);
    buttomsShips.appendChild (buttonShip1);
}


//функция для очистки поля
function dischargeField() {
    for (let i=0;i<=9;i++){
        for (let j=0;j<=9;j++){
            userField[i][j].classList.remove('ship4','ship3','ship2','ship1');
            userField[i][j].label=false;
            userField[i][j].shipIsHere=0;
            userField[i][j].numberOfThisTypeShip=0;
            userField[i][j].labelShooting=false;
            counterShips = 10;
        }
    }
}

startGame.addEventListener('click', startGameFunc);

function startGameFunc() {
    if (counterShips == 0){
    containerForUserField.removeChild(buttomsForChange); 
    centerField.appendChild(arrow);
    centerField.removeChild(startGame);
    centerField.removeChild(replacing);
    information.innerHTML = "";
    rigthFieldText.classList.add("rigthFieldTextOnlyForSmallScreen");
    runningGame = true;
    stopPirates();
    let whoFirst = getRandomBoolean();
    if (whoFirst == true) {
        information.innerHTML = "<p>Стреляйте!</p>";
        AttackUser();
    }
    else {
        AttackAI();
    }
}
    else {
        information.innerHTML = "<p>Вы ещё не расставили корабли!</p>";
        setTimeout(doNotShips,1000);
    }
}

function colorRed(){
    information.classList.add("informationRed");
    information.classList.remove("informationGreen");
}
function colorGreen(){
    information.classList.add("informationGreen");
    information.classList.remove("informationRed");
}

//надпись, если корабли не расставлены
function doNotShips() {
    information.innerHTML = "<p>Расставьте корабли</p>";
}

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
            buttonShip4.remove();
        }
        else if (desk==3 && counter3==1){
            buttonShip3.remove();
            --counter3;
        }
        else if (desk==3 && counter3!=1){
            --counter3;
        }
        else if (desk==2 && counter2==1){
            buttonShip2.remove();
            --counter2;
        }
        else if (desk==2 && counter2!=1){
            --counter2;
        }
        else if (desk==1 && counter1==1){
            buttonShip1.remove();
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
                userField[i1+i][j1].classList.add(`ship${desk}`);
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
                userField[i1-i][j1].classList.add(`ship${desk}`);
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
                userField[i1][j1+j].classList.add(`ship${desk}`);
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
                userField[i1][j1-j].classList.add(`ship${desk}`);
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

let counterUserShips = 10;
let counterAIShips = 10;

//функция для атаки на вражеское поле 
function AttackUser() {
    arrow.classList.add("arrow180");
if (addEventListenerForAIField==false) {
    for (let i=0;i<=9;i++) {
        for (let j=0;j<=9;j++) {
            field[i][j].addEventListener("mouseover", function () {
                i1=i;
                j1=j;
            });
            field[i][j].addEventListener("mouseover",AttackMouseIn);
            field[i][j].addEventListener("mouseout", function () {
                i1=i;
                j1=j;
            });
            field[i][j].addEventListener("mouseout",AttackMouseOut); 
            field[i][j].addEventListener("click", function () {
                i1=i;
                j1=j;
                
            });
            field[i][j].addEventListener("click",AttackUserInt);
            
    }
}
addEventListenerForAIField=true;


}
function AttackMouseIn() {
    if (field[i1][j1].labelShooting == false) {
    field[i1][j1].classList.add("hover");
    }
}
function AttackMouseOut() {
    field[i1][j1].classList.remove("hover");
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
                    field[i][j].removeEventListener("mouseover",AttackMouseIn);
                    field[i][j].removeEventListener("mouseout",AttackMouseOut); 
            }
        }
        addEventListenerForAIField=false;
        }
        eventListnerRemover();

    
    if (field[i1][j1].shipIsHere==1) {
        intShootingLabel (i1,j1);
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        information.innerHTML = "<p>Вы потопили однопалубный корабль!</p>";
        soundDeadShip();
        colorGreen();
        counterAIShips--;
        if (counterAIShips == 0) {
            userWin();
        }
        else {
        AttackUser();
        }
    }

    // TODO: Как то сократить этот огромный кусок кода
    else if (field[i1][j1].shipIsHere==2 && field[i1][j1].numberOfThisTypeShip==2) {
        
        if (Desk2Ship1Health == 2) {
        shootingXYUser[0][0]=i1;
        shootingXYUser[1][0]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        Desk2Ship1Health=1;
        information.innerHTML = "<p>Вы попали!</p>";
        soundCrackShip();
        colorGreen();
        AttackUser();
        }
        else if (Desk2Ship1Health == 1) {
        shootingXYUser[0][1]=i1;
        shootingXYUser[1][1]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        intShootingLabel(shootingXYUser[0][0],shootingXYUser[1][0]);
        intShootingLabel(shootingXYUser[0][1],shootingXYUser[1][1]);
        field[shootingXYUser[0][0]][shootingXYUser[1][0]].classList.remove('FailShot');
        field[shootingXYUser[0][1]][shootingXYUser[1][1]].classList.remove('FailShot');
        Desk2Ship1Health=0;
        information.innerHTML = "<p>Вы потопили двухпалубный корабль!</p>";
        soundDeadShip();
        colorGreen();
        counterAIShips--;
        if (counterAIShips == 0) {
            userWin();
        }
        else {
        AttackUser();
        }
        }
    }
    else if (field[i1][j1].shipIsHere==2 && field[i1][j1].numberOfThisTypeShip==1) {
        
        if (Desk2Ship2Health == 2) {
        shootingXYUser[0][2]=i1;
        shootingXYUser[1][2]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        Desk2Ship2Health=1;
        information.innerHTML = "<p>Вы попали!</p>";
        soundCrackShip();
        colorGreen();
        AttackUser();
        }
        else if (Desk2Ship2Health == 1) {
        shootingXYUser[0][3]=i1;
        shootingXYUser[1][3]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        intShootingLabel(shootingXYUser[0][2],shootingXYUser[1][2]);
        intShootingLabel(shootingXYUser[0][3],shootingXYUser[1][3]);
        field[shootingXYUser[0][2]][shootingXYUser[1][2]].classList.remove('FailShot');
        field[shootingXYUser[0][3]][shootingXYUser[1][3]].classList.remove('FailShot');
        Desk2Ship2Health=0;
        information.innerHTML = "<p>Вы потопили двухпалубный корабль!</p>";
        soundDeadShip();
        colorGreen();
        counterAIShips--;
        if (counterAIShips == 0) {
            userWin();
        }
        else {
        AttackUser();
        }
        }
    }
    else if (field[i1][j1].shipIsHere==2 && field[i1][j1].numberOfThisTypeShip==3) {
        
        if (Desk2Ship3Health == 2) {
        shootingXYUser[0][4]=i1;
        shootingXYUser[1][4]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        Desk2Ship3Health=1;
        information.innerHTML = "<p>Вы попали!</p>";
        soundCrackShip();
        colorGreen();
        AttackUser();
        }
        else if (Desk2Ship3Health == 1) {
        shootingXYUser[0][5]=i1;
        shootingXYUser[1][5]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        intShootingLabel(shootingXYUser[0][4],shootingXYUser[1][4]);
        intShootingLabel(shootingXYUser[0][5],shootingXYUser[1][5]);
        field[shootingXYUser[0][4]][shootingXYUser[1][4]].classList.remove('FailShot');
        field[shootingXYUser[0][5]][shootingXYUser[1][5]].classList.remove('FailShot');
        Desk2Ship3Health=0;
        information.innerHTML = "<p>Вы потопили двухпалубный корабль!</p>";
        soundDeadShip();
        colorGreen();
        counterAIShips--;
        if (counterAIShips == 0) {
            userWin();
        }
        else {
        AttackUser();
        }
        }
    }
    else if (field[i1][j1].shipIsHere==3 && field[i1][j1].numberOfThisTypeShip==2) {
        
        if (Desk3Ship1Health == 3) {
        shootingXYUser[0][6]=i1;
        shootingXYUser[1][6]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        Desk3Ship1Health=2;
        information.innerHTML = "<p>Вы попали!</p>";
        soundCrackShip();
        colorGreen();
        AttackUser();
        }
        else if (Desk3Ship1Health == 2) {
            shootingXYUser[0][7]=i1;
            shootingXYUser[1][7]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            field[i1][j1].classList.remove("hover");
            Desk3Ship1Health=1;
            information.innerHTML = "<p>Вы попали!</p>";
            soundCrackShip();
            colorGreen();
            AttackUser();
            }
        else if (Desk3Ship1Health == 1) {
        shootingXYUser[0][8]=i1;
        shootingXYUser[1][8]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        intShootingLabel(shootingXYUser[0][6],shootingXYUser[1][6]);
        intShootingLabel(shootingXYUser[0][7],shootingXYUser[1][7]);
        intShootingLabel(shootingXYUser[0][8],shootingXYUser[1][8]);
        field[shootingXYUser[0][6]][shootingXYUser[1][6]].classList.remove('FailShot');
        field[shootingXYUser[0][7]][shootingXYUser[1][7]].classList.remove('FailShot');
        field[shootingXYUser[0][8]][shootingXYUser[1][8]].classList.remove('FailShot');
        Desk3Ship1Health=0;
        information.innerHTML = "<p>Вы потопили трёхпалубный корабль!</p>";
        soundDeadShip();
        colorGreen();
        counterAIShips--;
        if (counterAIShips == 0) {
            userWin();
        }
        else {
        AttackUser();
        }
        }
    }
    else if (field[i1][j1].shipIsHere==3 && field[i1][j1].numberOfThisTypeShip==1) {
        
        if (Desk3Ship2Health == 3) {
        shootingXYUser[0][9]=i1;
        shootingXYUser[1][9]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        Desk3Ship2Health=2;
        information.innerHTML = "<p>Вы попали!</p>";
        soundCrackShip();
        colorGreen();
        AttackUser();
        }
        else if (Desk3Ship2Health == 2) {
            shootingXYUser[0][10]=i1;
            shootingXYUser[1][10]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            field[i1][j1].classList.remove("hover");
            Desk3Ship2Health=1;
            information.innerHTML = "<p>Вы попали!</p>";
            soundCrackShip();
            colorGreen();
            AttackUser();
            }
        else if (Desk3Ship2Health == 1) {
        shootingXYUser[0][11]=i1;
        shootingXYUser[1][11]=j1;
        field[i1][j1].classList.add('crackShip');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        intShootingLabel(shootingXYUser[0][9],shootingXYUser[1][9]);
        intShootingLabel(shootingXYUser[0][10],shootingXYUser[1][10]);
        intShootingLabel(shootingXYUser[0][11],shootingXYUser[1][11]);
        field[shootingXYUser[0][9]][shootingXYUser[1][9]].classList.remove('FailShot');
        field[shootingXYUser[0][10]][shootingXYUser[1][10]].classList.remove('FailShot');
        field[shootingXYUser[0][11]][shootingXYUser[1][11]].classList.remove('FailShot');
        Desk3Ship2Health=0;
        information.innerHTML = "<p>Вы потопили трёхпалубный корабль!</p>";
        soundDeadShip();
        colorGreen();
        counterAIShips--;
        if (counterAIShips == 0) {
            userWin();
        }
        else {
        AttackUser();
        }
        }
    }
    else if (field[i1][j1].shipIsHere==4) {
        if (Desk4Ship1Health==4) {
            shootingXYUser[0][12]=i1;
            shootingXYUser[1][12]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            field[i1][j1].classList.remove("hover");
            Desk4Ship1Health=3;
            information.innerHTML = "<p>Вы попали!</p>";
            soundCrackShip();
            colorGreen();
            AttackUser();
        }
        else if (Desk4Ship1Health==3) {
            shootingXYUser[0][13]=i1;
            shootingXYUser[1][13]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            field[i1][j1].classList.remove("hover");
            Desk4Ship1Health=2;
            information.innerHTML = "<p>Вы попали!</p>";
            soundCrackShip();
            colorGreen();
            AttackUser();
        }
        else if (Desk4Ship1Health==2) {
            shootingXYUser[0][14]=i1;
            shootingXYUser[1][14]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            field[i1][j1].classList.remove("hover");
            Desk4Ship1Health=1;
            information.innerHTML = "<p>Вы попали!</p>";
            soundCrackShip();
            colorGreen();
            AttackUser();
        }
        else if (Desk4Ship1Health==1) {
            shootingXYUser[0][15]=i1;
            shootingXYUser[1][15]=j1;
            field[i1][j1].classList.add('crackShip');
            field[i1][j1].labelShooting=true;
            field[i1][j1].classList.remove("hover");
            intShootingLabel(shootingXYUser[0][12],shootingXYUser[1][12]);
            intShootingLabel(shootingXYUser[0][13],shootingXYUser[1][13]);
            intShootingLabel(shootingXYUser[0][14],shootingXYUser[1][14]);
            intShootingLabel(shootingXYUser[0][15],shootingXYUser[1][15]);
            field[shootingXYUser[0][12]][shootingXYUser[1][12]].classList.remove('FailShot');
            field[shootingXYUser[0][13]][shootingXYUser[1][13]].classList.remove('FailShot');
            field[shootingXYUser[0][14]][shootingXYUser[1][14]].classList.remove('FailShot');
            field[shootingXYUser[0][15]][shootingXYUser[1][15]].classList.remove('FailShot');
            Desk4Ship1Health=0;
            information.innerHTML = "<p>Вы потопили четырёхпалубный корабль!</p>";
            soundDeadShip();
            colorGreen();
            counterAIShips--;
            if (counterAIShips == 0) {
                userWin();
            }
            else {
            AttackUser();
            }
        }
        
    }
    else if (field[i1][j1].shipIsHere==0) {
        field[i1][j1].classList.add('FailShot');
        field[i1][j1].labelShooting=true;
        field[i1][j1].classList.remove("hover");
        arrow.classList.remove("arrow180");
        information.innerHTML = "<p>Мимо!</p>";
        soundFailClick();
        colorRed();
        AttackAI();
    }

}
}
}


//функция для победы юзера
function userWin() {
    information.innerHTML = "<p>Вы победили!</p>";
    colorGreen();
    centerField.removeChild(arrow);
    let restartGame = document.createElement("button");
    restartGame.classList.add("startGame");
    centerField.appendChild(restartGame);
    restartGame.innerHTML = "<p>Начать заново!</p>";
    firstGame = false;
    restartGame.addEventListener("click",restart);
    soundWin();
}

//расстановка меток на поле
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
    if (xCrackedShip1-xCrackedShip2==0 && ((yCrackedShip2+1<=9 && userField[xCrackedShip2][yCrackedShip2+1].labelShooting == false && yCrackedShip2-1>=0) || (yCrackedShip2-1>=0 && userField[xCrackedShip2][yCrackedShip2-1].labelShooting == false && yCrackedShip2+1<=9))) {
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
    else if (yCrackedShip1-yCrackedShip2==0 && ((xCrackedShip2+1<=9 && userField[xCrackedShip2+1][yCrackedShip2].labelShooting == false && xCrackedShip2-1>=0) || (xCrackedShip2-1>=0 && userField[xCrackedShip2-1][yCrackedShip2].labelShooting == false && xCrackedShip2+1<=9))) {
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
        setTimeout (AttackAIInt,2000);
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
            needToShootToShip=false;
            needToShootToShipSecond = false;
            information.innerHTML = "<p>Ваш однопалубный корабль потопили!</p>";
            soundDeadShip();
            colorRed();
            counterUserShips--;
            if (counterUserShips == 0) {
                AIWin();
            }
            else {
            AttackAI();
            }
            return;
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==2 && userField[xAttackAI][yAttackAI].numberOfThisTypeShip==1) {
            if (Desk2Ship1HealthUser==2) {
            userField[xAttackAI][yAttackAI].classList.add('crackShip');
            userField[xAttackAI][yAttackAI].labelShooting=true;
            shootingXY[0][0]=xAttackAI;
            shootingXY[1][0]=yAttackAI;
            Desk2Ship1HealthUser=1;
            information.innerHTML = "<p>В вас попали!</p>";
            soundCrackShip();
            colorRed();
            AI();
            return;
            }
            else if (Desk2Ship1HealthUser==1) {
                shootingXY[0][1]=xAttackAI;
                shootingXY[1][1]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (2,shootingXY[0][0],shootingXY[1][0],shootingXY[0][1],shootingXY[1][1],0,0,0,0);
                Desk2Ship1HealthUser=0;
                information.innerHTML = "<p>Ваш двухпалубный корабль потопили!</p>";
                colorRed();
                counterUserShips--;
                if (counterUserShips == 0) {
                    AIWin();
                }
                else {
                AttackAI();
                }
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
            information.innerHTML = "<p>В вас попали!</p>";
            soundCrackShip();
            colorRed();
            AI();
            return;
            }
            else if (Desk2Ship2HealthUser==1) {
                shootingXY[0][3]=xAttackAI;
                shootingXY[1][3]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (2,shootingXY[0][2],shootingXY[1][2],shootingXY[0][3],shootingXY[1][3],0,0,0,0);
                Desk2Ship2HealthUser=0;
                information.innerHTML = "<p>Ваш двухпалубный корабль потопили!</p>";
                colorRed();
                counterUserShips--;
                if (counterUserShips == 0) {
                    AIWin();
                }
                else {
                AttackAI();
                }
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
            information.innerHTML = "<p>В вас попали!</p>";
            soundCrackShip();
            colorRed();
            AI();
            return;
            }
            else if (Desk2Ship3HealthUser==1) {
                shootingXY[0][5]=xAttackAI;
                shootingXY[1][5]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (2,shootingXY[0][4],shootingXY[1][4],shootingXY[0][5],shootingXY[1][5],0,0,0,0);
                Desk2Ship3HealthUser=0;
                information.innerHTML = "<p>Ваш двухпалубный корабль потопили!</p>";
                colorRed();
                counterUserShips--;
                if (counterUserShips == 0) {
                    AIWin();
                }
                else {
                AttackAI();
                }
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
            information.innerHTML = "<p>В вас попали!</p>";
            soundCrackShip();
            colorRed();
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
                information.innerHTML = "<p>В вас попали!</p>";
                soundCrackShip();
                colorRed();
                AI();
                return;
                }
            else if (Desk3Ship1HealthUser==1) {
                shootingXY[0][8]=xAttackAI;
                shootingXY[1][8]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (3,shootingXY[0][6],shootingXY[1][6],shootingXY[0][7],shootingXY[1][7],shootingXY[0][8],shootingXY[1][8],0,0);
                Desk3Ship1HealthUser=0;
                information.innerHTML = "<p>Ваш трёхпалубный корабль потопили!</p>";
                colorRed();
                counterUserShips--;
                if (counterUserShips == 0) {
                    AIWin();
                }
                else {
                AttackAI();
                }
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
            information.innerHTML = "<p>В вас попали!</p>";
            soundCrackShip();
            colorRed();
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
                information.innerHTML = "<p>В вас попали!</p>";
                soundCrackShip();
                colorRed();
                AI();
                return;
                }
            else if (Desk3Ship2HealthUser==1) {
                shootingXY[0][11]=xAttackAI;
                shootingXY[1][11]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (3,shootingXY[0][9],shootingXY[1][9],shootingXY[0][10],shootingXY[1][10],shootingXY[0][11],shootingXY[1][11],0,0);
                Desk3Ship2HealthUser=0;
                information.innerHTML = "<p>Ваш трёхпалубный корабль потопили!</p>";
                colorRed();
                counterUserShips--;
                if (counterUserShips == 0) {
                    AIWin();
                }
                else {
                AttackAI();
                }
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
            information.innerHTML = "<p>В вас попали!</p>";
            soundCrackShip();
            colorRed();
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
                information.innerHTML = "<p>В вас попали!</p>";
                soundCrackShip();
                colorRed();
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
                information.innerHTML = "<p>В вас попали!</p>";
                soundCrackShip();
                colorRed();
                AI();
                return;
                    }
            else if (Desk4Ship1HealthUser==1) {
                shootingXY[0][15]=xAttackAI;
                shootingXY[1][15]=yAttackAI;
                userField[xAttackAI][yAttackAI].classList.add('crackShip');
                killShip (4,shootingXY[0][12],shootingXY[1][12],shootingXY[0][13],shootingXY[1][13],shootingXY[0][14],shootingXY[1][14],shootingXY[0][15],shootingXY[1][15]);
                Desk4Ship1HealthUser=0;
                information.innerHTML = "<p>Ваш четырёхпалубный корабль потопили!</p>";
                colorRed();
                counterUserShips--;
                if (counterUserShips == 0) {
                    AIWin();
                }
                else {
                AttackAI();
                }
                return;
                }
        }
        else if (userField[xAttackAI][yAttackAI].shipIsHere==0) {
            userField[xAttackAI][yAttackAI].labelShooting=true;
            userField[xAttackAI][yAttackAI].classList.add('FailShot');
            information.innerHTML = "<p>В ваш корабль не попали!</p>";
            colorGreen();
            if (needToShootToShip == true && needToShootToShipSecond == false) {
                xAttackAI=xCrackedShip1;
                yAttackAI=yCrackedShip1;
            }
            else if (needToShootToShip == true && needToShootToShipSecond == true) {
                xAttackAI=xCrackedShip2;
                yAttackAI=yCrackedShip2;
            } 
            soundFailClick();
            setTimeout (AttackUser,2000);
            return;
        }
    
    }

}

function AIWin() {
    for (let i=0;i<=9;i++){
        for (let j=0;j<=9;j++){
            if (field[i][j].shipIsHere!=0 && field[i][j].labelShooting==false) {
                field[i][j].classList.add("notCrackedShip");
            }
        }
    }
    information.innerHTML = "<p>Вы проиграли!</p>";
    colorRed();
    centerField.removeChild(arrow);
    let restartGame = document.createElement("button");
    restartGame.classList.add("startGame");
    centerField.appendChild(restartGame);
    restartGame.innerHTML = "<p>Начать заново!</p>";
    firstGame = false;
    restartGame.addEventListener("click",restart);
    soundFail();
}

//функция для потопления корабля
function killShip(deskShip,x1,y1,x2,y2,x3,y3,x4,y4) {
    soundDeadShip();
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

//функция для перезапуска игры
function restart() {
    container.removeChild(containerInt);
    runningGame = false;
    soundPirates();
    SEA_BATTLE_GAME();
}
}

