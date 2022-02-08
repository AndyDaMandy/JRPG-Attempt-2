//https://github.com/ZaDarkSide/simpleStorage
//Things that need to be done:
//inventory stays open when you start battle mode...
//level-up system.
//Again for some reason Marie cast fire and it just used attack...Unsure why
//unable to select and properly remove last item...
//items do not get removed properly from inventory
//Enemies can do negative damage if your hp is too high.
//need to add new levels of course
//skills need to show support abilities.
//Characters go here. chp and chmp are "current hp and mp" respectively
let ando = {
  name: "Ando",
  level: 1,
  hp: 10,
  chp: 10,
  mp: 5,
  cmp: 5,
  pAtk: 10,
  pDef: 5,
  mAtk: 1,
  mDef: 2,
  exp: 0,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: "Test",
  type: "player"
  };
let marie = {
  name: "Marie",
  level: 1,
  hp: 8,
  chp: 8,
  mp: 10,
  cmp: 10,
  pAtk: 5,
  pDef: 2,
  mAtk: 10,
  mDef: 5,
  exp: 0,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: "Test",
  type: "player"
  };
let julie = {
  name: "Julie",
  level: 1,
  hp: 11,
  chp: 11,
  mp: 3,
  cmp: 3,
  pAtk: 10,
  pDef: 1,
  mAtk: 1,
  mDef: 1,
  exp: 0,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: "Test",
  type: "player"
  };
//===================================
/*
Elements, the elemental system is system. Fire and ice are opposites, thunder/water are opposites.
*/
//==================================
const iceEl = {
  element: "Ice",
  des: "Ice Element, strong against Fire"
  };
const fireEl = {
  element: "Fire",
  des: "Fire Element, strong against Ice."
  };
const thunEl = {
  element: "Thunder",
  des: "Thunder Element, strong against Water."
  };
const watEl = {
  element: "Water",
  des: "Water Element, strong against Thunder"
  };
//========================================
//enemies go here
const iceman = {
  name: "Ice Man",
  level: 1,
  hp: 8,
  mp: 5,
  pAtk: 1,
  pDef: 1,
  mAtk: 1,
  mDef: 1,
  weakness: fireEl,
  exp: 1,
  eSkills: [],
  type: "enemy"
  };
const goblin = {
  name: "Goblin",
  level: 1,
  hp: 8,
  mp: 5,
  pAtk: 1,
  pDef: 1,
  mAtk: 1,
  mDef: 1,
  weakness: watEl,
  exp: 1,
  eSkills: [],
  type: "enemy"
  };
const potatoThief = {
  name: "Potato Thief",
  level: 1,
  hp: 10,
  mp: 5,
  pAtk: 1,
  pDef: 1,
  mAtk: 1,
  mDef: 1,
  exp: 1,
  eSkills: [],
  type: "enemy"
  };
const livingTree = {
  name: "Living Tree",
  level: 1,
  hp: 70,
  mp: 5,
  pAtk: 9,
  pDef: 4,
  mAtk: 1,
  mDef: 1,
  exp: 15,
  eSkills: [],
  type: "enemy"
  };
//============================
//Skills
//===========================
const fire = {
  name: "Fire",
  type: "Magic",
  element: fireEl,
  des: "Hits enemy with magic-based fire damage",
  pow: 2,
  cost: 3
  };
const basher = {
  name: "Basher",
  type: "Physical",
  des: "Deals phsyical damage to 1 enemy",
  pow: 2,
  cost: 3
  };
const iceSlash = {
  name: "Ice Slash",
  type: "Physical",
  des: "Deals phsyical and ice damage to 1 enemy",
  element: iceEl,
  pow: 1,
  cost: 2
  };
const waterArrow = {
  name: "Water Arrow",
  type: "Physical",
  des: "Deals phsyical and water damage to 1 enemy",
  element: watEl,
  pow: 1,
  cost: 2
  };
const cure = {
  name: "Cure",
  type: "Healing",
  des: "Heals target character for 5 HP",
  element: watEl,
  pow: 5,
  cost: 2
  };
const atkBoost = {
  name: "Attack Boost",
  type: "Attack Buff",
  des: "Boosts attack for 1 turn.",
  pow: 1,
  cost: 2
  };
const defBoost = {
  name: "Defense Boost",
  type: "Defense Buff",
  des: "Boosts attack for 1 turn.",
  pow: 1,
  cost: 2
  };
//======================================
//Items go here
const potion = {
  name: "Potion",
  type: "Healing",
  des: "Heals 5 points of HP.",
  effect: 5,
  cost: 5
  };
const magicPotion = {
  name: "Magic Potion",
  type: "mHealing",
  des: "Heals 5 points of MP.",
  effect: 5,
  cost: 5
  };
const revivalPotion = {
  name: "Revival Potion",
  type: "Revival",
  des: "Revives ally with 5 points of hp.",
  effect: 5,
  cost: 5
  };
//=======================================
// Weapons go here
const woodSword = {
  name: "Wooden Sword",
  type: "Sword",
  des: "A basic wooden sword",
  atr: "Physical",
  el: fireEl,
  pow: 1
  };
const woodStaff = {
  name: "Wooden Staff",
  type: "Staff",
  des: "A basic Staff",
  atr: "Magical",
  pow: 1
  };
const woodBow = {
  name: "Wooden Bow",
  type: "Bow",
  des: "A basic Bow and Arrow set",
  atr: "Physical",
  pow: 1
  };
const ironSword = {
  name: "Iron Sword",
  type: "Sword",
  des: "An iron sword",
  atr: "Physical",
  pow: 3
  };
//======================================
//Menu items
function showStats (x) {
  const element = document.getElementById("stats-menu");
  let stats = document.getElementById("party-status")
  let statsLog = document.getElementById("menu-items");
  let statsLine = document.getElementById("stats-line");
  //checks if this has been run before and clears the content ahead of it.
  if (statsLog != ""){
  
  statsLog.innerHTML = "";
  }
  stats.innerHTML ="Your current party: " + x[0].name + ", " + x[1].name + ", " + x[2].name;
  document.getElementById("line-1").innerHTML = "Here are their stats:";
  for (let i = 0; i < currentParty.length; i++){
    let li = document.createElement("li");
    li.innerHTML = "Name: " + x[i].name;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "Level: " + x[i].level;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "Weapon: " + x[i].weapon.name + " - " + "Type: " + x[i].weapon.type + " - " + "Attribute: " + x[i].weapon.atr + " - " + x[i].weapon.des + " Power: " + x[i].weapon.pow;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "HP: " + x[i].hp;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "MP: " + x[i].mp;
      statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Physical Attack: " + x[i].pAtk;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Physical Defense: " + x[i].pDef;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Magic Attack: " + x[i].mAtk;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Magic Defense: " + x[i].mDef;
     statsLog.appendChild(li);
      li = document.createElement("li");
  let skillsList = [];
    for (let b = 0; b < x[i].skills.length; b++){
      skillsList.push(x[i].skills[b].name);
    };
   let joined = skillsList.join(", ");
    li.innerHTML = "Skills: " + joined;       
    statsLog.appendChild(li);
  };
  statsLine.hidden = false;
  };
function showInventory() {
  let inventorySlot = document.getElementById("inventory-items");
  if (inventorySlot != ""){
  
    inventorySlot.innerHTML = "";
  }
  let inventoryMenu = document.getElementById("inventory-menu");
  let pusher = function (item) { 
    let li = document.createElement("li");
    li.innerHTML = item.name + ": " + "Type: " + item.type + " - " + item.des;
    inventorySlot.appendChild(li)};
    inventory.forEach(pusher);
  inventoryMenu.hidden = false;
  document.getElementById("close-menu").hidden = false;
  };
function save () {
  simpleStorage.set("ando",  JSON.stringify(ando));
  simpleStorage.set("marie", JSON.stringify(marie));
  simpleStorage.set("julie", JSON.stringify(julie));
  simpleStorage.set("currentParty", currentParty);
  simpleStorage.set("inventory", inventory);
  simpleStorage.set("money", money);
  simpleStorage.set("gamestate", gameState);
  simpleStorage.set("gamecheck", gameCheck);
  document.getElementById("save-menu").hidden = false;
  };
//Global shop variables
  let shop = document.getElementById("shop");
  let moneyShow = document.getElementById("money");
  let shopButton = document.getElementById("shop-button");
function openShop(){
  moneyShow.innerHTML = "$" + money;
  shop.hidden = false;
  shopFlow();
  openMenu(); 
  showInventory();
  };
function closeShop() {
  shop.hidden = true;
  };
//=======================================
//======================================
//Menu functionality, must go below each menu item
let menu = document.getElementById("open-menu");
function openMenu(){
  document.getElementById("save-button").hidden = false;
  document.getElementById("inventory-button").hidden = false;
  document.getElementById("show-stats").hidden = false;
  document.getElementById("close-menu").hidden = false;
  };
function closeMenu() {
  document.getElementById("save-button").hidden = true;
  //inventory
  document.getElementById("inventory-button").hidden = true;
  document.getElementById("inventory-menu").hidden = true;
  document.getElementById("inventory-items").innerHTML = "";
  //party stats
    document.getElementById("show-stats").hidden = true;
    document.getElementById("party-status").innerHTML = "";
    document.getElementById("line-1").innerHTML = "";
    document.getElementById("menu-items").innerHTML = "";
  //hide save
  document.getElementById("save-menu").hidden = true;
  document.getElementById("close-menu").hidden = true;
  };
/*
The game will go through "Areas", each one being a div. Each Div will be a town/level or pass through. By toggling the hidden property in html we can hide the divs as necessary. The progression will be linear, at least for now....
A gamestate value will be assigned to each area/location, thus allowing the travel function to take you through each level. Battles will include a statepost variable which decides where the battle takes you afterward.
*/
//Battle Mode
let battleState = 0;
//global variable that holds enemy hp for targetting
let enHp = [];
let pHp = [];
let pMp = [];
//dead party global variable
let deadTeam = [];
const battleMode = document.getElementById("battle-mode");
const commands = document.getElementById("commands");
const enemyPlace = document.getElementById("enemies");
const partyPlace = document.getElementById("party");
const info = document.getElementById("info");
const end = document.getElementById("end");
let holder = document.getElementById("p-stats");
const change = document.getElementById("p-com");
let pStats = document.getElementById("p-stats");
let itemSlot = document.getElementById("item-slot");
let skillSlot = document.getElementById("skill-slot");
let choice = 0;
//all those variables are id selectors.
//calcs go above battle func
// targetting functions go above the battle selectors
function checkLose(){
  if (currentParty.length < 1){
    battleMove(8);
    }  else {
      battleMove(1);
    }
  };
function checkWin(){
  if (enemyParty.length < 1){
    battleMove(0);
    }
  };
function backBtn (x){
  let back = document.createElement("button");
    back.innerHTML = "Back";
    back.addEventListener('click', function (y) {y = x; info.innerHTML = ""; battleMove(y)});
    change.appendChild(back);
  };
function targetBtn(partymem, target, flow, skill,){
  change.innerHTML = "";
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  if (skill != undefined){
    if (enemyParty.length === 1){
    let btn1 = document.createElement("button");
      btn1.innerHTML = enemyParty[0].name;
     btn1.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, flow1, skill1);});
      change.appendChild(btn1);
      } 
    if (enemyParty.length === 2){
    let btn1 = document.createElement("button");
      btn1.innerHTML = enemyParty[0].name;
      btn1.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, flow1, skill1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.innerHTML = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, flow1, skill1);});
        change.appendChild(btn2);
      } 
    if (enemyParty.length === 3){
      let btn1 = document.createElement("button");
      btn1.innerHTML = enemyParty[0].name;
      btn1.addEventListener('click', function () { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, flow1, skill1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.innerHTML = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, flow1, skill1);});
        change.appendChild(btn2);
          let btn3 = document.createElement("button");
          btn3.innerHTML = enemyParty[2].name;
          btn3.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; flow1 = flow;attackCalc(partymem, 0, flow1, skill1);});
          change.appendChild(btn3);
      }
  } else {
 if (enemyParty.length === 1){
   let btn1 = document.createElement("button");
    btn1.innerHTML = enemyParty[0].name;
    btn1.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 0, flow1);});
    change.appendChild(btn1);
  } 
 if (enemyParty.length === 2){
    let btn1 = document.createElement("button");
      btn1.innerHTML = enemyParty[0].name;
      btn1.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 0, flow1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.innerHTML = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 1, flow1);});
        change.appendChild(btn2);
      } 
  if (enemyParty.length === 3){
      let btn1 = document.createElement("button");
      btn1.innerHTML = enemyParty[0].name;
      btn1.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 0, flow1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.innerHTML = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 1, flow1);});
        change.appendChild(btn2);
          let btn3 = document.createElement("button");
          btn3.innerHTML = enemyParty[2].name;
          btn3.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 2, flow1);});
          change.appendChild(btn3);
    }
  }
  };

function attackCalc (char, target, flow, skill, cost){
  //flow passes from targetBtn
  // the overall calculations need work.
  info.innerHTML = "";
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
    }
  //branch for skill
    if (skill != undefined){
      char.cmp -= skill.cost;
      if (skill.type === "Magic"){
        let pa = char.mAtk + skill.pow - enemyParty[target].mDef;
        pa -= 2;
        let minpa = pa - 4;
        let thp = enHp[target];
        let damage = clamp(pa, minpa, pa);
        let final = thp - damage ;
        if (final <= 0) {
          let p3 = document.createElement("p");
          p3.innerHTML = char.name + " cast " + skill.name + "!"
          info.appendChild(p3)
          let p = document.createElement("p");
          p.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
          info.appendChild(p);
          let p2 = document.createElement("p");
          p2.innerHTML = enemyParty[target].name + "'s has been defeated!";
          info.appendChild(p2);
          enemyParty.splice(target, 1);
          enHp.splice(target, 1);
          battleMove(flow)
          } else {
                let p6 = document.createElement("p");
                p6.innerHTML = char.name + " cast " + skill.name + "!"
                info.appendChild(p6);
                let p3 = document.createElement("p");
                enHp[target] = thp - damage;
                p3.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
              }
      } if (skill.type === "Physical"){
          let pa = char.pAtk + char.buff[0].pow + skill.pow - enemyParty[target].pDef;
          let thp = enHp[target];
          pa -= 2;
          let minpa = pa - 4;
          let damage = clamp(pa, minpa, pa);
          let final = thp - damage ;
            if (final <= 0) {
              let p6 = document.createElement("p");
              p6.innerHTML = char.name + " used " + skill.name + "!"
              info.appendChild(p6);
              let p = document.createElement("p");
              p.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
              info.appendChild(p);
              let p2 = document.createElement("p");
              p2.innerHTML = enemyParty[target].name + "'s has been defeated!";
              info.appendChild(p2);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              battleMove(flow)
              } else {
                let p6 = document.createElement("p");
                p6.innerHTML = char.name + " used " + skill.name + "!"
                info.appendChild(p6);
                let p3 = document.createElement("p");
                enHp[target] = thp - damage;
                p3.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
                  }
          } 
  }
  else {
          let pa = char.pAtk + char.buff[0].pow + char.weapon.pow - enemyParty[target].pDef;
          let thp = enHp[target];
          let minpa = pa - 4;
          pa -= 2;
          let damage = clamp(pa, minpa, pa);
          let final = thp - damage ;
          if (final <= 0) {
            let p = document.createElement("p");
              p.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
              info.appendChild(p);
            let p2 = document.createElement("p");
              p2.innerHTML = enemyParty[target].name + "'s has been defeated!";
              info.appendChild(p2);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              battleMove(flow)
            } else {
                let p3 = document.createElement("p");
                enHp[target] = thp - damage;
                p3.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
                }
            }
    };
function deathCheck(){
    //death
  //all 3 dead
    if (currentParty.length === 3 && currentParty[2].chp <= 0 && currentParty[1].chp <= 0 && currentParty[0].chp <= 0){
      let playerD = currentParty.splice(1, 1);
      let player0 =  currentParty.splice(0, 1);
      let player3 = currentParty.splice(2, 1);
      deadTeam.push(player3)
      deadTeam.push(playerD);
      deadTeam.push(player0);
    } 
    //just p3 and p2 die.
    else if (currentParty.length === 3 && currentParty[2].chp <= 0 && currentParty[1].chp <= 0){
      let player3 = currentParty.splice(2, 1);
       let playerD = currentParty.splice(1, 1);
      deadTeam.push(playerD)
      deadTeam.push(player3)
    }
    //just p3 and p1
    else if (currentParty.length === 3 && currentParty[2].chp <= 0 && currentParty[0].chp <= 0){
      let player3 = currentParty.splice(2, 1);
       let player0 = currentParty.splice(0, 1);
      deadTeam.push(player0)
      deadTeam.push(player3)
    }
    //just p2 and p1 die
    else if (currentParty.length === 3 && currentParty[0].chp <= 0 && currentParty[1].chp <= 0){
      let player0 = currentParty.splice(0, 1);
       let playerD = currentParty.splice(1, 1);
      deadTeam.push(playerD)
      deadTeam.push(player0)
    }
    //just p1 dies 
    else if (currentParty.length === 3 && currentParty[0].chp <= 0) {
        let player0 = currentParty.splice(0, 1);
      deadTeam.push(player0);
    }
    //just p2 dies
    else if (currentParty.length === 3 && currentParty[1].chp <= 0) {
        let playerD = currentParty.splice(1, 1);
      deadTeam.push(playerD);
    }
    //just p3 dies
    else if (currentParty.length === 3 && currentParty[2].chp <= 0){
      let player3 = currentParty.splice(2, 1);
      deadTeam.push(player3)
    }
    //if party has two left and both die.
    else if (currentParty.length === 2 && currentParty[1].chp <= 0 && currentParty[0].chp <= 0){
     let playerD = currentParty.splice(1, 1);
     let player0 =  currentParty.splice(0, 1);
      deadTeam.push(playerD);
      deadTeam.push(player0);
    }
    // if party is two and p1 dies.
     else if (currentParty.length === 2 && currentParty[1].chp <= 0){
      let playerD =  currentParty.splice(1, 1);
      deadTeam.push(playerD);
    } 
    //if party is two and p1 dies.
    else if (currentParty.length === 2 && currentParty[0].chp <= 0){
      let playerD =  currentParty.splice(0, 1);
    }
    // if p1 dies
    else if (currentParty.length === 1 && currentParty[0].chp <= 0){
    let playerD =  currentParty.splice(0, 1);
    deadTeam.push(playerD);
    }
    console.log(currentParty);
    console.log(deadTeam);
  };
function enemCalc (){
  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
    }
    function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
    }
  let enPow = [];
  let teamLength = currentParty.length;
    function pusher1 (x){enPow.push(x.pAtk)};
    enemyParty.forEach(pusher1);
    let enLength = enPow.length;
    for (let i = 0; i < enPow.length; i++){
      let target = currentParty[getRandomInt(teamLength)];
      let attacker = enemyParty[getRandomInt(enLength)];
      let attackerDam = attacker.pAtk;
      //if buff is off, then buff = 0, thus not changing much.
      let damage = target.pDef + target.buff[1].pow - attackerDam + 2;
      let damageRange = clamp(damage, damage, damage+1);
      target.chp = target.chp - damageRange;
      let damageRes = document.createElement("p");
      damageRes.innerHTML = target.name + " was hit by " + attacker.name + " for " + damage + " damage!";
      info.appendChild(damageRes);
    }
    deathCheck();
  };
let skillChoice;
let supportChoice;
function skillBtnGen(partymem, flow, supflow) {
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  let pBad = document.createElement("p");
    pBad.innerHTML = "Not enough MP!";
  let closer1 = document.createElement("button");
    closer1.innerHTML = "Close Skill List";
    closer1.addEventListener('click', function () {skillSlot.innerHTML = "";});
  skillSlot.appendChild(closer1);
  //healing branch, makes use of the item battle-flow for targeting and then uses a heal calc function. 
    //Support flow added here
  //attack items will be their own class of item as well.
  if (partymem.support.length > 0){
        function pusher2 (sup) {
          let btn2 = document.createElement("button");
          btn2.innerHTML = sup.name + " - Cost: " + sup.cost;
          if (sup.cost > partymem.cmp){
          btn2.addEventListener('click', function (){
          info.appendChild(pBad)})
          skillSlot.appendChild(btn2);
      } else {
        btn2.addEventListener('click', function (x) {x = sup; supportChoice = x; choice = 1; battleMove(supflow);});
        skillSlot.appendChild(btn2);
      }
    }
    partymem.support.forEach(pusher2);
  }
  function pusher (skill) {
  let btn1 = document.createElement("button");
  btn1.innerHTML = skill.name + " - Cost: " + skill.cost;
  if (skill.cost > partymem.cmp){
    btn1.addEventListener('click', function (){
    info.appendChild(pBad)})
    skillSlot.appendChild(btn1);
  } else {
  btn1.addEventListener('click', function (x) {x = skill; skillChoice = x; battleMove(flow); choice = 1;});
  skillSlot.appendChild(btn1);
      }
  }
  partymem.skills.forEach(pusher);
  };
function supTarget (caster, sup, supflow){
  change.innerHTML = "";
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  //needs a caster parameter based on the battleflow?
  //pulls target MP away atm
  if (currentParty.length === 1){
  let btn = document.createElement("button");
  btn.innerHTML = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[0]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y); choice = 1;})
  skillSlot.appendChild(btn);
  }
    if (currentParty.length === 2) {
  let btn = document.createElement("button");
  btn.innerHTML = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[0]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);})
  skillSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.innerHTML = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[1]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);;})
    skillSlot.appendChild(btn1);
    } if (currentParty.length === 3){
      let btn = document.createElement("button");
        btn.innerHTML = currentParty[0].name;
        btn.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[0]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);})
        skillSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.innerHTML = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[1]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);})
    skillSlot.appendChild(btn1);
    let btn2 = document.createElement("button");
    btn2.innerHTML = currentParty[2].name;
    btn2.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[2]; supportChioice = x; battleMove(y); a = caster; supCalc(a, z, x, y);;})
    skillSlot.appendChild(btn2);
    }
  };
function supCalc(caster, partymem, sup, supflow){
  info.innerHTML = "";
  skillSlot.innerHTML = "";
  caster.cmp -= sup.cost;
  if (sup.type === "Healing"){
    partymem.chp += sup.pow;
      if (partymem.chp > partymem.hp){
      partymem.chp = partymem.hp;
      let pheal = document.createElement("p")
      pheal.innerHTML = partymem.name + "'s HP was fully healed! Their HP is now full";
      info.appendChild(pheal);
      loadPartyInfo();
        } else {
        let pheal = document.createElement("p")
        pheal.innerHTML = partymem.name + "'s HP is now: " + partymem.chp + "/" + partymem.hp;
        info.appendChild(pheal);
        loadPartyInfo();
        }
    } if (sup.type === "Attack Buff"){
      if (partymem.buff[0].on === false){
        partymem.buff[0].pow += sup.pow;
        partymem.buff[0].on = true;
        let pbuff = document.createElement("p")
        pbuff.innerHTML = partymem.name + "'s Attack has been boosted!";
        info.appendChild(pbuff);
        loadPartyInfo();
        } else {
          let pbuff = document.createElement("p")
          pbuff.innerHTML = partymem.name + "'s Attack has already been boosted! It had no effect.";
          info.appendChild(pbuff);
        }
    } if (sup.type === "Defense Buff") {
       if (partymem.buff[1].on === false){
        partymem.buff[1].pow += sup.pow;
        partymem.buff[1].on = true; 
        let pbuff = document.createElement("p")
        pbuff.innerHTML = partymem.name + "'s Defense has been boosted!";
        info.appendChild(pbuff);
        loadPartyInfo();
       } else {
         let pbuff = document.createElement("p")
        pbuff.innerHTML = partymem.name + "'s Defense has already been boosted! It had no effect.";
        info.appendChild(pbuff);
        loadPartyInfo();
       }
    }
  };
function itemTarget (item, flow){
  //selects target
  debugger;
  change.innerHTML = "";
  itemSlot.innerHTML = "";
  skillSlot.innerHTML = "";
 if (currentParty.length === 1){
  let btn = document.createElement("button");
  btn.innerHTML = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
  itemSlot.appendChild(btn);
  }
    if (currentParty.length === 2) {
  let btn = document.createElement("button");
  btn.innerHTML = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
  itemSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.innerHTML = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[1]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
    itemSlot.appendChild(btn1);
    } if (currentParty.length === 3){
      let btn = document.createElement("button");
        btn.innerHTML = currentParty[0].name;
        btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
        itemSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.innerHTML = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[1]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
    itemSlot.appendChild(btn1);
    let btn2 = document.createElement("button");
    btn2.innerHTML = currentParty[2].name;
    btn2.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[2]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
    itemSlot.appendChild(btn2);
    }
   };
function itemCalc(partymem, item, flow){
  debugger;
  info.innerHTML = "";
  itemSlot.innerHTML = "";
  if (item.type === "Healing"){
   partymem.chp += item.effect;
    if (partymem.chp > partymem.hp){
      partymem.chp = partymem.hp;
      let pheal = document.createElement("p")
      pheal.innerHTML = partymem.name + "'s HP was fully healed! Their HP is now full";
      info.appendChild(pheal);
      loadPartyInfo();
    } else {
      let pheal = document.createElement("p")
      pheal.innerHTML = partymem.name + "'s HP is now: " + partymem.chp + "/" + partymem.hp;
      info.appendChild(pheal);
      loadPartyInfo();
    }
  } if (item.type === "mHealing"){
  partymem.cmp += item.effect;
    if (partymem.cmp > partymem.mp){
      partymem.cmp = partymem.mp;
      let pheal = document.createElement("p")
      pheal.innerHTML = partymem.name + "'s MP was fully healed! Their MP is now full";
      info.appendChild(pheal);
      loadPartyInfo();
    } else {
      let pheal = document.createElement("p")
      pheal.innerHTML = partymem.name + "'s MP is now: " + partymem.cmp + "/" + partymem.mp;
      info.appendChild(pheal);
      loadPartyInfo();
    }
  }
  inventory.splice(itemPos-1, 1);
  };
let itemChoice;
let itemPos;
function itemBtnGen (flow){
  debugger;
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  let closer = document.createElement("button");
  closer.innerHTML = "Close Item List";
  closer.addEventListener('click', function () {itemSlot.innerHTML = "";});
  itemSlot.appendChild(closer);
  let count = 0;
  function pusher (item) {
  let btn = document.createElement("button");
  btn.innerHTML = item.name;
  btn.addEventListener('click', function (x, y, z) {x = item; itemChoice = x; y = flow; z = count; itemPos = z; battleMove(y);});
  itemSlot.appendChild(btn);
  count++;
  };
  inventory.forEach(pusher);

  };
function levelUp(char){
  //at the moment this simply checks if you hit 3 exp. More level intervals will be needed. Adds stats accordingly.
  if (char.exp >= 3 && char.level < 2){
    char.level += 1;
    char.hp += 1;
    char.chp += 1;
    char.mp += 1;
    char.pDef += 1;
    char.mDef += 1;
    char.pAtk += 1;
    char.mAtk += 1;
    char.pDef += 1;
    char.mDef += 1;
    let leveluptext = document.createElement("p");
    leveluptext.innerHTML = char.name + " leveled up! Their level is now: " + char.level + "!" ;
    info.appendChild(leveluptext);
  } if (char.exp >= 20 && char.level < 3){
    char.level += 1;
    char.hp += 1;
    char.chp += 1;
    char.mp += 1;
    char.pDef += 1;
    char.mDef += 1;
    char.pAtk += 1;
    char.mAtk += 1;
    char.pDef += 1;
    char.mDef += 1;
    let leveluptext = document.createElement("p");
    leveluptext.innerHTML = char.name + " leveled up! Their level is now: " + char.level + "!" ;
    info.appendChild(leveluptext);
  }
  if (char.exp >= 40 && char.level < 4){
    char.level += 1;
    char.hp += 1;
    char.chp += 1;
    char.mp += 1;
    char.pDef += 1;
    char.mDef += 1;
    char.pAtk += 1;
    char.mAtk += 1;
    char.pDef += 1;
    char.mDef += 1;
    let leveluptext = document.createElement("p");
    leveluptext.innerHTML = char.name + " leveled up! Their level is now: " + char.level + "!" ;
    info.appendChild(leveluptext);
  }
  };
function clearBattle() {
  partyPlace.innerHTML = "";
  holder.innerHTML = "";
  adv.hidden = false;
  battleState = 0;
  battleMode.hidden = true;
  mainMenu.hidden = false;
  currentParty = [ando, marie, julie];
  ando.chp = ando.hp;
  ando.cmp = ando.mp;
  marie.chp = marie.hp;
  marie.cmp = marie.mp;
  julie.cmp = julie.mp;
  julie.chp = julie.mp;
  ando.buff[0].pow = 0;
  marie.buff[0].pow = 0;
  julie.buff[0].pow = 0;
  ando.buff[0].on = false;
  marie.buff[0].on = false;
  julie.buff[0].on = false;
  ando.buff[1].pow = 0;
  marie.buff[1].pow = 0;
  julie.buff[1].pow = 0;
  ando.buff[1].on = false;
  marie.buff[1].on = false;
  julie.buff[1].on = false;
  };
let statePost = 0;
function endBattle(loc) {
 // if (enemyParty.length === 0) {};
 let endButton = document.createElement("button");
 endButton.innerHTML = "End Battle";
 endButton.addEventListener('click', function (x) {x = loc; clearBattle(); move(statePost)});
 end.appendChild(endButton);
  };
//atm battle mode will hold the location value for endBattle;
function loadEnemyInfo(){
  //loads enemy info dynamically updating.
  enemyPlace.innerHTML = "";
  end.innerHTML = "";
   if (enemyParty.length === 1){
    let p = document.createElement("h4");
    p.innerHTML = "Enemies: " + enemyParty[0].name;
    enemyPlace.appendChild(p);
  //  enHp.push(enemyParty[0].hp);
    };
    if (enemyParty.length === 2) {
       let p = document.createElement("h4");
        p.innerHTML = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name;
        enemyPlace.appendChild(p);
      //  enHp.push(enemyParty[0].hp);
      //  enHp.push(enemyParty[1].hp);
      };
    if (enemyParty.length === 3) {
       let p = document.createElement("h4");
        p.innerHTML = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name + ", " + enemyParty[2].name;
        enemyPlace.appendChild(p);
      //  enHp.push(enemyParty[0].hp);
      //  enHp.push(enemyParty[1].hp);
      //  enHp.push(enemyParty[2].hp);
      };
      console.log(enHp);
  };
function loadPartyInfo(){
  partyPlace.innerHTML = "";
  holder.innerHTML = "";
  if (currentParty.length === 1){
    let p2 = document.createElement("h4");
    p2.innerHTML = "Party: " + currentParty[0].name;
    partyPlace.appendChild(p2);
    let partystat = document.createElement("li");
    partystat.innerHTML = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);
  } if (currentParty.length === 2) {
  let p2 = document.createElement("h4");
  p2.innerHTML = "Party: " + currentParty[0].name + ", " + currentParty[1].name;
  partyPlace.appendChild(p2);
    let partystat = document.createElement("li");
    partystat.innerHTML = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    let partystat1 = document.createElement("li");
    partystat1.innerHTML = currentParty[1].name + " HP: " + currentParty[1].chp + "/" + currentParty[1].hp + " - MP: " + currentParty[1].cmp + "/" + currentParty[1].mp;
    holder.appendChild(partystat1);
    pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);pHp.push(currentParty[1].hp); pMp.push(currentParty[1].mp);
  } if (currentParty.length === 3){
    let p3 = document.createElement("h4");
    p3.innerHTML = "Party: " + currentParty[0].name + ", " + currentParty[1].name + ", " + currentParty[2].name;
    partyPlace.appendChild(p3);
    let partystat = document.createElement("li");
    partystat.innerHTML = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    let partystat1 = document.createElement("li");
    partystat1.innerHTML = currentParty[1].name + " HP: " + currentParty[1].chp + "/" + currentParty[1].hp + " - MP: " + currentParty[1].cmp + "/" + currentParty[1].mp;
    holder.appendChild(partystat1);
    let partystat2 = document.createElement("li");
    partystat2.innerHTML = currentParty[2].name + " HP: " + currentParty[2].chp + "/" + currentParty[2].hp + " - MP: " + currentParty[2].cmp + "/" + currentParty[2].mp;
    holder.appendChild(partystat2);
      pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);pHp.push(currentParty[1].hp); pMp.push(currentParty[1].mp);pHp.push(currentParty[2].hp); pMp.push(currentParty[2].mp);
  }
  };
let expGain = 0;
function battle(en, location) {
  //battleState controls battle flow and button creation.
  adv.hidden = true;
  battleState = 1;
  battleMode.hidden = false;
  mainMenu.hidden = true;
  enemyParty = en;
  enHP = [];
  pHp = [];
  pMp = [];
  change.innerHTML = "";
  info.innerHTML = "";
  if (enemyParty.length === 1){
    enHp.push(enemyParty[0].hp);
    };
    if (enemyParty.length === 2) {
        enHp.push(enemyParty[0].hp);
        enHp.push(enemyParty[1].hp);
      };
    if (enemyParty.length === 3) {
        enHp.push(enemyParty[0].hp);
        enHp.push(enemyParty[1].hp);
        enHp.push(enemyParty[2].hp);
      };
  loadEnemyInfo();
  loadPartyInfo();
  for (let i = 0; i < en.length; i++){
    expGain += en[i].exp;
  };
  console.log(expGain);
  // start phase
  let p3 = document.createElement("p");
  p3.innerHTML = enemyParty.length + " enemies appeared!"
  info.appendChild(p3);
  battleMove(battleState);
  // Phase 1
  //sets each button to move forward with phase 1
  //loads character party as is and adds as new elements
  //loads functions for level up and such
  //final function hides buttons, etc.
  //There needs to be a way to return to the previous state once a battle is open, perhaps a new button opens up
  //Choice will hold the choice of attack as 0
  //choice will hold the choice of skill as 1
  //choice will hold the choice of item as 2
  };
let target = 0;
function battleMove(x) {
  if (x === 0){
   change.innerHTML = "";
   // info.innerHTML = "";
    holder.innerHTML = "";
    partyPlace.innerHTML = "";
    let win = document.createElement("p");
    win.innerHTML = "All enemies defeated! Congrats!";
    info.appendChild(win);
    let expInfo = document.createElement("p");
    expInfo.innerHTML = "All allies gained +" + expGain + " experience points!";
    info.appendChild(expInfo);
      function expGainer(x){
        x.exp += expGain;
      };
    currentParty.forEach(expGainer);
    currentParty.forEach(levelUp);
    endBattle();
  };
  //player 1 turn
  if (x === 1){
      change.innerHTML = "";
      info.innerHTML = ""
      skillSlot.innerHTML = "";
      itemSlot.innerHTML = "";
      skillChoice = "";
      supportChoice = "";
      let p4 = document.createElement("p");
      p4.innerHTML = currentParty[0].name + "'s turn. " + "Please select a command: ";
      info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.innerHTML = "Attack";
      atkbtn.addEventListener('click', function (){choice = 0; battleMove(2);});
      let skl = document.createElement("button");
      //sets up skill menu/closing buttons.
      skl.innerHTML = "Skills";
        skl.addEventListener('click', function () {choice = 1; skillBtnGen(currentParty[0], 2, 9);});
      //adds open menu branch
      let itm = document.createElement("button");
        itm.innerHTML = "Items";
        itm.addEventListener('click', function (){choice = 2; itemBtnGen(9);})
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
      
  };
  //p1 target selection, uses targetBtn
  if (x === 2){
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    if (choice === 0){
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[0], enHp, 3);
      backBtn(1); 
    } if (choice === 1){
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[0], enHp, 3, skillChoice);
      backBtn(1); 
    }
  };
  //p1 damage calculation phase, will include a button to flow to the next part.
  if (x === 3){
    //removes previous buttons
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    if (currentParty.length === 1){
      let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(6);});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
        
    } else {
    //creates foward button and displays the info from the calculator
        let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(4);});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
    }
  };
  //starts p2 phase
  if (x === 4){
    //skipped if p2 is dead
    skillSlot.innerHTML = "";
    itemSlot.innerHTML = "";
    change.innerHTML = "";
    info.innerHTML = "";
    skillChoice = "";
    supportChoice = "";
    let p4 = document.createElement("p");
        p4.innerHTML = currentParty[1].name + "'s turn. " + "Please select a command: ";
        info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.innerHTML = "Attack";
      atkbtn.addEventListener('click', function (){choice = 0; battleMove(5);});
      let skl = document.createElement("button");
      skl.innerHTML = "Skills";
      skl.addEventListener('click', function () {choice = 1; skillBtnGen(currentParty[1], 5, 11);});
      let itm = document.createElement("button");
      itm.innerHTML = "Items";
      itm.addEventListener('click', function (){choice = 2; itemBtnGen(11);})
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
  }
  //target phase if party has 2 members
  if (x === 5){
  change.innerHTML = "";
  info.innerHTML = "";
  itemSlot.innerHTML = "";
  skillSlot.innerHTML = "";
    if (choice === 0){
    change.innerHTML = "";
    info.innerHTML = "";
    let p4 = document.createElement("p");
    p4.innerHTML = "Who will you target?";
    info.appendChild(p4);
    skillSlot.innerHTML = "";
    targetBtn(currentParty[1], enHp, 6);
    backBtn(4); 
    } 
    if (choice === 1){
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[1], enHp, 6, skillChoice);
      skillSlot.innerHTML = "";
      backBtn(4); 
    }
  } if (x === 6){
    //removes previous buttons
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    //creates foward button and displays the info from the calculator, checks if battle is won.
    if (currentParty.length === 3){
       let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(13)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
    } else {
        let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
    }
  } if (x === 7) {
    //begins enemy phase
    //needs to only use next buttons based on enemy party size. Needs a "check loss" funciton.
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    let p4 = document.createElement("p");
        p4.innerHTML =  "Enemy turn!";
        info.appendChild(p4);
        enemCalc();
        loadEnemyInfo();
        loadPartyInfo();    
    let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){checkLose();});
        change.appendChild(fwd);
  } 
  //game over
  if (x === 8) {
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    let p = document.createElement("p");
    p.innerHTML = "The party has been defeated. Reload?";
    info.appendChild(p);
    let reload = document.createElement("button");
    reload.innerHTML = "Reload previous save";
    reload.addEventListener('click', function (){load()});
    change.appendChild(reload);
  } 
  //load item targeting, then moves to 10 for item calculation, p1 item choice
  if (x === 9){
    //needs if branch based on party length 
     change.innerHTML = "";
     itemSlot.innerHTML = "";
     skillSlot.innerHTML = "";
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      if (choice === 1){
        supTarget(currentParty[0], supportChoice, 10);
        backBtn(1);
      } else {
      itemTarget(itemChoice, 10); 
      backBtn(1);
        }    
  }
  //calculates item and shows results and then moves to next phase or enemy phase....P1
  if (x === 10){
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    //creates foward button and displays the info from the calculator, checks if battle is won.
    if (currentParty.length === 3 || currentParty.length === 2){
      let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(4)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
    } else if (currentParty.length === 1){
        let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
      }
  }
  // P2 item slot/support slot.
  if (x === 11){
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    info.innerHTML = "";
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      if (choice === 1){
        supTarget(currentParty[1], supportChoice, 12);
        backBtn(4);
      } else {
      itemTarget(itemChoice, 12);
      backBtn(4);
      }
  } if (x === 12) {
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
     let fwd = document.createElement("button");
      fwd.innerHTML = "Next";
      //temporarily moves to enemy phase, will add branch if 3rd party member is there
      if (currentParty.length === 3){
        fwd.addEventListener('click', function (){battleMove(13)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
      } else {
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
      }
  }
  //p3 will take up battlemoves 15-20ish.
  if (x === 13){
    skillSlot.innerHTML = "";
    itemSlot.innerHTML = "";
    change.innerHTML = "";
    info.innerHTML = "";
    skillChoice = "";
    supportChoice = "";
    let p4 = document.createElement("p");
        p4.innerHTML = currentParty[2].name + "'s turn. " + "Please select a command: ";
        info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.innerHTML = "Attack";
      atkbtn.addEventListener('click', function (){choice = 0; battleMove(14); });
      let skl = document.createElement("button");
      skl.innerHTML = "Skills";
      skl.addEventListener('click', function () {choice = 1; skillBtnGen(currentParty[2], 14, 16);});
      let itm = document.createElement("button");
      itm.innerHTML = "Items";
      itm.addEventListener('click', function (){choice = 2; itemBtnGen(16);})
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
  }
  //target phase if party has 3 members
  if (x === 14){
  change.innerHTML = "";
  info.innerHTML = "";
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
    if (choice === 0){
    change.innerHTML = "";
    info.innerHTML = "";
    let p4 = document.createElement("p");
    p4.innerHTML = "Who will you target?";
    info.appendChild(p4);
    targetBtn(currentParty[2], enHp, 15);
    backBtn(13); 
    } 
    if (choice === 1){
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[2], enHp, 15, skillChoice);
      backBtn(13); 
    }
  } if (x === 15){
    //removes previous buttons
    change.innerHTML = "";
    //creates foward button and displays the info from the calculator, checks if battle is won. will end phase since player 3.
        let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
  }
  //p3 items
  if (x === 16){
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      if (choice === 1){
        supTarget(currentParty[2], supportChoice, 17);
        backBtn(13);
      } else {
      itemTarget(itemChoice, 17);
      backBtn(13);
        }
  } 
  //p3 item check, will end phase.
  if (x === 17) {
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
     let fwd = document.createElement("button");
      fwd.innerHTML = "Next";
      //because the max party is 3, it MUST take you to the calc phase.
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
  }
  // 3 new battleflow states needed per party memeber for healing skills. Can't just use item target...
  //or I'll need to find a way to have it differentiate based on that OH WAIT. If choice = 1!
  };

//===================================

// Area 1
  const townOne = document.getElementById("town-1");
//Forest 1, Forest 1-1, 1-2
  const forestOne = document.getElementById("forest-1");
  const forestOneOne = document.getElementById("forest-1-1");
  const forestOneTwo = document.getElementById("forest-1-2");
  const forestOneThree = document.getElementById("forest-1-3");
  const forestOneFour = document.getElementById("forest-1-4");
  const forestOneFive = document.getElementById("forest-1-5");
//Town 2
  const townTwo = document.getElementById("town-2");

//=====================================
let inventory = [];
let weaponsOwned = [];
let armorOwned = [];
let accesoriesOwned = [];
let keyItems = [];
let enemyParty = [];
let currentParty = [];
let money;
let gameState;
let shopState;
//===================================
//Open chest and stuff
//==================================
function openChest(item, id){
  inventory.push(item);
  document.getElementById(id).remove();
  alert("You found: " + item.name + " - in the chest!");
};
function openWeapon(weapon, id){
  weaponsOwned.push(weapon);
  document.getElementById(id).hidden = true;
  alert("You found: " + weapon.name + " - in the chest!");
}
//needs a way of showing what item was received....
//Game State and game flow will go here:
function gameFlow (state) {
//Area 1
  if (state === 0) {
  townOne.hidden = false;
  forestOne.hidden = true;
  shopButton.hidden = false;
  shopState = 0;
  };
//Forest 1
  if (state === 1) {
  townOne.hidden = true;
  forestOne.hidden = false;
  forestOneOne.hidden = false;
  forestOneTwo.hidden = true;
  forestOneFive.hidden = true;
  townTwo.hidden = true;
  shopButton.hidden = true;
  closeShop();
  };
//Forest 1-2
  if (state === 2){
    forestOne.hidden = false;
    forestOneOne.hidden = true;
    forestOneTwo.hidden = false;
    forestOneThree.hidden = true;
    forestOneFour.hidden = true;
    forestOneFive.hidden = true;
    townTwo.hidden = true;
    shopButton.hidden = true;
  } 
  //Forest 1-3  
    if (state === 3){
      townOne.hidden = true;
      forestOne.hidden = false;
      forestOneOne.hidden = true;
      forestOneTwo.hidden = true;
      forestOneThree.hidden = false;
      forestOneFour.hidden = true;
      forestOneFive.hidden = true;
      townTwo.hidden = true;
      shopButton.hidden = true;
    } 
  //Forest 1-4 
    if (state === 4){
      townOne.hidden = true;
      forestOne.hidden = false;
      forestOneOne.hidden = true;
      forestOneTwo.hidden = true;
      forestOneThree.hidden = true;
      forestOneFour.hidden = false;
      forestOneFive.hidden = true;
      townTwo.hidden = true;
      shopButton.hidden = true;
    }
  // Forest 1-5
    if (state === 5) {
      townOne.hidden = true;
      forestOne.hidden = false;
      forestOneOne.hidden = true;
      forestOneTwo.hidden = true;
      forestOneThree.hidden = true;
      forestOneFour.hidden = true;
      forestOneFive.hidden = false;
      townTwo.hidden = true;
      shopButton.hidden = true;
    }
  // Town 2 - Magnolia Town
    if (state == 6){
      townOne.hidden = true;
      forestOne.hidden = true;
      shopButton.hidden = false;
      townTwo.hidden = false;
      shopState = 0;
    }
};
function move (state) {
  gameState = state;
  gameFlow(gameState);
};
//shop functions
function purchaser (itemVal){
  if (money >= itemVal.cost) {
    document.getElementById("broke").hidden = true;
    inventory.push(itemVal);
    money -= itemVal.cost;
    document.getElementById("money").innerHTML = "$" + money;
  } else {
    document.getElementById("broke").hidden = false;
  }
};
let shopItems = document.getElementById("shop-items");
function shopFlow (){
  if (shopItems.length != 0){
    shopItems.innerHTML = "";
  }
  //additional shops can be added easily
  function pusher (item) {
   let btn = document.createElement("button");
   btn.innerHTML = item.name + ": cost: " + item.cost;
   btn.addEventListener('click', function (x) {x =item ; purchaser(x); openMenu(); showInventory();});
    shopItems.appendChild(btn);
  }
  // Shop 1 - Area Town
    if (shopState === 0){
    let shopOne = [potion, magicPotion];
    shopOne.forEach(pusher);
    }

}
//==================================
// all testing goes below
currentParty = [ando, marie, julie];
julie.skills.push(waterArrow);
julie.weapon = woodBow;
ando.skills.push(basher);
marie.skills.push(fire);
ando.skills.push(iceSlash);
marie.support.push(cure);
marie.support.push(defBoost);
ando.support.push(defBoost);
julie.support.push(atkBoost);

//======================================
// Start Game , must go below everything else
//======================================
const begin = document.getElementById("begin");
const start = document.getElementById("start-game");
const mainMenu = document.getElementById("main-menu");
const adv = document.getElementById("adv-mode");
let gameCheck = false;
function startGame(){
  adv.hidden = false;
  battleMode.hidden = true;
  mainMenu.hidden = false;
  menu.hidden = false;
  shopButton.hidden = false;
  begin.hidden = true;
  gameState = 0;
  move(gameState);
  money = 30;
  ando.weapon = woodSword;
  marie.weapon = woodStaff;
  inventory.push(potion);
  inventory.push(potion);
  inventory.push(magicPotion);
  simpleStorage.flush();
  gameCheck = true;
  };
function load(){
 ando = JSON.parse(simpleStorage.get("ando", ando));
 
 marie = JSON.parse(simpleStorage.get("marie", marie));
  julie = JSON.parse(simpleStorage.get("julie", julie));
 currentParty = simpleStorage.get("currentParty", currentParty);
  inventory =  simpleStorage.get("inventory", inventory);
  money =  simpleStorage.get("money", money);
 gameState = simpleStorage.get("gamestate", gameState);
  move(gameState);
  adv.hidden = false;
  mainMenu.hidden = false;
  menu.hidden = false;
  begin.hidden = true;
  battleState = 0;
  battleMode.hidden = true;
  change.innerHTML = "";
  info.innerHTML = "";
  enemyPlace.innerHTML = "";
  partyPlace.innerHTML = "";
  end.innerHTML = "";
  };
 function check() {
  gameCheck = simpleStorage.get("gamecheck", gameCheck);
  if (gameCheck  === true)
  document.getElementById("continue").hidden = false;
  };