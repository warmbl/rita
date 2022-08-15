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

const model_massive = [
    {
        id: 10,
        name: 'Рита без макияжа',
        body: './model/rita/rita.png',
        body_type: 1,
    }, 
    {
        id: 10,
        name: 'Рита c красными губами',
        body: './model/rita/rita_makeup_1.png',
        body_type: 1,
    },
    /*
    {
        id: 10,
        name: 'Ира',
        body: './model/ira/ira.png',
        body_type: 1,
    },
    */
];

const rita_hair_massive = [
    {
        name: 'Волосы 1',
        path: './model/rita/hair/hair_1.png'   
    },
    {
        name: 'Волосы 2',
        path: './model/rita/hair/hair_2.png'   
    },
    {
        name: 'Волосы 3',
        path: './model/rita/hair/hair_3.png'   
    },
    {
        name: 'Волосы 4',
        path: './model/rita/hair/hair_4.png'   
    },
    {
        name: 'Волосы 5',
        path: './model/rita/hair/5.png'   
    },
    {
        name: 'Волосы 6',
        path: './model/rita/hair/6.png'   
    },
    {
        name: 'Волосы 7',
        path: './model/rita/hair/7.png'   
    },
    {
        name: 'Волосы 8',
        path: './model/rita/hair/8.png'   
    },
    {
        name: 'Волосы 9',
        path: './model/rita/hair/9.png'   
    },

];

const rita_clother_massive = [
    {
        name: 'Одежда 1',
        path: './body/thin_body/clother/clother_1.png'   
    },
    {
        name: 'Одежда 2',
        path: './body/thin_body/clother/2.png'   
    },
    {
        name: 'Одежда 3',
        path: './body/thin_body/clother/3.png'   
    },
    {
        name: 'Одежда 4',
        path: './body/thin_body/clother/4.png'   
    },
    {
        name: 'Пижама',
        path: './body/thin_body/clother/5.png'   
    },
    {
        name: 'Одежда 6',
        path: './body/thin_body/clother/6.png'   
    },

];

const rita_decorations_massive = [
    {
        name: 'Без украшений',
        path: './body/thin_body/decorations/1.png'   
    },
    {
        name: 'Тату',
        path: './body/thin_body/decorations/2.png'   
    },
    {
        name: 'Голубые линзы',
        path: './body/thin_body/decorations/3.png'   
    },
    {
        name: 'Зеленые линзы',
        path: './body/thin_body/decorations/4.png'   
    },
];

const iteratorBody = new Iterator(model_massive);
const iteratorHair = new Iterator(rita_hair_massive);
const iteratorClother = new Iterator(rita_clother_massive);
const iteratorDecorations = new Iterator(rita_decorations_massive);


document.getElementById('name_model').innerHTML = model_massive[0].name;

document.getElementById('image_model').src = model_massive[0].body;
document.getElementById('image_hair').src = rita_hair_massive[0].path;
document.getElementById('image_clother').src = rita_clother_massive[0].path;
document.getElementById('image_decorations').src = rita_decorations_massive[0].path;

const character_container = document.querySelector('.character-container');

// BODY /////////////////////////////////////////////////////////////
function prevBody() {
    character_container.classList.add('scroll-left');

    setTimeout(() => {
        const name_x = iteratorBody.prev();
        document.getElementById('name_model').innerHTML = name_x.name;
        document.getElementById('image_model').src = name_x.body;

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
        const name_y = iteratorBody.next();
        document.getElementById('name_model').innerHTML = name_y.name;
        document.getElementById('image_model').src = name_y.body;

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
        const name_x = iteratorHair.prev();
        document.getElementById('name_model').innerHTML = name_x.name;
        document.getElementById('image_hair').src = name_x.path;

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
        const name_y = iteratorHair.next();
        document.getElementById('name_model').innerHTML = name_y.name;
        document.getElementById('image_hair').src = name_y.path;
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
        const name_x = iteratorClother.prev();
        document.getElementById('name_model').innerHTML = name_x.name;
        document.getElementById('image_clother').src = name_x.path;

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
        const name_y = iteratorClother.next();
        document.getElementById('name_model').innerHTML = name_y.name;
        document.getElementById('image_clother').src = name_y.path;
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
        const name_x = iteratorDecorations.prev();
        document.getElementById('name_model').innerHTML = name_x.name;
        document.getElementById('image_decorations').src = name_x.path;

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
        const name_y = iteratorDecorations.next();
        document.getElementById('name_model').innerHTML = name_y.name;
        document.getElementById('image_decorations').src = name_y.path;
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