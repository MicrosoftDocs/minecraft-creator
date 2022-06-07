<big>Version: 1.19.0.5</big>

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
Accepted values: "leather", "none", "chain", "iron", "diamond", "gold", "elytra", "turtle", "netherite"

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
| JSON Object| minecraft:chargeable| | Allows an item to be used over a duration.
Experimental toggles required: Holiday Creator Features<br/>

movement_modifier

Modifier value to scale the players movement speed when item is in use.
Minimum value: 0.00
Maximum value: 5.00
Type: float



on_complete

Event trigger for when the item has completed its use duration.
Type: on_complete

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
Type: string

 |
| JSON Object| minecraft:durability| | A property that determines when an item will break from use. The durability of an item is potentially depleted upon use based on the damage chance.
Experimental toggles required: Holiday Creator Features<br/>

damage_chance

Damage chance is the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value.
Type: damage_chance



max_durability

Max durability is the amount of damage that this item can take before breaking.
Minimum value: 0
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

If true you can always eat this item (even when not hungry). Default is set to false.
Type: boolean



nutrition

The value that is added to the actor's nutrition when the item is used. Default is set to 0.
Type: integer



on_consume

Event trigger for when the item is consumed.
Type: on_consume



saturation_modifier

Saturation Modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff. Default is set to 0.6.
Minimum value: 0.00
Type: float



using_converts_to

When used, converts to the item specified by the string in this field. Default does not convert item.
Type: using_converts_to

 |
| JSON Object| minecraft:fuel| | Allows this item to be used as fuel in a furnace to 'cook' other items.
Experimental toggles required: Holiday Creator Features<br/>

duration

How long in seconds will this fuel cook items for.
Minimum value: 0.05
Type: float

 |
| JSON Object| minecraft:icon| | The icon item component determines the icon to represent the item.
Experimental toggles required: Holiday Creator Features<br/>

legacy_id

Legacy texture string id for older item icons. Legacy ID list can be found here under 'Namespaced ID': https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values
Type: string



texture

The key for the object contain the expected textures, from file 'resource_pack/textures/item_texture.json'.
Type: string

 |
| JSON Object| minecraft:item_storage| | The Storage Item Component is used for storing Items within an Item's User Data
Experimental toggles required: Holiday Creator Features or Vanilla Experiments Internal (NON_LOC)<br/>

capacity

The max capacity of the item, default is 64
Type: integer

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
| JSON Object| minecraft:record| | Record Item Component.  Used by record items to play music. 
Experimental toggles required: Holiday Creator Features<br/>

comparator_signal

Signal strength for comparator blocks to use, from 1 - 13.
Type: integer



duration

Duration of sound event in seconds, float value.
Type: float



sound_event

Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5.
Accepted values: "explode", "jump.prevent", "item.use.on", "hit", "step", "break", "swim", "irongolem.repair", "step.baby", "fly", "jump", "place", "heavy.step", "gallop", "fall", "hurt", "fizz", "charge.sculk", "hurt.baby", "hurt.in.water", "death", "flap", "death.baby", "death.min.volume", "ambient.pollinate", "death.in.water", "death.to.zombie", "ambient", "ambient.baby", "ambient.in.water", "ignite", "ambient.tame", "purr", "drink.honey", "breathe", "mad", "boost", "bow", "squish.big", "squish.small", "fall.big", "fall.small", "horn_call2", "splash", "horn_call6", "drink", "nearby_closer", "born", "eat", "takeoff", "shake", "plop", "land", "horn_call4", "saddle", "armor", "mob.armor_stand.place", "add.chest", "throw", "attack", "attack.nodamage", "attack.strong", "warn", "shear", "milk", "thunder", "fire", "fuse", "stare", "spawn", "shoot", "break.block", "launch", "blast", "large.blast", "twinkle", "remedy", "unfect", "tongue", "convert_to_drowned", "levelup", "bow.hit", "bullet.hit", "extinguish.fire", "item.fizz", "chest.open", "chest.closed", "shulkerbox.open", "shulkerbox.closed", "enderchest.open", "enderchest.closed", "power.on", "power.off", "attach", "detach", "deny", "tripod", "pop", "drop.slot", "note", "thorns", "piston.in", "piston.out", "portal", "water", "lava.pop", "lava", "block.sculk_shrieker.place", "beacon.activate", "beacon.ambient", "heartbeat", "beacon.deactivate", "beacon.power", "block.bell.hit", "conduit.activate", "conduit.ambient", "block.composter.fill_success", "conduit.attack", "conduit.deactivate", "block.sweet_berry_bush.hurt", "conduit.short", "bubble.pop", "bubble.up", "agitated", "bubble.upinside", "cake.add_candle", "bubble.down", "bubble.downinside", "burp", "bucket.fill.water", "bucket.empty.water", "bucket.fill.lava", "bucket.empty.lava", "bucket.fill.fish", "block.sculk_shrieker.shriek", "bucket.empty.fish", "armor.equip_chain", "armor.equip_diamond", "armor.equip_elytra", "armor.equip_generic", "armor.equip_gold", "armor.equip_iron", "armor.equip_leather", "armor.equip_netherite", "record.13", "record.cat", "record.blocks", "record.chirp", "record.far", "record.mall", "record.mellohi", "record.stal", "record.strad", "record.ward", "record.11", "record.wait", "imitate.slime", "record.pigstep", "record.otherside", "record.5", "flop", "elderguardian.curse", "teleport", "shulker.open", "shulker.close", "mob.warning", "mob.warning.baby", "haggle", "haggle.yes", "haggle.no", "haggle.idle", "disappeared", "reappeared", "chorusgrow", "chorusdeath", "glass", "potion.brewed", "sleep", "cast.spell", "prepare.attack", "block.beehive.work", "prepare.summon", "prepare.wololo", "celebrate", "fang", "charge", "block.smithing_table.use", "camera.take_picture", "block.beehive.enter", "leashknot.break", "leashknot.place", "growl", "tempt", "whine", "pant", "purreow", "death.mid.volume", "admire", "imitate.blaze", "imitate.cave_spider", "respawn_anchor.charge", "imitate.creeper", "imitate.elder_guardian", "angry", "imitate.ender_dragon", "imitate.enderman", "imitate.evocation_illager", "respawn_anchor.basalt_deltas.mood", "imitate.ghast", "imitate.husk", "smithing_table.use", "imitate.illusion_illager", "imitate.magma_cube", "respawn_anchor.set_spawn", "imitate.polar_bear", "imitate.shulker", "ambient.soulsand_valley.mood", "imitate.silverfish", "imitate.skeleton", "imitate.spider", "imitate.stray", "imitate.vex", "ambient.warped_forest.loop", "imitate.vindication_illager", "imitate.witch", "particle.soul_escape.quiet", "imitate.wither", "imitate.wither_skeleton", "imitate.wolf", "imitate.zombie", "imitate.zombie_pigman", "imitate.zombie_villager", "block.end_portal_frame.fill", "block.end_portal.spawn", "random.anvil_use", "bottle.dragonbreath", "balloonpop", "sparkler.active", "item.trident.hit", "item.trident.hit_ground", "item.trident.return", "item.trident.riptide_1", "item.trident.riptide_2", "item.trident.riptide_3", "item.trident.throw", "item.trident.thunder", "block.fletching_table.use", "elemconstruct.open", "icebomb.hit", "lt.reaction.icebomb", "lt.reaction.bleach", "item.spyglass.stop_using", "lt.reaction.epaste", "lt.reaction.epaste2", "mob.player.hurt_freeze", "lt.reaction.fertilizer", "lt.reaction.fireball", "pre_ram.screamer", "lt.reaction.mgsalt", "lt.reaction.miscfire", "block.click.fail", "lt.reaction.fire", "lt.reaction.miscexplosion", "glow_squid.ink_squirt", "lt.reaction.miscmystical", "lt.reaction.miscmystical2", "jump_to_block", "lt.reaction.product", "sparkler.use", "ambient.candle", "glowstick.use", "block.turtle_egg.break", "block.turtle_egg.crack", "block.turtle_egg.hatch", "block.turtle_egg.attack", "block.frog_spawn.hatch", "block.frog_spawn.break", "swoop", "presneeze", "block.composter.empty", "sneeze", "ui.stonecutter.take_result", "scared", "ambient.aggressive", "block.smoker.smoke", "ambient.worried", "cant_breed", "block.scaffolding.climb", "item.book.put", "block.bamboo_sapling.place", "block.barrel.open", "crossbow.loading.start", "crossbow.loading.middle", "block.cartography_table.use", "crossbow.loading.end", "crossbow.shoot", "ambient.in.raid", "crossbow.quick_charge.start", "crossbow.quick_charge.middle", "convert_mooshroom", "crossbow.quick_charge.end", "raid.horn", "item.shield.block", "portal.travel", "block.grindstone.use", "block.campfire.crackle", "block.sweet_berry_bush.pick", "block.stonecutter.use", "block.composter.fill", "block.composter.ready", "lay_egg", "roar", "stun", "block.barrel.close", "ui.cartography_table.take_result", "ui.loom.take_result", "block.blastfurnace.fire_crackle", "block.loom.use", "screech", "block.furnace.lit", "milk_suspiciously", "block.beehive.exit", "block.beehive.shear", "block.beehive.drip", "ambient.cave", "retreat", "converted_to_zombified", "step_lava", "panic", "particle.soul_escape.loud", "respawn_anchor.deplete", "respawn_anchor.ambient", "ambient.crimson_forest.mood", "ambient.warped_forest.mood", "ambient.nether_wastes.mood", "ambient.crimson_forest.additions", "ambient.warped_forest.additions", "ambient.soulsand_valley.additions", "ambient.nether_wastes.additions", "ambient.basalt_deltas.additions", "ambient.crimson_forest.loop", "ambient.soulsand_valley.loop", "ambient.nether_wastes.loop", "ambient.basalt_deltas.loop", "lodestone_compass.link_compass_to_lodestone", "power.on.sculk_sensor", "power.off.sculk_sensor", "default", "lay_spawn", "bucket.fill.powder_snow", "bucket.empty.powder_snow", "cauldron_drip.water.pointed_dripstone", "cauldron_drip.lava.pointed_dripstone", "tilt_down.big_dripleaf", "tilt_up.big_dripleaf", "drip.water.pointed_dripstone", "pick_berries.cave_vines", "drip.lava.pointed_dripstone", "copper.wax.on", "copper.wax.off", "scrape", "item.spyglass.use", "chime.amethyst_block", "mob.player.hurt_drown", "mob.player.hurt_on_fire", "ambient.screamer", "hurt.screamer", "death.screamer", "milk.screamer", "pre_ram", "ram_impact", "ram_impact.screamer", "squid.ink_squirt", "convert_to_stray", "extinguish.candle", "block.click", "bloom.sculk_catalyst", "nearby_close", "nearby_closest", "listening", "item_given", "item_taken", "item_thrown", "irongolem.crack", "horn_break", "horn_call0", "horn_call1", "horn_call3", "horn_call5", "horn_call7", "imitate.warden", "listening_angry", "sonic_boom", "sonic_charge", "convert_to_frog", "block.sculk.spread", "block.sculk_sensor.place", "undefined"

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

equipment_slot: slot.weapon.mainhand, slot.weapon.offhand, slot.armor.head, slot.armor.chest, slot.armor.legs, slot.armor.feet, slot.hotbar, slot.inventory, slot.enderchest, slot.saddle, slot.armor, slot.chest, slot.equippable
Accepted values: "slot.weapon.mainhand", "none", "slot.weapon.offhand", "slot.armor.head", "slot.armor.chest", "slot.armor.legs", "slot.armor.feet", "slot.hotbar", "slot.inventory", "slot.enderchest", "slot.saddle", "slot.armor", "slot.chest", "slot.equippable"

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


