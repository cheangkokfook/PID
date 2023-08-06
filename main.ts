/**
* makecode PID package for microbit.
* From students to learn PID concept.
* http://www.meekids.club
*/

/**
 * Custom blocks
 */
//% weight=20 color=#0fbc10

namespace PID {

    let Kp = 0
    let Ki = 0
    let Kd = 0
    let integral = 0
    let previousError = 0
    let error = 0
    let derivative = 0

    //% block="setPIDConstants Kp$proportional Ki$integralConstant Kd$derivative"
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
    export function computePID (setPoint: number, measuredValue: number): number {
        error = setPoint - measuredValue
        integral += error
        derivative = error - previousError
        return Kp * error + Ki * integral + Kd * derivative
        previousError = error
    }

}

namespace others {

    /**
    * turn on LCD
    */
    //% blockId="I2C_LCD1620_ON" block="turn on LCD"
    //% weight=81 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    export function on(): void {
        //cmd(0x0C)
    }
}