[Avatar](../groups/Core.Avatar.md) / Pawn

# Pawn <Badge type="tip" text="Class" /> <Score text="Pawn" />

可以被玩家和AI控制的对象的基类

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Pawn`**

  ↳↳ [`Character`](mw.Character.md)

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[customTimeDilation](mw.Pawn.md#customtimedilation)**(): `number` <br> 膨胀时间速度|
| **[player](mw.Pawn.md#player)**(): [`Player`](mw.Player.md) <br> 玩家对象|


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
| **[setOutline](mw.Pawn.md#setoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](mw.LinearColor.md), `width?`: `number`): `void` <br> 添加描边效果|
| **[setPostProcessOutline](mw.Pawn.md#setpostprocessoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](mw.LinearColor.md), `width?`: `number`): `void` <br> 添加后处理描边|


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


## Accessors

### customTimeDilation <Score text="customTimeDilation" /> 

• `get` **customTimeDilation**(): `number` 

膨胀时间速度


::: warning Precautions

Pawn对象的膨胀时间速度，修改后自身时间流速是该值乘世界时间流速。默认值是1。

:::

使用示例:创建一个名为"Example_Pawn_CustomTimeDilation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中修改玩家的时间膨胀速度为原来的0.5倍后看到跳跃的延迟效果.代码如下:
```ts
@Core.Class
export default class Example_Pawn_CustomTimeDilation extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在客户端执行
         if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 添加一个按键方法:按下键盘“1”，将玩家的时间膨胀速度修改为原来的0.5，并跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myPlayer.character.customTimeDilation = 0.5;
                console.log("My pawn customTimeDilation: " + myPlayer.character.customTimeDilation);
                // 使玩家角色进行跳跃
                (myPlayer.character as Character).jump();
            });
        }
    }
}
```

#### Returns

`number`

• `set` **customTimeDilation**(`value`): `void` 

膨胀时间速度


::: warning Precautions

Pawn对象的膨胀时间速度，修改后自身时间流速是该值乘世界时间流速。默认值是1。

:::

使用示例:创建一个名为"Example_Pawn_CustomTimeDilation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中修改玩家的时间膨胀速度为原来的0.5倍后看到跳跃的延迟效果.代码如下:
```ts
@Core.Class
export default class Example_Pawn_CustomTimeDilation extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在客户端执行
         if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 添加一个按键方法:按下键盘“1”，将玩家的时间膨胀速度修改为原来的0.5，并跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myPlayer.character.customTimeDilation = 0.5;
                console.log("My pawn customTimeDilation: " + myPlayer.character.customTimeDilation);
                // 使玩家角色进行跳跃
                (myPlayer.character as Character).jump();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### player <Score text="player" /> 

• `get` **player**(): [`Player`](mw.Player.md) 

玩家对象


::: warning Precautions

控制当前Pawn对象的玩家，只读。

:::

使用示例:创建一个名为"Example_Pawn_Player"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏通过player获取玩家,你将在控制台中看到打印的userId和instanceId.代码如下:
```ts
@Core.Class
export default class Example_Pawn_Player extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在客户端执行
         if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印玩家(自己)userId和instanceId并对比
            console.log("My userId: " + myPlayer.userId);
            console.log("My instanceId: " + myPlayer.instanceId);
            // 通过owner获取玩家(自己)并打印userId和instanceId并对比
            let myCharacter = myPlayer.character;
            let mmyPlayer_2 = myCharacter.player;
            console.log("My userId: " + mmyPlayer_2.userId);
            console.log("My instanceId: " + mmyPlayer_2.instanceId);
        }
    }
}
```

#### Returns

[`Player`](mw.Player.md)


## Methods
___

### setOutline <Score text="setOutline" /> 

• **setOutline**(`enabled`, `color?`, `width?`): `void` <Badge type="tip" text="client" />

添加描边效果


::: warning Precautions

为Pawn对象添加描边效果，描边效果会被其他物体遮挡。

:::

使用示例:创建一个名为"Example_Pawn_Outline"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中创建一个立方体,按下键盘“1”可以给本地玩家添加或移除可被立方体遮挡的红色描边效果.代码如下:
```ts
@Core.Class
export default class Example_Pawn_Outline extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "7669";
    // 声明变量
    flag: boolean;
    flag_advance: boolean;
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 设置当前描边状态
        this.flag = false;
        this.flag_advance = false;
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 创建一个立方体
            let cube = GameObject.spawn({guid: "7669", transform: new Transform(new Vector(200, 0, 0), Rotation.zero, new Vector(1, 1, 2))});
            cube.setCollision(Type.CollisionStatus.Off);
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 添加一个按键方法:按下键盘“1”，给玩家Pawn添加或移除普通描边（会被遮挡）
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(this.flag) {
                    myPlayer.character.setOutline(false);
                } else {
                    myPlayer.character.setOutline(true, LinearColor.red, 1);
                }
                this.flag = !this.flag;
            });
            // 添加一个按键方法:按下键盘“2”，给玩家Pawn添加或移除后处理描边（不会被遮挡）
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(this.flag_advance) {
                    myPlayer.character.setPostProcessOutline(false);
                } else {
                    myPlayer.character.setPostProcessOutline(true, LinearColor.red, 1);
                }
                this.flag_advance = !this.flag_advance;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | 是否开启描边 |
| `color?` | [`LinearColor`](mw.LinearColor.md) | 描边颜色 default:LinearColor.black |
| `width?` | `number` | 描边宽度 default:2 |


___

### setPostProcessOutline <Score text="setPostProcessOutline" /> 

• **setPostProcessOutline**(`enabled`, `color?`, `width?`): `void` <Badge type="tip" text="client" />

添加后处理描边


::: warning Precautions

为Pawn对象添加高级描边效果，描边效果不会被其他物体遮挡。

:::

使用示例:创建一个名为"Example_Pawn_PostProcessOutline"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中创建一个立方体,按下键盘“2”可以给本地玩家添加或移除不被立方体遮挡的红色描边效果.代码如下:
```ts
@Core.Class
export default class Example_Pawn_PostProcessOutline extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "7669";
    // 声明变量
    flag: boolean;
    flag_advance: boolean;
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 设置当前描边状态
        this.flag = false;
        this.flag_advance = false;
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 创建一个立方体
            let cube = GameObject.spawn({guid: "7669", transform: new Transform(new Vector(200, 0, 0), Rotation.zero, new Vector(1, 1, 2))});
            cube.setCollision(Type.CollisionStatus.Off);
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 添加一个按键方法:按下键盘“1”，给玩家Pawn添加或移除普通描边（会被遮挡）
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(this.flag) {
                    myPlayer.character.setOutline(false);
                } else {
                    myPlayer.character.setOutline(true, LinearColor.red, 1);
                }
                this.flag = !this.flag;
            });
            // 添加一个按键方法:按下键盘“2”，给玩家Pawn添加或移除后处理描边（不会被遮挡）
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(this.flag_advance) {
                    myPlayer.character.setPostProcessOutline(false);
                } else {
                    myPlayer.character.setPostProcessOutline(true, LinearColor.red, 1);
                }
                this.flag_advance = !this.flag_advance;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | 是否开启描边 |
| `color?` | [`LinearColor`](mw.LinearColor.md) | 描边颜色 default:LinearColor.red |
| `width?` | `number` | 描边宽度 default:1 |
