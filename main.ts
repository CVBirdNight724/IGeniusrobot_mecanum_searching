let sonar2 = 0
let IR_L = 0
let IR_R = 0
/**
 * ** Note
 * 
 * If you want to use this program, you should change your pin to match for test run this program by use function "testMotor" and "testMecanum"
 * 
 * I hope you'll enjoy with coding :)
 */
/**
 * Initial Pin
 * 
 * # Motor
 * 
 * M1_A: A0 / P1
 * 
 * M1_B: A1 / P2
 * 
 * M2_A: A2 / P0
 * 
 * M2_B: A3 / P3
 * 
 * M3_A: A4 / P20
 * 
 * M3_B: A5 / P19
 * 
 * M4_A: A6 / P4
 * 
 * M4_B: A7 / P10
 * 
 * # IR
 * 
 * IR_L: D0 / P16
 * 
 * IR_R: D1 / P13
 * 
 * # Sonar
 * 
 * ECHO: D5 / P9
 * 
 * PING: D6 / P7
 * 
 * # Servo
 * 
 * SERVO: D7 / P6
 */
/**
 * function driveMecanum
 * 
 * case0: Stop
 * 
 * case1: Up
 * 
 * case2: Up Right
 * 
 * case3: Right
 * 
 * case4: Down Right
 * 
 * case5: Down
 * 
 * case6: Down Left
 * 
 * case7: Left
 * 
 * case8: Up Left
 * 
 * case9: CW Rotation
 * 
 * case10: CCW Rotation
 * 
 * Ref: https://en.wikipedia.org/wiki/Mecanum_wheel
 */
function M1 (speed1: number) {
    if (speed1 > 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A0, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A1, 0)
    } else if (speed1 < 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A0, 0)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A1, 1)
    } else {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A0, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A1, 1)
    }
}
function driveMotorWait (FL: number, BL: number, FR: number, BR: number, delay: number) {
    driveMotor(FL, BL, FR, BR)
    basic.pause(delay)
}
function readSonar () {
    pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
    sonar2 = sonar.ping(
    DigitalPin.P7,
    DigitalPin.P9,
    PingUnit.Centimeters
    )
}
function driveServo (servo: number) {
    pins.servoWritePin(AnalogPin.P6, servo)
}
function testMotor () {
    driveMotorWait(1, 0, 0, 0, 1000)
    driveMotorWait(-1, 0, 0, 0, 1000)
    driveMotorWait(0, 1, 0, 0, 1000)
    driveMotorWait(0, -1, 0, 0, 1000)
    driveMotorWait(0, 0, 1, 0, 1000)
    driveMotorWait(0, 0, -1, 0, 1000)
    driveMotorWait(0, 0, 0, 1, 1000)
    driveMotorWait(0, 0, 0, -1, 1000)
    driveMotorWait(0, 0, 0, 0, 1000)
}
function driveMecanum (_case: number) {
    if (_case == 0) {
        driveMotor(0, 0, 0, 0)
    } else if (_case == 1) {
        driveMotor(1, 1, 1, 1)
    } else if (_case == 2) {
        driveMotor(1, 0, 0, 1)
    } else if (_case == 3) {
        driveMotor(1, -1, -1, 1)
    } else if (_case == 4) {
        driveMotor(0, -1, -1, 0)
    } else if (_case == 5) {
        driveMotor(-1, -1, -1, -1)
    } else if (_case == 6) {
        driveMotor(-1, 0, 0, -1)
    } else if (_case == 7) {
        driveMotor(-1, 1, 1, -1)
    } else if (_case == 8) {
        driveMotor(0, 1, 1, 0)
    } else if (_case == 9) {
        driveMotor(1, 1, -1, -1)
    } else if (_case == 10) {
        driveMotor(-1, -1, 1, 1)
    }
}
function driveMotor (FL: number, BL: number, FR: number, BR: number) {
    M1(FL)
    M2(BL)
    M3(FR)
    M4(BR)
}
function M3 (speed3: number) {
    if (speed3 > 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A4, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A5, 0)
    } else if (speed3 < 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A4, 0)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A5, 1)
    } else {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A4, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A5, 1)
    }
}
function testMecanum () {
    driveMecanumWait(0, 1000)
    driveMecanumWait(1, 1000)
    driveMecanumWait(2, 1000)
    driveMecanumWait(3, 1000)
    driveMecanumWait(4, 1000)
    driveMecanumWait(5, 1000)
    driveMecanumWait(6, 1000)
    driveMecanumWait(7, 1000)
    driveMecanumWait(8, 1000)
    driveMecanumWait(9, 1000)
    driveMecanumWait(10, 1000)
}
function M2 (speed2: number) {
    if (speed2 > 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A2, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A3, 0)
    } else if (speed2 < 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A2, 0)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A3, 1)
    } else {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A2, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A3, 1)
    }
}
function M4 (speed4: number) {
    if (speed4 > 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A6, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A7, 0)
    } else if (speed4 < 0) {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A6, 0)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A7, 1)
    } else {
        nanobit.DigitalWrite(nanobit.ArDigiPin.A6, 1)
        nanobit.DigitalWrite(nanobit.ArDigiPin.A7, 1)
    }
}
function driveMecanumWait (_case: number, delay: number) {
    driveMecanum(_case)
    basic.pause(delay)
}
function readIR () {
    pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
    IR_L = pins.digitalReadPin(DigitalPin.P13)
    IR_R = pins.digitalReadPin(DigitalPin.P16)
}
