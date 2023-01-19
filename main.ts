radio.onReceivedString(function (receivedString) {
    basic.showString("llego")
})
radio.setGroup(1)
radio.setTransmitPower(3)
basic.forever(function () {
    radio.sendNumber(input.temperature())
})
