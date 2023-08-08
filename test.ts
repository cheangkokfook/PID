// tests go here; this will not be compiled when this package is used as an extension.
let output = 0
Mee_PID.setPIDConstants(1, 0.1, 0.01)
let setpoint = 0
let measuredValue = 10
basic.forever(function () {
    basic.showNumber(output)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    output = Mee_PID.computePID(setpoint, measuredValue)
    measuredValue += -3
})
