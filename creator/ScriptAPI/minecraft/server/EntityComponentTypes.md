---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .EntityComponentTypes Enumeration
description: Contents of the .EntityComponentTypes enumeration.
---
# EntityComponentTypes Enumeration

The types of entity components that are accessible via function Entity.getComponent.

## Constants
### **AddRider**
`AddRider = "minecraft:addrider"`

When added, this component makes the entity spawn with a rider of the specified entityType.
### **Ageable**
`Ageable = "minecraft:ageable"`

Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.
### **Breathable**
`Breathable = "minecraft:breathable"`

Defines what blocks this entity can breathe in and gives them the ability to suffocate.
### **CanClimb**
`CanClimb = "minecraft:can_climb"`

When added, this component signifies that the entity can climb up ladders.
### **CanFly**
`CanFly = "minecraft:can_fly"`

When added, this component signifies that the entity can fly, and the pathfinder won't be restricted to paths where a solid block is required underneath it.
### **CanPowerJump**
`CanPowerJump = "minecraft:can_power_jump"`

When added, this component signifies that the entity can power jump like the horse does within Minecraft.
### **Color**
`Color = "minecraft:color"`

Defines the entity's color. Only works on certain entities that have predefined color values (e.g., sheep, llama, shulker).
### **Color2**
`Color2 = "minecraft:color2"`

Defines the entity's secondary color. Only works on certain entities that have predefined secondary color values (e.g., tropical fish).
### **CursorInventory**
`CursorInventory = "minecraft:cursor_inventory"`
### **Equippable**
`Equippable = "minecraft:equippable"`

Provides access to a mob's equipment slots. This component exists for all mob entities.
### **FireImmune**
`FireImmune = "minecraft:fire_immune"`

When added, this component signifies that this entity doesn't take damage from fire.
### **FloatsInLiquid**
`FloatsInLiquid = "minecraft:floats_in_liquid"`

When added, this component signifies that this entity can float in liquid blocks.
### **FlyingSpeed**
`FlyingSpeed = "minecraft:flying_speed"`

Represents the flying speed of an entity.
### **FrictionModifier**
`FrictionModifier = "minecraft:friction_modifier"`

Defines how much friction affects this entity.
### **GroundOffset**
`GroundOffset = "minecraft:ground_offset"`

Sets the offset from the ground that the entity is actually at.
### **Healable**
`Healable = "minecraft:healable"`

Defines the interactions with this entity for healing it.
### **Health**
`Health = "minecraft:health"`

Defines the health properties of an entity.
### **Inventory**
`Inventory = "minecraft:inventory"`

Defines this entity's inventory properties.
### **IsBaby**
`IsBaby = "minecraft:is_baby"`

When added, this component signifies that this entity is a baby.
### **IsCharged**
`IsCharged = "minecraft:is_charged"`

When added, this component signifies that this entity is charged.
### **IsChested**
`IsChested = "minecraft:is_chested"`

When added, this component signifies that this entity is currently carrying a chest.
### **IsDyeable**
`IsDyeable = "minecraft:is_dyeable"`

When added, this component signifies that dyes can be used on this entity to change its color.
### **IsHiddenWhenInvisible**
`IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible"`

When added, this component signifies that this entity can hide from hostile mobs while invisible.
### **IsIgnited**
`IsIgnited = "minecraft:is_ignited"`

When added, this component signifies that this entity this currently on fire.
### **IsIllagerCaptain**
`IsIllagerCaptain = "minecraft:is_illager_captain"`

When added, this component signifies that this entity is an illager captain.
### **IsSaddled**
`IsSaddled = "minecraft:is_saddled"`

When added, this component signifies that this entity is currently saddled.
### **IsShaking**
`IsShaking = "minecraft:is_shaking"`

When added, this component signifies that this entity is currently shaking.
### **IsSheared**
`IsSheared = "minecraft:is_sheared"`

When added, this component signifies that this entity is currently sheared.
### **IsStackable**
`IsStackable = "minecraft:is_stackable"`

When added, this component signifies that this entity can be stacked.
### **IsStunned**
`IsStunned = "minecraft:is_stunned"`

When added, this component signifies that this entity is currently stunned.
### **IsTamed**
`IsTamed = "minecraft:is_tamed"`

When added, this component signifies that this entity is currently tamed.
### **Item**
`Item = "minecraft:item"`

If added onto the entity, this indicates that the entity represents a free-floating item in the world. Lets you retrieve the actual item stack contents via the itemStack property.
### **LavaMovement**
`LavaMovement = "minecraft:lava_movement"`

Defines the base movement speed in lava of this entity.
### **Leashable**
`Leashable = "minecraft:leashable"`

Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
### **MarkVariant**
`MarkVariant = "minecraft:mark_variant"`

When added, this component signifies that this entity contains an additional variant value. Can be used to further differentiate variants.
### **Movement**
`Movement = "minecraft:movement"`

Defines the general movement speed of this entity.
### **MovementAmphibious**
`MovementAmphibious = "minecraft:movement.amphibious"`

When added, this movement control allows the mob to swim in water and walk on land.
### **MovementBasic**
`MovementBasic = "minecraft:movement.basic"`

When added, this component allows the movement of an entity.
### **MovementFly**
`MovementFly = "minecraft:movement.fly"`

When added, this move control causes the mob to fly.
### **MovementGeneric**
`MovementGeneric = "minecraft:movement.generic"`

When added, this move control allows a mob to fly, swim, climb, etc.
### **MovementGlide**
`MovementGlide = "minecraft:movement.glide"`

When added, this movement control allows the mob to glide.
### **MovementHover**
`MovementHover = "minecraft:movement.hover"`

When added, this move control causes the mob to hover.
### **MovementJump**
`MovementJump = "minecraft:movement.jump"`

Move control that causes the mob to jump as it moves with a specified delay between jumps.
### **MovementSkip**
`MovementSkip = "minecraft:movement.skip"`

When added, this move control causes the mob to hop as it moves.
### **MovementSway**
`MovementSway = "minecraft:movement.sway"`

When added, this move control causes the mob to sway side to side giving the impression it is swimming.
### **NavigationClimb**
`NavigationClimb = "minecraft:navigation.climb"`

Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.)
### **NavigationFloat**
`NavigationFloat = "minecraft:navigation.float"`

Allows this entity to generate paths by flying around the air like the regular Ghast.
### **NavigationFly**
`NavigationFly = "minecraft:navigation.fly"`

Allows this entity to generate paths in the air (for example, like Minecraft parrots do.)
### **NavigationGeneric**
`NavigationGeneric = "minecraft:navigation.generic"`

Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.
### **NavigationHover**
`NavigationHover = "minecraft:navigation.hover"`

Allows this entity to generate paths in the air (for example, like the Minecraft Bees do.) Keeps them from falling out of the skies and doing predictive movement.
### **NavigationWalk**
`NavigationWalk = "minecraft:navigation.walk"`

Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.
### **Npc**
`Npc = "minecraft:npc"`

Adds NPC capabilities to an entity such as custom skin, name, and dialogue interactions.
### **OnFire**
`OnFire = "minecraft:onfire"`

When present on an entity, this entity is on fire.
### **Projectile**
`Projectile = "minecraft:projectile"`

The projectile component controls the properties of a projectile entity and allows it to be shot in a given direction. This component is present when the entity has the minecraft:projectile component.
### **PushThrough**
`PushThrough = "minecraft:push_through"`

Sets the distance through which the entity can push through.
### **Rideable**
`Rideable = "minecraft:rideable"`

When added, this component adds the capability that an entity can be ridden by another entity.
### **Riding**
`Riding = "minecraft:riding"`

This component is added to any entity when it is riding another entity.
### **Scale**
`Scale = "minecraft:scale"`

Sets the entity's visual size.
### **SkinId**
`SkinId = "minecraft:skin_id"`

Skin Id value. Can be used to differentiate skins, such as base skins for villagers.
### **Strength**
`Strength = "minecraft:strength"`

Defines the entity's strength to carry items.
### **Tameable**
`Tameable = "minecraft:tameable"`

Defines the rules for an entity to be tamed by the player.
### **TameMount**
`TameMount = "minecraft:tamemount"`

Contains options for taming a rideable entity based on the entity that mounts it.
### **TypeFamily**
`TypeFamily = "minecraft:type_family"`

Used to determine the type families the entity belongs to.
### **UnderwaterMovement**
`UnderwaterMovement = "minecraft:underwater_movement"`

Defines the general movement speed underwater of this entity.
### **Variant**
`Variant = "minecraft:variant"`

Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager).
### **WantsJockey**
`WantsJockey = "minecraft:wants_jockey"`

When added, this component signifies that this entity wants to become a jockey.
