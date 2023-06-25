[Gameplay](../groups/Core.Gameplay.md) / HotWeaponAimComponent

# HotWeaponAimComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponAimComponent" />

热武器瞄准组件，瞄准状态下持枪角色的视角会拉近

使用示例: 创建一个名为"HotWeaponAimSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器的启用了瞄准组件并设置参数，添加委托的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponAimSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.aimEnable = true;
            hotWeapon.aimComponent.aimMode = HotWeaponAimMode.ThirdPerson;
            hotWeapon.aimComponent.scopeTypeIndex = HotWeaponCrossHairType.ThirdPersonCrossHair;
            hotWeapon.aimComponent.aimingZoom = 16;
            hotWeapon.aimComponent.cameraOffsetDistanceInThirdPersonMode = 300;
            hotWeapon.aimComponent.onAimStartServer.add(() => { console.log("aimComponent.onAimStartClient") });
            hotWeapon.aimComponent.onAimEndServer.add(() => { console.log("aimComponent.onAimEndClient") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.aimComponent.onAimStartClient.add(() => { console.log("aimComponent.onAimStartClient") });
            hotWeapon.aimComponent.onAimEndClient.add(() => { console.log("aimComponent.onAimEndClient") });
        }
    }
}
```

## Table of contents

| Properties |
| :-----|
| **[onAimEnd](mw.HotWeaponAimComponent.md#onaimend)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例|
| **[onAimStart](mw.HotWeaponAimComponent.md#onaimstart)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例|

| Accessors |
| :-----|
| **[aimMode](mw.HotWeaponAimComponent.md#aimmode)**(): [`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md) <br> Get瞄准时的第一/第三人称模式。使用示例见类 HotWeaponAimComponent 使用示例|
| **[aimingZoom](mw.HotWeaponAimComponent.md#aimingzoom)**(): `number` <br> Get第一人称瞄准时的瞄准镜放大倍数。使用示例见类 HotWeaponAimComponent 使用示例|
| **[cameraOffsetDistanceInThirdPersonMode](mw.HotWeaponAimComponent.md#cameraoffsetdistanceinthirdpersonmode)**(): `number` <br> Get第三人称瞄准时的连接相机弹簧组件的长度。使用示例见类 HotWeaponAimComponent 使用示例|
| **[defaultCameraSpringArmLength](mw.HotWeaponAimComponent.md#defaultcameraspringarmlength)**(): `number` <br> Get第三人称常态下相机弹簧组件的默认长度。使用示例见类 HotWeaponAimComponent 使用示例|

| Methods |
| :-----|
| **[bindOpenAimComponentDelegates](mw.HotWeaponAimComponent.md#bindopenaimcomponentdelegates)**(): `void` <br> 绑定瞄准组件代理|
| **[enableAiming](mw.HotWeaponAimComponent.md#enableaiming)**(`enabled`: `boolean`): `void` <br> 打开/关闭瞄准|

## Properties

### onAimEnd <Score text="onAimEnd" /> 

• **onAimEnd**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例

___

### onAimStart <Score text="onAimStart" /> 

• **onAimStart**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例

## Accessors

### aimMode <Score text="aimMode" /> 

• `get` **aimMode**(): [`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md) 

Get瞄准时的第一/第三人称模式。使用示例见类 HotWeaponAimComponent 使用示例


#### Returns

[`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md)

当前瞄准时的第一/第三人称模式

• `set` **aimMode**(`NewAimMode`): `void` <Badge type="tip" text="other" />

Set瞄准时的第一/第三人称模式。使用示例见类 HotWeaponAimComponent 使用示例

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewAimMode` | [`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md) |  新设置的瞄准模式 default: |


___

### aimingZoom <Score text="aimingZoom" /> 

• `get` **aimingZoom**(): `number` 

Get第一人称瞄准时的瞄准镜放大倍数。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

合法范围为[1.0 , 18.0]，对应[0° , 90°]的FOV值每增加1.0，对应FOV增加5°

:::


#### Returns

`number`

当前第一人称瞄准时的瞄准镜放大倍数

• `set` **aimingZoom**(`newAimingZoom`): `void`

Set模拟瞄准时的瞄准镜放大倍数。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

合法范围为[1.0 , 18.0]，对应[0° , 90°]的 FOV 值每增加1.0，对应FOV增加5°

:::

**`Effect`**

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAimingZoom` | `number` |  新设置的瞄准镜放大倍数 default: |


___

### cameraOffsetDistanceInThirdPersonMode <Score text="cameraOffsetDistanceInThirdPersonMode" /> 

• `get` **cameraOffsetDistanceInThirdPersonMode**(): `number` 

Get第三人称瞄准时的连接相机弹簧组件的长度。使用示例见类 HotWeaponAimComponent 使用示例


#### Returns

`number`

当前连接相机弹簧组件的长度

• `set` **cameraOffsetDistanceInThirdPersonMode**(`NewCameraOffsetDistance`): `void` <Badge type="tip" text="other" />

Set第三人称瞄准时的连接相机弹簧组件的长度。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

:::

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewCameraOffsetDistance` | `number` |  新设置的连接相机弹簧组件的长度 default: |


___

### defaultCameraSpringArmLength <Score text="defaultCameraSpringArmLength" /> 

• `get` **defaultCameraSpringArmLength**(): `number` 

Get第三人称常态下相机弹簧组件的默认长度。使用示例见类 HotWeaponAimComponent 使用示例


#### Returns

`number`

第三人称常态下相机弹簧组件的默认长度

• `set` **defaultCameraSpringArmLength**(`NewCameraArmLength`): `void` <Badge type="tip" text="other" />

Set第三人称常态下相机弹簧组件的默认长度。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

:::

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewCameraArmLength` | `number` |  新设置的连接相机弹簧组件的默认长度 default: |


## Methods

### bindOpenAimComponentDelegates <Score text="bindOpenAimComponentDelegates" /> 

• **bindOpenAimComponentDelegates**(): `void` 

绑定瞄准组件代理



___

### enableAiming <Score text="enableAiming" /> 

• **enableAiming**(`enabled`): `void` <Badge type="tip" text="other" />

打开/关闭瞄准
- 切换持枪姿态
- 切换相机View
- 切换准星UI
- 修改子弹发射精度-上升到用户层，开发者自己在瞄准时设置默认精准度

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` |  是否开启瞄准功能 default: |
