namespace PID {

let Kp = 0
let Ki = 0
let Kd = 0
let integral = 0
let previousError = 0
let error = 0
let derivative = 0
let output = 0
function setPIDConstants (proportional: number, integralConstant: number, derivative: number) {
    Kp = proportional
    Ki = integralConstant
    Kd = derivative
}
function resetPID () {
    integral = 0
    previousError = 0
}
function computePID (setPoint: number, measuredValue: number) {
    error = setPoint - measuredValue
    integral += error
    derivative = error - previousError
    output = Kp * error + Ki * integral + Kd * derivative
    previousError = error
}

}