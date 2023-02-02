input.onButtonPressed(Button.A, function () {
    basic.showString("1")
    music.playTone(523, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("0")
    music.playTone(131, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.showString("pump")
