function timer(){
    let hours = $('#hours')
    let minutes = $('#minutes')
    let seconds = $('#seconds')
    let interval = null
    let startTimer = $('#start-timer')

    startTimer.on('click', function () {
        if(interval){
            clearInterval(interval)
        }
         interval = setInterval(updateTime, 1000)

    })
    $('#stop-timer').on('click', function () {
        clearInterval(interval)
        interval=null
    })

    function updateTime(){
        let secondsVal = seconds.text()
        let minutesVal = minutes.text()
        let hoursVal = hours.text()

        seconds.text(`0${(+secondsVal + 1)}`.slice(-2))
        if(secondsVal >= 59){
            seconds.text('00')
            minutes.text(`0${(+minutesVal + 1)}`.slice(-2))
            if(minutesVal >= 59){
                minutes.text('00')
                hours.text(`0${(+hoursVal + 1)}`.slice(-2))
            }
        }
    }
}