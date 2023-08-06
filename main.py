Kp = 0
Ki = 0
Kd = 0
integral = 0
previousError = 0
error = 0
derivative = 0
output = 0
def setPIDConstants(proportional: number, integralConstant: number, derivative2: number):
    global Kp, Ki, Kd
    Kp = proportional
    Ki = integralConstant
    Kd = derivative2
def resetPID():
    global integral, previousError
    integral = 0
    previousError = 0
def computePID(setPoint: number, measuredValue: number):
    global error, integral, derivative, output, previousError
    error = setPoint - measuredValue
    integral += error
    derivative = error - previousError
    output = Kp * error + Ki * integral + Kd * derivative
    previousError = error