const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(
    function horaAtual(){
    let horaagora = new Date()
    let hr = horaagora.getHours()
    let min = horaagora.getMinutes()
    let sec = horaagora.getSeconds()

    if (hr < 10) hr = "0" + hr
    if (min < 10) min = "0" + min
    if (sec < 10) sec = "0" + sec
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec

})
