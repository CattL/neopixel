input.onButtonPressed(Button.A, function () {
    strip2 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
})
input.onGesture(Gesture.Shake, function () {
    strip3 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    range2 = strip.range(0, 15)
    strip.shift(1)
    strip.show()
})
let range2: neopixel.Strip = null
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.shift(1)
strip.show()
basic.forever(function () {
	
})
