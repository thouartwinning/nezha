function 手柄移动 () {
    if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.UP)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.DOWN)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -100)
        neZha.setMotorSpeed(neZha.MotorList.M2, -100)
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.LEFT)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.RIGHT)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 0)
    } else {
        neZha.stopAllMotor()
    }
}
function 摇杆移动 () {
    if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) != 516 || PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) != 512) {
        if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) != 516 && PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) != 512) {
            if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) < 516 && PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) > 512) {
                neZha.setMotorSpeed(neZha.MotorList.M1, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.16)
                neZha.setMotorSpeed(neZha.MotorList.M2, (1024 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX)) / 5.12)
            } else if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) < 516 && PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) < 512) {
                neZha.setMotorSpeed(neZha.MotorList.M2, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.16)
                neZha.setMotorSpeed(neZha.MotorList.M1, PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) / 5.12)
            } else if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) > 516 && PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) > 512) {
                neZha.setMotorSpeed(neZha.MotorList.M1, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.16)
                neZha.setMotorSpeed(neZha.MotorList.M2, (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) - 1024) / 5.12)
            } else if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) > 516 && PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) < 512) {
                neZha.setMotorSpeed(neZha.MotorList.M2, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.16)
                neZha.setMotorSpeed(neZha.MotorList.M1, (0 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX)) / 5.12)
            }
        } else if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) != 516) {
            if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) < 516) {
                neZha.setMotorSpeed(neZha.MotorList.M1, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.16)
                neZha.setMotorSpeed(neZha.MotorList.M2, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.16)
            } else if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY) > 516) {
                neZha.setMotorSpeed(neZha.MotorList.M1, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.08)
                neZha.setMotorSpeed(neZha.MotorList.M2, (516 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LY)) / 5.08)
            }
        } else if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) != 512) {
            if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) < 512) {
                neZha.setMotorSpeed(neZha.MotorList.M1, 0)
                neZha.setMotorSpeed(neZha.MotorList.M2, (512 - PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX)) / 5.12)
            } else if (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) > 512) {
                neZha.setMotorSpeed(neZha.MotorList.M1, (PlanetX_Basic.GetAnalogValue(PlanetX_Basic.value_A.LX) - 512) / 5.12)
                neZha.setMotorSpeed(neZha.MotorList.M2, 0)
            }
        }
    } else {
        neZha.stopAllMotor()
    }
}
function 机械臂控制 () {
    if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.Tri)) {
        if (舒张角度 <= 110) {
            舒张角度 += 10
        }
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.Cir)) {
        舒张角度 += -10
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.Squ)) {
        上下角度 += 10
    } else if (PlanetX_Basic.get_Attention_Value(PlanetX_Basic.value_level.X)) {
        上下角度 += -10
    }
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 舒张角度)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 上下角度)
}
let 上下角度 = 0
let 舒张角度 = 0
basic.showIcon(IconNames.Heart)
舒张角度 = 90
上下角度 = 90
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 舒张角度)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 上下角度)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    手柄移动()
    机械臂控制()
})
