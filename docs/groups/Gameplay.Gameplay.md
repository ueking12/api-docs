Gameplay

# Gameplay <Badge type="tip" text="Groups" /> <Score text="Gameplay" />

## Table of contents
| Classes |
| :-----|
| [AbilityObject](../classes/Gameplay.AbilityObject.md) <br> 能力对象，提供角色按指定一系列的能力序列进行动画自动切换的功能。 |
| [AbilityState](../classes/Gameplay.AbilityState.md) <br> 能力状态，用于读取/配置能力对象的能力相关的属性 |
| [AdvancedVehicle](../classes/Gameplay.AdvancedVehicle.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 |
| [BlockingVolume](../classes/Gameplay.BlockingVolume.md) <br> 禁行区，用于控制个角色是否可以进出此区域，默认阻挡，角色可站立 |
| [CameraSystem](../classes/Gameplay.CameraSystem.md) <br> 摄像机系统，是依托于角色，作为角色的组件存在，在此组件下还有一个用来确定视口位置的摄像机组件 |
| [FireDataInfoForMultiple](../classes/Gameplay.FireDataInfoForMultiple.md) <br> 热武器逻辑组件专用的临时类， |
| [GameInitializer](../classes/Extension.GameInitializer.md) <br> 游戏初始化 |
| [GameObject](../classes/Gameplay.GameObject.md) <br> GameObject的基类 |
| [Gizmo](../classes/MobileEditor.Gizmo.md) <br> Gizmo |
| [HotWeapon](../classes/Gameplay.HotWeapon.md) <br> 热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。 |
| [HotWeaponAccuracyOfFireComponent](../classes/Gameplay.HotWeaponAccuracyOfFireComponent.md) <br> 热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度 |
| [HotWeaponAimComponent](../classes/Gameplay.HotWeaponAimComponent.md) <br> 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近 |
| [HotWeaponFireComponent](../classes/Gameplay.HotWeaponFireComponent.md) <br> 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑 |
| [HotWeaponLoadComponent](../classes/Gameplay.HotWeaponLoadComponent.md) <br> 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑 |
| [HotWeaponRecoilForceComponent](../classes/Gameplay.HotWeaponRecoilForceComponent.md) <br> 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复） |
| [HotWeaponReloadComponent](../classes/Gameplay.HotWeaponReloadComponent.md) <br> 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑 |
| [InteractiveObject](../classes/Gameplay.InteractiveObject.md) <br> 交互物功能对象，提供角色与场景中物体的交互功能，交互即将角色切换到特定姿态、位置并绑定到交互物上的过程。此对象常用于场景中椅子，沙发，器材等位置。 |
| [Interactor](../classes/Gameplay.Interactor.md) <br> 交互物功能对象 V2 |
| [MaterialInstance](../classes/Gameplay.MaterialInstance.md) <br> 材质实例类 |
| [Mesh](../classes/Gameplay.Mesh.md) <br> StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口 |
| [NavModifierVolume](../classes/Gameplay.NavModifierVolume.md) <br> 寻路动态修饰区 |
| [Player](../classes/Gameplay.Player.md) <br> 角色控制 |
| [PlayerStart](../classes/Gameplay.PlayerStart.md) <br> 玩家起始 |
| [Projectile](../classes/Gameplay.Projectile.md) <br> 投掷物逻辑对象 |
| [ProjectileInst](../classes/Gameplay.ProjectileInst.md) <br> 投掷物 v2 实例 |
| [ProjectileLauncher](../classes/Gameplay.ProjectileLauncher.md) <br> 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 |
| [SomatotypeBase](../classes/Gameplay.SomatotypeBase.md) <br> 体型基类 |
| [StaticMesh](../classes/Gameplay.StaticMesh.md) <br> StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口 |
| [SwimmingVolume](../classes/Gameplay.SwimmingVolume.md) <br> 游泳区域 |
| [Trigger](../classes/Gameplay.Trigger.md) <br> 触发器，对进入/离开触发器范围的事件进行响应 |
| [VehicleCameraSetting](../classes/Gameplay.VehicleCameraSetting.md) <br> 载具摄像机，对应编辑器对象管理器中载具下挂载的摄像机对象 |
| [WheeledVehicle4W](../classes/Gameplay.WheeledVehicle4W.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 |


| Enums |
| :-----|
| [AbilityStateControlType](../enums/Gameplay.AbilityStateControlType.md) <br> 技能状态控制枚举 |
| [AreaClass](../enums/Gameplay.AreaClass.md) <br> 寻路区域屏障寻路计算类型 |
| [CameraLocationMode](../enums/Gameplay.CameraLocationMode.md) <br> 摄像机位置模式 |
| [CameraMode](../enums/Gameplay.CameraMode.md) <br> 摄像机模式 |
| [CameraProjectionMode](../enums/Gameplay.CameraProjectionMode.md) <br> 摄像机镜头模式 |
| [CameraRotationMode](../enums/Gameplay.CameraRotationMode.md) <br> 摄像机旋转模式 |
| [HotWeaponAimMode](../enums/Gameplay.HotWeaponAimMode.md) <br> 热武器瞄准模式 |
| [HotWeaponCrossHairType](../enums/Gameplay.HotWeaponCrossHairType.md) <br> 热武器准心类型 |
| [HotWeaponFireMode](../enums/Gameplay.HotWeaponFireMode.md) <br> 热武器开火模式 |
| [HotWeaponState](../enums/Gameplay.HotWeaponState.md) <br> 热武器状态 |
| [HttpRequestType](../enums/Network.HttpRequestType.md) <br> 开发给用户用的Http请求类型枚举 |
| [HttpRequestURL](../enums/Network.HttpRequestURL.md) <br> 开发给用户用的URL枚举，需要与C++层的枚举对应 |
| [InteractiveSlot](../enums/Gameplay.InteractiveSlot.md) <br> 交互物支持的插槽 |
| [ProjectileAccelerationEnableMode](../enums/Gameplay.ProjectileAccelerationEnableMode.md) <br> 投掷物加速启用模式 |
| [ProjectileCollisionMode](../enums/Gameplay.ProjectileCollisionMode.md) <br> 投掷物碰撞反馈模式 |
| [ProjectileLineStyle](../enums/Gameplay.ProjectileLineStyle.md) <br> 投掷物轨迹绘制的显示风格 |
| [VehicleDriveMode4W](../enums/Gameplay.VehicleDriveMode4W.md) <br> 四轮载具驱动模式 |
| [VehicleDriveMode4WNew](../enums/Gameplay.VehicleDriveMode4WNew.md) <br> 四轮载具驱动模式 |
| [VehicleWheelPosition4W](../enums/Gameplay.VehicleWheelPosition4W.md) <br> 四轮载具车轮位置 |
| [VehicleWheelPosition4WNew](../enums/Gameplay.VehicleWheelPosition4WNew.md) <br> 四轮载具车轮位置 |


| Modules Functions |
| :-----|
| **[addOutlineEffect](Gameplay.Gameplay.md#addoutlineeffect)**(`obj`: `GameObject`, `OutlineColor?`: [`LinearColor`](../classes/Type.LinearColor.md), `OutlineWidth?`: `number`, `OutlineDepthOffset?`: `number`, `OutlineClampValue?`: `number`, `considerCameraPosition?`: `boolean`, `outlineSilhouetteOnly?`: `boolean`): `void` <br> 为目标物体添加描边效果,不需要后处理，描边效果会被其他物体遮挡|
| **[angleCheck](Gameplay.Gameplay.md#anglecheck)**(`StartLocation`: [`Vector`](../classes/Type.Vector.md), `StartDirection`: [`Vector`](../classes/Type.Vector.md), `TargetLocation`: [`Vector`](../classes/Type.Vector.md), `Angle`: `number`): `boolean` <br> 判断终点位置是否处于起点位置在某一方向的一定角度内|
| **[asyncFindPathToLocation](Gameplay.Gameplay.md#asyncfindpathtolocation)**(`startPos`: [`Vector`](../classes/Type.Vector.md), `endPos`: [`Vector`](../classes/Type.Vector.md)): [`Vector`](../classes/Type.Vector.md)[] <br> 查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点|
| **[asyncGetCurrentPlayer](Gameplay.Gameplay.md#asyncgetcurrentplayer)**(): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> <br> 异步获取当前玩家|
| **[asyncGetPlayer](Gameplay.Gameplay.md#asyncgetplayer)**(`playerId`: `number`): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> <br> 异步根据playerId获取Player|
| **[boxOverlap](Gameplay.Gameplay.md#boxoverlap)**(`StartLocation`: [`Vector`](../classes/Type.Vector.md), `EndLocation`: [`Vector`](../classes/Type.Vector.md), `Width`: `number`, `Height`: `number`, `debug`: `boolean`, `IgnoreObjectsGuid?`: `string`[], `IgnoreByKind?`: `boolean`, `Source?`: `GameObject`): `Core.GameObject`[] <br> 矩形范围检测|
| **[boxOverlapInLevel](Gameplay.Gameplay.md#boxoverlapinlevel)**(`StartLocation`: [`Vector`](../classes/Type.Vector.md), `EndLocation`: [`Vector`](../classes/Type.Vector.md), `Width`: `number`, `Height`: `number`, `debug`: `boolean`, `IgnoreObjectsGuid?`: `string`[], `IgnoreByKind?`: `boolean`, `Source?`: `GameObject`): `Core.GameObject`[] <br> 矩形范围检测|
| **[clearFollow](Gameplay.Gameplay.md#clearfollow)**(`player`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md)): `void` <br> 停止跟随|
| **[clearMoveTo](Gameplay.Gameplay.md#clearmoveto)**(`Obj`: `GameObject`): `void` <br> 导航停止|
| **[cylinderOverlap](Gameplay.Gameplay.md#cylinderoverlap)**(`StartLocation`: [`Vector`](../classes/Type.Vector.md), `Radius`: `number`, `Height`: `number`, `debug`: `boolean`, `IgnoreObjectsGuid?`: `string`[], `IgnoreByKind?`: `boolean`, `Source?`: `GameObject`): `Core.GameObject`[] <br> 圆柱范围检测|
| **[fetch](Gameplay.Gameplay.md#fetch)**(`url`: `string`, `init?`: `RequestInit`): `Promise`<`Response`\> <br> HTTP请求|
| **[follow](Gameplay.Gameplay.md#follow)**(`player`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `targetplayer`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 跟随目标|
| **[generalHttpRequest](Gameplay.Gameplay.md#generalhttprequest)**(`response`: [`HttpResponse`](Network.Network.md#httpresponse), `requestUrl`: [`HttpRequestURL`](../enums/Network.HttpRequestURL.md), `param`: `string`, `jsonContent`: `any`, `requestType`: [`HttpRequestType`](../enums/Network.HttpRequestType.md)): `boolean` <br> 通用Http请求|
| **[getAllPlayers](Gameplay.Gameplay.md#getallplayers)**(): [`Player`](../classes/Gameplay.Player.md)[] <br> 当前所有Player|
| **[getClickGameObjectByScene](Gameplay.Gameplay.md#getclickgameobjectbyscene)**(`SceneX`: `number`, `SceneY`: `number`, `Distance`: `number`, `multiTrace`: `boolean`, `onRay`: `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 获取点击屏幕位置的物体|
| **[getCurrentEnv](Gameplay.Gameplay.md#getcurrentenv)**(): `string` <br> 获取当前环境|
| **[getCurrentPlayer](Gameplay.Gameplay.md#getcurrentplayer)**(): [`Player`](../classes/Gameplay.Player.md) <br> 获取当前玩家|
| **[getDefaultGraphicsCPULevel](Gameplay.Gameplay.md#getdefaultgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取默认CPU画质等级|
| **[getDefaultGraphicsGPULevel](Gameplay.Gameplay.md#getdefaultgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取默认GPU画质等级|
| **[getEditorVersion](Gameplay.Gameplay.md#geteditorversion)**(): `string` <br> 获取编辑器版本号|
| **[getFullEditorVersion](Gameplay.Gameplay.md#getfulleditorversion)**(): `string` <br> 获取完整编辑器版本号|
| **[getGameId](Gameplay.Gameplay.md#getgameid)**(): `string` <br> 获取当前游戏GameId|
| **[getGameObjectByScenePosition](Gameplay.Gameplay.md#getgameobjectbysceneposition)**(`SceneX`: `number`, `SceneY`: `number`, `Distance?`: `number`, `multiTrace?`: `boolean`, `onRay?`: `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 获取视口相应位置的物体|
| **[getGraphicsCPULevel](Gameplay.Gameplay.md#getgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取当前CPU画质等级|
| **[getGraphicsGPULevel](Gameplay.Gameplay.md#getgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取当前GPU画质等级|
| **[getPlayer](Gameplay.Gameplay.md#getplayer)**(`playerId`: `number`): [`Player`](../classes/Gameplay.Player.md) <br> 获取玩家|
| **[getShootDir](Gameplay.Gameplay.md#getshootdir)**(`character`: [`Character`](../classes/Gameplay.Character.md), `startLoc`: [`Vector`](../classes/Type.Vector.md), `distance?`: `number`): [`Vector`](../classes/Type.Vector.md) <br> 获取某位置指向屏幕中心瞄准位置的向量|
| **[getSightBeadLocation](Gameplay.Gameplay.md#getsightbeadlocation)**(): [`Vector`](../classes/Type.Vector.md) <br> 获取相机中心点所瞄准的世界位置|
| **[getUrlParameter](Gameplay.Gameplay.md#geturlparameter)**(`url`: `string`, `parameterName`: `string`): `string` <br> 获取url参数|
| **[getVersion](Gameplay.Gameplay.md#getversion)**(): `string` <br> 获取当前游戏版本|
| **[getViewportSize](Gameplay.Gameplay.md#getviewportsize)**(): [`Vector2`](../classes/Type.Vector2.md) <br> 获取屏幕的分辨率大小（不跟随屏幕缩放变化）。|
| **[httpRequestTransmitData](Gameplay.Gameplay.md#httprequesttransmitdata)**(`response`: [`HttpResponse`](Network.Network.md#httpresponse), `paramUrl`: `string`, `jsonContent`: `string`, `requestType`: [`HttpRequestType`](../enums/Network.HttpRequestType.md)): `boolean` <br> Http请求接口|
| **[isClient](Gameplay.Gameplay.md#isclient)**(): `boolean` <br> 是否客户端运行|
| **[isDynamicVibration](Gameplay.Gameplay.md#isdynamicvibration)**(`value`: `boolean`): `void` <br> 振动开关|
| **[isMobile](Gameplay.Gameplay.md#ismobile)**(): `boolean` <br> 判断当前是否是移动端|
| **[isServer](Gameplay.Gameplay.md#isserver)**(): `boolean` <br> 是否服务器运行|
| **[lineTrace](Gameplay.Gameplay.md#linetrace)**(`StartLocation`: [`Vector`](../classes/Type.Vector.md), `EndLocation`: [`Vector`](../classes/Type.Vector.md), `multiTrace?`: `boolean`, `debug?`: `boolean`, `IgnoreObjectsGuid?`: `string`[], `IgnoreByKind?`: `boolean`, `Source?`: `GameObject`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 射线检测|
| **[moveTo](Gameplay.Gameplay.md#moveto)**(`Obj`: `GameObject`, `Location`: [`Vector`](../classes/Type.Vector.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 寻路移动|
| **[parabolicTrace](Gameplay.Gameplay.md#parabolictrace)**(`StartLocation`: [`Vector`](../classes/Type.Vector.md), `Direction`: [`Vector`](../classes/Type.Vector.md), `InitSpeed`: `number`, `Range`: `number`, `CapsuleRadius`: `number`, `IgnoreObjectTypes`: [`ObjectTypeQuery`](../enums/Gameplay.ObjectTypeQuery.md)[], `debug?`: `boolean`, `IgnoreObjectsGuid?`: `string`[], `Source?`: `GameObject`): [`HitResult`](../classes/Gameplay.HitResult.md) <br> 抛物线检测|
| **[playDynamicForceFeedbackStart](Gameplay.Gameplay.md#playdynamicforcefeedbackstart)**(`Intensity?`: `number`, `Duration?`: `number`): `void` <br> 播放震动|
| **[playDynamicForceFeedbackStop](Gameplay.Gameplay.md#playdynamicforcefeedbackstop)**(): `void` <br> 停止震动|
| **[removeOutlineEffect](Gameplay.Gameplay.md#removeoutlineeffect)**(`obj`: `GameObject`): `void` <br> 移除描边效果|
| **[setGlobalAsyncTimeout](Gameplay.Gameplay.md#setglobalasynctimeout)**(`overtime`: `number`): `void` <br> 设置异步回调超时时间，单位毫秒，默认5000|
| **[setGlobalTimeDilation](Gameplay.Gameplay.md#setglobaltimedilation)**(`Time`: `number`): `void` <br> 设置世界整体膨胀时间速度|
| **[setGraphicsCPULevel](Gameplay.Gameplay.md#setgraphicscpulevel)**(`CPULevel`: [`GraphicsLevel`](../enums/Type.GraphicsLevel.md)): `void` <br> 设置当前CPU画质等级|
| **[setGraphicsGPULevel](Gameplay.Gameplay.md#setgraphicsgpulevel)**(`GPULevel`: [`GraphicsLevel`](../enums/Type.GraphicsLevel.md)): `void` <br> 设置当前GPU画质等级|
| **[setPlayerPassableForAllArea](Gameplay.Gameplay.md#setplayerpassableforallarea)**(`character`: [`Character`](../classes/Gameplay.Character.md), `canPass`: `boolean`): `void` <br> 设置某个玩家对所有禁行区的通过权限|
| **[setStaticMeshColor](Gameplay.Gameplay.md#setstaticmeshcolor)**(`staticMesh`: [`Mesh`](../classes/Gameplay.Mesh.md), `color`: [`LinearColor`](../classes/Type.LinearColor.md)): `void` <br> 设置物体静态网格材质颜色|
| **[setStaticMeshMaterialColor](Gameplay.Gameplay.md#setstaticmeshmaterialcolor)**(`obj`: `GameObject`, `color`: [`LinearColor`](../classes/Type.LinearColor.md)): `void` <br> 设置物体静态网格材质颜色|
| **[sphereOverlap](Gameplay.Gameplay.md#sphereoverlap)**(`StartLocation`: [`Vector`](../classes/Type.Vector.md), `Radius`: `number`, `debug`: `boolean`, `IgnoreObjectsGuid?`: `string`[], `IgnoreByKind?`: `boolean`, `Source?`: `GameObject`): `Core.GameObject`[] <br> 圆形范围检测|
| **[urlDecode](Gameplay.Gameplay.md#urldecode)**(`str`: `string`): `string` <br> url解码|
| **[urlEncode](Gameplay.Gameplay.md#urlencode)**(`str`: `string`): `string` <br> url转码|
| **[vibrate](Gameplay.Gameplay.md#vibrate)**(`enable`: `boolean`): `void` <br> 振动开关|


| Modules Type Aliases |
| :-----|
| **[VehicleGearDataNew](Gameplay.Gameplay.md#vehiclegeardatanew)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleWheelDataNew](Gameplay.Gameplay.md#vehiclewheeldatanew)**: `Object` <br> 四轮载具车轮属性|


## Modules Functions


___

### addOutlineEffect <Score text="addOutlineEffect" /> 

• **addOutlineEffect**(`obj`, `OutlineColor?`, `OutlineWidth?`, `OutlineDepthOffset?`, `OutlineClampValue?`, `considerCameraPosition?`, `outlineSilhouetteOnly?`): `void` <Badge type="tip" text="client" />

为目标物体添加描边效果,不需要后处理，描边效果会被其他物体遮挡


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 需要操作的物体 |
| `OutlineColor?` | [`LinearColor`](../classes/Type.LinearColor.md) | 描边颜色 default:Type.LinearColor.black |
| `OutlineWidth?` | `number` | 描边宽度 default:2 |
| `OutlineDepthOffset?` | `number` | 描边深度偏移 default:0 范围：-25 - 25 |
| `OutlineClampValue?` | `number` | 描边范围 default:0.93 范围：0 - 1 |
| `considerCameraPosition?` | `boolean` | 是否考虑相机位置 default:false |
| `outlineSilhouetteOnly?` | `boolean` | 是否仅轮廓描边 default:true |

___

### angleCheck <Score text="angleCheck" /> 

• **angleCheck**(`StartLocation`, `StartDirection`, `TargetLocation`, `Angle`): `boolean` 

判断终点位置是否处于起点位置在某一方向的一定角度内


使用示例: 如下示例原点X方向进行60度角的检测基本流程，假设目标位置（100,20,20）
```ts
if(angleCheck(new Type.Vector(0,0,0), new Type.Vector(1,0,0), new Type.Vector(100,20,20), 60)) {
// 在范围内
}
else {
// 不在范围内
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `StartDirection` | [`Vector`](../classes/Type.Vector.md) | 起始方向 |
| `TargetLocation` | [`Vector`](../classes/Type.Vector.md) | 目标位置 |
| `Angle` | `number` | 检测角 |

#### Returns

`boolean`

true，在角度范围内
___

### asyncFindPathToLocation <Score text="asyncFindPathToLocation" /> 

• **asyncFindPathToLocation**(`startPos`, `endPos`): [`Vector`](../classes/Type.Vector.md)[] 

查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPos` | [`Vector`](../classes/Type.Vector.md) | 起点 |
| `endPos` | [`Vector`](../classes/Type.Vector.md) | 终点 |

#### Returns

[`Vector`](../classes/Type.Vector.md)[]

主要路径点
___

### asyncGetCurrentPlayer <Score text="asyncGetCurrentPlayer" /> 

• **asyncGetCurrentPlayer**(): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> <Badge type="tip" text="client" />

异步获取当前玩家


#### Returns

`Promise`<[`Player`](../classes/Gameplay.Player.md)\>

当前玩家
___

### asyncGetPlayer <Score text="asyncGetPlayer" /> 

• **asyncGetPlayer**(`playerId`): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> 

异步根据playerId获取Player


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerId` | `number` | playerId |

#### Returns

`Promise`<[`Player`](../classes/Gameplay.Player.md)\>

playerId对应的玩家
___

### boxOverlap <Score text="boxOverlap" /> 

• **boxOverlap**(`StartLocation`, `EndLocation`, `Width`, `Height`, `debug`, `IgnoreObjectsGuid?`, `IgnoreByKind?`, `Source?`): `Core.GameObject`[] 

矩形范围检测


使用示例: 如下示例展示使用矩形范围检测的基本流程
```ts
const goList = boxOverlap(new Type.Vector(0,0,0), new Type.Vector(1000,0,0), 10, 10, true);
for (const item of goList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `EndLocation` | [`Vector`](../classes/Type.Vector.md) | 结束位置 |
| `Width` | `number` | 检测宽度 |
| `Height` | `number` | 检测高度 |
| `debug` | `boolean` | 是否可视化绘制 default:true |
| `IgnoreObjectsGuid?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `IgnoreByKind?` | `boolean` | 是否根据屏蔽对象guid数组中的屏蔽对象类别进行屏蔽，例如屏蔽对象guid数组中存在一个触发器A，那么如果本参数为false，只屏蔽触发器A，如果本参数为true，会屏蔽场景中所有触发器 default:false |
| `Source?` | `GameObject` | 检测源是发起本次检测的对象，不参与本次检测(例如发起客户端的角色对象) default:null |

#### Returns

`Core.GameObject`[]

GameObject数组
___

### boxOverlapInLevel <Score text="boxOverlapInLevel" /> 

• **boxOverlapInLevel**(`StartLocation`, `EndLocation`, `Width`, `Height`, `debug`, `IgnoreObjectsGuid?`, `IgnoreByKind?`, `Source?`): `Core.GameObject`[] 

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API 注释命名优化 replacement: boxOverlap

:::

矩形范围检测


使用示例: 如下示例展示使用矩形范围检测的基本流程
```ts
const goList = boxOverlapInLevel(new Type.Vector(0,0,0), new Type.Vector(1000,0,0), 10, 10, true);
for (const item of goList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `EndLocation` | [`Vector`](../classes/Type.Vector.md) | 结束位置 |
| `Width` | `number` | 检测宽度 |
| `Height` | `number` | 检测高度 |
| `debug` | `boolean` | 是否可视化绘制 default:true |
| `IgnoreObjectsGuid?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `IgnoreByKind?` | `boolean` | 是否根据屏蔽对象guid数组中的屏蔽对象类别进行屏蔽，例如屏蔽对象guid数组中存在一个触发器A，那么如果本参数为false，只屏蔽触发器A，如果本参数为true，会屏蔽场景中所有触发器 default:false |
| `Source?` | `GameObject` | 检测源是发起本次检测的对象，不参与本次检测(例如发起客户端的角色对象) default:null |

#### Returns

`Core.GameObject`[]

GameObject数组
___

### clearFollow <Score text="clearFollow" /> 

• **clearFollow**(`player`): `void` 

停止跟随


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) | 角色 |

___

### clearMoveTo <Score text="clearMoveTo" /> 

• **clearMoveTo**(`Obj`): `void` 

导航停止


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Obj` | `GameObject` | 移动对象(建议使用角色、非玩家对象NPC、四轮载具对象进行moveTo()功能) |

___

### cylinderOverlap <Score text="cylinderOverlap" /> 

• **cylinderOverlap**(`StartLocation`, `Radius`, `Height`, `debug`, `IgnoreObjectsGuid?`, `IgnoreByKind?`, `Source?`): `Core.GameObject`[] 

圆柱范围检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `Radius` | `number` | 检测半径 |
| `Height` | `number` | 检测高度 |
| `debug` | `boolean` | 是否可视化绘制 default:true |
| `IgnoreObjectsGuid?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `IgnoreByKind?` | `boolean` | 是否根据屏蔽对象guid数组中的屏蔽对象类别进行屏蔽，例如屏蔽对象guid数组中存在一个触发器A，那么如果本参数为false，只屏蔽触发器A，如果本参数为true，会屏蔽场景中所有触发器 default:false |
| `Source?` | `GameObject` | 检测源是发起本次检测的对象，不参与本次检测(例如发起客户端的角色对象) default:null |

#### Returns

`Core.GameObject`[]

GameObject数组
___

### fetch <Score text="fetch" /> 

• **fetch**(`url`, `init?`): `Promise`<`Response`\> 

HTTP请求


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url |
| `init?` | `RequestInit` | 请求信息 default:请求信息 |

#### Returns

`Promise`<`Response`\>

响应信息
___

### follow <Score text="follow" /> 

• **follow**(`player`, `targetplayer`, `Radius?`, `OnSuccess?`, `OnFail?`): `void` 

跟随目标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) | 跟随玩家 |
| `targetplayer` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) | 被跟随玩家 |
| `Radius?` | `number` | 距目标半径 default:0 |
| `OnSuccess?` | () => `void` | 成功回调 default:null |
| `OnFail?` | () => `void` | 失败回调 default:null |

___

### generalHttpRequest <Score text="generalHttpRequest" /> 

• **generalHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean` 

通用Http请求


使用示例:发送Http请求
```ts
generalHttpRequest(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.HttpRequestURL.md) | EHttpRequestURL |
| `param` | `string` | string |
| `jsonContent` | `any` | any |
| `requestType` | [`HttpRequestType`](../enums/Network.HttpRequestType.md) | 0是Get 1是Post |

#### Returns

`boolean`

bool
___

### getAllPlayers <Score text="getAllPlayers" /> 

• **getAllPlayers**(): [`Player`](../classes/Gameplay.Player.md)[] 

当前所有Player


#### Returns

[`Player`](../classes/Gameplay.Player.md)[]

当前所有Player
___

### getClickGameObjectByScene <Score text="getClickGameObjectByScene" /> 

• **getClickGameObjectByScene**(`SceneX`, `SceneY`, `Distance`, `multiTrace`, `onRay`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <Badge type="tip" text="client" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API 命名修改 replacement: getGameObjectByScenePosition

:::

获取点击屏幕位置的物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SceneX` | `number` | 视口坐标X |
| `SceneY` | `number` | 视口坐标Y |
| `Distance` | `number` | 检测距离 |
| `multiTrace` | `boolean` | 是否获取多个GameObject |
| `onRay` | `boolean` | 是否开启射线显示效果 |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

点击位置的物体
___

### getCurrentEnv <Score text="getCurrentEnv" /> 

• **getCurrentEnv**(): `string` 

获取当前环境


使用示例:调用方法
```ts
const currentEnv = SystemUtil.getCurrentEnv();
console.log(`currentEnv: ${currentEnv}`);
// Online
```

#### Returns

`string`

当前环境,返回值包含(Dev/Test/Meta/Pre/Online/dev-oversea/test-oversea/pre-oversea/online-oversea/tc-sa-saopaulo-playza)
___

### getCurrentPlayer <Score text="getCurrentPlayer" /> 

• **getCurrentPlayer**(): [`Player`](../classes/Gameplay.Player.md) <Badge type="tip" text="client" />

获取当前玩家


#### Returns

[`Player`](../classes/Gameplay.Player.md)

当前玩家
___

### getDefaultGraphicsCPULevel <Score text="getDefaultGraphicsCPULevel" /> 

• **getDefaultGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取默认CPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

默认画质等级
___

### getDefaultGraphicsGPULevel <Score text="getDefaultGraphicsGPULevel" /> 

• **getDefaultGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取默认GPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

默认画质等级
___

### getEditorVersion <Score text="getEditorVersion" /> 

• **getEditorVersion**(): `string` 

获取编辑器版本号


#### Returns

`string`

当前编辑器版本号
___

### getFullEditorVersion <Score text="getFullEditorVersion" /> 

• **getFullEditorVersion**(): `string` 

获取完整编辑器版本号


#### Returns

`string`

当前完整编辑器版本号
___

### getGameId <Score text="getGameId" /> 

• **getGameId**(): `string` 

获取当前游戏GameId


#### Returns

`string`

当前游戏GameId
___

### getGameObjectByScenePosition <Score text="getGameObjectByScenePosition" /> 

• **getGameObjectByScenePosition**(`SceneX`, `SceneY`, `Distance?`, `multiTrace?`, `onRay?`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <Badge type="tip" text="client" />

获取视口相应位置的物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SceneX` | `number` | 视口坐标X |
| `SceneY` | `number` | 视口坐标Y |
| `Distance?` | `number` | 检测距离 default:100000 |
| `multiTrace?` | `boolean` | 是否获取多个GameObject default:false |
| `onRay?` | `boolean` | 是否开启射线显示效果 default:false |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

点击位置的物体
___

### getGraphicsCPULevel <Score text="getGraphicsCPULevel" /> 

• **getGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取当前CPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

画质等级
___

### getGraphicsGPULevel <Score text="getGraphicsGPULevel" /> 

• **getGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取当前GPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

画质等级
___

### getPlayer <Score text="getPlayer" /> 

• **getPlayer**(`playerId`): [`Player`](../classes/Gameplay.Player.md) 

获取玩家


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerId` | `number` | playerId |

#### Returns

[`Player`](../classes/Gameplay.Player.md)

当前玩家
___

### getShootDir <Score text="getShootDir" /> 

• **getShootDir**(`character`, `startLoc`, `distance?`): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="client" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: 删除接口 replacement: getSightBeadLocation()

:::

获取某位置指向屏幕中心瞄准位置的向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](../classes/Gameplay.Character.md) | 角色 |
| `startLoc` | [`Vector`](../classes/Type.Vector.md) | 发射位置 |
| `distance?` | `number` | 有效距离 default:1000mm |

#### Returns

[`Vector`](../classes/Type.Vector.md)

指向屏幕中心瞄准位置的向量
___

### getSightBeadLocation <Score text="getSightBeadLocation" /> 

• **getSightBeadLocation**(): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="client" />

获取相机中心点所瞄准的世界位置


#### Returns

[`Vector`](../classes/Type.Vector.md)

目标点世界位置
___

### getUrlParameter <Score text="getUrlParameter" /> 

• **getUrlParameter**(`url`, `parameterName`): `string` 

获取url参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url |
| `parameterName` | `string` | 参数名 |

#### Returns

`string`

参数值
___

### getVersion <Score text="getVersion" /> 

• **getVersion**(): `string` 

获取当前游戏版本


#### Returns

`string`

当前游戏版本
___

### getViewportSize <Score text="getViewportSize" /> 

• **getViewportSize**(): [`Vector2`](../classes/Type.Vector2.md) <Badge type="tip" text="client" />

获取屏幕的分辨率大小（不跟随屏幕缩放变化）。


使用示例:调用方法
```ts
let viewportSize = WindowUtil.getViewportSize();
console.log(`viewportSize ${viewportSize}`);
// X=1920 Y=1080
```

#### Returns

[`Vector2`](../classes/Type.Vector2.md)

___

### httpRequestTransmitData <Score text="httpRequestTransmitData" /> 

• **httpRequestTransmitData**(`response`, `paramUrl`, `jsonContent`, `requestType`): `boolean` 

Http请求接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) |  请求的回调 |
| `paramUrl` | `string` |  请求的参数和值 |
| `jsonContent` | `string` |  请求数据内容，json格式 |
| `requestType` | [`HttpRequestType`](../enums/Network.HttpRequestType.md) |  请求类型。HttpRequestType枚举值 |

#### Returns

`boolean`

请求是否发送成功
___

### isClient <Score text="isClient" /> 

• **isClient**(): `boolean` 

是否客户端运行


#### Returns

`boolean`

是否客户端运行
___

### isDynamicVibration <Score text="isDynamicVibration" /> 

• **isDynamicVibration**(`value`): `void` <Badge type="tip" text="client" />

振动开关

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API规范修改 replacement: vibrate

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | -true:开启震动，-false:关闭震动 |

___

### isMobile <Score text="isMobile" /> 

• **isMobile**(): `boolean` 

判断当前是否是移动端


#### Returns

`boolean`

是否是移动端
___

### isServer <Score text="isServer" /> 

• **isServer**(): `boolean` 

是否服务器运行


#### Returns

`boolean`

是否服务器运行
___

### lineTrace <Score text="lineTrace" /> 

• **lineTrace**(`StartLocation`, `EndLocation`, `multiTrace?`, `debug?`, `IgnoreObjectsGuid?`, `IgnoreByKind?`, `Source?`): [`HitResult`](../classes/Gameplay.HitResult.md)[] 

射线检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `EndLocation` | [`Vector`](../classes/Type.Vector.md) | 结束位置 |
| `multiTrace?` | `boolean` | 是否穿透检测 default:true |
| `debug?` | `boolean` | 是否可视化绘制 default:true |
| `IgnoreObjectsGuid?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `IgnoreByKind?` | `boolean` | 是否根据屏蔽对象guid数组中的屏蔽对象类别进行屏蔽，例如屏蔽对象guid数组中存在一个触发器A，那么如果本参数为false，只屏蔽触发器A，如果本参数为true，会屏蔽场景中所有触发器 default:false |
| `Source?` | `GameObject` | 检测源是发起本次检测的对象，不参与本次检测(例如发起客户端的角色对象) default:null |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

HitResult数组
___

### moveTo <Score text="moveTo" /> 

• **moveTo**(`Obj`, `Location`, `Radius?`, `OnSuccess?`, `OnFail?`): `void` 

寻路移动


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Obj` | `GameObject` | 移动对象(建议使用角色、非玩家对象NPC、四轮载具对象进行moveTo()功能) |
| `Location` | [`Vector`](../classes/Type.Vector.md) | 目标位置 |
| `Radius?` | `number` | 距目标半径 default:0 |
| `OnSuccess?` | () => `void` | 成功回调 default:null |
| `OnFail?` | () => `void` | 失败回调 default:null |

___

### parabolicTrace <Score text="parabolicTrace" /> 

• **parabolicTrace**(`StartLocation`, `Direction`, `InitSpeed`, `Range`, `CapsuleRadius`, `IgnoreObjectTypes`, `debug?`, `IgnoreObjectsGuid?`, `Source?`): [`HitResult`](../classes/Gameplay.HitResult.md) 

抛物线检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `Direction` | [`Vector`](../classes/Type.Vector.md) | 投掷方向 |
| `InitSpeed` | `number` | 初始速度 |
| `Range` | `number` | 距离 |
| `CapsuleRadius` | `number` | 胶囊半径 |
| `IgnoreObjectTypes` | [`ObjectTypeQuery`](../enums/Gameplay.ObjectTypeQuery.md)[] | 忽略Object类型 |
| `debug?` | `boolean` | 是否可视化绘制 default:true |
| `IgnoreObjectsGuid?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `Source?` | `GameObject` | 检测源是发起本次检测的对象，不参与本次检测(例如发起客户端的角色对象) default:null |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)

HitResult
___

### playDynamicForceFeedbackStart <Score text="playDynamicForceFeedbackStart" /> 

• **playDynamicForceFeedbackStart**(`Intensity?`, `Duration?`): `void` <Badge type="tip" text="client" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API 注释命名优化 replacement: 暂不对外开放，请勿使用此方法

:::

播放震动


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Intensity?` | `number` | 强度 default:1 |
| `Duration?` | `number` | 周期 -1 是一直震动 default:-1 |

___

### playDynamicForceFeedbackStop <Score text="playDynamicForceFeedbackStop" /> 

• **playDynamicForceFeedbackStop**(): `void` <Badge type="tip" text="client" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API 注释命名优化 replacement: 暂不对外开放，请勿使用此方法

:::

停止震动


___

### removeOutlineEffect <Score text="removeOutlineEffect" /> 

• **removeOutlineEffect**(`obj`): `void` <Badge type="tip" text="client" />

移除描边效果


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 需要操作的物体 |

___

### setGlobalAsyncTimeout <Score text="setGlobalAsyncTimeout" /> 

• **setGlobalAsyncTimeout**(`overtime`): `void` 

设置异步回调超时时间，单位毫秒，默认5000


使用示例:调用方法
```ts
Gameplay.setGlobalAsyncTimeout(1000 * 10);
const obj = await Gameplay.GameObject.asyncFind("场景中的物体Guid");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overtime` | `number` | 超时时间 |

___

### setGlobalTimeDilation <Score text="setGlobalTimeDilation" /> 

• **setGlobalTimeDilation**(`Time`): `void` <Badge type="tip" text="other" />

设置世界整体膨胀时间速度

调用端自动广播

::: warning Precautions

世界整体膨胀时间速度默认为1，当膨胀时间速度设置小于1时，世界中所有对象的整体运行时间会开始变慢。膨胀时间速度最小值为0.2。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` | 膨胀时间速度 |

___

### setGraphicsCPULevel <Score text="setGraphicsCPULevel" /> 

• **setGraphicsCPULevel**(`CPULevel`): `void` <Badge type="tip" text="client" />

设置当前CPU画质等级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | CPU画质等级 |

___

### setGraphicsGPULevel <Score text="setGraphicsGPULevel" /> 

• **setGraphicsGPULevel**(`GPULevel`): `void` <Badge type="tip" text="client" />

设置当前GPU画质等级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | GPU画质等级 |
___

### setPlayerPassableForAllArea <Score text="setPlayerPassableForAllArea" /> 

• **setPlayerPassableForAllArea**(`character`, `canPass`): `void` <Badge type="tip" text="server" />

设置某个玩家对所有禁行区的通过权限


使用示例:设置某个玩家对所有禁行区的通过权限
```ts
setPassableBlockingAreaActor(player,true)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](../classes/Gameplay.Character.md) | 目标玩家 |
| `canPass` | `boolean` | 是否允许通过 |

___

### setStaticMeshColor <Score text="setStaticMeshColor" /> 

• **setStaticMeshColor**(`staticMesh`, `color`): `void` <Badge type="tip" text="client" />

设置物体静态网格材质颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `staticMesh` | [`Mesh`](../classes/Gameplay.Mesh.md) | 静态网格 |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |

___

### setStaticMeshMaterialColor <Score text="setStaticMeshMaterialColor" /> 

• **setStaticMeshMaterialColor**(`obj`, `color`): `void` <Badge type="tip" text="client" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: 废弃 replacement:setStaticMeshColor()

:::

设置物体静态网格材质颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 静态网格 |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |

___

### sphereOverlap <Score text="sphereOverlap" /> 

• **sphereOverlap**(`StartLocation`, `Radius`, `debug`, `IgnoreObjectsGuid?`, `IgnoreByKind?`, `Source?`): `Core.GameObject`[] 

圆形范围检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `Radius` | `number` | 检测半径 |
| `debug` | `boolean` | 是否可视化绘制 default:true |
| `IgnoreObjectsGuid?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `IgnoreByKind?` | `boolean` | 是否根据屏蔽对象guid数组中的屏蔽对象类别进行屏蔽，例如屏蔽对象guid数组中存在一个触发器A，那么如果本参数为false，只屏蔽触发器A，如果本参数为true，会屏蔽场景中所有触发器 default:false |
| `Source?` | `GameObject` | 检测源是发起本次检测的对象，不参与本次检测(例如发起客户端的角色对象) default:null |

#### Returns

`Core.GameObject`[]

GameObject数组
___

### urlDecode <Score text="urlDecode" /> 

• **urlDecode**(`str`): `string` 

url解码


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 内容 |

#### Returns

`string`

解码后的内容
___

### urlEncode <Score text="urlEncode" /> 

• **urlEncode**(`str`): `string` 

url转码


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 内容 |

#### Returns

`string`

___

### vibrate <Score text="vibrate" /> 

• **vibrate**(`enable`): `void` <Badge type="tip" text="client" />

振动开关


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | -true:开启震动，-false:关闭震动 |
## Modules Type Aliases


___

### VehicleGearDataNew <Score text="VehicleGearDataNew" /> 

Ƭ **VehicleGearDataNew**: `Object`

四轮载具挡位属性

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gearDownRatio` | `number` | 下齿比值 |
| `gearLevel` | `number` | 挡位级别 |
| `gearRatio` | `number` | 齿比值 |
| `gearUpRatio` | `number` | 上齿比值 |
___

### VehicleWheelDataNew <Score text="VehicleWheelDataNew" /> 

Ƭ **VehicleWheelDataNew**: `Object`

四轮载具车轮属性

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelAngle` | `number` | 车轮最大转向角度 |
| `wheelModel` | `string` | 车轮绑定对象ID |
| `wheelRadius` | `number` | 车轮半径 |