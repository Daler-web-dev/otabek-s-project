import {goods} from './modules/db.js'

let cont = document.querySelector('.container')
let showFive = document.querySelector('.showFive')
let showAll = document.querySelector('.showAll')
let h1 = document.querySelector('.count')
let cartPlace = document.querySelector('.cart')
let selected = []


function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let card = document.createElement('div')

        let cardTop = document.createElement('div')
        let img = document.createElement('img')

        let cardBot = document.createElement('div')
        let h2 = document.createElement('h2')
        let descr = document.createElement('p')

        let mark = document.createElement('div')
        let price = document.createElement('div')
        let priceImg = document.createElement('img')
        let priceNum = document.createElement('span')
        let fav = document.createElement('div')
        let favImg = document.createElement('img')
        let favNum = document.createElement('span')
        let count = document.createElement('div')
        let countImg = document.createElement('img')
        let countNum = document.createElement('span')

        let favBtn = document.createElement('button')


        card.classList.add('card')
        cardTop.classList.add('cardTop')
        img.src = item.image
        cardBot.classList.add('cardBot')
        h2.innerHTML = item.category
        descr.innerHTML = item.description.slice(0,150)
        mark.classList.add('mark')
        price.classList.add('price')
        priceImg.src = "./assets/icons/dolar.png"
        priceNum.innerHTML = item.price
        fav.classList.add('fav')
        favImg.src = "./assets/icons/fav.svg"
        favNum.innerHTML = item.rating.rate
        count.classList.add('count')
        countImg.src = "./assets/icons/box.png"
        countNum.innerHTML = item.rating.count

        if(selected.includes(item)) {
            favBtn.classList.add('activeBtn')
        }
        favBtn.classList.add('favBtn')
        favBtn.innerHTML = "В избранное"
    

        place.append(card)
        card.append(cardTop, cardBot)
        cardTop.append(img)
        cardBot.append(h2, descr, mark, favBtn)
        mark.append(price, fav, count)
        price.append(priceImg, priceNum)
        fav.append(favImg, favNum)
        count.append(countImg, countNum)

        // functions
        favBtn.onclick = () => {
            
            if(!selected.includes(item)) {
                favBtn.classList.add('activeBtn')
                item.count = 1
                selected.push(item)


                cartReaload(selected, cartPlace)


                h1.innerHTML = `В корзине: ${selected.length} товаров`

            }

        }


    }
}


let cartReaload = (arr, place) => {
    place.innerHTML = ""

    for(let item of arr) {
        place.innerHTML += `
            <div class="item">
                <div class="left">
                    <img src="${item.image}" alt="">
                    <h3>category: ${item.category}</h3>
                    <h3>Price: ${item.price}</h3>
                </div>

                <div class="right" id="${item.id}" >
                    <div class="counter" id="${item.id}" >
                        <button data-count="inc" >inc</button>
                        <h3>${item.count}</h3>
                        <button data-count="dec" >dec</button>
                    </div>
                    <hr>
                    <button class="del" >delete</button>
                </div>
            </div>

        `
        
    }


    let counterBtns = document.querySelectorAll('button[data-count]')

    counterBtns.forEach(elem => {
        elem.onclick = () => {
            let key = elem.getAttribute('data-count')
            let id = elem.parentNode.id

            if(key === 'inc') increment(id)
            else decrement(id)

        }
    })

    // delete

    let delBtns = document.querySelectorAll('.del')

    delBtns.forEach(item => {
        item.onclick = () => {
            let id = item.parentNode.id
            selected = selected.filter(item => item.id !== +id)

            cartReaload(selected, cartPlace)    
            reload(goods, cont)
        }
    })

}


function increment(id) {
    let finded = selected.find(item => item.id === +id)
    finded.count++

    cartReaload(selected, cartPlace)
}
function decrement(id) {
    let finded = selected.find(item => item.id === +id)
    finded.count--

    cartReaload(selected, cartPlace)
}

reload(goods,cont)


showFive.onclick = () => {
    let sliced = goods.slice(0,5)

    console.log(sliced);

    reload(sliced, cont)
}

showAll.onclick = () => {
    reload(goods, cont)
}


