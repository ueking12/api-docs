[Gameplay](../groups/Core.Gameplay.md) / Interactor

# Interactor <Badge type="tip" text="Class" /> <Score text="Interactor" />

交互物功能对象 V2

使用示例:创建一个名为"InteractorSample"的脚本,放置在对象管理器某一交互物的子级中,打开脚本,输入以下代码保存,在本地资源库中搜索4175动画资源,拖入对象管理器中的优先加载目录。运行游戏,你将在场景中看到一个交互物的效果,玩家可以和此交互物进行交互,代码如下:
```ts
 @Core.Class
export default class InteractorSample extends Script {
    protected async onStart(): Promise<void> {
        const interObj = this.gameObject as Interactor;
        // 开始交互回调
        interObj.onInteractiveStarted.add(() => {
            console.log("onInteractiveStarted")
            console.log("onInteractiveStarted ", interObj.getInteractCharacter())
            console.log("onInteractiveStarted ", interObj.getInteractiveStatus())
        })
        interObj.interactiveSlot = InteractiveSlot.Buns;
        interObj.interactiveStance = "4175";

        // 结束交互回调
        interObj.onInteractiveEnded.add(() => {
            console.log("onInteractiveEnded")
        })
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Type.Keys.One, () => {
                interObj.startInteract(Gameplay.getCurrentPlayer().character, InteractiveSlot.Buns, "4175");
            })
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                // 不传退出交互时会自动回到交互前的坐标和旋转
                interObj.endInteract();
            })
        }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Interactor`**

  ↳↳ [`InteractiveObject`](Core.mw.InteractiveObject.md)

## Table of contents

| Properties |
| :-----|
| **[onEnded](mw.Interactor.md#onended)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 交互结束时执行绑定函数。通常与 endInteract 成对使用，使用示例详见方法 startInteract 中示例代码。|
| **[onStarted](mw.Interactor.md#onstarted)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 交互开始时执行绑定函数。通常与 startInteract 成对使用，使用示例详见方法 startInteract 中示例代码。|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[animationId](mw.Interactor.md#animationid)**(): `string` <br> 交互动画资源 id|
| **[slot](mw.Interactor.md#slot)**(): [`SlotType`](../enums/mw.SlotType.md) <br> 交互物插槽|
| **[status](mw.Interactor.md#status)**(): `boolean` <br> 该交互物的交互状态|


::: details 点击查看继承
| Accessors |
| :-----|
| **[guid](mw.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isLocked](mw.GameObject.md#islocked)**(): `boolean` <br> 获取对象是否锁定|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[isStatic](mw.GameObject.md#isstatic)**(): `boolean` <br> 获取对象是否静态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[sourceAssetGuid](mw.GameObject.md#sourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[useUpdate](mw.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|
:::


| Methods |
| :-----|
| **[end](mw.Interactor.md#end)**(`position?`: [`Vector`](mw.Vector.md), `rotation?`: [`Rotation`](mw.Rotation.md), `animationId?`: `string`): `boolean` <br> 结束交互。通常与 startInteract 成对使用，使用示例详见方法 startInteract 中示例代码。|
| **[getCurrentCharacter](mw.Interactor.md#getcurrentcharacter)**(): [`Character`](mw.Character.md) <br> 获取正在交互的角色|
| **[start](mw.Interactor.md#start)**(`character`: [`Character`](mw.Character.md), `slot?`: [`SlotType`](../enums/mw.SlotType.md), `animationId?`: `string`): `boolean` <br> 开始交互|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[attachToGameObject](mw.GameObject.md#attachtogameobject)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 将物体附着到指定物体上|
| **[clone](mw.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](mw.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[follow](mw.GameObject.md#follow)**(`Target`: [`GameObject`](mw.GameObject.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 跟随目标|
| **[getBoundingBoxSize](mw.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](mw.Vector.md), `BoxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](mw.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): `undefined` \| [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoxCenter](mw.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScriptByGuid](mw.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[navigateTo](mw.GameObject.md#navigateto)**(`Location`: [`Vector`](mw.Vector.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 向目标点进行寻路移动|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[stopFollow](mw.GameObject.md#stopfollow)**(): `void` <br> 停止跟随|
| **[stopNavigateTo](mw.GameObject.md#stopnavigateto)**(): `void` <br> 停止向目标点寻路移动|
| **[asyncFindGameObjectByGuid](mw.GameObject.md#asyncfindgameobjectbyguid)**(`guid`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`spawnInfo`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectByGuid](mw.GameObject.md#findgameobjectbyguid)**(`guid`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`[spawn](mw.GameObject.md#spawn)Info`): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


### onEnded <Score text="onEnded" /> 

• **onEnded**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

交互结束时执行绑定函数。通常与 endInteract 成对使用，使用示例详见方法 startInteract 中示例代码。

::: warning Precautions

会自动广播，若是双端对象，则可以在任意客户端调用

:::

___

### onStarted <Score text="onStarted" /> 

• **onStarted**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

交互开始时执行绑定函数。通常与 startInteract 成对使用，使用示例详见方法 startInteract 中示例代码。

::: warning Precautions

会自动广播，若是双端对象，则可以在任意客户端调用

:::

## Accessors

### animationId <Score text="animationId" /> 

• `get` **animationId**(): `string`

交互动画资源 id

#### Returns

`string`

• `set` **animationId**(`assetGuid`): `void`

交互动画资源 id

#### Parameters

| Name | Type |
| :------ | :------ |
| `assetGuid` | `string` |


___

### slot <Score text="slot" /> 

• `get` **slot**(): [`SlotType`](../enums/mw.SlotType.md)

交互物插槽

#### Returns

[`SlotType`](../enums/mw.SlotType.md)

• `set` **slot**(`value`): `void`

交互物插槽

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SlotType`](../enums/mw.SlotType.md) |


___

### status <Score text="status" /> 

• `get` **status**(): `boolean`

该交互物的交互状态

#### Returns

`boolean`


## Methods
___

### end <Score text="end" /> 

• **end**(`position?`, `rotation?`, `animationId?`): `boolean` <Badge type="tip" text="other" />

结束交互。通常与 startInteract 成对使用，使用示例详见方法 startInteract 中示例代码。

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position?` | [`Vector`](mw.Vector.md) |  结束位置 default: 玩家开始交互前的坐标为准 |
| `rotation?` | [`Rotation`](mw.Rotation.md) |  结束旋转量 default: 玩家开始交互前的旋转为准，如果玩家开始前的姿态是倾斜的，内部不会纠正 |
| `animationId?` | `string` |  新姿态，default: 以属性玩家开始交互前的姿态为准 |

#### Returns

`boolean`

true 触发了结束交互逻辑

___

### getCurrentCharacter <Score text="getCurrentCharacter" /> 

• **getCurrentCharacter**(): [`Character`](mw.Character.md) 

获取正在交互的角色


使用示例:创建一个名为"InteractorGetInteractCharacterSample"的脚本,放置在对象管理器某一交互物的子级中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个交互物的效果,玩家可以和此交互物进行交互,代码如下:
```ts
@Core.Class
export default class InteractorGetInteractCharacterSample extends Script {
    protected async onStart(): Promise<void> {
        const interObj = this.gameObject as Interactor;
        // 开始交互回调
        interObj.onInteractiveStarted.add(() => {
            console.log(`onInteractiveStarted status: ${interObj.getInteractCharacter()}`)
        })
        // 省略开始交互代码
    }
}
```

#### Returns

[`Character`](mw.Character.md)

true：为交互中

___

### start <Score text="start" /> 

• **start**(`character`, `slot?`, `animationId?`): `boolean` <Badge type="tip" text="other" />

开始交互

::: warning Precautions

建议客户端调用

:::

调用端自动广播

使用示例:创建一个名为"InteractorStartEndSample"的脚本,放置在对象管理器某一交互物的子级中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个交互物的效果,玩家可以和此交互物进行交互,代码如下:
```ts
@Core.Class
export default class InteractorStartEndSample extends Script {
    protected async onStart(): Promise<void> {
        const interObj = this.gameObject as Interactor;
        // 开始交互回调
        interObj.onInteractiveStarted.add(() => {
            console.log("onInteractiveStarted")
        })
        // 结束交互回调
        interObj.onInteractiveEnded.add(() => {
            console.log("onInteractiveEnded")
        })
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Type.Keys.One, () => {
                interObj.startInteract(Gameplay.getCurrentPlayer().character, InteractiveSlot.Buns, "4175");
            })
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                // 不传退出交互时会自动回到交互前的坐标和旋转
                interObj.endInteract();
            })
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](mw.Character.md) |  要交互的角色（可以是玩家，也可以是AI） |
| `slot?` | [`SlotType`](../enums/mw.SlotType.md) |  交互插槽，不传默认以属性 interactiveSlot 为准 default: 属性 interactiveSlot |
| `animationId?` | `string` |  交互姿态，不传默认以属性 interactiveStance 为准 default: 属性 interactiveStance |

#### Returns

`boolean`

是否成功交互