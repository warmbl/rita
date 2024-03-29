let model = [];
let hair = [];
let clother = [];
let decorations = [];

function preloader() {
    for (let i = 0; i < pre_model_massive.length; i++) {
        model[i] = new Image();
        model[i].src = pre_model_massive[i];
    }
    for (let i = 0; i < pre_rita_hair_massive.length; i++) {
        hair[i] = new Image();
        hair[i].src = pre_rita_hair_massive[i];
    }
    for (let i = 0; i < pre_rita_clother_massive.length; i++) {
        clother[i] = new Image();
        clother[i].src = pre_rita_clother_massive[i];
    }
    for (let i = 0; i < pre_rita_decorations_massive.length; i++) {
        decorations[i] = new Image();
        decorations[i].src = pre_rita_decorations_massive[i];
    }
}
preloader();

//////////// ARRAYS //////////////////////////////////////
// const model_massive = [
//     {name: 'Рита без макияжа', path: model[0]}, 
//     {name: 'Рита c красными губами', path: model[1]},
// ];

const model_massive = model.map((path) => ({
    name: 'Временный текст',
    path,
  }));

const rita_hair_massive = hair.map((path) => ({
name: 'Временный текст',
path,
}));

const rita_clother_massive = clother.map((path) => ({
    name: 'Временный текст',
    path,
    }));

const rita_decorations_massive = decorations.map((path) => ({
    name: 'Временный текст',
    path,
    }));

// const rita_hair_massive = [
//     {name: 'Белые',path: hair[0]},
//     {name: 'Блонд',path: hair[1]},
//     {name: 'Розовые',path: hair[2]},
//     {name: 'Пепельные',path: hair[3]},
//     {name: 'Две рогульки',path: hair[4]},
//     {name: 'Круэлла',path: hair[5]},
//     {name: 'Крупные кудри',path: hair[6]},
//     {name: 'Собранные волосы',path: hair[7]},
//     {name: 'Пышная коса',path: hair[8]},
//     {name: 'Длинная коса (белые)',path: hair[9]},
//     {name: 'Длинная коса (блонд)',path: hair[10]},
//     {name: 'Длинная коса (рыжие)',path: hair[11]},
//     {name: 'Длинная коса (темные)',path: hair[12]},
//     {name: 'Собранные (белые)',path: hair[13]},
//     {name: 'Собранные (рыжие)',path: hair[14]},
//     {name: 'Собранные (блонд)',path: hair[15]},
//     {name: 'Собранные (черные)',path: hair[16]},
//     {name: 'Прямые с челкой (белые)',path: hair[17]},
//     {name: 'Прямые с челкой (голубые)',path: hair[18]},
//     {name: 'Короткие уложенные',path: hair[19]},
//     {name: 'Кудри',path: hair[20]},
//     {name: 'Аккуратные',path: hair[21]},
//     {name: 'Бардо (pыжие)',path: hair[22]},
//     {name: 'Бардо (голубые)',path: hair[23]},
//     {name: 'Короткие с челкой',path: hair[24]},
//     {name: 'Шляпа с вуалью',path: hair[25]},
//     {name: 'Уложенные набок',path: hair[26]},
//     {name: 'Изящная шляпка',path: hair[27]},
//     {name: 'Жемчужный ободок',path: hair[28]},
//     {name: 'Собранные прямые',path: hair[29]},
//     {name: 'Низкий пучок',path: hair[30]},
// ];
// const rita_clother_massive = [
//     {name: 'Сорочка',path: clother[0]},
//     {name: 'Простой',path: clother[1]},
//     {name: 'Элегантный',path: clother[2]},
//     {name: 'Глория',path: clother[3]},
//     {name: 'Пижама',path: clother[4]},
//     {name: 'Повседневная одежда',path: clother[5]},
//     {name: 'Классика',path: clother[6]},
//     {name: 'Классика (с пиджаком)',path: clother[7]},
//     {name: 'Звездная ночь',path: clother[8]},
//     {name: 'Звездная ночь (с пиджаком)',path: clother[9]},
//     {name: 'С накидкой',path: clother[10]},
//     {name: 'Без накидки (с пиджаком)',path: clother[11]},
//     {name: 'Нарцисс',path: clother[12]},
//     {name: 'Красное платье',path: clother[13]},
//     {name: 'Брюки с подтяжками',path: clother[14]},
//     {name: 'Бэтти',path: clother[15]},
//     {name: 'Нежная',path: clother[16]},
//     {name: 'Удобный костюм',path: clother[17]},
//     {name: 'Упертая',path: clother[18]},
//     {name: 'Осень',path: clother[19]},
//     {name: 'Платье без рукавов',path: clother[20]},
//     {name: 'Прекрасное платье',path: clother[21]},
//     {name: 'Воздушное платье',path: clother[22]},
//     {name: 'Летняя зима',path: clother[23]},
//     {name: 'Комфортный',path: clother[24]},
//     {name: 'Уверенная',path: clother[25]},
//     {name: 'Яркий',path: clother[26]},
//     {name: 'Воодушевление',path: clother[27]},
//     {name: 'Элеанора',path: clother[28]},
//     {name: 'Худи',path: clother[29]},
//     {name: 'Черное нижнее белье',path: clother[30]},
// ];
// const rita_decorations_massive = [
//     {name: 'Без украшений', path: decorations[0]},
//     {name: 'Тату',path: decorations[1]},
//     {name: 'Голубые линзы',path: decorations[2]},
//     {name: 'Зеленые линзы', path: decorations[3]},
// ];

// Инициализация итераторов
const iteratorBody = new Iterator(model_massive);
const iteratorHair = new Iterator(rita_hair_massive);
const iteratorClother = new Iterator(rita_clother_massive);
const iteratorDecorations = new Iterator(rita_decorations_massive);

// Первые картинки при загрузке страницы
document.getElementById('image_model').appendChild(model_massive[0].path);
document.getElementById('image_hair').appendChild(rita_hair_massive[0].path);
document.getElementById('image_clother').appendChild(rita_clother_massive[0].path);
document.getElementById('image_decorations').appendChild(rita_decorations_massive[0].path);

document.getElementById('name_model').innerHTML = model_massive[0].name;



const character_container = document.querySelector('.character-container');

// BODY /////////////////////////////////////////////////////////////
function prevBody() {
    character_container.classList.add('scroll-left');

    setTimeout(() => {
        const del = document.getElementById('image_model');
        del.innerHTML = '';
        const nextName = iteratorBody.prev();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_model').appendChild(nextName.path);

        character_container.classList.remove('scroll-left');
        character_container.classList.add('scroll-left-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-left-2');
    }, 500);
}

function nextBody() {
    character_container.classList.add('scroll-right');

    setTimeout(() => {
        const del = document.getElementById('image_model');
        del.innerHTML = '';
        const nextName = iteratorBody.next();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_model').appendChild(nextName.path);

        character_container.classList.remove('scroll-right');
        character_container.classList.add('scroll-right-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-right-2');
    }, 500);
}

// HAIR /////////////////////////////////////////////////////////////
function prevHair() {
    character_container.classList.add('scroll-left');

    setTimeout(() => {
        const del = document.getElementById('image_hair');
        del.innerHTML = '';
        const nextName = iteratorHair.prev();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_hair').appendChild(nextName.path);

        character_container.classList.remove('scroll-left');
        character_container.classList.add('scroll-left-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-left-2');
    }, 500);
}

function nextHair() {
    character_container.classList.add('scroll-right');

    setTimeout(() => {
        const del = document.getElementById('image_hair');
        del.innerHTML = '';
        const nextName = iteratorHair.next();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_hair').appendChild(nextName.path);
        character_container.classList.remove('scroll-right');
        character_container.classList.add('scroll-right-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-right-2');
    }, 500);
}

// CLOTHER /////////////////////////////////////////////////////////////
function prevClother() {
    character_container.classList.add('scroll-left');

    setTimeout(() => {
        const del = document.getElementById('image_clother');
        del.innerHTML = '';
        const nextName = iteratorClother.prev();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_clother').appendChild(nextName.path);

        character_container.classList.remove('scroll-left');
        character_container.classList.add('scroll-left-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-left-2');
    }, 500);
}

function nextClother() {
    character_container.classList.add('scroll-right');

    setTimeout(() => {
        const del = document.getElementById('image_clother');
        del.innerHTML = '';
        const nextName = iteratorClother.next();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_clother').appendChild(nextName.path);
        character_container.classList.remove('scroll-right');
        character_container.classList.add('scroll-right-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-right-2');
    }, 500);
}

// DECORATIONS /////////////////////////////////////////////////////////////
function prevDecorations() {
    character_container.classList.add('scroll-left');

    setTimeout(() => {
        const del = document.getElementById('image_decorations');
        del.innerHTML = '';
        const nextName = iteratorDecorations.prev();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_decorations').appendChild(nextName.path);

        character_container.classList.remove('scroll-left');
        character_container.classList.add('scroll-left-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-left-2');
    }, 500);
}

function nextDecorations() {
    character_container.classList.add('scroll-right');

    setTimeout(() => {
        const del = document.getElementById('image_decorations');
        del.innerHTML = '';
        const nextName = iteratorDecorations.next();
        document.getElementById('name_model').innerHTML = nextName.name;
        document.getElementById('image_decorations').appendChild(nextName.path);
        character_container.classList.remove('scroll-right');
        character_container.classList.add('scroll-right-2');
    }, 100);
    setTimeout(() => {
        character_container.classList.remove('scroll-right-2');
    }, 500);
}

// Iterators /////////////////////////////////////////////////////////////
let bodyItrFunc = () => {
    const prev = document.getElementById('prev');
    prev.removeEventListener('click', prevHair);
    prev.removeEventListener('click', prevClother);
    prev.removeEventListener('click', prevDecorations);
    prev.addEventListener('click', prevBody);

    const next = document.getElementById('next');
    next.removeEventListener('click', nextHair);
    next.removeEventListener('click', nextClother);
    next.removeEventListener('click', nextDecorations);
    next.addEventListener('click', nextBody);
}

let hairItrFunc = () => {
    const prev = document.getElementById('prev');
    prev.removeEventListener('click', prevBody);
    prev.removeEventListener('click', prevClother);
    prev.removeEventListener('click', prevDecorations);
    prev.addEventListener('click', prevHair);

    const next = document.getElementById('next');
    next.removeEventListener('click', nextBody);
    next.removeEventListener('click', nextClother);
    next.removeEventListener('click', nextDecorations);
    next.addEventListener('click', nextHair);
}

let clotherItrFunc = () => {
    const prev = document.getElementById('prev');
    prev.removeEventListener('click', prevBody);
    prev.removeEventListener('click', prevHair);
    prev.removeEventListener('click', prevDecorations);
    prev.addEventListener('click', prevClother);

    const next = document.getElementById('next');
    next.removeEventListener('click', nextBody);
    next.removeEventListener('click', nextHair);
    next.removeEventListener('click', nextDecorations);
    next.addEventListener('click', nextClother);
}

let decorationsItrFunc = () => {
    const prev = document.getElementById('prev');
    prev.removeEventListener('click', prevBody);
    prev.removeEventListener('click', prevClother);
    prev.removeEventListener('click', prevHair);
    prev.addEventListener('click', prevDecorations);

    const next = document.getElementById('next');
    next.removeEventListener('click', nextBody);
    next.removeEventListener('click', nextHair);
    next.removeEventListener('click', nextClother);
    next.addEventListener('click', nextDecorations);
}

// MAIN /////////////////////////////////////////////////////////////////////
const el_1 = document.getElementById('el-1');
const el_2 = document.getElementById('el-2');
const el_3 = document.getElementById('el-3');
const el_4 = document.getElementById('el-4');

let current_title;

const down = document.getElementById('down');
const menu = document.querySelector('.menu');

let menuPosition = 0;

bodyItrFunc();

// Настройки тела
el_1.addEventListener('click', () => {
    current_title = iteratorBody.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_1.classList.add('active');

    bodyItrFunc();
}) 
// Настройки прически
el_2.addEventListener('click', () => {
    current_title = iteratorHair.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_2.classList.add('active');

    hairItrFunc();
}) 
// Настройки одежды
el_3.addEventListener('click', () => {
    current_title = iteratorClother.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_3.classList.add('active');

    clotherItrFunc();
}) 
// Настройки украшений
el_4.addEventListener('click', () => {
    current_title = iteratorDecorations.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_4.classList.add('active');

    decorationsItrFunc();
})

// Скрыть/открыть меню
const navigation_menu = document.querySelector('.navigation');
function menuDownUp(){
    if(menuPosition == 0){
        menu.classList.remove('up-menu');
        menu.classList.add('down-menu');
        down.src = './menu_elements/up.png';
        menuPosition = 1;

        navigation_menu.classList.add('disappear');
    }
    else if (menuPosition == 1){
        menu.classList.remove('down-menu');
        menu.classList.add('up-menu');
        down.src = './menu_elements/down.png';
        menuPosition = 0;

        navigation_menu.classList.remove('disappear');
    }
}
down.addEventListener('click', menuDownUp);

// Кнопка Готово
const ready = document.getElementById('text-done');
const all_menu = document.querySelector('.menu');
const back_redact = document.querySelector('.back-redact');
let back_block = true;
let block = false;
ready.addEventListener('click', ()=>{
    if(!block){
        all_menu.classList.remove('vis-2');
        all_menu.classList.add('vis-1');
        back_block = false;
        window.addEventListener('click', controlBack);
        block = true;
    }
    else return;
})

back_redact.addEventListener('click', ()=>{
    if(block){
        all_menu.classList.remove('vis-1');
        all_menu.classList.add('vis-2');
        block = false;
        back_block = true;

        back_redact.classList.remove('vis-2');
        back_redact.classList.add('vis-1');
    }
    else return;

    window.removeEventListener('click', controlBack);
})

function controlBack(){
    if(!back_block){
        //console.log('всё скрыто');
        back_redact.classList.remove('vis-2');
        sound.classList.remove('vis-2');

        back_redact.classList.add('vis-1');
        sound.classList.add('vis-1');

        back_block = true;
    }
    else if (back_block){
        //console.log('теперь не скрыто');
        back_redact.classList.remove('vis-1');
        sound.classList.remove('vis-1');
        
        back_redact.classList.add('vis-2');
        sound.classList.add('vis-2');
        back_block = false;
    }
}


// Музыка
const sound = document.querySelector('.sound-button');
let sound_icon = document.getElementById('sound-icon');
let soundPosition = 0;
sound.addEventListener('click', () =>{
    if (soundPosition == 0){
        audio.play();
        soundPosition = 1;
        sound_icon.src = './menu_elements/on.png';
    }
    else if (soundPosition == 1){
        audio.pause();
        soundPosition = 0;
        sound_icon.src = './menu_elements/off.png';
    }
    
});
