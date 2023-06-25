[Type](../groups/Core.Type.md) / Gizmo

# Gizmo <Badge type="tip" text="Class" /> <Score text="Gizmo" />

Gizmo

**`Instance`**

## Table of contents

| Accessors |
| :-----|
| **[axisXColor](mw.Gizmo.md#axisxcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取X轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[axisXYColor](mw.Gizmo.md#axisxycolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取XZ平面的颜色|
| **[axisXZColor](mw.Gizmo.md#axisxzcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取XZ平面的颜色|
| **[axisYColor](mw.Gizmo.md#axisycolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取y轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[axisYZColor](mw.Gizmo.md#axisyzcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取YZ平面的颜色|
| **[axisZColor](mw.Gizmo.md#axiszcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取z轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[currentCoordinateAxis](mw.Gizmo.md#currentcoordinateaxis)**(): [`GizmoCoordinateType`](../enums/mw.GizmoCoordinateType.md) <br> 获取当前选中的轴|
| **[enablePositionAdsorb](mw.Gizmo.md#enablepositionadsorb)**(`enable`: `boolean`): `void` <br> 设置是否开启位移吸附|
| **[enablePositionSnapToGrid](mw.Gizmo.md#enablepositionsnaptogrid)**(`enable`: `boolean`): `void` <br> 设置是否开启位移网格|
| **[enableProportionalScale](mw.Gizmo.md#enableproportionalscale)**(`enable`: `boolean`): `void` <br> 设置是否开启等比缩放|
| **[enableRotatorSnapToGrid](mw.Gizmo.md#enablerotatorsnaptogrid)**(`enable`: `boolean`): `void` <br> 设置是否开启旋转网格|
| **[enableScaleSnapToGrid](mw.Gizmo.md#enablescalesnaptogrid)**(`enable`: `boolean`): `void` <br> 设置是否开启缩放网格|
| **[gizmoActorRotation](mw.Gizmo.md#gizmoactorrotation)**(`NewRotation`: [`Rotation`](mw.Rotation.md)): `void` <br> 设置坐标轴旋转|
| **[isPositionAdsorbEnabled](mw.Gizmo.md#ispositionadsorbenabled)**(): `boolean` <br> 获取是否开启位移吸附|
| **[isPositionSnapToGridEnabled](mw.Gizmo.md#ispositionsnaptogridenabled)**(): `boolean` <br> 获取是否开启位移网格|
| **[isProportionalScaleEnabled](mw.Gizmo.md#isproportionalscaleenabled)**(): `boolean` <br> 获取是否开启等比缩放|
| **[isRotatorSnapToGridEnabled](mw.Gizmo.md#isrotatorsnaptogridenabled)**(): `boolean` <br> 获取是否开启旋转网格|
| **[isScaleSnapToGridEnabled](mw.Gizmo.md#isscalesnaptogridenabled)**(): `boolean` <br> 获取是否开启缩放网格|
| **[positionAdsorbDistance](mw.Gizmo.md#positionadsorbdistance)**(): `number` <br> 获取位移吸附距离|
| **[positionGizmoAxisLength](mw.Gizmo.md#positiongizmoaxislength)**(): `number` <br> 获取位移轴长度|
| **[positionSnapGridSize](mw.Gizmo.md#positionsnapgridsize)**(): `number` <br> 获取位移网格大小|
| **[rotatorSnapGridSize](mw.Gizmo.md#rotatorsnapgridsize)**(): `number` <br> 获取旋转网格大小|
| **[rotatorXSurfaceColor](mw.Gizmo.md#rotatorxsurfacecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取X轴旋转面的颜色|
| **[rotatorYSurfaceColor](mw.Gizmo.md#rotatorysurfacecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取y轴旋转面的颜色|
| **[rotatorZSurfaceColor](mw.Gizmo.md#rotatorzsurfacecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取z轴旋转面的颜色|
| **[scaleGizmoAxisLength](mw.Gizmo.md#scalegizmoaxislength)**(): `number` <br> 获取缩放轴长度|
| **[scaleGizmoBoundary](mw.Gizmo.md#scalegizmoboundary)**(`boundary`: `number`): `void` <br> 设置gizmo缩放时候的边界,在缩放到达这个数值的时候会直接设置到目标数值|
| **[scaleGizmoStepNumber](mw.Gizmo.md#scalegizmostepnumber)**(`stepNumber`: `number`): `void` <br> 设置gizmo到目标的帧数,具体计算方式为 (1/当前帧delta)/stepNumber|
| **[scaleSnapGridSize](mw.Gizmo.md#scalesnapgridsize)**(): `number` <br> 获取缩放网格大小|

| Methods |
| :-----|
| **[addIgnoreActor](mw.Gizmo.md#addignoreactor)**(`actor`: [`GameObject`](mw.GameObject.md) \): `void` <br> 添加需要被坐标轴忽略的object|
| **[attachActorToGizmo](mw.Gizmo.md#attachactortogizmo)**(`Actor`: [`GameObject`](mw.GameObject.md), `IsRecordChange?`: `boolean`): `void` <br> 附加物体到坐标轴|
| **[detachActorFormGizmo](mw.Gizmo.md#detachactorformgizmo)**(`Actor`: [`GameObject`](mw.GameObject.md)): `void` <br> 移除物体到坐标轴|
| **[onAttachChanged](mw.Gizmo.md#onattachchanged)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md)) => `void`\>): `void` <br> 附加代理|
| **[onGizemoSelectStatusChanged](mw.Gizmo.md#ongizemoselectstatuschanged)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`bSelected`: `boolean`) => `void`\>): `void` <br> 附加代理|
| **[onGizmoVisibleChanged](mw.Gizmo.md#ongizmovisiblechanged)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\>): `void` <br> 坐标轴隐藏显示代理|
| **[setGizmoActorLocation](mw.Gizmo.md#setgizmoactorlocation)**(`NewLocation`: [`Vector`](mw.Vector.md), `IsRecordChange?`: `boolean`): `void` <br> 设置坐标轴位置|
| **[setGizmoActorLocationAndRotation](mw.Gizmo.md#setgizmoactorlocationandrotation)**(`NewLocation`: [`Vector`](mw.Vector.md), `NewRotation`: [`Rotation`](mw.Rotation.md)): `void` <br> 设置坐标轴旋转和缩放|
| **[setGizmoHighlightColor](mw.Gizmo.md#setgizmohighlightcolor)**(`InHighlightColor`: [`LinearColor`](mw.LinearColor.md)): `void` <br> 设置坐标轴选中时的高亮颜色|
| **[setGizmoScaleOffset](mw.Gizmo.md#setgizmoscaleoffset)**(`InOffset`: `number`): `void` <br> 设置坐标轴模型整体缩放倍数|
| **[showGizmoActor](mw.Gizmo.md#showgizmoactor)**(`[showGizmoActor](mw.Gizmo.md#showgizmoactor)`): `void` <br> 设置坐标轴隐藏或者显示|
| **[switchGizmoMode](mw.Gizmo.md#switchgizmomode)**(`GizmoMode`: [`GizmoModeType`](../enums/mw.GizmoModeType.md)): `void` <br> 切换坐标轴模式|

## Accessors

### axisXColor <Score text="axisXColor" /> 

• `get` **axisXColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取X轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取x轴旋的颜色 ,类型 LinearColor 范围 0-1

• `set` **axisXColor**(`color`): `void` <Badge type="tip" text="client" />

设置X轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisXYColor <Score text="axisXYColor" /> 

• `get` **axisXYColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取XZ平面的颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取xy轴旋的颜色 类型 LinearColor 范围 0-1

• `set` **axisXYColor**(`color`): `void` <Badge type="tip" text="client" />

设置XZ平面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisXZColor <Score text="axisXZColor" /> 

• `get` **axisXZColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取XZ平面的颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取xz轴旋的颜色 类型 LinearColor 范围 0-1

• `set` **axisXZColor**(`color`): `void` <Badge type="tip" text="client" />

设置XZ平面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisYColor <Score text="axisYColor" /> 

• `get` **axisYColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取y轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取y轴旋的颜色, 类型 LinearColor 范围 0-1

• `set` **axisYColor**(`color`): `void` <Badge type="tip" text="client" />

设置y轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisYZColor <Score text="axisYZColor" /> 

• `get` **axisYZColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取YZ平面的颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取yz轴旋的颜色 类型 LinearColor 范围 0-1

• `set` **axisYZColor**(`color`): `void` <Badge type="tip" text="client" />

设置YZ平面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisZColor <Score text="axisZColor" /> 

• `get` **axisZColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取z轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取z轴旋的颜色, 类型 LinearColor 范围 0-1

• `set` **axisZColor**(`color`): `void` <Badge type="tip" text="client" />

设置z轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### currentCoordinateAxis <Score text="currentCoordinateAxis" /> 

• `get` **currentCoordinateAxis**(): [`GizmoCoordinateType`](../enums/mw.GizmoCoordinateType.md) <Badge type="tip" text="client" />

获取当前选中的轴


#### Returns

[`GizmoCoordinateType`](../enums/mw.GizmoCoordinateType.md)

___

### enablePositionAdsorb <Score text="enablePositionAdsorb" /> 

• `set` **enablePositionAdsorb**(`enable`): `void` <Badge type="tip" text="client" />

设置是否开启位移吸附


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启 |


___

### enablePositionSnapToGrid <Score text="enablePositionSnapToGrid" /> 

• `set` **enablePositionSnapToGrid**(`enable`): `void` <Badge type="tip" text="client" />

设置是否开启位移网格


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启 |


___

### enableProportionalScale <Score text="enableProportionalScale" /> 

• `set` **enableProportionalScale**(`enable`): `void` <Badge type="tip" text="client" />

设置是否开启等比缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启 |


___

### enableRotatorSnapToGrid <Score text="enableRotatorSnapToGrid" /> 

• `set` **enableRotatorSnapToGrid**(`enable`): `void` <Badge type="tip" text="client" />

设置是否开启旋转网格


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启 |


___

### enableScaleSnapToGrid <Score text="enableScaleSnapToGrid" /> 

• `set` **enableScaleSnapToGrid**(`enable`): `void` <Badge type="tip" text="client" />

设置是否开启缩放网格


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启 |


___

### gizmoActorRotation <Score text="gizmoActorRotation" /> 

• `set` **gizmoActorRotation**(`NewRotation`): `void` <Badge type="tip" text="client" />

设置坐标轴旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewRotation` | [`Rotation`](mw.Rotation.md) | 新的旋转 |


___

### isPositionAdsorbEnabled <Score text="isPositionAdsorbEnabled" /> 

• `get` **isPositionAdsorbEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启位移吸附


#### Returns

`boolean`

___

### isPositionSnapToGridEnabled <Score text="isPositionSnapToGridEnabled" /> 

• `get` **isPositionSnapToGridEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启位移网格


#### Returns

`boolean`

___

### isProportionalScaleEnabled <Score text="isProportionalScaleEnabled" /> 

• `get` **isProportionalScaleEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启等比缩放


#### Returns

`boolean`

___

### isRotatorSnapToGridEnabled <Score text="isRotatorSnapToGridEnabled" /> 

• `get` **isRotatorSnapToGridEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启旋转网格


#### Returns

`boolean`

___

### isScaleSnapToGridEnabled <Score text="isScaleSnapToGridEnabled" /> 

• `get` **isScaleSnapToGridEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启缩放网格


#### Returns

`boolean`

___

### positionAdsorbDistance <Score text="positionAdsorbDistance" /> 

• `get` **positionAdsorbDistance**(): `number` <Badge type="tip" text="client" />

获取位移吸附距离


#### Returns

`number`

• `set` **positionAdsorbDistance**(`distance`): `void` <Badge type="tip" text="client" />

修改位移吸附距离


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` |  位移吸附距离 |


___

### positionGizmoAxisLength <Score text="positionGizmoAxisLength" /> 

• `get` **positionGizmoAxisLength**(): `number` <Badge type="tip" text="client" />

获取位移轴长度


#### Returns

`number`

• `set` **positionGizmoAxisLength**(`length`): `void` <Badge type="tip" text="client" />

设置位移轴长度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` |  长度 |


___

### positionSnapGridSize <Score text="positionSnapGridSize" /> 

• `get` **positionSnapGridSize**(): `number` <Badge type="tip" text="client" />

获取位移网格大小


#### Returns

`number`

• `set` **positionSnapGridSize**(`size`): `void` <Badge type="tip" text="client" />

设置位移网格大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` |  位移网格大小 |


___

### rotatorSnapGridSize <Score text="rotatorSnapGridSize" /> 

• `get` **rotatorSnapGridSize**(): `number` <Badge type="tip" text="client" />

获取旋转网格大小


#### Returns

`number`

• `set` **rotatorSnapGridSize**(`size`): `void` <Badge type="tip" text="client" />

设置旋转网格大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` |  旋转网格大小 |


___

### rotatorXSurfaceColor <Score text="rotatorXSurfaceColor" /> 

• `get` **rotatorXSurfaceColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="other" />

获取X轴旋转面的颜色

只在客户端调用生效 类型 LinearColor 范围 0-1

#### Returns

[`LinearColor`](mw.LinearColor.md)

• `set` **rotatorXSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

设置X轴旋转面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 类型 LinearColor 范围 0-1 |


___

### rotatorYSurfaceColor <Score text="rotatorYSurfaceColor" /> 

• `get` **rotatorYSurfaceColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取y轴旋转面的颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取y轴旋转面的颜色 类型 LinearColor 范围 0-1

• `set` **rotatorYSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

设置y轴旋转面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### rotatorZSurfaceColor <Score text="rotatorZSurfaceColor" /> 

• `get` **rotatorZSurfaceColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取z轴旋转面的颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

获取z轴旋转面的颜色 类型 LinearColor 范围 0-1

• `set` **rotatorZSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

设置z轴旋转面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### scaleGizmoAxisLength <Score text="scaleGizmoAxisLength" /> 

• `get` **scaleGizmoAxisLength**(): `number` <Badge type="tip" text="client" />

获取缩放轴长度


#### Returns

`number`

• `set` **scaleGizmoAxisLength**(`length`): `void` <Badge type="tip" text="client" />

设置缩放轴长度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` |  长度 |


___

### scaleGizmoBoundary <Score text="scaleGizmoBoundary" /> 

• `set` **scaleGizmoBoundary**(`boundary`): `void` <Badge type="tip" text="client" />

设置gizmo缩放时候的边界,在缩放到达这个数值的时候会直接设置到目标数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `boundary` | `number` |  边界 |


___

### scaleGizmoStepNumber <Score text="scaleGizmoStepNumber" /> 

• `set` **scaleGizmoStepNumber**(`stepNumber`): `void` <Badge type="tip" text="client" />

设置gizmo到目标的帧数,具体计算方式为 (1/当前帧delta)/stepNumber


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stepNumber` | `number` |  设置到目标缩放值的数值 |


___

### scaleSnapGridSize <Score text="scaleSnapGridSize" /> 

• `get` **scaleSnapGridSize**(): `number` <Badge type="tip" text="client" />

获取缩放网格大小


#### Returns

`number`

• `set` **scaleSnapGridSize**(`size`): `void` <Badge type="tip" text="client" />

设置缩放网格大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` |  缩放网格大小 |


## Methods

### addIgnoreActor <Score text="addIgnoreActor" /> 

• **addIgnoreActor**(`actor`): `void` <Badge type="tip" text="client" />

添加需要被坐标轴忽略的object


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actor` | [`GameObject`](mw.GameObject.md) \| `Base` | 忽略的object |


___

### attachActorToGizmo <Score text="attachActorToGizmo" /> 

• **attachActorToGizmo**(`Actor`, `IsRecordChange?`): `void` <Badge type="tip" text="client" />

附加物体到坐标轴


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](mw.GameObject.md) |  附加到的actor |
| `IsRecordChange?` | `boolean` |  是否支持撤销 default:false |


___

### detachActorFormGizmo <Score text="detachActorFormGizmo" /> 

• **detachActorFormGizmo**(`Actor`): `void` <Badge type="tip" text="client" />

移除物体到坐标轴


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](mw.GameObject.md) | 移除的actor |


___

### onAttachChanged <Score text="onAttachChanged" /> 

• **onAttachChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

附加代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md)) => `void`\> | 有actor 附加到gizmo的时候触发的代理 |


___

### onGizemoSelectStatusChanged <Score text="onGizemoSelectStatusChanged" /> 

• **onGizemoSelectStatusChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

附加代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`bSelected`: `boolean`) => `void`\> | 当前是否 选中坐标轴的回调,true为点击选中 false为抬起手指取消选中 |


___

### onGizmoVisibleChanged <Score text="onGizmoVisibleChanged" /> 

• **onGizmoVisibleChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

坐标轴隐藏显示代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\> | gizmo actor隐藏显示的代理 |


___

### setGizmoActorLocation <Score text="setGizmoActorLocation" /> 

• **setGizmoActorLocation**(`NewLocation`, `IsRecordChange?`): `void` <Badge type="tip" text="client" />

设置坐标轴位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](mw.Vector.md) | 坐标轴位置 |
| `IsRecordChange?` | `boolean` | 是否记录本次坐标轴位置变动 default:true |


___

### setGizmoActorLocationAndRotation <Score text="setGizmoActorLocationAndRotation" /> 

• **setGizmoActorLocationAndRotation**(`NewLocation`, `NewRotation`): `void` <Badge type="tip" text="client" />

设置坐标轴旋转和缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](mw.Vector.md) |  位置 |
| `NewRotation` | [`Rotation`](mw.Rotation.md) |  旋转 |


___

### setGizmoHighlightColor <Score text="setGizmoHighlightColor" /> 

• **setGizmoHighlightColor**(`InHighlightColor`): `void` <Badge type="tip" text="client" />

设置坐标轴选中时的高亮颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InHighlightColor` | [`LinearColor`](mw.LinearColor.md) |  高亮颜色 ,类型 LinearColor 范围 0-1 |


___

### setGizmoScaleOffset <Score text="setGizmoScaleOffset" /> 

• **setGizmoScaleOffset**(`InOffset`): `void` <Badge type="tip" text="client" />

设置坐标轴模型整体缩放倍数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOffset` | `number` |  缩放倍数 |


___

### showGizmoActor <Score text="showGizmoActor" /> 

• **showGizmoActor**(`showGizmoActor`): `void` <Badge type="tip" text="client" />

设置坐标轴隐藏或者显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `showGizmoActor` | `boolean` | 显隐坐标轴 |


___

### switchGizmoMode <Score text="switchGizmoMode" /> 

• **switchGizmoMode**(`GizmoMode`): `void` <Badge type="tip" text="client" />

切换坐标轴模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GizmoMode` | [`GizmoModeType`](../enums/mw.GizmoModeType.md) | 模式 |
