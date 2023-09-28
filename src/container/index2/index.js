import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const BUTTON_LIST = [
  {
    text: 'База знань',
    active: false,
  },
  {
    text: 'Інформація',
    active: true,
  },
]

const buttonContainer = createElement(
  'div',
  'button-container',
)

BUTTON_LIST.forEach((buttonData) => {
  const buttonClass = buttonData.active
    ? 'button active'
    : 'button'
  const button = createElement(
    'button',
    buttonClass,
    buttonData.text,
  )
  buttonContainer.append(button)
})

const picture = createElement('div', 'picture')
const pictureImage = createElement('img')
pictureImage.setAttribute('width', '346px')
pictureImage.setAttribute('height', '160px')
pictureImage.setAttribute('src', '/img/telegram.png')
pictureImage.setAttribute('alt', 'pictures')
picture.append(pictureImage)

const h2 = createElement(
  'h2',
  'title',
  'Що таке база знань?',
)

const p = createElement(
  'p',
  'text',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
)

const orangeButton = createElement(
  'button',
  'button__orange',
  "Перейти до ком'юніті у Телеграм",
)

const main = createElement('main', 'contant__list')
main.append(buttonContainer)
main.append(picture)
main.append(h2)
main.append(p)
main.append(orangeButton)

page.append(main)
