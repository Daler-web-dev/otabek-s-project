let form = document.forms.register
let inputs = form.querySelectorAll('input')
let inps = form.querySelectorAll('.important')
let labels = form.querySelectorAll('label')
let error = document.querySelector('.error')
let counter = document.querySelector('.counter')
let success = document.querySelector('.success')
let loader_bg = document.querySelector('.loader_bg')
let loader = document.querySelector('.loader')


let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    age: /^([1][8-9]|[2-5][0-9]|[6][0-5])$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    phone: /^[0-9\-\+]{9,15}$/,
    css: /^[a-z ,.'-]+$/i
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')

        let label = field.parentNode.querySelector('label')
        let img = field.parentNode.querySelector('img')
        
        console.log(img);

        label.innerHTML = ""
        label.style.color = "red"
        img.style.opacity = "0"
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

inputs.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.name

        validate(inp, pattern[key])
    }
});


form.onsubmit = (event) => {
    event.preventDefault()
    labels.forEach(item => item.innerHTML = "")

    let arr = []

    for (let inp of inps) {
        if (inp.value.length === 0 || inp.classList.contains("invalid")) {
            arr.push(1)

            inp.classList.add('invalid')

            let label = inp.parentNode.querySelector('label')
            let img = inp.parentNode.querySelector('img')
            
            console.log(img);

            label.innerHTML = "Plase fll this field"
            label.style.color = "red"
            img.style.opacity = "1"
        }
    }


    error.innerHTML = `Error: ${arr.length}/8`
    success.innerHTML = `Success: ${8 - arr.length}/12`
    
    if (arr.length === 0) {
        console.log(submit());
    } else {
        counter.style.background = "red"
        counter.style.color = "white"
        setTimeout(() => {
            counter.style.background = "transparent"
            counter.style.color = "black"
        }, 1000);
    }

}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    });

    loader_bg.style.display = "block"
    loader.style.display = "block"
    setTimeout(() => {
        loader_bg.style.display = "none"
        loader.style.display = "none"
    }, 1500);
    return user
}