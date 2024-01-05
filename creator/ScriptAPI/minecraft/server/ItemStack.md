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
- [constructor](#constructor)::: moniker range="=minecraft-bedrock-experimental"
- [clearDynamicProperties](#cleardynamicproperties)
::: moniker-end
- [clone](#clone)
- [getCanDestroy](#getcandestroy)
- [getCanPlaceOn](#getcanplaceon)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
::: moniker range="=minecraft-bedrock-experimental"
- [getDynamicProperty](#getdynamicproperty)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [getDynamicPropertyIds](#getdynamicpropertyids)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [getDynamicPropertyTotalByteCount](#getdynamicpropertytotalbytecount)
::: moniker-end
- [getLore](#getlore)
- [getTags](#gettags)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [isStackableWith](#isstackablewith)
- [setCanDestroy](#setcandestroy)
- [setCanPlaceOn](#setcanplaceon)
::: moniker range="=minecraft-bedrock-experimental"
- [setDynamicProperty](#setdynamicproperty)
::: moniker-end
- [setLore](#setlore)
::: moniker range="=minecraft-bedrock-experimental"
- [triggerEvent](#triggerevent)
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

#### **Returns** [*ItemStack*](ItemStack.md)

> [!WARNING]
> This function can throw errors.
>
> Throws if `itemType` is invalid, or if `amount` is outside the range of 1-255.

::: moniker range="=minecraft-bedrock-experimental"
### **clearDynamicProperties**
`
clearDynamicProperties(): void
`

Clears all dynamic properties that have been set on this item stack.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **clone**
`
clone(): ItemStack
`

Creates an exact copy of the item stack, including any custom data or properties.

#### **Returns** [*ItemStack*](ItemStack.md) - Returns a copy of this item stack.

### **getCanDestroy**
`
getCanDestroy(): string[]
`

Get the list of block types this item can break in Adventure mode.

#### **Returns** *string*[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getCanPlaceOn**
`
getCanPlaceOn(): string[]
`

Get the list of block types this item can be placed on in Adventure mode.

#### **Returns** *string*[]

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

#### **Returns** *ItemComponentTypeMap[T] | undefined* - Returns the component if it exists on the item stack, otherwise undefined.

#### Examples
##### ***durability.ts***
```typescript
// Get the maximum durability of a custom sword item
const itemStack = new ItemStack('custom:sword');
const durability = itemStack.getComponent(ItemComponentTypes.Durability);
const maxDurability = durability.maxDurability;
```

### **getComponents**
`
getComponents(): ItemComponent[]
`

Returns all components that are both present on this item stack and supported by the API.

#### **Returns** [*ItemComponent*](ItemComponent.md)[]

::: moniker range="=minecraft-bedrock-experimental"
### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.

#### **Returns** *boolean* | *number* | *string* | [*Vector3*](Vector3.md) | *undefined* - Returns the value for the property, or undefined if the property has not been set.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **getDynamicPropertyIds**
`
getDynamicPropertyIds(): string[]
`

Returns the available set of dynamic property identifiers that have been used on this entity.

#### **Returns** *string*[] - A string array of the dynamic properties set on this entity.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **getDynamicPropertyTotalByteCount**
`
getDynamicPropertyTotalByteCount(): number
`

Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity. This includes the size of both the key and the value.  This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.

#### **Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **getLore**
`
getLore(): string[]
`

Returns the lore value - a secondary display string - for an ItemStack.

#### **Returns** *string*[] - An array of lore lines. If the item does not have lore, returns an empty array.

### **getTags**
`
getTags(): string[]
`

Returns a set of tags associated with this item stack.

#### **Returns** *string*[]

### **hasComponent**
`
hasComponent(componentId: string): boolean
`

Returns true if the specified component is present on this item stack.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.

#### **Returns** *boolean*

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks whether this item stack has a particular tag associated with it.

#### **Parameters**
- **tag**: *string*
  
  Tag to search for.

#### **Returns** *boolean* - True if the Item Stack has the tag associated with it, else false.

### **isStackableWith**
`
isStackableWith(itemStack: ItemStack): boolean
`

Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  ItemStack to check stacking compatability with.

#### **Returns** *boolean* - True if the Item Stack is stackable with the itemStack passed in.

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
// Creates a diamond pickaxe that can destroy cobblestone and obsidian
const specialPickaxe = new ItemStack("minecraft:diamond_pickaxe");
specialPickaxe.setCanDestroy(["minecraft:cobblestone", "minecraft:obsidian"]);
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
const specialGoldBlock = new ItemStack("minecraft:gold_block");
specialPickaxe.setCanPlaceOn(["minecraft:grass", "minecraft:dirt"]);
```

::: moniker range="=minecraft-bedrock-experimental"
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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
>
> Throws if the item stack is stackable.
::: moniker-end

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
  const diamondAwesomeSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
  let players = mc.world.getAllPlayers();

  diamondAwesomeSword.setLore(["§c§lDiamond Sword of Awesome§r", "+10 coolness", "§p+4 shiny§r"]);

  // hover over/select the item in your inventory to see the lore.
  const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
  inventory.container.setItem(0, diamondAwesomeSword);

  let item = inventory.container.getItem(0);

  if (item) {
    let enchants = item.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
    let knockbackEnchant = new mc.Enchantment("knockback", 3);
    enchants.enchantments.addEnchantment(knockbackEnchant);
  }
```
##### ***multilineLore.ts***
```typescript
// Set the lore of an item to multiple lines of text
const itemStack = new ItemStack("minecraft:diamond_sword");
itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
```

::: moniker range="=minecraft-bedrock-experimental"
### **triggerEvent**
`
triggerEvent(eventName: string): void
`

Triggers an item type event. For custom items, a number of events are defined in an items' definition for key item behaviors.

#### **Parameters**
- **eventName**: *string*
  
  Name of the item type event to trigger. If a namespace is not specified, minecraft: is assumed.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.
::: moniker-end

#### Examples
##### ***givePlayerEquipment.ts***
```typescript
  let players = mc.world.getAllPlayers();

  const armorStandLoc = { x: targetLocation.x, y: targetLocation.y, z: targetLocation.z + 4 };
  let armorStand = players[0].dimension.spawnEntity("armor_stand", armorStandLoc);

  const equipmentCompPlayer = players[0].getComponent("equipment_inventory") as mc.EntityEquipmentInventoryComponent;
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.head, new mc.ItemStack("minecraft:golden_helmet"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:iron_chestplate"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.legs, new mc.ItemStack("minecraft:diamond_leggings"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.feet, new mc.ItemStack("minecraft:netherite_boots"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.mainhand, new mc.ItemStack("minecraft:wooden_sword"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.offhand, new mc.ItemStack("minecraft:shield"));

  const equipmentCompArmorStand = armorStand.getComponent(
    "equipment_inventory"
  ) as mc.EntityEquipmentInventoryComponent;
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.head, new mc.ItemStack("minecraft:golden_helmet"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:iron_chestplate"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.legs, new mc.ItemStack("minecraft:diamond_leggings"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.feet, new mc.ItemStack("minecraft:netherite_boots"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.mainhand, new mc.ItemStack("minecraft:wooden_sword"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.offhand, new mc.ItemStack("minecraft:shield"));
```
##### ***ironFireSword.ts***
```typescript
const ironFireSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
let players = mc.world.getAllPlayers();

const enchantments = ironFireSword?.getComponent('minecraft:enchantable');
if (enchantments) {
    enchantments.addEnchantment({ type: mc.MinecraftEnchantmentTypes.FireAspect, level: 1 });
}

const inventory = players[0].getComponent('minecraft:inventory');
inventory.container.setItem(0, ironFireSword);
```
##### ***itemStacks.ts***
```typescript
const overworld = mc.world.getDimension('overworld');

const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };

const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.Emerald, 1);
const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.DiamondPickaxe, 1);
const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.Emerald, 5);

log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
overworld.spawnItem(oneEmerald, oneItemLoc);

log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
overworld.spawnItem(fiveEmeralds, fiveItemsLoc);

log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
```
##### ***spawnItem.ts***
```typescript
const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.Feather, 1);

overworld.spawnItem(featherItem, targetLocation);
log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
```
