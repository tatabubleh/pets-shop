const petsTemplate = document.querySelector('#item-template');
const nothingFound = document.querySelector('#nothing-found');
const shopItems = document.querySelector('#shop-items');
const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];
//- Название [товара](https://github.com/CodegirlSchool/pets-shop/blob/main/script.js#L2) (`title`) помести в `h1`,
//описание (`description`) — в `p`, картинку (`img`) — в одноименный тег, 
//цену (`price`) — в `span` с классом `"price"` и массив тегов `tags` — в `div class="tags"`

function makePetsTemplate(item) {
  const {title, description, tags, price, img} = item;
  
  const newPets = petsTemplate.content.cloneNode(true);
  newPets.querySelector('h1').textContent = title;
  newPets.querySelector('p').textContent = description;
  newPets.querySelector('img').src = img;
  newPets.querySelector('.price').textContent = price;
  
  const tagsHolder = newPets.querySelector('.tags');
  
  tags.forEach((tag) => {
    const createNewSpan = document.createElement('span');
    createNewSpan.classList.add('tag');
    createNewSpan.textContent = tag;
    tagsHolder.append(createNewSpan);
  });
  
  return newPets;
}


function renderItems (items) {
  
  items.forEach((item) => {
    const newItem = makePetsTemplate(item);
    shopItems.append(newItem);
  });
}
renderItems(items);