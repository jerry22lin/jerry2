input.onButtonPressed(Button.A, function () {
    basic.showString("" + (步數))
})
input.onGesture(Gesture.Shake, function () {
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
    步數 += 1
})
input.onButtonPressed(Button.B, function () {
    步數 = 0
    basic.clearScreen()
})
let 步數 = 0
步數 = 0
basic.forever(function () {
    basic.showString("" + (步數))
})
