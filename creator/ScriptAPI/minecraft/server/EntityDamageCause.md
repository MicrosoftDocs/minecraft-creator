---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .EntityDamageCause Enumeration
description: Contents of the .EntityDamageCause enumeration.
---
# EntityDamageCause Enumeration

Describes the source of damage from an Entity.

## Constants
### **anvil**
`anvil = "anvil"`

Damage caused by a falling anvil.
### **blockExplosion**
`blockExplosion = "blockExplosion"`

Damage caused from a non-Entity explosion. For example, an exploding bed.
### **campfire**
`campfire = "campfire"`

Damage caused by Campfires.
### **charging**
`charging = "charging"`

Unused.
### **contact**
`contact = "contact"`

Damage caused by physically touching an Entity or Block. For example, touching a Sweet Berry bush or Pufferfish.
### **drowning**
`drowning = "drowning"`

Damage caused by an Entity being out of air and inside a liquid block.
### **entityAttack**
`entityAttack = "entityAttack"`

Damage caused by an Entity attack.
### **entityExplosion**
`entityExplosion = "entityExplosion"`

Damage caused by an Entity explosion. For example, a Creeper or Wither.
### **fall**
`fall = "fall"`

Damage caused by falling onto the ground.
### **fallingBlock**
`fallingBlock = "fallingBlock"`

Damage caused by falling blocks. Note: Anvils and Stalactites have their own damage causes. 
### **fire**
`fire = "fire"`

Damage caused by catching on fire.
### **fireTick**
`fireTick = "fireTick"`

Damage caused by burning over time.
### **fireworks**
`fireworks = "fireworks"`

Damage caused by fireworks.
### **flyIntoWall**
`flyIntoWall = "flyIntoWall"`

Damage caused by flying into a wall at high speed while gliding with Elytra.
### **freezing**
`freezing = "freezing"`

Damage caused by staying inside a Powder Snow block.
### **lava**
`lava = "lava"`

Damage caused by touching a Lava block.
### **lightning**
`lightning = "lightning"`

Damage caused by being struck by lightning.
### **magic**
`magic = "magic"`

Damage caused by magical attacks. For example, Evoker Fang or Conduit Block.
### **magma**
`magma = "magma"`

Damage caused by touching a Magma block.
### **none**
`none = "none"`

Damage caused by no source. For example, from a command or script.
### **override**
`override = "override"`

Damage caused by an indirect source. For example, setting a mob's health to 0 in a behavior pack.
### **piston**
`piston = "piston"`

Damage caused by a Piston.
### **projectile**
`projectile = "projectile"`

Damage caused by a projectile.
### **ramAttack**
`ramAttack = "ramAttack"`

Damage caused by Goat ramming.
### **selfDestruct**
`selfDestruct = "selfDestruct"`

Damage caused by the /kill command.
### **sonicBoom**
`sonicBoom = "sonicBoom"`

Damage caused by the Warden's Sonic Boom attack.
### **soulCampfire**
`soulCampfire = "soulCampfire"`

Damage caused by a Soul Campfire.
### **stalactite**
`stalactite = "stalactite"`

Damage caused by a falling Stalactite block.
### **stalagmite**
`stalagmite = "stalagmite"`

Damage caused by touching a Stalagmite block.
### **starve**
`starve = "starve"`

Damage caused over time by having an empty hunger bar.
### **suffocation**
`suffocation = "suffocation"`

Damage caused by an Entity being out of air and inside a non-liquid block.
### **suicide**
`suicide = "suicide"`

Damage caused by an Entity killing itself. For example, from the /kill command.
### **temperature**
`temperature = "temperature"`

Damage caused by an Entity being in an inhabitable climate. For example, a Snow Golem in a biome with a temperature greater than 1.
### **thorns**
`thorns = "thorns"`

Damage caused by the Thorns armor enchantment and by the Guardian thorns effect.
### **void**
`void = "void"`

Damage caused over time by falling into the void.
### **wither**
`wither = "wither"`

Damage caused by the Wither effect. For example, from touching a Wither Rose.
