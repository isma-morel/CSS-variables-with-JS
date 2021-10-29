const d = document;

const controls = d.querySelectorAll('.controls input')

function changeValue() {
    const fix = this.dataset.sizing || ''
    d.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + fix)
}

controls.forEach(input => input.addEventListener('change', changeValue))
controls.forEach(input => input.addEventListener('mousemove', changeValue))


