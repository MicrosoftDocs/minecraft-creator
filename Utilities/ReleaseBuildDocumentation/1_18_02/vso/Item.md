<big>Version: 1.18.0.2</big>

[[_TOC_]]

# Items

To define an item, the item definition must be defined in the behavior pack in a JSON file.
All attributes, including item names, must be defined using item components.



## Item Components

Below are the various components for item functionality.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| minecraft:armor| | The armor item component determines the amount of protection you have in your armor item.
Experimental toggles required: Holiday Creator Features<br/>

protection

How much protection does the armor item have.
Minimum value: 0
Type: integer



texture_type

Texture Type to apply for the armor. Note that Horse armor is restricted to leather, iron, gold, or diamond.
Accepted values: "gold", "none", "leather", "chain", "iron", "diamond", "elytra", "turtle", "netherite"

 |
| JSON Object| minecraft:block_placer| | Planter item component. planter items are items that can be planted.
Experimental toggles required: Holiday Creator Features<br/>

block

block:  Set the placement block name for the planter item.
Type: block



use_on

List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
Type: array of use_on

 |
| JSON Object| minecraft:cooldown| | Cool down time for a component. After you use an item it becomes unusable for the duration specified by the 'cool down time' setting in this component.
Experimental toggles required: Holiday Creator Features<br/>

category

The type of cool down for this item.
Type: category



duration

The duration of time this item will spend cooling down before becoming usable again.
Type: float

 |
| JSON Object| minecraft:digger| | Digger item. Component put on items that dig.
Experimental toggles required: Holiday Creator Features<br/>

destroy_speeds

Destroy speed per block.
Type: array of destroy_speeds



on_dig

Trigger for when you dig a block that isn't listed in destroy_speeds
Type: on_dig



use_efficiency

Use efficiency? Default is set to false.
Type: boolean

 |
| JSON Object| minecraft:display_name| | Display Name item component. Display Names set the name to display when an item is in use or hovered over.
Experimental toggles required: Holiday Creator Features<br/>

value

The display name for an item.
Type: value

 |
| JSON Object| minecraft:durability| | A property that determines when an item will break from use. The durability of an item is potentially depleted upon use based on the damage chance.
Experimental toggles required: Holiday Creator Features<br/>

damage_chance

Damage chance is the chance of this item losing durability. Could be an int or an int range with min and max value.
Type: damage_chance



max_durability

Max durability is the amount of damage that this item can take before breaking.
Type: integer

 |
| JSON Object| minecraft:dye_powder| | Dye powder, there are 16 kinds of dye.
Experimental toggles required: Holiday Creator Features<br/>

color

Defines what color the dye is.
Accepted values: "black", "red", "green", "brown", "blue", "purple", "cyan", "silver", "gray", "pink", "lime", "yellow", "lightblue", "magenta", "orange", "white"

 |
| JSON Object| minecraft:entity_placer| | Entity placer item component. You can specifiy allowed blocks that the item is restricted to.
Experimental toggles required: Holiday Creator Features<br/>

dispense_on

List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.
Type: array of dispense_on



entity

The entity to be placed in the world.
Type: entity



use_on

List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
Type: array of use_on

 |
| JSON Object| minecraft:food| | When an item has a food component, it becomes edible to the player.
Experimental toggles required: Holiday Creator Features<br/>

can_always_eat

If true you can always eat this item (even when not hungry), defaults to false.
Type: boolean



nutrition

How much nutrition does this food item give the player when eaten.
Type: integer



on_consume


Type: on_consume



saturation_modifier

Saturation Modifier is used in this formula: (nutrition * saturation_modifier * 2) when appling the saturation buff. Which happens when you eat the item.
Type: saturation_modifier



using_converts_to

When used, convert the *this* item to the one specified by 'using_converts_to'.
Type: using_converts_to

 |
| JSON Object| minecraft:fuel| | Fuel component. Allows this item to be used as fuel in a furnace to 'cook' other items.
Experimental toggles required: Holiday Creator Features<br/>

duration

How long in seconds will this fuel cook items for.
Type: float

 |
| JSON Object| minecraft:icon| | The icon item component determines the icon to represent the item.
Experimental toggles required: Holiday Creator Features<br/>

frame

An index or MoLang expression for which frame of the icon to display. Default resolves to 0.
Type: frame



legacy_id

Legacy texture string id for older item icons. Legacy ID list can be found here under 'Namespaced ID': https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values
Type: string



texture

The key for the object contain the expected textures, from file 'resource_pack/textures/item_texture.json'.
Type: string

 |
| JSON Object| minecraft:knockback_resistance| | Knockback Resistance Item. Component put on items that provide knockback resistance.
Experimental toggles required: Holiday Creator Features<br/>

protection

Amount of knockback resistance provided with the total maximum protection being 1.0
Type: float

 |
| JSON Object| minecraft:on_use| | The on_use item component allows you to receive an event when the item is used.
Experimental toggles required: Holiday Creator Features<br/>

on_use

Event trigger for when the item is used.
Type: on_use

 |
| JSON Object| minecraft:on_use_on| | The on_use_on item component allows you to receive an event when the item is used on a block in the world.
Experimental toggles required: Holiday Creator Features<br/>

on_use_on

Event trigger for when the item is used.
Type: on_use_on

 |
| JSON Object| minecraft:projectile| | Projectile item component. projectile items shoot out, like an arrow.
Experimental toggles required: Holiday Creator Features<br/>

minimum_critical_power

How long you must charge a projectile for it to critically hit.
Type: float



projectile_entity

The entity to be fired as a projectile.
Type: projectile_entity

 |
| JSON Object| minecraft:render_offsets| | Render offsets component: optional values can be given to offset the way the item is rendered.
Experimental toggles required: Holiday Creator Features<br/>

main_hand

Main hand transform data.
Type: main_hand



off_hand

Offhand hand transform data.
Type: off_hand

 |
| JSON Object| minecraft:repairable| | Repairable item component: how much damage can this item repair, what items can repair it.
Experimental toggles required: Holiday Creator Features<br/>

on_repaired

Event that is called when this item has been repaired.
Type: on_repaired



repair_items

Repair item entries.
Type: array of repair_items

 |
| JSON Object| minecraft:shooter| | Shooter Item Component.
Experimental toggles required: Holiday Creator Features<br/>

ammunition

Ammunition.
Type: array of ammunition



charge_on_draw

Charge on draw? Default is set to false.
Type: boolean



launch_power_scale

Launch power scale. Default is set to 1.0.
Type: float



max_draw_duration

Draw Duration. Default is set to 0.
Type: max_draw_duration



max_launch_power

Launch power. Default is set to 1.0.
Type: float



scale_power_by_draw_duration

Scale power by draw duration? Default is set to false.
Type: boolean

 |
| JSON Object| minecraft:throwable| | Throwable item component. Throwable items, such as a snowball.
Experimental toggles required: Holiday Creator Features<br/>

do_swing_animation

Whether the item should use the swing animation when thrown. Default is set to false.
Type: boolean



launch_power_scale

The scale at which the power of the throw increases. Default is set to 1.0.
Type: float



max_draw_duration

The maximum duration to draw a throwable item. Default is set to 0.0.
Type: float



max_launch_power

The maximum power to launch the throwable item. Default is set to 1.0.
Type: float



min_draw_duration

The minimum duration to draw a throwable item. Default is set to 0.0.
Type: float



scale_power_by_draw_duration

Whether or not the power of the throw increases with duration charged. Default is set to false.
Type: boolean

 |
| JSON Object| minecraft:weapon| | Weapon Item Component. Added to every weapon item such as axe, sword, trident, bow, crossbow.
Experimental toggles required: Holiday Creator Features<br/>

on_hit_block

Trigger for letting you know when this item is used to hit a block
Type: on_hit_block



on_hurt_entity

Trigger for letting you know when this item is used to hurt another mob
Type: on_hurt_entity



on_not_hurt_entity

Trigger for letting you know when this item hit another actor, but didn't do damage
Type: on_not_hurt_entity

 |
| JSON Object| minecraft:wearable| | Wearable item component.
Experimental toggles required: Holiday Creator Features<br/>

slot

equipment_slot: slot.weapon.mainhand, slot.weapon.offhand, slot.armor.head, slot.armor.chest, slot.armor.legs, slot.armor.feet, slot.hotbar, slot.inventory, slot.enderchest, slot.saddle, slot.armor, slot.chest
Accepted values: "slot.armor.legs", "none", "slot.weapon.mainhand", "slot.weapon.offhand", "slot.armor.head", "slot.armor.chest", "slot.armor.feet", "slot.hotbar", "slot.inventory", "slot.enderchest", "slot.saddle", "slot.armor", "slot.chest"

 |




## Item Definition Properties

The properties are part of the Item Definition. This helps the system determine how to parse and initialize this item.



**format_version**

Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.

**Code Example**

**Example**
```
{
  "format_version": "1.16.1",
  "minecraft:item": {
    "description": {
      "identifier": "minecraft:blaze_rod"
    },
    "components": {
      "minecraft:fuel": {
        "duration": 120.0
      },
      "minecraft:max_stack_size": 64,
      "minecraft:icon": {
        "texture": "blaze_rod"
      },
      "minecraft:hand_equipped": true,
      "minecraft:display_name": {
        "value": "Blaze Rod"
      }
    }
  }
}
```



## Item Description Properties

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| category| | The category for this item. Categories are used to control high level properties of how the item is integrated into the bedrock engine, such as whether it can be used in slash commands. |
| String| identifier| | The identifier for this item. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla item. |
| Boolean| is_experimental| false| If this item is experimental, it will only be registered if the world is marked as experimental. |


