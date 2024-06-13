---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemStack Class
description: Contents of the @minecraft/server.ItemStack class.
---
# ItemStack Class

Defines a collection of items.

#### Examples
##### ***givePlayerIronFireSword.ts***
```typescript
// Spawns a bunch of item stacks
import { EnchantmentType, ItemComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes, MinecraftEnchantmentTypes } from '@minecraft/vanilla-data';

function giveFireSword(player: Player) {
    const ironFireSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);

    const enchantments = ironFireSword?.getComponent(ItemComponentTypes.Enchantable);
    if (enchantments) {
        enchantments.addEnchantment({ type: new EnchantmentType(MinecraftEnchantmentTypes.FireAspect), level: 1 });
    }

    const inventory = player.getComponent('minecraft:inventory');
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }
    inventory.container.setItem(0, ironFireSword);
}
```
##### ***givePlayerEquipment.ts***
```typescript
// Gives the player some equipment
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
    } else {
        console.warn('No equipment component found on player');
    }
}
```
##### ***spawnFeatherItem.ts***
```typescript
// Spawns a feather at a location
import { ItemStack, DimensionLocation } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function spawnFeather(location: DimensionLocation) {
    const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
    location.dimension.spawnItem(featherItem, location);
}
```

## Properties

### **amount**
`amount: number;`

Number of the items in the stack. Valid values range between 1-255. The provided value will be clamped to the item's maximum stack size.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the value is outside the range of 1-255.

### **isStackable**
`read-only isStackable: boolean;`

Returns whether the item is stackable. An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties.

Type: *boolean*

### **keepOnDeath**
`keepOnDeath: boolean;`

Gets or sets whether the item is kept on death.

Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **lockMode**
`lockMode: ItemLockMode;`

Gets or sets the item's lock mode. The default value is `ItemLockMode.none`.

Type: [*ItemLockMode*](ItemLockMode.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **maxAmount**
`read-only maxAmount: number;`

The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.

Type: *number*

### **nameTag**
`nameTag?: string;`

Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the length exceeds 255 characters.

### **type**
`read-only type: ItemType;`

The type of the item.

Type: [*ItemType*](ItemType.md)

### **typeId**
`read-only typeId: string;`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.

Type: *string*

## Methods
- [constructor](#constructor)
- [clearDynamicProperties](#cleardynamicproperties)
- [clone](#clone)
- [getCanDestroy](#getcandestroy)
- [getCanPlaceOn](#getcanplaceon)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getDynamicProperty](#getdynamicproperty)
- [getDynamicPropertyIds](#getdynamicpropertyids)
- [getDynamicPropertyTotalByteCount](#getdynamicpropertytotalbytecount)
- [getLore](#getlore)
- [getTags](#gettags)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [isStackableWith](#isstackablewith)
- [matches](#matches)
- [setCanDestroy](#setcandestroy)
- [setCanPlaceOn](#setcanplaceon)
- [setDynamicProperty](#setdynamicproperty)
- [setLore](#setlore)
::: moniker range="=minecraft-bedrock-experimental"
- [createPotion](#createpotion)
::: moniker-end

### **constructor**
`
new ItemStack(itemType: ItemType | string, amount?: number)
`

Creates a new instance of a stack of items for use in the world.

#### **Parameters**
- **itemType**: [*ItemType*](ItemType.md) | *string*
  
  Type of item to create. See the {@link @minecraft/vanilla-data.MinecraftItemTypes} enumeration for a list of standard item types in Minecraft experiences.
- **amount**?: *number* = `1`
  
  Number of items to place in the stack, between 1-255. The provided value will be clamped to the item's maximum stack size. Note that certain items can only have one item in the stack.

**Returns** [*ItemStack*](ItemStack.md)

> [!WARNING]
> This function can throw errors.
>
> Throws if `itemType` is invalid, or if `amount` is outside the range of 1-255.

### **clearDynamicProperties**
`
clearDynamicProperties(): void
`

Clears all dynamic properties that have been set on this item stack.

### **clone**
`
clone(): ItemStack
`

Creates an exact copy of the item stack, including any custom data or properties.

**Returns** [*ItemStack*](ItemStack.md) - Returns a copy of this item stack.

### **getCanDestroy**
`
getCanDestroy(): string[]
`

Get the list of block types this item can break in Adventure mode.

**Returns** *string*[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getCanPlaceOn**
`
getCanPlaceOn(): string[]
`

Get the list of block types this item can be placed on in Adventure mode.

**Returns** *string*[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getComponent**
`
getComponent(componentId: T): ItemComponentTypeMap[T] | undefined
`

Gets a component (that represents additional capabilities) for an item stack.

#### **Parameters**
- **componentId**: *T*
  
  The identifier of the component (e.g., 'minecraft:food'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the [*@minecraft/server.ItemComponentTypes*](../../minecraft/server/ItemComponentTypes.md) enum.

**Returns** *ItemComponentTypeMap[T] | undefined* - Returns the component if it exists on the item stack, otherwise undefined.

#### Examples
##### ***durability.ts***
```typescript
// Gives a player a half-damaged diamond sword
import { ItemStack, Player, ItemComponentTypes, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveHurtDiamondSword(player: Player) {
    const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);
    const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability);
    if (durabilityComponent !== undefined) {
        durabilityComponent.damage = durabilityComponent.maxDurability / 2;
    }
    
    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.addItem(hurtDiamondSword);
}
```

### **getComponents**
`
getComponents(): ItemComponent[]
`

Returns all components that are both present on this item stack and supported by the API.

**Returns** [*ItemComponent*](ItemComponent.md)[]

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.

**Returns** *boolean* | *number* | *string* | [*Vector3*](Vector3.md) | *undefined* - Returns the value for the property, or undefined if the property has not been set.

### **getDynamicPropertyIds**
`
getDynamicPropertyIds(): string[]
`

Returns the available set of dynamic property identifiers that have been used on this entity.

**Returns** *string*[] - A string array of the dynamic properties set on this entity.

### **getDynamicPropertyTotalByteCount**
`
getDynamicPropertyTotalByteCount(): number
`

Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity. This includes the size of both the key and the value.  This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.

**Returns** *number*

### **getLore**
`
getLore(): string[]
`

Returns the lore value - a secondary display string - for an ItemStack.

**Returns** *string*[] - An array of lore lines. If the item does not have lore, returns an empty array.

### **getTags**
`
getTags(): string[]
`

Returns a set of tags associated with this item stack.

**Returns** *string*[]

### **hasComponent**
`
hasComponent(componentId: string): boolean
`

Returns true if the specified component is present on this item stack.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.

**Returns** *boolean*

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks whether this item stack has a particular tag associated with it.

#### **Parameters**
- **tag**: *string*
  
  Tag to search for.

**Returns** *boolean* - True if the Item Stack has the tag associated with it, else false.

### **isStackableWith**
`
isStackableWith(itemStack: ItemStack): boolean
`

Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  ItemStack to check stacking compatability with.

**Returns** *boolean* - True if the Item Stack is stackable with the itemStack passed in.

### **matches**
`
matches(itemName: string, states?: Record<string, boolean | number | string>): boolean
`

Version safe way of checking if an item matches.

#### **Parameters**
- **itemName**: *string*
  
  Identifier of the item.
- **states**?: Record<*string*, *boolean* | *number* | *string*> = `null`
  
   Applicable only for blocks. An optional set of states to compare against. If states is not specified, matches checks against the set of types more broadly.

**Returns** *boolean* - Returns a boolean whether the specified item matches.

### **setCanDestroy**
`
setCanDestroy(blockIdentifiers?: string[]): void
`

The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`
  
  String list of block types that the item can destroy.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if any of the provided block identifiers are invalid.

#### Examples
##### ***example.ts***
```typescript
const specialPickaxe = new ItemStack('minecraft:diamond_pickaxe');
specialPickaxe.setCanDestroy(['minecraft:cobblestone', 'minecraft:obsidian']);

// Creates a diamond pickaxe that can destroy cobblestone and obsidian
import { ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveRestrictedPickaxe(player: Player) {
    const specialPickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe);
    specialPickaxe.setCanPlaceOn([MinecraftItemTypes.Cobblestone, MinecraftItemTypes.Obsidian]);

    const inventory = player.getComponent('inventory');
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.addItem(specialPickaxe);
}
```

### **setCanPlaceOn**
`
setCanPlaceOn(blockIdentifiers?: string[]): void
`

The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`
  
  String list of block types that the item can be placed on.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if any of the provided block identifiers are invalid.

#### Examples
##### ***example.ts***
```typescript
// Creates a gold block that can be placed on grass and dirt
import { ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveRestrictedGoldBlock(player: Player) {
    const specialGoldBlock = new ItemStack(MinecraftItemTypes.GoldBlock);
    specialGoldBlock.setCanPlaceOn([MinecraftItemTypes.Grass, MinecraftItemTypes.Dirt]);

    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.addItem(specialGoldBlock);
}
```

### **setDynamicProperty**
`
setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void
`

Sets a specified property to a value. Note: This function only works with non-stackable items.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.
- **value**?: *boolean* | *number* | *string* | [*Vector3*](Vector3.md) = `null`
  
  Data value of the property to set.

> [!WARNING]
> This function can throw errors.
>
> Throws if the item stack is stackable.

### **setLore**
`
setLore(loreList?: string[]): void
`

Sets the lore value - a secondary display string - for an ItemStack. The lore list is cleared if set to an empty string or undefined.

#### **Parameters**
- **loreList**?: *string*[] = `null`
  
  List of lore lines. Each element in the list represents a new line. The maximum lore line count is 20. The maximum lore line length is 50 characters.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***diamondAwesomeSword.ts***
```typescript
import { EntityComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveAwesomeSword(player: Player) {
    const diamondAwesomeSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
    diamondAwesomeSword.setLore([
        '§c§lDiamond Sword of Awesome§r',
         '+10 coolness', '§p+4 shiny§r'
    ]);

    // hover over/select the item in your inventory to see the lore.
    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.setItem(0, diamondAwesomeSword);
}
```

::: moniker range="=minecraft-bedrock-experimental"
### **createPotion**
`
static createPotion(options: PotionOptions): ItemStack
`

Helper function for creating potion items.

#### **Parameters**
- **options**: [*PotionOptions*](PotionOptions.md)

**Returns** [*ItemStack*](ItemStack.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

#### Examples
##### ***givePlayerIronFireSword.ts***
```typescript
// Spawns a bunch of item stacks
import { EnchantmentType, ItemComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes, MinecraftEnchantmentTypes } from '@minecraft/vanilla-data';

function giveFireSword(player: Player) {
    const ironFireSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);

    const enchantments = ironFireSword?.getComponent(ItemComponentTypes.Enchantable);
    if (enchantments) {
        enchantments.addEnchantment({ type: new EnchantmentType(MinecraftEnchantmentTypes.FireAspect), level: 1 });
    }

    const inventory = player.getComponent('minecraft:inventory');
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }
    inventory.container.setItem(0, ironFireSword);
}
```
##### ***givePlayerEquipment.ts***
```typescript
// Gives the player some equipment
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
    } else {
        console.warn('No equipment component found on player');
    }
}
```
##### ***spawnFeatherItem.ts***
```typescript
// Spawns a feather at a location
import { ItemStack, DimensionLocation } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function spawnFeather(location: DimensionLocation) {
    const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
    location.dimension.spawnItem(featherItem, location);
}
```
