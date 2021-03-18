---
title: GameTest.Helper
description: Contents of the GameTest.Helper class
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
---
# Helper


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
assertBlockNotPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*]("../Minecraft/Block.md") | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **assertBlockPresent**
`
assertBlockPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*]("../Minecraft/Block.md") | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **assertBlockState**
`
assertBlockState(blockStateName: string, stateValue: number, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockStateName** | *string* | - |
| **stateValue** | *number* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **assertContainerContains**
`
assertContainerContains(itemName: string, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemName** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **assertContainerEmpty**
`
assertContainerEmpty(position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **assertEntityHasComponent**
`
assertEntityHasComponent(entityIdentifier: string, componentIdentifier: string, position: Minecraft.BlockLocation, hasComponent: boolean): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **componentIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |
| **hasComponent** | *boolean* | - |

Returns *any*

### **assertEntityNotPresent**
`
assertEntityNotPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **assertEntityNotPresentInArea**
`
assertEntityNotPresentInArea(entityIdentifier: string): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |

Returns *any*

### **assertEntityPresent**
`
assertEntityPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **assertItemEntityNotPresent**
`
assertItemEntityNotPresent(item: Minecraft.ItemStack, position: Minecraft.BlockLocation, searchDistance: number): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **item** | [*Minecraft.ItemStack*]("../Minecraft/ItemStack.md") | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |
| **searchDistance** | *number* | - |

Returns *any*

### **assertItemEntityPresent**
`
assertItemEntityPresent(item: Minecraft.ItemStack, position: Minecraft.BlockLocation, searchDistance: number): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **item** | [*Minecraft.ItemStack*]("../Minecraft/ItemStack.md") | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |
| **searchDistance** | *number* | - |

Returns *any*

### **fail**
`
fail(errorMessage: string): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **errorMessage** | *string* | - |

Returns *any*

### **failIf**
`
failIf(callback: () => void): any;
`

Registers a callback to run.  The test will fail if this callback does _not_ fail/assert.
Note: The callback takes a single parameter, Helper, which is created each time the callback is called.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => void | - |

Returns *any*

### **killAllEntities**
`
killAllEntities(): any;
`

Kills all actors within the GameTest structure.

Returns *any*

### **pressButton**
`
pressButton(position: Minecraft.BlockLocation): any;
`

Presses a button at a position.  Note: Will error if button is not present.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **pullLever**
`
pullLever(position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **runAfterDelay**
`
runAfterDelay(delayTicks: number, callback: () => void): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | - |
| **callback** | () => void | - |

Returns *any*

### **runAtTickTime**
`
runAtTickTime(tick: number, callback: () => void): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |
| **callback** | () => void | - |

Returns *any*

### **setBlock**
`
setBlock(block: Minecraft.Block, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*]("../Minecraft/Block.md") | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **setEntityTamed**
`
setEntityTamed(): any;
`


Returns *any*

### **spawn**
`
spawn(entityIdentifier: string, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **startSequence**
`
startSequence(): GameTestSequence;
`


Returns [*GameTestSequence*]("GameTestSequence.md")

### **succeed**
`
succeed(): any;
`


Returns *any*

### **succeedIf**
`
succeedIf(callback: () => void): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => void | - |

Returns *any*

### **succeedOnTick**
`
succeedOnTick(tick: number): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |

Returns *any*

### **succeedOnTickWhen**
`
succeedOnTickWhen(tick: number, callback: () => void): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | - |
| **callback** | () => void | - |

Returns *any*

### **succeedWhen**
`
succeedWhen(callback: () => void): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => void | - |

Returns *any*

### **succeedWhenBlockPresent**
`
succeedWhenBlockPresent(block: Minecraft.Block, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **block** | [*Minecraft.Block*]("../Minecraft/Block.md") | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **succeedWhenEntityHasComponent**
`
succeedWhenEntityHasComponent(entityIdentifier: string, componentIdentifier: string, position: Minecraft.BlockLocation, hasComponent: boolean): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **componentIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |
| **hasComponent** | *boolean* | - |

Returns *any*

### **succeedWhenEntityNotPresent**
`
succeedWhenEntityNotPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

### **succeedWhenEntityPresent**
`
succeedWhenEntityPresent(entityIdentifier: string, position: Minecraft.BlockLocation): any;
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **position** | [*Minecraft.BlockLocation*]("../Minecraft/BlockLocation.md") | - |

Returns *any*

