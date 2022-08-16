const audio = document.getElementById('audio');
window.addEventListener("click", (event) => {
    audio.play();
});

class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    prev() {
        if (this.index <= 0)
            this.index = this.collection.length - 1;
        else
            this.index--;
        return this.getItem();
    }

    next() {
        if (this.index >= this.collection.length - 1)
            this.index = 0;
        else
            this.index++;
        return this.getItem();
    }

    getItem() {
        return this.collection[this.index];
    }
}
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

const model_massive = [
    {
        id: 10,
        name: 'Рита без макияжа',
        body: model[0],
        body_type: 1,
    }, 
    {
        id: 10,
        name: 'Рита c красными губами',
        body: model[1],
        body_type: 1,
    },
];

const rita_hair_massive = [
    {
        name: 'Волосы 1',
        path: hair[0]
    },
    {
        name: 'Волосы 2',
        path: hair[1]   
    },
    {
        name: 'Волосы 3',
        path: hair[2]   
    },
    {
        name: 'Волосы 4',
        path: hair[3]
    },
    {
        name: 'Волосы 5',
        path: hair[4] 
    },
    {
        name: 'Волосы 6',
        path: hair[5] 
    },
    {
        name: 'Волосы 7',
        path: hair[6] 
    },
    {
        name: 'Волосы 8',
        path: hair[7] 
    },
    {
        name: 'Волосы 9',
        path: hair[8] 
    },

];

const rita_clother_massive = [
    {
        name: 'Одежда 1',
        path: clother[0]
    },
    {
        name: 'Одежда 2',
        path: clother[1] 
    },
    {
        name: 'Одежда 3',
        path: clother[2]
    },
    {
        name: 'Одежда 4',
        path: clother[3]
    },
    {
        name: 'Пижама',
        path: clother[4]
    },
    {
        name: 'Одежда 6',
        path: clother[5]
    },

];

const rita_decorations_massive = [
    {
        name: 'Без украшений',
        path: decorations[0] 
    },
    {
        name: 'Тату',
        path: decorations[1]
    },
    {
        name: 'Голубые линзы',
        path: decorations[2]
    },
    {
        name: 'Зеленые линзы',
        path: decorations[3]
    },
];

const iteratorBody = new Iterator(model_massive);
const iteratorHair = new Iterator(rita_hair_massive);
const iteratorClother = new Iterator(rita_clother_massive);
const iteratorDecorations = new Iterator(rita_decorations_massive);


document.getElementById('name_model').innerHTML = model_massive[0].name;

// Первые картинки при загрузке страницы
document.getElementById('image_model').appendChild(model_massive[0].body);
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
        document.getElementById('image_model').appendChild(nextName.body);

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
        document.getElementById('image_model').appendChild(nextName.body);

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

// Iteratiors /////////////////////////////////////////////////////////////
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

el_1.addEventListener('click', () => {
    current_title = iteratorBody.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_1.classList.add('active');

    bodyItrFunc();
}) 

el_2.addEventListener('click', () => {
    current_title = iteratorHair.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_2.classList.add('active');

    hairItrFunc();
}) 

el_3.addEventListener('click', () => {
    current_title = iteratorClother.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_3.classList.add('active');

    clotherItrFunc();
}) 

el_4.addEventListener('click', () => {
    current_title = iteratorDecorations.getItem().name;
    document.getElementById('name_model').innerHTML = current_title;
    const active_top_navigate = document.querySelector('.active');
    active_top_navigate.classList.remove('active');
    el_4.classList.add('active');

    decorationsItrFunc();
})

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