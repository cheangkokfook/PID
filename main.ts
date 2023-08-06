namespace PID {

let Kp = 0
let Ki = 0
let Kd = 0
let integral = 0
let previousError = 0
let error = 0
let derivative = 0
let output = 0

//% block="setPIDConstants $proportional $integralConstant $derivative"
export function setPIDConstants (proportional: number, integralConstant: number, derivative: number): void {
    Kp = proportional
    Ki = integralConstant
    Kd = derivative
}

//% block="resetPID"
export function resetPID (): void {
    integral = 0
    previousError = 0
}

//% block="computePID $setPoint $measuredValue"
export function computePID (setPoint: number, measuredValue: number): void {
    error = setPoint - measuredValue
    integral += error
    derivative = error - previousError
    output = Kp * error + Ki * integral + Kd * derivative
    previousError = error
}

}
