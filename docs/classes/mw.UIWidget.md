[Ui](../groups/Core.Ui.md) / UIWidget

# UIWidget <Badge type="tip" text="Class" /> <Score text="UIWidget" />

世界UI组件

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`UIWidget`**

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
| **[distanceScaleFactor](mw.UIWidget.md#distancescalefactor)**(): `number` <br> 获取缩放距离系数|
| **[drawSize](mw.UIWidget.md#drawsize)**(): [`Vector2`](mw.Vector2.md) <br> 获取实际渲染大小|
| **[extraParam](mw.UIWidget.md#extraparam)**(): `string` <br> 获取扩展参数|
| **[headUIMaxVisibleDistance](mw.UIWidget.md#headuimaxvisibledistance)**(): `number` <br> 获取最大头顶UI可见距离|
| **[hideByDistanceEnable](mw.UIWidget.md#hidebydistanceenable)**(): `boolean` <br> 获取是否启用最大可见距离|
| **[interaction](mw.UIWidget.md#interaction)**(): `boolean` <br> 获取世界UI交互状态|
| **[isEnemy](mw.UIWidget.md#isenemy)**(): `boolean` <br> 获取是否作为敌方玩家，敌方玩家不显示头顶UI|
| **[occlusionEnable](mw.UIWidget.md#occlusionenable)**(): `boolean` <br> 获取是否可被遮挡|
| **[pivot](mw.UIWidget.md#pivot)**(): [`Vector2`](mw.Vector2.md) <br> 获取锚点位置|
| **[scaledByDistanceEnable](mw.UIWidget.md#scaledbydistanceenable)**(): `boolean` <br> 获取是否开启近大远小|
| **[selfOcclusion](mw.UIWidget.md#selfocclusion)**(): `boolean` <br> 获取是否可被自己遮挡|
| **[translucentSortPriority](mw.UIWidget.md#translucentsortpriority)**(): `number` <br> 获取渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方|
| **[widgetSpace](mw.UIWidget.md#widgetspace)**(): [`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md) <br> 获取显示方式|


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
| **[getTargetUIWidget](mw.UIWidget.md#gettargetuiwidget)**(): [`UserWidget`](mw.UserWidget.md) <br> 获取UI对象资源|
| **[refresh](mw.UIWidget.md#refresh)**(): `void` <br> 请求重新绘制|
| **[setTargetUIWidget](mw.UIWidget.md#settargetuiwidget)**(`uiUserWidget`: [`UserWidget`](mw.UserWidget.md)): `void` <br> 设置UI，可以对当前的UI设置UI资源，UI资源可以从路径获取或直接取其他UI组件引用的资源|
| **[setUIbyGUID](mw.UIWidget.md#setuibyguid)**(`GUID`: `string`): `void` <br> 通过GUID设置UI|


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

### distanceScaleFactor <Score text="distanceScaleFactor" /> 

• `get` **distanceScaleFactor**(): `number`

获取缩放距离系数

#### Returns

`number`

距离系数

• `set` **distanceScaleFactor**(`Value`): `void`

设置缩放距离系数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 距离系数 |


___

### drawSize <Score text="drawSize" /> 

• `get` **drawSize**(): [`Vector2`](mw.Vector2.md)

获取实际渲染大小

#### Returns

[`Vector2`](mw.Vector2.md)

渲染大小2D

• `set` **drawSize**(`newSize`): `void`

设置实际渲染大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSize` | [`Vector2`](mw.Vector2.md) | 渲染大小2D |


___

### extraParam <Score text="extraParam" /> 

• `get` **extraParam**(): `string`

获取扩展参数

#### Returns

`string`

扩展参数

• `set` **extraParam**(`Value`): `void`

设置扩展参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `string` | 扩展参数 |


___

### headUIMaxVisibleDistance <Score text="headUIMaxVisibleDistance" /> 

• `get` **headUIMaxVisibleDistance**(): `number`

获取最大头顶UI可见距离

#### Returns

`number`

可见距离

• `set` **headUIMaxVisibleDistance**(`Value`): `void`

设置最大头顶UI可见距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 可见距离 |


___

### hideByDistanceEnable <Score text="hideByDistanceEnable" /> 

• `get` **hideByDistanceEnable**(): `boolean`

获取是否启用最大可见距离

#### Returns

`boolean`

true：开启

• `set` **hideByDistanceEnable**(`Value`): `void`

设置是否启用最大可见距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |


___

### interaction <Score text="interaction" /> 

• `get` **interaction**(): `boolean` <Badge type="tip" text="client" />

获取世界UI交互状态

::: warning Precautions

对世界UI，头顶UI生效

:::


#### Returns

`boolean`

是否可交互

• `set` **interaction**(`inInteraction`): `void`

设置世界UI交互状态

::: warning Precautions

对世界UI，头顶UI生效

:::

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inInteraction` | `boolean` | 是否可交互 |


是否设置成功

___

### isEnemy <Score text="isEnemy" /> 

• `get` **isEnemy**(): `boolean`

获取是否作为敌方玩家，敌方玩家不显示头顶UI

#### Returns

`boolean`

布尔值

• `set` **isEnemy**(`Value`): `void`

设置是否作为敌方玩家，敌方玩家不显示头顶UI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |


___

### occlusionEnable <Score text="occlusionEnable" /> 

• `get` **occlusionEnable**(): `boolean`

获取是否可被遮挡

#### Returns

`boolean`

true：可被遮挡

• `set` **occlusionEnable**(`Value`): `void`

设置是否可被遮挡

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |


___

### pivot <Score text="pivot" /> 

• `get` **pivot**(): [`Vector2`](mw.Vector2.md)

获取锚点位置

#### Returns

[`Vector2`](mw.Vector2.md)

位置信息

• `set` **pivot**(`position`): `void`

设置锚点位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Vector2`](mw.Vector2.md) | 位置信息 |


___

### scaledByDistanceEnable <Score text="scaledByDistanceEnable" /> 

• `get` **scaledByDistanceEnable**(): `boolean`

获取是否开启近大远小

#### Returns

`boolean`

true：开启

• `set` **scaledByDistanceEnable**(`Value`): `void`

设置是否开启近大远小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |


___

### selfOcclusion <Score text="selfOcclusion" /> 

• `get` **selfOcclusion**(): `boolean`

获取是否可被自己遮挡

#### Returns

`boolean`

布尔值

• `set` **selfOcclusion**(`Value`): `void`

设置是否可被自己遮挡

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |


___

### translucentSortPriority <Score text="translucentSortPriority" /> 

• `get` **translucentSortPriority**(): `number` <Badge type="tip" text="client" />

获取渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方


::: warning Precautions

请在客户端调用

:::

#### Returns

`number`

• `set` **translucentSortPriority**(`value`): `void` <Badge type="tip" text="client" />

设置渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方


::: warning Precautions

请在客户端调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新的渲染层级，值范围为 [0, 31] |


___

### widgetSpace <Score text="widgetSpace" /> 

• `get` **widgetSpace**(): [`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md)

获取显示方式

#### Returns

[`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md)

显示方式枚举

• `set` **widgetSpace**(`newSpace`): `void`

设置显示方式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpace` | [`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md) | 显示方式 |



## Methods
___

### getTargetUIWidget <Score text="getTargetUIWidget" /> 

• **getTargetUIWidget**(): [`UserWidget`](mw.UserWidget.md) <Badge type="tip" text="client" />

获取UI对象资源


#### Returns

[`UserWidget`](mw.UserWidget.md)

UI对象资源

___

### refresh <Score text="refresh" /> 

• **refresh**(): `void` <Badge type="tip" text="client" />

请求重新绘制



___

### setTargetUIWidget <Score text="setTargetUIWidget" /> 

• **setTargetUIWidget**(`uiUserWidget`): `void` <Badge type="tip" text="client" />

设置UI，可以对当前的UI设置UI资源，UI资源可以从路径获取或直接取其他UI组件引用的资源


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uiUserWidget` | [`UserWidget`](mw.UserWidget.md) | UI资源对象 |


___

### setUIbyGUID <Score text="setUIbyGUID" /> 

• **setUIbyGUID**(`GUID`): `void` <Badge type="tip" text="client" />

通过GUID设置UI


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | UI的GUID |
