[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2Shape

# HumanoidV2Shape <Badge type="tip" text="Class" />

**`Description`**

人形对象V2体型

## Implements

- [`IHumanoidV2Shape`](../interfaces/Gameplay.IHumanoidV2Shape.md)

## Table of contents

| Methods |
| :-----|
| **[getBreastHorizontalPosition](Gameplay.HumanoidV2Shape.md#getbreasthorizontalposition)**(): `number` <br> 调整胸部左右位置|
| **[getBreastLength](Gameplay.HumanoidV2Shape.md#getbreastlength)**(): `number` <br> 调整胸部长度|
| **[getBreastScale](Gameplay.HumanoidV2Shape.md#getbreastscale)**(): `number` <br> 调整胸部整体大小；|
| **[getBreastStretch](Gameplay.HumanoidV2Shape.md#getbreaststretch)**(): `number` <br> 获取胸部拉伸|
| **[getBreastVerticalPosition](Gameplay.HumanoidV2Shape.md#getbreastverticalposition)**(): `number` <br> 调整胸部上下位置|
| **[getBrowGap](Gameplay.HumanoidV2Shape.md#getbrowgap)**(): `number` <br> 获取眉间距|
| **[getBrowHeight](Gameplay.HumanoidV2Shape.md#getbrowheight)**(): `number` <br> 获取眉毛上下移动|
| **[getBrowInboardShape](Gameplay.HumanoidV2Shape.md#getbrowinboardshape)**(): `number` <br> 获取眉毛内侧角度|
| **[getBrowOutsideShape](Gameplay.HumanoidV2Shape.md#getbrowoutsideshape)**(): `number` <br> 获取眉毛外侧形状|
| **[getBrowRotation](Gameplay.HumanoidV2Shape.md#getbrowrotation)**(): `number` <br> 获取眉毛角度|
| **[getCanthusHorizontalPosition](Gameplay.HumanoidV2Shape.md#getcanthushorizontalposition)**(): `number` <br> 获取眼角左右移动|
| **[getCanthusVerticalPosition](Gameplay.HumanoidV2Shape.md#getcanthusverticalposition)**(): `number` <br> 获取外眼角上下移动|
| **[getCharacterHeight](Gameplay.HumanoidV2Shape.md#getcharacterheight)**(): `number` <br> 获取角色身高|
| **[getCheekBoneRange](Gameplay.HumanoidV2Shape.md#getcheekbonerange)**(): `number` <br> 获取颧骨前后移动|
| **[getCheekBoneWidth](Gameplay.HumanoidV2Shape.md#getcheekbonewidth)**(): `number` <br> 获取颧骨横向宽度|
| **[getCheekHeight](Gameplay.HumanoidV2Shape.md#getcheekheight)**(): `number` <br> 获取脸颊上下移动|
| **[getCheekRange](Gameplay.HumanoidV2Shape.md#getcheekrange)**(): `number` <br> 获取脸颊前后移动|
| **[getCheekWidth](Gameplay.HumanoidV2Shape.md#getcheekwidth)**(): `number` <br> 获取脸颊宽度|
| **[getEarRoll](Gameplay.HumanoidV2Shape.md#getearroll)**(): `number` <br> 调整耳朵左右旋转|
| **[getEarScale](Gameplay.HumanoidV2Shape.md#getearscale)**(): `number` <br> 调整耳朵大小|
| **[getEarYaw](Gameplay.HumanoidV2Shape.md#getearyaw)**(): `number` <br> 调整耳朵前后旋转|
| **[getEyesGap](Gameplay.HumanoidV2Shape.md#geteyesgap)**(): `number` <br> 获取眼睛间距|
| **[getEyesHeight](Gameplay.HumanoidV2Shape.md#geteyesheight)**(): `number` <br> 获取眼睛上下移动|
| **[getEyesLength](Gameplay.HumanoidV2Shape.md#geteyeslength)**(): `number` <br> 眼睛长度|
| **[getEyesRange](Gameplay.HumanoidV2Shape.md#geteyesrange)**(): `number` <br> 获取眼睛前后移动|
| **[getEyesRotation](Gameplay.HumanoidV2Shape.md#geteyesrotation)**(): `number` <br> 获取眼睛角度|
| **[getEyesWidth](Gameplay.HumanoidV2Shape.md#geteyeswidth)**(): `number` <br> 获取眼睛左右宽度|
| **[getFaceWidth](Gameplay.HumanoidV2Shape.md#getfacewidth)**(): `number` <br> 调整头部整体宽度|
| **[getGroinThickness](Gameplay.HumanoidV2Shape.md#getgrointhickness)**(): `number` <br> 获取胯宽度前后|
| **[getGroinWidth](Gameplay.HumanoidV2Shape.md#getgroinwidth)**(): `number` <br> 获取胯宽度左右|
| **[getHeadScale](Gameplay.HumanoidV2Shape.md#getheadscale)**(): `number` <br> 获取角色头部大小|
| **[getJawLength](Gameplay.HumanoidV2Shape.md#getjawlength)**(): `number` <br> 调整下巴长度|
| **[getJawRange](Gameplay.HumanoidV2Shape.md#getjawrange)**(): `number` <br> 调整下巴前后移动|
| **[getJawSmooth](Gameplay.HumanoidV2Shape.md#getjawsmooth)**(): `number` <br> 调整下巴圆度|
| **[getJawVertexHeight](Gameplay.HumanoidV2Shape.md#getjawvertexheight)**(): `number` <br> 调整下巴尖上下移动|
| **[getJawVertexRange](Gameplay.HumanoidV2Shape.md#getjawvertexrange)**(): `number` <br> 调整下巴尖前后移动|
| **[getJawVertexWidth](Gameplay.HumanoidV2Shape.md#getjawvertexwidth)**(): `number` <br> 调整下巴尖宽度|
| **[getLowerArmsStretch](Gameplay.HumanoidV2Shape.md#getlowerarmsstretch)**(): `number` <br> 获取小臂的拉伸|
| **[getLowerArmsThickness](Gameplay.HumanoidV2Shape.md#getlowerarmsthickness)**(): `number` <br> 获取小臂前后方向的宽度|
| **[getLowerArmsWidth](Gameplay.HumanoidV2Shape.md#getlowerarmswidth)**(): `number` <br> 获取小臂左右方向的宽度|
| **[getLowerFaceRange](Gameplay.HumanoidV2Shape.md#getlowerfacerange)**(): `number` <br> 获取下半脸前后|
| **[getLowerFaceWidth](Gameplay.HumanoidV2Shape.md#getlowerfacewidth)**(): `number` <br> 获取下半脸的宽度|
| **[getLowerJawRange](Gameplay.HumanoidV2Shape.md#getlowerjawrange)**(): `number` <br> 调整下颚骨前后移动|
| **[getLowerJawWidth](Gameplay.HumanoidV2Shape.md#getlowerjawwidth)**(): `number` <br> 调整下颚骨宽度|
| **[getLowerMouthThickness](Gameplay.HumanoidV2Shape.md#getlowermouththickness)**(): `number` <br> 获取下嘴唇薄厚|
| **[getLowerStretch](Gameplay.HumanoidV2Shape.md#getlowerstretch)**(): `number` <br> 调整耳朵下部拉伸|
| **[getMouthHeight](Gameplay.HumanoidV2Shape.md#getmouthheight)**(): `number` <br> 获取嘴巴上下位置|
| **[getMouthRange](Gameplay.HumanoidV2Shape.md#getmouthrange)**(): `number` <br> 获取嘴巴前后移动|
| **[getMouthShape](Gameplay.HumanoidV2Shape.md#getmouthshape)**(): `number` <br> 调整嘴巴形状|
| **[getMouthWidth](Gameplay.HumanoidV2Shape.md#getmouthwidth)**(): `number` <br> 获取嘴巴宽度|
| **[getNeckStretch](Gameplay.HumanoidV2Shape.md#getneckstretch)**(): `number` <br> 获取脖子拉伸|
| **[getNeckThickness](Gameplay.HumanoidV2Shape.md#getneckthickness)**(): `number` <br> 获取脖子前后的宽度|
| **[getNeckWidth](Gameplay.HumanoidV2Shape.md#getneckwidth)**(): `number` <br> 调整脖子的左右宽度|
| **[getNoseHeight](Gameplay.HumanoidV2Shape.md#getnoseheight)**(): `number` <br> 获取鼻梁高度|
| **[getNoseProtrusion](Gameplay.HumanoidV2Shape.md#getnoseprotrusion)**(): `number` <br> 获取鼻尖长度|
| **[getNoseVerticalPosition](Gameplay.HumanoidV2Shape.md#getnoseverticalposition)**(): `number` <br> 获取鼻子上下移动|
| **[getPupilHeight](Gameplay.HumanoidV2Shape.md#getpupilheight)**(): `number` <br> 获取瞳孔高度|
| **[getPupilHorizontalPosition](Gameplay.HumanoidV2Shape.md#getpupilhorizontalposition)**(): `number` <br> 获取瞳孔左右位置|
| **[getPupilVerticalPosition](Gameplay.HumanoidV2Shape.md#getpupilverticalposition)**(): `number` <br> 获取瞳孔上下位置|
| **[getPupilWidth](Gameplay.HumanoidV2Shape.md#getpupilwidth)**(): `number` <br> 获取瞳孔宽度|
| **[getRibThickness](Gameplay.HumanoidV2Shape.md#getribthickness)**(): `number` <br> 获取肋骨的前后宽度|
| **[getRibWidth](Gameplay.HumanoidV2Shape.md#getribwidth)**(): `number` <br> 获取肋骨的左右宽度|
| **[getShankScaleX](Gameplay.HumanoidV2Shape.md#getshankscalex)**(): `number` <br> 获取小腿粗细左右|
| **[getShankScaleZ](Gameplay.HumanoidV2Shape.md#getshankscalez)**(): `number` <br> 获取小腿粗细前后|
| **[getShankStretch](Gameplay.HumanoidV2Shape.md#getshankstretch)**(): `number` <br> 获取小腿拉伸|
| **[getShoulderArmThickness](Gameplay.HumanoidV2Shape.md#getshoulderarmthickness)**(): `number` <br> 获取肩膀的前后宽度|
| **[getShoulderArmWidth](Gameplay.HumanoidV2Shape.md#getshoulderarmwidth)**(): `number` <br> 获取肩膀的左右宽度|
| **[getShoulderThickness](Gameplay.HumanoidV2Shape.md#getshoulderthickness)**(): `number` <br> 获取肩膀的前后宽度|
| **[getShoulderWidth](Gameplay.HumanoidV2Shape.md#getshoulderwidth)**(): `number` <br> 获取肩膀的宽度|
| **[getThighStretch](Gameplay.HumanoidV2Shape.md#getthighstretch)**(): `number` <br> 获取大腿拉伸|
| **[getThighThicknessX](Gameplay.HumanoidV2Shape.md#getthighthicknessx)**(): `number` <br> 获取大腿粗细左右|
| **[getThighThicknessZ](Gameplay.HumanoidV2Shape.md#getthighthicknessz)**(): `number` <br> 获取大腿粗细前后|
| **[getUpperArmsStretch](Gameplay.HumanoidV2Shape.md#getupperarmsstretch)**(): `number` <br> 获取大臂的拉伸|
| **[getUpperArmsThickness](Gameplay.HumanoidV2Shape.md#getupperarmsthickness)**(): `number` <br> 获取大臂前后方向的宽度|
| **[getUpperArmsWidth](Gameplay.HumanoidV2Shape.md#getupperarmswidth)**(): `number` <br> 获取大臂左右方向的宽度|
| **[getUpperFaceRange](Gameplay.HumanoidV2Shape.md#getupperfacerange)**(): `number` <br> 调整上半脸前后移动|
| **[getUpperMouthThickness](Gameplay.HumanoidV2Shape.md#getuppermouththickness)**(): `number` <br> 获取上嘴唇薄厚|
| **[getUpperStretch](Gameplay.HumanoidV2Shape.md#getupperstretch)**(): `number` <br> 调整耳朵上部拉伸|
| **[getWaistStretch](Gameplay.HumanoidV2Shape.md#getwaiststretch)**(): `number` <br> 获取腰部拉伸|
| **[getWaistThickness](Gameplay.HumanoidV2Shape.md#getwaistthickness)**(): `number` <br> 获取腰的前后宽度|
| **[getWaistWidth](Gameplay.HumanoidV2Shape.md#getwaistwidth)**(): `number` <br> 获取腰的左右宽度|
| **[setBreastHorizontalPosition](Gameplay.HumanoidV2Shape.md#setbreasthorizontalposition)**(`number`, `boolean`): `void` <br> 调整胸部左右位置|
| **[setBreastLength](Gameplay.HumanoidV2Shape.md#setbreastlength)**(`number`, `boolean`): `void` <br> 调整胸部长度|
| **[setBreastScale](Gameplay.HumanoidV2Shape.md#setbreastscale)**(`number`, `boolean`): `void` <br> 调整胸部整体大小；|
| **[setBreastStretch](Gameplay.HumanoidV2Shape.md#setbreaststretch)**(`number`, `boolean`): `void` <br> 设置胸部拉伸|
| **[setBreastVerticalPosition](Gameplay.HumanoidV2Shape.md#setbreastverticalposition)**(`number`, `boolean`): `void` <br> 调整胸部上下位置|
| **[setBrowGap](Gameplay.HumanoidV2Shape.md#setbrowgap)**(`number`, `boolean`): `void` <br> 设置眉间距|
| **[setBrowHeight](Gameplay.HumanoidV2Shape.md#setbrowheight)**(`number`, `boolean`): `void` <br> 设置眉毛上下移动|
| **[setBrowInboardShape](Gameplay.HumanoidV2Shape.md#setbrowinboardshape)**(`number`, `boolean`): `void` <br> 设置眉毛内侧角度|
| **[setBrowOutsideShape](Gameplay.HumanoidV2Shape.md#setbrowoutsideshape)**(`number`, `boolean`): `void` <br> 设置眉毛外侧形状|
| **[setBrowRotation](Gameplay.HumanoidV2Shape.md#setbrowrotation)**(`number`, `boolean`): `void` <br> 设置眉毛角度|
| **[setCanthusHorizontalPosition](Gameplay.HumanoidV2Shape.md#setcanthushorizontalposition)**(`number`, `boolean`): `void` <br> 设置眼角左右移动|
| **[setCanthusVerticalPosition](Gameplay.HumanoidV2Shape.md#setcanthusverticalposition)**(`number`, `boolean`): `void` <br> 设置外眼角上下移动|
| **[setCharacterHeight](Gameplay.HumanoidV2Shape.md#setcharacterheight)**(`number`, `boolean`): `void` <br> 设置角色身高|
| **[setCheekBoneRange](Gameplay.HumanoidV2Shape.md#setcheekbonerange)**(`number`, `boolean`): `void` <br> 设置颧骨前后移动|
| **[setCheekBoneWidth](Gameplay.HumanoidV2Shape.md#setcheekbonewidth)**(`number`, `boolean`): `void` <br> 设置颧骨横向宽度|
| **[setCheekHeight](Gameplay.HumanoidV2Shape.md#setcheekheight)**(`number`, `boolean`): `void` <br> 设置脸颊上下移动|
| **[setCheekRange](Gameplay.HumanoidV2Shape.md#setcheekrange)**(`number`, `boolean`): `void` <br> 设置脸颊前后移动|
| **[setCheekWidth](Gameplay.HumanoidV2Shape.md#setcheekwidth)**(`number`, `boolean`): `void` <br> 设置脸颊宽度|
| **[setEarRoll](Gameplay.HumanoidV2Shape.md#setearroll)**(`number`, `boolean`): `void` <br> 调整耳朵左右旋转|
| **[setEarScale](Gameplay.HumanoidV2Shape.md#setearscale)**(`number`, `boolean`): `void` <br> 调整耳朵大小|
| **[setEarYaw](Gameplay.HumanoidV2Shape.md#setearyaw)**(`number`, `boolean`): `void` <br> 调整耳朵前后旋转|
| **[setEyesGap](Gameplay.HumanoidV2Shape.md#seteyesgap)**(`number`, `boolean`): `void` <br> 设置眼睛间距|
| **[setEyesHeight](Gameplay.HumanoidV2Shape.md#seteyesheight)**(`number`, `boolean`): `void` <br> 设置眼睛上下移动|
| **[setEyesLength](Gameplay.HumanoidV2Shape.md#seteyeslength)**(`number`, `boolean`): `void` <br> 眼睛长度|
| **[setEyesRange](Gameplay.HumanoidV2Shape.md#seteyesrange)**(`number`, `boolean`): `void` <br> 设置眼睛前后移动|
| **[setEyesRotation](Gameplay.HumanoidV2Shape.md#seteyesrotation)**(`number`, `boolean`): `void` <br> 设置眼睛角度|
| **[setEyesWidth](Gameplay.HumanoidV2Shape.md#seteyeswidth)**(`number`, `boolean`): `void` <br> 设置眼睛左右宽度|
| **[setFaceWidth](Gameplay.HumanoidV2Shape.md#setfacewidth)**(`number`, `boolean`): `void` <br> 调整头部整体宽度|
| **[setGroinThickness](Gameplay.HumanoidV2Shape.md#setgrointhickness)**(`number`, `boolean`): `void` <br> 设置胯宽度前后|
| **[setGroinWidth](Gameplay.HumanoidV2Shape.md#setgroinwidth)**(`number`, `boolean`): `void` <br> 设置胯宽度左右|
| **[setHeadScale](Gameplay.HumanoidV2Shape.md#setheadscale)**(`number`, `boolean`): `void` <br> 设置角色头部大小|
| **[setJawLength](Gameplay.HumanoidV2Shape.md#setjawlength)**(`number`, `boolean`): `void` <br> 调整下巴长度|
| **[setJawRange](Gameplay.HumanoidV2Shape.md#setjawrange)**(`number`, `boolean`): `void` <br> 调整下巴前后移动|
| **[setJawSmooth](Gameplay.HumanoidV2Shape.md#setjawsmooth)**(`number`, `boolean`): `void` <br> 调整下巴圆度|
| **[setJawVertexHeight](Gameplay.HumanoidV2Shape.md#setjawvertexheight)**(`number`, `boolean`): `void` <br> 调整下巴尖上下移动|
| **[setJawVertexRange](Gameplay.HumanoidV2Shape.md#setjawvertexrange)**(`number`, `boolean`): `void` <br> 调整下巴尖前后移动|
| **[setJawVertexWidth](Gameplay.HumanoidV2Shape.md#setjawvertexwidth)**(`number`, `boolean`): `void` <br> 调整下巴尖宽度|
| **[setLowerArmsStretch](Gameplay.HumanoidV2Shape.md#setlowerarmsstretch)**(`number`, `boolean`): `void` <br> 设置小臂的拉伸|
| **[setLowerArmsThickness](Gameplay.HumanoidV2Shape.md#setlowerarmsthickness)**(`number`, `boolean`): `void` <br> 设置小臂前后方向的宽度|
| **[setLowerArmsWidth](Gameplay.HumanoidV2Shape.md#setlowerarmswidth)**(`number`, `boolean`): `void` <br> 设置小臂左右方向的宽度|
| **[setLowerFaceRange](Gameplay.HumanoidV2Shape.md#setlowerfacerange)**(`number`, `boolean`): `void` <br> 设置下半脸前后|
| **[setLowerFaceWidth](Gameplay.HumanoidV2Shape.md#setlowerfacewidth)**(`number`, `boolean`): `void` <br> 设置下半脸的宽度|
| **[setLowerJawRange](Gameplay.HumanoidV2Shape.md#setlowerjawrange)**(`number`, `boolean`): `void` <br> 调整下颚骨前后移动|
| **[setLowerJawWidth](Gameplay.HumanoidV2Shape.md#setlowerjawwidth)**(`number`, `boolean`): `void` <br> 调整下颚骨宽度|
| **[setLowerMouthThickness](Gameplay.HumanoidV2Shape.md#setlowermouththickness)**(`number`, `boolean`): `void` <br> 设置下嘴唇薄厚|
| **[setLowerStretch](Gameplay.HumanoidV2Shape.md#setlowerstretch)**(`number`, `boolean`): `void` <br> 调整耳朵下部拉伸|
| **[setMouthHeight](Gameplay.HumanoidV2Shape.md#setmouthheight)**(`number`, `boolean`): `void` <br> 设置嘴巴上下位置|
| **[setMouthRange](Gameplay.HumanoidV2Shape.md#setmouthrange)**(`number`, `boolean`): `void` <br> 设置嘴巴前后移动|
| **[setMouthShape](Gameplay.HumanoidV2Shape.md#setmouthshape)**(`number`, `boolean`): `void` <br> 调整嘴巴形状|
| **[setMouthWidth](Gameplay.HumanoidV2Shape.md#setmouthwidth)**(`number`, `boolean`): `void` <br> 设置嘴巴宽度|
| **[setNeckStretch](Gameplay.HumanoidV2Shape.md#setneckstretch)**(`number`, `boolean`): `void` <br> 设置脖子拉伸|
| **[setNeckThickness](Gameplay.HumanoidV2Shape.md#setneckthickness)**(`number`, `boolean`): `void` <br> 设置脖子前后的宽度|
| **[setNeckWidth](Gameplay.HumanoidV2Shape.md#setneckwidth)**(`number`, `boolean`): `void` <br> 调整脖子的左右宽度|
| **[setNoseHeight](Gameplay.HumanoidV2Shape.md#setnoseheight)**(`number`, `boolean`): `void` <br> 设置鼻梁高度|
| **[setNoseProtrusion](Gameplay.HumanoidV2Shape.md#setnoseprotrusion)**(`number`, `boolean`): `void` <br> 设置鼻尖长度|
| **[setNoseVerticalPosition](Gameplay.HumanoidV2Shape.md#setnoseverticalposition)**(`number`, `boolean`): `void` <br> 设置鼻子上下移动|
| **[setPupilHeight](Gameplay.HumanoidV2Shape.md#setpupilheight)**(`number`, `boolean`): `void` <br> 设置瞳孔高度|
| **[setPupilHorizontalPosition](Gameplay.HumanoidV2Shape.md#setpupilhorizontalposition)**(`number`, `boolean`): `void` <br> 设置瞳孔左右位置|
| **[setPupilVerticalPosition](Gameplay.HumanoidV2Shape.md#setpupilverticalposition)**(`number`, `boolean`): `void` <br> 设置瞳孔上下位置|
| **[setPupilWidth](Gameplay.HumanoidV2Shape.md#setpupilwidth)**(`number`, `boolean`): `void` <br> 设置瞳孔宽度|
| **[setRibThickness](Gameplay.HumanoidV2Shape.md#setribthickness)**(`number`, `boolean`): `void` <br> 设置肋骨的前后宽度|
| **[setRibWidth](Gameplay.HumanoidV2Shape.md#setribwidth)**(`number`, `boolean`): `void` <br> 设置肋骨的左右宽度|
| **[setShankScaleX](Gameplay.HumanoidV2Shape.md#setshankscalex)**(`number`, `boolean`): `void` <br> 设置小腿粗细左右|
| **[setShankScaleZ](Gameplay.HumanoidV2Shape.md#setshankscalez)**(`number`, `boolean`): `void` <br> 设置小腿粗细前后|
| **[setShankStretch](Gameplay.HumanoidV2Shape.md#setshankstretch)**(`number`, `boolean`): `void` <br> 设置小腿拉伸|
| **[setShoulderArmThickness](Gameplay.HumanoidV2Shape.md#setshoulderarmthickness)**(`number`, `boolean`): `void` <br> 设置肩膀的前后宽度|
| **[setShoulderArmWidth](Gameplay.HumanoidV2Shape.md#setshoulderarmwidth)**(`number`, `boolean`): `void` <br> 设置肩膀的左右宽度|
| **[setShoulderThickness](Gameplay.HumanoidV2Shape.md#setshoulderthickness)**(`number`, `boolean`): `void` <br> 设置肩膀的前后宽度|
| **[setShoulderWidth](Gameplay.HumanoidV2Shape.md#setshoulderwidth)**(`number`, `boolean`): `void` <br> 设置肩膀的宽度|
| **[setThighStretch](Gameplay.HumanoidV2Shape.md#setthighstretch)**(`number`, `boolean`): `void` <br> 设置大腿拉伸|
| **[setThighThicknessX](Gameplay.HumanoidV2Shape.md#setthighthicknessx)**(`number`, `boolean`): `void` <br> 设置大腿粗细左右|
| **[setThighThicknessZ](Gameplay.HumanoidV2Shape.md#setthighthicknessz)**(`number`, `boolean`): `void` <br> 设置大腿粗细前后|
| **[setUpperArmsStretch](Gameplay.HumanoidV2Shape.md#setupperarmsstretch)**(`number`, `boolean`): `void` <br> 设置大臂的拉伸|
| **[setUpperArmsThickness](Gameplay.HumanoidV2Shape.md#setupperarmsthickness)**(`number`, `boolean`): `void` <br> 设置大臂前后方向的宽度|
| **[setUpperArmsWidth](Gameplay.HumanoidV2Shape.md#setupperarmswidth)**(`number`, `boolean`): `void` <br> 设置大臂左右方向的宽度|
| **[setUpperFaceRange](Gameplay.HumanoidV2Shape.md#setupperfacerange)**(`number`, `boolean`): `void` <br> 调整上半脸前后移动|
| **[setUpperMouthThickness](Gameplay.HumanoidV2Shape.md#setuppermouththickness)**(`number`, `boolean`): `void` <br> 设置上嘴唇薄厚|
| **[setUpperStretch](Gameplay.HumanoidV2Shape.md#setupperstretch)**(`number`, `boolean`): `void` <br> 调整耳朵上部拉伸|
| **[setWaistStretch](Gameplay.HumanoidV2Shape.md#setwaiststretch)**(`number`, `boolean`): `void` <br> 设置腰部拉伸|
| **[setWaistThickness](Gameplay.HumanoidV2Shape.md#setwaistthickness)**(`number`, `boolean`): `void` <br> 设置腰的前后宽度|
| **[setWaistWidth](Gameplay.HumanoidV2Shape.md#setwaistwidth)**(`number`, `boolean`): `void` <br> 设置腰的左右宽度|

## Methods

### getBreastHorizontalPosition

▸ **getBreastHorizontalPosition**(): `number`

**`Description`**

调整胸部左右位置

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBreastHorizontalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#getbreasthorizontalposition)

___

### getBreastLength

▸ **getBreastLength**(): `number`

**`Description`**

调整胸部长度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBreastLength](../interfaces/Gameplay.IHumanoidV2Shape.md#getbreastlength)

___

### getBreastScale

▸ **getBreastScale**(): `number`

**`Description`**

调整胸部整体大小；

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBreastScale](../interfaces/Gameplay.IHumanoidV2Shape.md#getbreastscale)

___

### getBreastStretch

▸ **getBreastStretch**(): `number`

**`Description`**

获取胸部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBreastStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getbreaststretch)

___

### getBreastVerticalPosition

▸ **getBreastVerticalPosition**(): `number`

**`Description`**

调整胸部上下位置

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBreastVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#getbreastverticalposition)

___

### getBrowGap

▸ **getBrowGap**(): `number`

**`Description`**

获取眉间距

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBrowGap](../interfaces/Gameplay.IHumanoidV2Shape.md#getbrowgap)

___

### getBrowHeight

▸ **getBrowHeight**(): `number`

**`Description`**

获取眉毛上下移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBrowHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#getbrowheight)

___

### getBrowInboardShape

▸ **getBrowInboardShape**(): `number`

**`Description`**

获取眉毛内侧角度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBrowInboardShape](../interfaces/Gameplay.IHumanoidV2Shape.md#getbrowinboardshape)

___

### getBrowOutsideShape

▸ **getBrowOutsideShape**(): `number`

**`Description`**

获取眉毛外侧形状

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBrowOutsideShape](../interfaces/Gameplay.IHumanoidV2Shape.md#getbrowoutsideshape)

___

### getBrowRotation

▸ **getBrowRotation**(): `number`

**`Description`**

获取眉毛角度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getBrowRotation](../interfaces/Gameplay.IHumanoidV2Shape.md#getbrowrotation)

___

### getCanthusHorizontalPosition

▸ **getCanthusHorizontalPosition**(): `number`

**`Description`**

获取眼角左右移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCanthusHorizontalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#getcanthushorizontalposition)

___

### getCanthusVerticalPosition

▸ **getCanthusVerticalPosition**(): `number`

**`Description`**

获取外眼角上下移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCanthusVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#getcanthusverticalposition)

___

### getCharacterHeight

▸ **getCharacterHeight**(): `number`

**`Description`**

获取角色身高

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCharacterHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#getcharacterheight)

___

### getCheekBoneRange

▸ **getCheekBoneRange**(): `number`

**`Description`**

获取颧骨前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCheekBoneRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getcheekbonerange)

___

### getCheekBoneWidth

▸ **getCheekBoneWidth**(): `number`

**`Description`**

获取颧骨横向宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCheekBoneWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getcheekbonewidth)

___

### getCheekHeight

▸ **getCheekHeight**(): `number`

**`Description`**

获取脸颊上下移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCheekHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#getcheekheight)

___

### getCheekRange

▸ **getCheekRange**(): `number`

**`Description`**

获取脸颊前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCheekRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getcheekrange)

___

### getCheekWidth

▸ **getCheekWidth**(): `number`

**`Description`**

获取脸颊宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getCheekWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getcheekwidth)

___

### getEarRoll

▸ **getEarRoll**(): `number`

**`Description`**

调整耳朵左右旋转

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEarRoll](../interfaces/Gameplay.IHumanoidV2Shape.md#getearroll)

___

### getEarScale

▸ **getEarScale**(): `number`

**`Description`**

调整耳朵大小

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEarScale](../interfaces/Gameplay.IHumanoidV2Shape.md#getearscale)

___

### getEarYaw

▸ **getEarYaw**(): `number`

**`Description`**

调整耳朵前后旋转

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEarYaw](../interfaces/Gameplay.IHumanoidV2Shape.md#getearyaw)

___

### getEyesGap

▸ **getEyesGap**(): `number`

**`Description`**

获取眼睛间距

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEyesGap](../interfaces/Gameplay.IHumanoidV2Shape.md#geteyesgap)

___

### getEyesHeight

▸ **getEyesHeight**(): `number`

**`Description`**

获取眼睛上下移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEyesHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#geteyesheight)

___

### getEyesLength

▸ **getEyesLength**(): `number`

**`Description`**

眼睛长度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEyesLength](../interfaces/Gameplay.IHumanoidV2Shape.md#geteyeslength)

___

### getEyesRange

▸ **getEyesRange**(): `number`

**`Description`**

获取眼睛前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEyesRange](../interfaces/Gameplay.IHumanoidV2Shape.md#geteyesrange)

___

### getEyesRotation

▸ **getEyesRotation**(): `number`

**`Description`**

获取眼睛角度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEyesRotation](../interfaces/Gameplay.IHumanoidV2Shape.md#geteyesrotation)

___

### getEyesWidth

▸ **getEyesWidth**(): `number`

**`Description`**

获取眼睛左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getEyesWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#geteyeswidth)

___

### getFaceWidth

▸ **getFaceWidth**(): `number`

**`Description`**

调整头部整体宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getFaceWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getfacewidth)

___

### getGroinThickness

▸ **getGroinThickness**(): `number`

**`Description`**

获取胯宽度前后

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getGroinThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getgrointhickness)

___

### getGroinWidth

▸ **getGroinWidth**(): `number`

**`Description`**

获取胯宽度左右

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getGroinWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getgroinwidth)

___

### getHeadScale

▸ **getHeadScale**(): `number`

**`Description`**

获取角色头部大小

**`Effect`**

客户端调用

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getHeadScale](../interfaces/Gameplay.IHumanoidV2Shape.md#getheadscale)

___

### getJawLength

▸ **getJawLength**(): `number`

**`Description`**

调整下巴长度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getJawLength](../interfaces/Gameplay.IHumanoidV2Shape.md#getjawlength)

___

### getJawRange

▸ **getJawRange**(): `number`

**`Description`**

调整下巴前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getJawRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getjawrange)

___

### getJawSmooth

▸ **getJawSmooth**(): `number`

**`Description`**

调整下巴圆度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getJawSmooth](../interfaces/Gameplay.IHumanoidV2Shape.md#getjawsmooth)

___

### getJawVertexHeight

▸ **getJawVertexHeight**(): `number`

**`Description`**

调整下巴尖上下移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getJawVertexHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#getjawvertexheight)

___

### getJawVertexRange

▸ **getJawVertexRange**(): `number`

**`Description`**

调整下巴尖前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getJawVertexRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getjawvertexrange)

___

### getJawVertexWidth

▸ **getJawVertexWidth**(): `number`

**`Description`**

调整下巴尖宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getJawVertexWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getjawvertexwidth)

___

### getLowerArmsStretch

▸ **getLowerArmsStretch**(): `number`

**`Description`**

获取小臂的拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerArmsStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerarmsstretch)

___

### getLowerArmsThickness

▸ **getLowerArmsThickness**(): `number`

**`Description`**

获取小臂前后方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerArmsThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerarmsthickness)

___

### getLowerArmsWidth

▸ **getLowerArmsWidth**(): `number`

**`Description`**

获取小臂左右方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerArmsWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerarmswidth)

___

### getLowerFaceRange

▸ **getLowerFaceRange**(): `number`

**`Description`**

获取下半脸前后

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerFaceRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerfacerange)

___

### getLowerFaceWidth

▸ **getLowerFaceWidth**(): `number`

**`Description`**

获取下半脸的宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerFaceWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerfacewidth)

___

### getLowerJawRange

▸ **getLowerJawRange**(): `number`

**`Description`**

调整下颚骨前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerJawRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerjawrange)

___

### getLowerJawWidth

▸ **getLowerJawWidth**(): `number`

**`Description`**

调整下颚骨宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerJawWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerjawwidth)

___

### getLowerMouthThickness

▸ **getLowerMouthThickness**(): `number`

**`Description`**

获取下嘴唇薄厚

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerMouthThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowermouththickness)

___

### getLowerStretch

▸ **getLowerStretch**(): `number`

**`Description`**

调整耳朵下部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getLowerStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getlowerstretch)

___

### getMouthHeight

▸ **getMouthHeight**(): `number`

**`Description`**

获取嘴巴上下位置

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getMouthHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#getmouthheight)

___

### getMouthRange

▸ **getMouthRange**(): `number`

**`Description`**

获取嘴巴前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getMouthRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getmouthrange)

___

### getMouthShape

▸ **getMouthShape**(): `number`

**`Description`**

调整嘴巴形状

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getMouthShape](../interfaces/Gameplay.IHumanoidV2Shape.md#getmouthshape)

___

### getMouthWidth

▸ **getMouthWidth**(): `number`

**`Description`**

获取嘴巴宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getMouthWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getmouthwidth)

___

### getNeckStretch

▸ **getNeckStretch**(): `number`

**`Description`**

获取脖子拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getNeckStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getneckstretch)

___

### getNeckThickness

▸ **getNeckThickness**(): `number`

**`Description`**

获取脖子前后的宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getNeckThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getneckthickness)

___

### getNeckWidth

▸ **getNeckWidth**(): `number`

**`Description`**

调整脖子的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getNeckWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getneckwidth)

___

### getNoseHeight

▸ **getNoseHeight**(): `number`

**`Description`**

获取鼻梁高度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getNoseHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#getnoseheight)

___

### getNoseProtrusion

▸ **getNoseProtrusion**(): `number`

**`Description`**

获取鼻尖长度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getNoseProtrusion](../interfaces/Gameplay.IHumanoidV2Shape.md#getnoseprotrusion)

___

### getNoseVerticalPosition

▸ **getNoseVerticalPosition**(): `number`

**`Description`**

获取鼻子上下移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getNoseVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#getnoseverticalposition)

___

### getPupilHeight

▸ **getPupilHeight**(): `number`

**`Description`**

获取瞳孔高度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getPupilHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#getpupilheight)

___

### getPupilHorizontalPosition

▸ **getPupilHorizontalPosition**(): `number`

**`Description`**

获取瞳孔左右位置

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getPupilHorizontalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#getpupilhorizontalposition)

___

### getPupilVerticalPosition

▸ **getPupilVerticalPosition**(): `number`

**`Description`**

获取瞳孔上下位置

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getPupilVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#getpupilverticalposition)

___

### getPupilWidth

▸ **getPupilWidth**(): `number`

**`Description`**

获取瞳孔宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getPupilWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getpupilwidth)

___

### getRibThickness

▸ **getRibThickness**(): `number`

**`Description`**

获取肋骨的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getRibThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getribthickness)

___

### getRibWidth

▸ **getRibWidth**(): `number`

**`Description`**

获取肋骨的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getRibWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getribwidth)

___

### getShankScaleX

▸ **getShankScaleX**(): `number`

**`Description`**

获取小腿粗细左右

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getShankScaleX](../interfaces/Gameplay.IHumanoidV2Shape.md#getshankscalex)

___

### getShankScaleZ

▸ **getShankScaleZ**(): `number`

**`Description`**

获取小腿粗细前后

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getShankScaleZ](../interfaces/Gameplay.IHumanoidV2Shape.md#getshankscalez)

___

### getShankStretch

▸ **getShankStretch**(): `number`

**`Description`**

获取小腿拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getShankStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getshankstretch)

___

### getShoulderArmThickness

▸ **getShoulderArmThickness**(): `number`

**`Description`**

获取肩膀的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getShoulderArmThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getshoulderarmthickness)

___

### getShoulderArmWidth

▸ **getShoulderArmWidth**(): `number`

**`Description`**

获取肩膀的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getShoulderArmWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getshoulderarmwidth)

___

### getShoulderThickness

▸ **getShoulderThickness**(): `number`

**`Description`**

获取肩膀的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getShoulderThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getshoulderthickness)

___

### getShoulderWidth

▸ **getShoulderWidth**(): `number`

**`Description`**

获取肩膀的宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getShoulderWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getshoulderwidth)

___

### getThighStretch

▸ **getThighStretch**(): `number`

**`Description`**

获取大腿拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getThighStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getthighstretch)

___

### getThighThicknessX

▸ **getThighThicknessX**(): `number`

**`Description`**

获取大腿粗细左右

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getThighThicknessX](../interfaces/Gameplay.IHumanoidV2Shape.md#getthighthicknessx)

___

### getThighThicknessZ

▸ **getThighThicknessZ**(): `number`

**`Description`**

获取大腿粗细前后

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getThighThicknessZ](../interfaces/Gameplay.IHumanoidV2Shape.md#getthighthicknessz)

___

### getUpperArmsStretch

▸ **getUpperArmsStretch**(): `number`

**`Description`**

获取大臂的拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getUpperArmsStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getupperarmsstretch)

___

### getUpperArmsThickness

▸ **getUpperArmsThickness**(): `number`

**`Description`**

获取大臂前后方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getUpperArmsThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getupperarmsthickness)

___

### getUpperArmsWidth

▸ **getUpperArmsWidth**(): `number`

**`Description`**

获取大臂左右方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getUpperArmsWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getupperarmswidth)

___

### getUpperFaceRange

▸ **getUpperFaceRange**(): `number`

**`Description`**

调整上半脸前后移动

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getUpperFaceRange](../interfaces/Gameplay.IHumanoidV2Shape.md#getupperfacerange)

___

### getUpperMouthThickness

▸ **getUpperMouthThickness**(): `number`

**`Description`**

获取上嘴唇薄厚

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getUpperMouthThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getuppermouththickness)

___

### getUpperStretch

▸ **getUpperStretch**(): `number`

**`Description`**

调整耳朵上部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getUpperStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getupperstretch)

___

### getWaistStretch

▸ **getWaistStretch**(): `number`

**`Description`**

获取腰部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getWaistStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#getwaiststretch)

___

### getWaistThickness

▸ **getWaistThickness**(): `number`

**`Description`**

获取腰的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getWaistThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#getwaistthickness)

___

### getWaistWidth

▸ **getWaistWidth**(): `number`

**`Description`**

获取腰的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[getWaistWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#getwaistwidth)

___

### setBreastHorizontalPosition

▸ **setBreastHorizontalPosition**(`value`, `sync`): `void`

**`Description`**

调整胸部左右位置
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBreastHorizontalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#setbreasthorizontalposition)

___

### setBreastLength

▸ **setBreastLength**(`value`, `sync`): `void`

**`Description`**

调整胸部长度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBreastLength](../interfaces/Gameplay.IHumanoidV2Shape.md#setbreastlength)

___

### setBreastScale

▸ **setBreastScale**(`value`, `sync`): `void`

**`Description`**

调整胸部整体大小；
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBreastScale](../interfaces/Gameplay.IHumanoidV2Shape.md#setbreastscale)

___

### setBreastStretch

▸ **setBreastStretch**(`value`, `sync`): `void`

**`Description`**

设置胸部拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBreastStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setbreaststretch)

___

### setBreastVerticalPosition

▸ **setBreastVerticalPosition**(`value`, `sync`): `void`

**`Description`**

调整胸部上下位置
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBreastVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#setbreastverticalposition)

___

### setBrowGap

▸ **setBrowGap**(`value`, `sync`): `void`

**`Description`**

设置眉间距
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBrowGap](../interfaces/Gameplay.IHumanoidV2Shape.md#setbrowgap)

___

### setBrowHeight

▸ **setBrowHeight**(`value`, `sync`): `void`

**`Description`**

设置眉毛上下移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBrowHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#setbrowheight)

___

### setBrowInboardShape

▸ **setBrowInboardShape**(`value`, `sync`): `void`

**`Description`**

设置眉毛内侧角度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBrowInboardShape](../interfaces/Gameplay.IHumanoidV2Shape.md#setbrowinboardshape)

___

### setBrowOutsideShape

▸ **setBrowOutsideShape**(`value`, `sync`): `void`

**`Description`**

设置眉毛外侧形状
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBrowOutsideShape](../interfaces/Gameplay.IHumanoidV2Shape.md#setbrowoutsideshape)

___

### setBrowRotation

▸ **setBrowRotation**(`value`, `sync`): `void`

**`Description`**

设置眉毛角度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setBrowRotation](../interfaces/Gameplay.IHumanoidV2Shape.md#setbrowrotation)

___

### setCanthusHorizontalPosition

▸ **setCanthusHorizontalPosition**(`value`, `sync`): `void`

**`Description`**

设置眼角左右移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCanthusHorizontalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#setcanthushorizontalposition)

___

### setCanthusVerticalPosition

▸ **setCanthusVerticalPosition**(`value`, `sync`): `void`

**`Description`**

设置外眼角上下移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCanthusVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#setcanthusverticalposition)

___

### setCharacterHeight

▸ **setCharacterHeight**(`value`, `sync`): `void`

**`Description`**

设置角色身高

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCharacterHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#setcharacterheight)

___

### setCheekBoneRange

▸ **setCheekBoneRange**(`value`, `sync`): `void`

**`Description`**

设置颧骨前后移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCheekBoneRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setcheekbonerange)

___

### setCheekBoneWidth

▸ **setCheekBoneWidth**(`value`, `sync`): `void`

**`Description`**

设置颧骨横向宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCheekBoneWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setcheekbonewidth)

___

### setCheekHeight

▸ **setCheekHeight**(`value`, `sync`): `void`

**`Description`**

设置脸颊上下移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCheekHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#setcheekheight)

___

### setCheekRange

▸ **setCheekRange**(`value`, `sync`): `void`

**`Description`**

设置脸颊前后移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCheekRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setcheekrange)

___

### setCheekWidth

▸ **setCheekWidth**(`value`, `sync`): `void`

**`Description`**

设置脸颊宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setCheekWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setcheekwidth)

___

### setEarRoll

▸ **setEarRoll**(`value`, `sync`): `void`

**`Description`**

调整耳朵左右旋转
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEarRoll](../interfaces/Gameplay.IHumanoidV2Shape.md#setearroll)

___

### setEarScale

▸ **setEarScale**(`value`, `sync`): `void`

**`Description`**

调整耳朵大小
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEarScale](../interfaces/Gameplay.IHumanoidV2Shape.md#setearscale)

___

### setEarYaw

▸ **setEarYaw**(`value`, `sync`): `void`

**`Description`**

调整耳朵前后旋转
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEarYaw](../interfaces/Gameplay.IHumanoidV2Shape.md#setearyaw)

___

### setEyesGap

▸ **setEyesGap**(`value`, `sync`): `void`

**`Description`**

设置眼睛间距
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEyesGap](../interfaces/Gameplay.IHumanoidV2Shape.md#seteyesgap)

___

### setEyesHeight

▸ **setEyesHeight**(`value`, `sync`): `void`

**`Description`**

设置眼睛上下移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEyesHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#seteyesheight)

___

### setEyesLength

▸ **setEyesLength**(`value`, `sync`): `void`

**`Description`**

眼睛长度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEyesLength](../interfaces/Gameplay.IHumanoidV2Shape.md#seteyeslength)

___

### setEyesRange

▸ **setEyesRange**(`value`, `sync`): `void`

**`Description`**

设置眼睛前后移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEyesRange](../interfaces/Gameplay.IHumanoidV2Shape.md#seteyesrange)

___

### setEyesRotation

▸ **setEyesRotation**(`value`, `sync`): `void`

**`Description`**

设置眼睛角度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEyesRotation](../interfaces/Gameplay.IHumanoidV2Shape.md#seteyesrotation)

___

### setEyesWidth

▸ **setEyesWidth**(`value`, `sync`): `void`

**`Description`**

设置眼睛左右宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setEyesWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#seteyeswidth)

___

### setFaceWidth

▸ **setFaceWidth**(`value`, `sync`): `void`

**`Description`**

调整头部整体宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setFaceWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setfacewidth)

___

### setGroinThickness

▸ **setGroinThickness**(`value`, `sync`): `void`

**`Description`**

设置胯宽度前后
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setGroinThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setgrointhickness)

___

### setGroinWidth

▸ **setGroinWidth**(`value`, `sync`): `void`

**`Description`**

设置胯宽度左右
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setGroinWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setgroinwidth)

___

### setHeadScale

▸ **setHeadScale**(`value`, `sync`): `void`

**`Description`**

设置角色头部大小

**`Effect`**

sync = false:客户端;
sync = true:双端调用
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setHeadScale](../interfaces/Gameplay.IHumanoidV2Shape.md#setheadscale)

___

### setJawLength

▸ **setJawLength**(`value`, `sync`): `void`

**`Description`**

调整下巴长度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setJawLength](../interfaces/Gameplay.IHumanoidV2Shape.md#setjawlength)

___

### setJawRange

▸ **setJawRange**(`value`, `sync`): `void`

**`Description`**

调整下巴前后移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setJawRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setjawrange)

___

### setJawSmooth

▸ **setJawSmooth**(`value`, `sync`): `void`

**`Description`**

调整下巴圆度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setJawSmooth](../interfaces/Gameplay.IHumanoidV2Shape.md#setjawsmooth)

___

### setJawVertexHeight

▸ **setJawVertexHeight**(`value`, `sync`): `void`

**`Description`**

调整下巴尖上下移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setJawVertexHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#setjawvertexheight)

___

### setJawVertexRange

▸ **setJawVertexRange**(`value`, `sync`): `void`

**`Description`**

调整下巴尖前后移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setJawVertexRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setjawvertexrange)

___

### setJawVertexWidth

▸ **setJawVertexWidth**(`value`, `sync`): `void`

**`Description`**

调整下巴尖宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setJawVertexWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setjawvertexwidth)

___

### setLowerArmsStretch

▸ **setLowerArmsStretch**(`value`, `sync`): `void`

**`Description`**

设置小臂的拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerArmsStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerarmsstretch)

___

### setLowerArmsThickness

▸ **setLowerArmsThickness**(`value`, `sync`): `void`

**`Description`**

设置小臂前后方向的宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerArmsThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerarmsthickness)

___

### setLowerArmsWidth

▸ **setLowerArmsWidth**(`value`, `sync`): `void`

**`Description`**

设置小臂左右方向的宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerArmsWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerarmswidth)

___

### setLowerFaceRange

▸ **setLowerFaceRange**(`value`, `sync`): `void`

**`Description`**

设置下半脸前后
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerFaceRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerfacerange)

___

### setLowerFaceWidth

▸ **setLowerFaceWidth**(`value`, `sync`): `void`

**`Description`**

设置下半脸的宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerFaceWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerfacewidth)

___

### setLowerJawRange

▸ **setLowerJawRange**(`value`, `sync`): `void`

**`Description`**

调整下颚骨前后移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerJawRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerjawrange)

___

### setLowerJawWidth

▸ **setLowerJawWidth**(`value`, `sync`): `void`

**`Description`**

调整下颚骨宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerJawWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerjawwidth)

___

### setLowerMouthThickness

▸ **setLowerMouthThickness**(`value`, `sync`): `void`

**`Description`**

设置下嘴唇薄厚
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerMouthThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowermouththickness)

___

### setLowerStretch

▸ **setLowerStretch**(`value`, `sync`): `void`

**`Description`**

调整耳朵下部拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setLowerStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setlowerstretch)

___

### setMouthHeight

▸ **setMouthHeight**(`value`, `sync`): `void`

**`Description`**

设置嘴巴上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setMouthHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#setmouthheight)

___

### setMouthRange

▸ **setMouthRange**(`value`, `sync`): `void`

**`Description`**

设置嘴巴前后移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setMouthRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setmouthrange)

___

### setMouthShape

▸ **setMouthShape**(`value`, `sync`): `void`

**`Description`**

调整嘴巴形状
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setMouthShape](../interfaces/Gameplay.IHumanoidV2Shape.md#setmouthshape)

___

### setMouthWidth

▸ **setMouthWidth**(`value`, `sync`): `void`

**`Description`**

设置嘴巴宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setMouthWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setmouthwidth)

___

### setNeckStretch

▸ **setNeckStretch**(`value`, `sync`): `void`

**`Description`**

设置脖子拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setNeckStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setneckstretch)

___

### setNeckThickness

▸ **setNeckThickness**(`value`, `sync`): `void`

**`Description`**

设置脖子前后的宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setNeckThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setneckthickness)

___

### setNeckWidth

▸ **setNeckWidth**(`value`, `sync`): `void`

**`Description`**

调整脖子的左右宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setNeckWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setneckwidth)

___

### setNoseHeight

▸ **setNoseHeight**(`value`, `sync`): `void`

**`Description`**

设置鼻梁高度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setNoseHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#setnoseheight)

___

### setNoseProtrusion

▸ **setNoseProtrusion**(`value`, `sync`): `void`

**`Description`**

设置鼻尖长度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setNoseProtrusion](../interfaces/Gameplay.IHumanoidV2Shape.md#setnoseprotrusion)

___

### setNoseVerticalPosition

▸ **setNoseVerticalPosition**(`value`, `sync`): `void`

**`Description`**

设置鼻子上下移动
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setNoseVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#setnoseverticalposition)

___

### setPupilHeight

▸ **setPupilHeight**(`value`, `sync`): `void`

**`Description`**

设置瞳孔高度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setPupilHeight](../interfaces/Gameplay.IHumanoidV2Shape.md#setpupilheight)

___

### setPupilHorizontalPosition

▸ **setPupilHorizontalPosition**(`value`, `sync`): `void`

**`Description`**

设置瞳孔左右位置
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setPupilHorizontalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#setpupilhorizontalposition)

___

### setPupilVerticalPosition

▸ **setPupilVerticalPosition**(`value`, `sync`): `void`

**`Description`**

设置瞳孔上下位置
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setPupilVerticalPosition](../interfaces/Gameplay.IHumanoidV2Shape.md#setpupilverticalposition)

___

### setPupilWidth

▸ **setPupilWidth**(`value`, `sync`): `void`

**`Description`**

设置瞳孔宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setPupilWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setpupilwidth)

___

### setRibThickness

▸ **setRibThickness**(`value`, `sync`): `void`

**`Description`**

设置肋骨的前后宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setRibThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setribthickness)

___

### setRibWidth

▸ **setRibWidth**(`value`, `sync`): `void`

**`Description`**

设置肋骨的左右宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setRibWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setribwidth)

___

### setShankScaleX

▸ **setShankScaleX**(`value`, `sync`): `void`

**`Description`**

设置小腿粗细左右
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setShankScaleX](../interfaces/Gameplay.IHumanoidV2Shape.md#setshankscalex)

___

### setShankScaleZ

▸ **setShankScaleZ**(`value`, `sync`): `void`

**`Description`**

设置小腿粗细前后
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setShankScaleZ](../interfaces/Gameplay.IHumanoidV2Shape.md#setshankscalez)

___

### setShankStretch

▸ **setShankStretch**(`value`, `sync`): `void`

**`Description`**

设置小腿拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setShankStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setshankstretch)

___

### setShoulderArmThickness

▸ **setShoulderArmThickness**(`value`, `sync`): `void`

**`Description`**

设置肩膀的前后宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setShoulderArmThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setshoulderarmthickness)

___

### setShoulderArmWidth

▸ **setShoulderArmWidth**(`value`, `sync`): `void`

**`Description`**

设置肩膀的左右宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setShoulderArmWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setshoulderarmwidth)

___

### setShoulderThickness

▸ **setShoulderThickness**(`value`, `sync`): `void`

**`Description`**

设置肩膀的前后宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setShoulderThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setshoulderthickness)

___

### setShoulderWidth

▸ **setShoulderWidth**(`value`, `sync`): `void`

**`Description`**

设置肩膀的宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setShoulderWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setshoulderwidth)

___

### setThighStretch

▸ **setThighStretch**(`value`, `sync`): `void`

**`Description`**

设置大腿拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setThighStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setthighstretch)

___

### setThighThicknessX

▸ **setThighThicknessX**(`value`, `sync`): `void`

**`Description`**

设置大腿粗细左右
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setThighThicknessX](../interfaces/Gameplay.IHumanoidV2Shape.md#setthighthicknessx)

___

### setThighThicknessZ

▸ **setThighThicknessZ**(`value`, `sync`): `void`

**`Description`**

设置大腿粗细前后
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setThighThicknessZ](../interfaces/Gameplay.IHumanoidV2Shape.md#setthighthicknessz)

___

### setUpperArmsStretch

▸ **setUpperArmsStretch**(`value`, `sync`): `void`

**`Description`**

设置大臂的拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setUpperArmsStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setupperarmsstretch)

___

### setUpperArmsThickness

▸ **setUpperArmsThickness**(`value`, `sync`): `void`

**`Description`**

设置大臂前后方向的宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setUpperArmsThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setupperarmsthickness)

___

### setUpperArmsWidth

▸ **setUpperArmsWidth**(`value`, `sync`): `void`

**`Description`**

设置大臂左右方向的宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setUpperArmsWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setupperarmswidth)

___

### setUpperFaceRange

▸ **setUpperFaceRange**(`value`, `sync`): `void`

**`Description`**

调整上半脸前后移动

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setUpperFaceRange](../interfaces/Gameplay.IHumanoidV2Shape.md#setupperfacerange)

___

### setUpperMouthThickness

▸ **setUpperMouthThickness**(`value`, `sync`): `void`

**`Description`**

设置上嘴唇薄厚
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setUpperMouthThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setuppermouththickness)

___

### setUpperStretch

▸ **setUpperStretch**(`value`, `sync`): `void`

**`Description`**

调整耳朵上部拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setUpperStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setupperstretch)

___

### setWaistStretch

▸ **setWaistStretch**(`value`, `sync`): `void`

**`Description`**

设置腰部拉伸
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setWaistStretch](../interfaces/Gameplay.IHumanoidV2Shape.md#setwaiststretch)

___

### setWaistThickness

▸ **setWaistThickness**(`value`, `sync`): `void`

**`Description`**

设置腰的前后宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setWaistThickness](../interfaces/Gameplay.IHumanoidV2Shape.md#setwaistthickness)

___

### setWaistWidth

▸ **setWaistWidth**(`value`, `sync`): `void`

**`Description`**

设置腰的左右宽度
 *

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md).[setWaistWidth](../interfaces/Gameplay.IHumanoidV2Shape.md#setwaistwidth)