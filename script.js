let arr = [
    {
        id: Math.random(),
        price: 23000,
        name: 'Loreal',
        img: 'https://web.lebazar.uz/resources/product/2018/5/15/medium_1529043108286DSC_0005.jpg',
    },
    {
        id: Math.random(),
        price: 25000,
        name: 'Шампунь какойто nj',
        img: 'https://web.lebazar.uz/resources/product/2022/6/4/medium_16569176505493600541775855_f_0%20copy.jpg'
    },
    {
        id: Math.random(),
        price: 23000,
        name: 'Loreal',
        img: 'https://web.lebazar.uz/resources/product/2018/5/15/medium_1529043108286DSC_0005.jpg',
    },
    {
        id: Math.random(),
        price: 25000,
        name: 'Шампунь какойто',
        img: 'https://web.lebazar.uz/resources/product/2022/6/4/medium_16569176505493600541775855_f_0%20copy.jpg'
    },
    {
        id: Math.random(),
        price: 23000,
        name: 'Loreal',
        img: 'https://web.lebazar.uz/resources/product/2018/5/15/medium_1529043108286DSC_0005.jpg',
    },
    {
        id: Math.random(),
        price: 25000,
        name: 'Шампунь какойто',
        img: 'https://web.lebazar.uz/resources/product/2022/6/4/medium_16569176505493600541775855_f_0%20copy.jpg'
    }
]

for (let item of arr) {
    let box = document.createElement('div')
    let imgbox = document.createElement('div')
    let img = document.createElement('img')
    let cart = document.createElement('div')

    let price = document.createElement('div')
    let sum = document.createElement('span')
    let count = document.createElement('p')

    let name = document.createElement('span')

    box.id = item.id
    box.classList.add('box')
    imgbox.classList.add('imgbox')
    img.src = item.img
    cart.classList.add('cart')
    price.classList.add('price')
    sum.innerHTML = item.price
    count.innerHTML = "сум./1шт"
    name.innerHTML = item.name

    document.body.prepend(box)
    box.append(imgbox, price, name)
    imgbox.append(img, cart)
    price.append(sum, count)
}



let todos = [
    {
        id: Math.random(),
        task: 'kupit lunu',
        time: '10:30',
        isDone: 'false'
    },
    {
        id: Math.random(),
        task: 'kupit lunu',
        time: '10:30',
        isDone: 'false'
    },
]

form.onsubmit = () => {

    let task = {
        id: Math.random(),
        time: new Date(),
        isDone: false
    }

    let fm = 


    console.log(task);

    todos.push(task)

}