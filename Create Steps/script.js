const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.lenght){
        currentActive = circles.length
    }  

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1){
        currentActive = 1
    }  

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.lenght - 1) / (circles.length.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    }else if (currentActive === circles.length){
        next.disabled = true
    }else {
        prev.disabled = false
        next.disabled = false
    }
}