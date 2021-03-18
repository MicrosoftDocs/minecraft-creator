---
title: GameTest.Helper Class
description: Contents of the GameTest.Helper class
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
---
# *Helper* Class


## Methods
- [assertBlockNotPresent](#assertblocknotpresent)
- [assertBlockPresent](#assertblockpresent)
- [assertBlockState](#assertblockstate)
- [assertContainerContains](#assertcontainercontains)
- [assertContainerEmpty](#assertcontainerempty)
- [assertEntityHasComponent](#assertentityhascomponent)
- [assertEntityNotPresent](#assertentitynotpresent)
- [assertEntityNotPresentInArea](#assertentitynotpresentinarea)
- [assertEntityPresent](#assertentitypresent)
- [assertItemEntityNotPresent](#assertitementitynotpresent)
- [assertItemEntityPresent](#assertitementitypresent)
- [fail](#fail)
- [failIf](#failif)
- [killAllEntities](#killallentities)
- [pressButton](#pressbutton)
- [pullLever](#pulllever)
- [runAfterDelay](#runafterdelay)
- [runAtTickTime](#runatticktime)
- [setBlock](#setblock)
- [setEntityTamed](#setentitytamed)
- [spawn](#spawn)
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
  
### **assertBlockNotPresent**
`
assertBlockNotPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertBlockPresent**
`
assertBlockPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertBlockState**
`
assertBlockState(blockStateName: string, stateValue: number, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockStateName** | *string* | - |
| **stateValue** | *number* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertContainerContains**
`
assertContainerContains(itemName: string, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemName** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertContainerEmpty**
`
assertContainerEmpty(position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertEntityHasComponent**
`
assertEntityHasComponent(entityIdentifier: string, componentIdentifier: string, position: Minecraft.BlockLocation, hasComponent: boolean): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **componentIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **hasComponent** | *boolean* | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertEntityNotPresent**
`
assertEntityNotPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertEntityNotPresentInArea**
`
assertEntityNotPresentInArea(entityIdentifier: string): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertEntityPresent**
`
assertEntityPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertItemEntityNotPresent**
`
assertItemEntityNotPresent(item: Minecraft.ItemStack, position: Minecraft.BlockLocation, searchDistance: number): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **item** | [*Minecraft.ItemStack*](../Minecraft/ItemStack.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **searchDistance** | *number* | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **assertItemEntityPresent**
`
assertItemEntityPresent(item: Minecraft.ItemStack, position: Minecraft.BlockLocation, searchDistance: number): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **item** | [*Minecraft.ItemStack*](../Minecraft/ItemStack.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **searchDistance** | *number* | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **fail**
`
fail(errorMessage: string): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **errorMessage** | *string* | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **failIf**
`
failIf(callback: () => void): any
`

Registers a callback to run.  The test will fail if this callback does _not_ fail/assert.
Note: The callback takes a single parameter, Helper, which is created each time the callback is called.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => void | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **killAllEntities**
`
killAllEntities(): any
`

Kills all actors within the GameTest structure.

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **pressButton**
`
pressButton(position: Minecraft.BlockLocation): any
`

Presses a button at a position.  Note: Will error if button is not present.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **pullLever**
`
pullLever(position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **runAfterDelay**
`
runAfterDelay(delayTicks: number, callback: () => void): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | - |
| **callback** | () => void | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **runAtTickTime**
`
runAtTickTime(tick: number, callback: () => void): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |
| **callback** | () => void | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **setBlock**
`
setBlock(block: Minecraft.Block, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **setEntityTamed**
`
setEntityTamed(): any
`


Returns *any*
> [!WARNING]
> This function can throw errors. 

### **spawn**
`
spawn(entityIdentifier: string, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **startSequence**
`
startSequence(): GameTestSequence
`


Returns [*GameTestSequence*](GameTestSequence.md)

### **succeed**
`
succeed(): any
`


Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedIf**
`
succeedIf(callback: () => void): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => void | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedOnTick**
`
succeedOnTick(tick: number): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedOnTickWhen**
`
succeedOnTickWhen(tick: number, callback: () => void): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |
| **callback** | () => void | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedWhen**
`
succeedWhen(callback: () => void): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => void | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedWhenBlockPresent**
`
succeedWhenBlockPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*](../Minecraft/Block.md) | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedWhenEntityHasComponent**
`
succeedWhenEntityHasComponent(entityIdentifier: string, componentIdentifier: string, position: Minecraft.BlockLocation, hasComponent: boolean): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **componentIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **hasComponent** | *boolean* | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedWhenEntityNotPresent**
`
succeedWhenEntityNotPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

### **succeedWhenEntityPresent**
`
succeedWhenEntityPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *any*
> [!WARNING]
> This function can throw errors. 

