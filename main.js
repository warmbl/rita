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
const model_massive = [
    {name: 'Рита без макияжа', path: model[0]}, 
    {name: 'Рита c красными губами', path: model[1]},
];
const rita_hair_massive = [
    {name: 'Белые',path: hair[0]},
    {name: 'Блонд',path: hair[1]},
    {name: 'Розовые',path: hair[2]},
    {name: 'Пепельные',path: hair[3]},
    {name: 'Две рогульки',path: hair[4]},
    {name: 'Круэлла',path: hair[5]},
    {name: 'Крупные кудри',path: hair[6]},
    {name: 'Собранные волосы',path: hair[7]},
    {name: 'Коса',path: hair[8]},
];
const rita_clother_massive = [
    {name: 'Сорочка',path: clother[0]},
    {name: 'Простой',path: clother[1]},
    {name: 'Элегантный',path: clother[2]},
    {name: 'Глория',path: clother[3]},
    {name: 'Пижама',path: clother[4]},
    {name: '6',path: clother[5]},
    {name: '7',path: clother[6]},
    {name: '8',path: clother[7]},
    {name: '9',path: clother[8]},
    {name: '10',path: clother[9]},
    {name: '11',path: clother[10]},
    {name: '12',path: clother[11]},
    {name: '13',path: clother[12]},
    {name: '14',path: clother[13]},
    {name: '15',path: clother[14]},
    {name: '16',path: clother[15]},
    {name: '17',path: clother[16]},
    {name: '18',path: clother[17]},
    {name: '19',path: clother[18]},
    {name: '20',path: clother[19]},
    {name: '21',path: clother[20]},
    {name: '22',path: clother[21]},
    {name: '23',path: clother[22]},
    {name: '24',path: clother[23]},
    {name: '25',path: clother[24]},
    {name: '26',path: clother[25]},
    {name: '27',path: clother[26]},
    {name: '28',path: clother[27]},
    {name: '29',path: clother[28]},
    {name: '30',path: clother[29]},
    {name: '31',path: clother[30]},
];
const rita_decorations_massive = [
    {name: 'Без украшений', path: decorations[0]},
    {name: 'Тату',path: decorations[1]},
    {name: 'Голубые линзы',path: decorations[2]},
    {name: 'Зеленые линзы', path: decorations[3]},
];

// Инициализация итераторов
const iteratorBody = new Iterator(model_massive);
const iteratorHair = new Iterator(rita_hair_massive);
const iteratorClother = new Iterator(rita_clother_massive);
const iteratorDecorations = new Iterator(rita_decorations_massive);

document.getElementById('name_model').innerHTML = model_massive[0].name;

// Первые картинки при загрузке страницы
document.getElementById('image_model').appendChild(model_massive[0].path);
document.getElementById('image_hair').appendChild(rita_hair_massive[0].path);
document.getElementById('image_clother').appendChild(rita_clother_massive[0].path);
document.getElementById('image_decorations').appendChild(rita_decorations_massive[0].path);

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
function menuDownUp(){
    if(menuPosition == 0){
        menu.classList.remove('up-menu');
        menu.classList.add('down-menu');
        down.src = './menu_elements/up.png';
        menuPosition = 1;
    }
    else if (menuPosition == 1){
        menu.classList.remove('down-menu');
        menu.classList.add('up-menu');
        down.src = './menu_elements/down.png';
        menuPosition = 0;
    }
}
down.addEventListener('click', menuDownUp);

// Музыка
const audio = document.getElementById('audio');
window.addEventListener("click", (event) => {
    audio.play();
});