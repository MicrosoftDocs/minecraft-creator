---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: GameTest.Helper Class
description: Contents of the GameTest.Helper class.
---
# Helper Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

## Methods
- [assertBlockNotPresent](#assertblocknotpresent)
- [assertBlockPresent](#assertblockpresent)
- [assertBlockState](#assertblockstate)
- [assert](#assert)
- [assertContainerContains](#assertcontainercontains)
- [assertContainerEmpty](#assertcontainerempty)
- [assertEntityData](#assertentitydata)
- [assertEntityHasArmor](#assertentityhasarmor)
- [assertEntityHasComponent](#assertentityhascomponent)
- [assertEntityInstancePresent](#assertentityinstancepresent)
- [assertEntityNotPresent](#assertentitynotpresent)
- [assertEntityNotPresentInArea](#assertentitynotpresentinarea)
- [assertEntityNotTouching](#assertentitynottouching)
- [assertEntityPresent](#assertentitypresent)
- [assertEntityPresentInArea](#assertentitypresentinarea)
- [assertEntityTouching](#assertentitytouching)
- [assertIsWaterlogged](#assertiswaterlogged)
- [assertItemEntityCountIs](#assertitementitycountis)
- [assertItemEntityNotPresent](#assertitementitynotpresent)
- [assertItemEntityPresent](#assertitementitypresent)
- [assertRedstonePower](#assertredstonepower)
- [fail](#fail)
- [failIf](#failif)
- [killAllEntities](#killallentities)
- [pressButton](#pressbutton)
- [print](#print)
- [pullLever](#pulllever)
- [pulseRedstone](#pulseredstone)
- [relativeLocation](#relativelocation)
- [runAfterDelay](#runafterdelay)
- [runAtTickTime](#runatticktime)
- [setBlock](#setblock)
- [spawn](#spawn)
- [spawnItem](#spawnitem)
- [spawnWithoutBehaviors](#spawnwithoutbehaviors)
- [startSequence](#startsequence)
- [succeed](#succeed)
- [succeedIf](#succeedif)
- [succeedOnTick](#succeedontick)
- [succeedOnTickWhen](#succeedontickwhen)
- [succeedWhen](#succeedwhen)
- [succeedWhenBlockPresent](#succeedwhenblockpresent)
- [succeedWhenEntityHasComponent](#succeedwhenentityhascomponent)
- [succeedWhenEntityNotPresent](#succeedwhenentitynotpresent)
- [succeedWhenEntityPresent](#succeedwhenentitypresent)
- [walkTo](#walkto)
- [worldLocation](#worldlocation)
  
### **assertBlockNotPresent**
`
assertBlockNotPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertBlockPresent**
`
assertBlockPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertBlockState**
`
assertBlockState(blockStateName: string, stateValue: number, position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockStateName** | *string* | - |
| **stateValue** | *number* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assert**
`
assert(condition: boolean, message: string): void
`

Tests that the condition specified in _condition_ is true.  If not, an error with the specified _message_ is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **condition** | *boolean* | Expression of the condition to evaluate. |
| **message** | *string* | Message that is passed if the _condition_ does not evaluate to true. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertContainerContains**
`
assertContainerContains(itemStack: Minecraft.ItemStack, position: Minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location contains a particular type of item.  If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemStack** | [*Minecraft.ItemStack*](../Minecraft/ItemStack.md) | Basic description of the items to check for.  The specified container must contain at least the set of items defined in this _itemStack_. |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the block with a container (for example, a chest.) |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertContainerEmpty**
`
assertContainerEmpty(position: Minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location is empty.  If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the block with a container (for example, a chest.) |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityData**
`
assertEntityData(position: Minecraft.BlockLocation, entityIdentifier: string, callback: (arg0: Minecraft.Entity) => boolean): void
`

Tests that an entity (e.g., a skeleton) at the specified location has a particular piece of data.  If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the entity to look for |
| **entityIdentifier** | *string* | Identifier of the entity (e.g., 'minecraft:skeleton') to look for. |
| **callback** | (arg0: Minecraft.Entity) => boolean | Callback function where facets of the selected entity can be tested for. If this callback function returns false, an error is thrown. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***villagerEffectTest.js***
```javascript
test.assertEntityData(
  villagerPos,
  "minecraft:villager",
  (entity) => entity.getEffect(Effects.regeneration).getDuration() > 120
); // At least 6 seconds remaining in the villagers' effect

```
### **assertEntityHasArmor**
`
assertEntityHasArmor(entityIdentifier: string, armorSlot: number, armorName: string, armorData: number, position: Minecraft.BlockLocation, hasArmor: boolean): void
`

Tests that an entity has a specific piece of armor equipped.  If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **armorSlot** | *number* | - |
| **armorName** | *string* | - |
| **armorData** | *number* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the entity with armor to test for. |
| **hasArmor** | *boolean* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***horseArmorTest.js***
```javascript
test.assertEntityHasArmor("minecraft:horse", armorSlotTorso, "diamond_horse_armor", 0, horseLocation, true);

```
### **assertEntityHasComponent**
`
assertEntityHasComponent(entityIdentifier: string, componentIdentifier: string, position: Minecraft.BlockLocation, hasComponent: boolean): void
`

Tests that an entity has a particular component.  If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Identifier of the specified entity (e.g., 'minecraft:skeleton').  If the namespace is not specified, 'minecraft:' is assumed. |
| **componentIdentifier** | *string* | Identifier of the component to check for. |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the block with a container (for example, a chest.) |
| **hasComponent** | *boolean* | Determines whether to test that the component exists, or does not. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***sheepShearedTest.js***
```javascript
test.assertEntityHasComponent("minecraft:sheep", "minecraft:is_sheared", entityLoc, false);

```
### **assertEntityInstancePresent**
`
assertEntityInstancePresent(entity: Minecraft.Entity): void
`

Tests that a particular entity is still present and alive within the GameTest area. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entity** | [*Minecraft.Entity*](../Minecraft/Entity.md) | Specific entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityNotPresent**
`
assertEntityNotPresent(entityIdentifier: string, position: Minecraft.BlockLocation): void
`

Tests that a particular entity is not present at a particular location. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityNotPresentInArea**
`
assertEntityNotPresentInArea(entityIdentifier: string): void
`

Tests that a particular entity is not present within the GameTest area. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityNotTouching**
`
assertEntityNotTouching(entityIdentifier: string, position: Minecraft.Location): void
`

Tests that a particular entity is not touching or connected to another entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **position** | [*Minecraft.Location*](../Minecraft/Location.md) | Location of the entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityPresent**
`
assertEntityPresent(entityIdentifier: string, position: Minecraft.BlockLocation): void
`

Tests that a particular entity is present at a particular location. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityPresentInArea**
`
assertEntityPresentInArea(entityIdentifier: string): void
`

Tests that a particular entity is present within the GameTest area. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityTouching**
`
assertEntityTouching(entityIdentifier: string, position: Minecraft.Location): void
`

Tests that a particular entity is touching or connected to another entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **position** | [*Minecraft.Location*](../Minecraft/Location.md) | Location of the entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertIsWaterlogged**
`
assertIsWaterlogged(position: Minecraft.BlockLocation, isWaterlogged: boolean): void
`

Tests that a block at a location has some water at it.  If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location of the block to test for. |
| **isWaterlogged** | *boolean* | Determines whether to test for the presence of water at the _position_, or to test whether there is no water at the specified _position_. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertItemEntityCountIs**
`
assertItemEntityCountIs(itemType: Minecraft.ItemType, position: Minecraft.BlockLocation, searchDistance: number, count: number): void
`

Tests that items of a particular type and count are present within an area. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemType** | [*Minecraft.ItemType*](../Minecraft/ItemType.md) | Type of item to look for. |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location to search around for the specified set of items. |
| **searchDistance** | *number* | Range, in blocks, to aggregate a count of items around. If 0, will only search the particular block at _position_. |
| **count** | *number* | Number of items, at minimum, to look and test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***findFeathers.js***
```javascript
test.assertItemEntityCountIs(Items.feather, expectedFeatherLoc, 0, 1);

```
### **assertItemEntityNotPresent**
`
assertItemEntityNotPresent(itemType: Minecraft.ItemType, position: Minecraft.BlockLocation, searchDistance: number): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemType** | [*Minecraft.ItemType*](../Minecraft/ItemType.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **searchDistance** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertItemEntityPresent**
`
assertItemEntityPresent(itemType: Minecraft.ItemType, position: Minecraft.BlockLocation, searchDistance: number): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemType** | [*Minecraft.ItemType*](../Minecraft/ItemType.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **searchDistance** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertRedstonePower**
`
assertRedstonePower(position: Minecraft.BlockLocation, power: number): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **power** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **fail**
`
fail(errorMessage: string): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **errorMessage** | *string* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **failIf**
`
failIf(callback: () => undefined): void
`

Registers a callback to run.  The test will fail if this callback does _not_ fail/assert.
Note: The callback takes a single parameter, Helper, which is created each time the callback is called.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **killAllEntities**
`
killAllEntities(): void
`

Kills all entities within the GameTest structure.

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **pressButton**
`
pressButton(position: Minecraft.BlockLocation): void
`

Presses a button at a position.  Note: Will error if button is not present.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **print**
`
print(text: string): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **text** | *string* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **pullLever**
`
pullLever(position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **pulseRedstone**
`
pulseRedstone(position: Minecraft.BlockLocation, duration: number): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **duration** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **relativeLocation**
`
relativeLocation(worldLocation: Minecraft.BlockLocation): Minecraft.BlockLocation
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **worldLocation** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md)

> [!WARNING]
> This function can throw errors.

### **runAfterDelay**
`
runAfterDelay(delayTicks: number, callback: () => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | - |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **runAtTickTime**
`
runAtTickTime(tick: number, callback: () => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **setBlock**
`
setBlock(block: Minecraft.Block, position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **spawn**
`
spawn(entityIdentifier: string, position: Minecraft.BlockLocation): Minecraft.Entity
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns [*Minecraft.Entity*](../Minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

### **spawnItem**
`
spawnItem(itemStack: Minecraft.ItemStack, position: Minecraft.Location): Minecraft.Entity
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemStack** | [*Minecraft.ItemStack*](../Minecraft/ItemStack.md) | - |
| **position** | [*Minecraft.Location*](../Minecraft/Location.md) | - |

Returns [*Minecraft.Entity*](../Minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

### **spawnWithoutBehaviors**
`
spawnWithoutBehaviors(entityIdentifier: string, position: Minecraft.BlockLocation): Minecraft.Entity
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns [*Minecraft.Entity*](../Minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

### **startSequence**
`
startSequence(): GameTestSequence
`


Returns [*GameTestSequence*](GameTestSequence.md)


### **succeed**
`
succeed(): void
`


Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedIf**
`
succeedIf(callback: () => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedOnTick**
`
succeedOnTick(tick: number): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedOnTickWhen**
`
succeedOnTickWhen(tick: number, callback: () => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhen**
`
succeedWhen(callback: () => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenBlockPresent**
`
succeedWhenBlockPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityHasComponent**
`
succeedWhenEntityHasComponent(entityIdentifier: string, componentIdentifier: string, position: Minecraft.BlockLocation, hasComponent: boolean): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **componentIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **hasComponent** | *boolean* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityNotPresent**
`
succeedWhenEntityNotPresent(entityIdentifier: string, position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityPresent**
`
succeedWhenEntityPresent(entityIdentifier: string, position: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **walkTo**
`
walkTo(mob: Minecraft.Entity, position: Minecraft.BlockLocation, speedModifier: number): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **mob** | [*Minecraft.Entity*](../Minecraft/Entity.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **speedModifier** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **worldLocation**
`
worldLocation(relativeLocation: Minecraft.BlockLocation): Minecraft.BlockLocation
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **relativeLocation** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md)

> [!WARNING]
> This function can throw errors.

