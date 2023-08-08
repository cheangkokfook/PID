"""

makecode PID package for microbit.
From students to learn PID concept.
http://www.meekids.club

"""
"""

Custom blocks

"""
# % weight=20 color=#0fbc10
@namespace
class Mee_PID:
    Kp = 1
    Ki = 0.1
    Kd = 0.01
    integral = 0
    previousError = 0
    error = 0
    derivative = 0
    """
    
    Setting PID value, suggest init value (1, 0.1, 0.01), Kp is proportional, Ki is integral, Kd is derivative
    
    """
    # % block="setPID Kp$proportional Ki$integralConstant Kd$derivative"
    # % weight=90
    def setPIDConstants(proportional: number, integralConstant: number, derivative2: number):
        global Kp, Ki, Kd
        Kp = proportional
        Ki = integralConstant
        Kd = derivative2
    # % block="resetPID"
    # % weight=80
    def resetPID():
        global integral, previousError
        integral = 0
        previousError = 0
    # % block="computePID setPoint$setPoint measureValue$measuredValue"
    # % weight=85
    def computePID(setPoint: number, measured_value: number):
        global error, integral, derivative, previousError
        error = setPoint - measured_value
        integral += error
        derivative = error - previousError
        return Kp * error + Ki * integral + Kd * derivative
        previousError = error