document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body')
  var clock = body.querySelector('#clock')
  var second = clock.querySelector('#second')
  var minute = clock.querySelector('#minute')
  var hour = clock.querySelector('#hour')

  var timeInterval = 1000
  var secondAndMinuteDegree = 6
  var hourDegree = 30
  // var actualSecond = 0
  // var actualMinute = 0

  // function secondRotation () {
  //   var actualTime = new Date()
  //   var actualSecond = actualTime.getSeconds()
  //   second.style.transform = 'rotate(' + actualSecond * secondAndMinuteDegree + 'deg)'
  //   // actualSecond++
  //   minuteRotate()
  // }
  //
  // function minuteRotate () {
  //   var actualTime = new Date()
  //   var actualMinute = actualTime.getMinutes()
  //
  //   // actualMinute = Math.floor(actualSecond / 60)
  //   minute.style.transform = 'rotate(' + actualMinute * secondAndMinuteDegree + 'deg)'
  //   hourRotate()
  // }
  //
  // function hourRotate (min) {
  //   var actualTime = new Date()
  //   var actualHour = actualTime.getHours()
  //
  //   // var actualHour = Math.floor(min / 60)
  //   hour.style.transform = 'rotate(' + actualHour * hourDegree + 'deg)'
  // }
  //
  //
  //
  function runClock () {
    // get time here in hour min sec
    var time = new Date()
    updateTime('second', time.getSeconds(), secondAndMinuteDegree)
    updateTime('minute', time.getMinutes(), secondAndMinuteDegree)
    updateTime('hour', time.getHours(), hourDegree)

    var digitalClock = document.querySelector('#digitalClock')
    digitalClock.textContent = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
  }

  function updateTime (element, timeUnit, degree) {
    // console.log()
    var clockElement = document.querySelector('#' + element)
    clockElement.style.transform = 'rotate(' + timeUnit * degree + 'deg)'
  }
  setInterval(runClock, timeInterval)
})
