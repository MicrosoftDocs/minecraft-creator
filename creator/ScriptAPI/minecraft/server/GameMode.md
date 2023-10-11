---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .GameMode Enumeration
description: Contents of the .GameMode enumeration.
---
# GameMode Enumeration

Represents a game mode for the current world experience.

## Constants
### **adventure**
`adventure = "adventure"`

World is in a more locked-down experience, where blocks may not be manipulated.
### **creative**
`creative = "creative"`

World is in a full creative mode. In creative mode, the player has all the resources available in the item selection tabs and the survival selection tab. They can also destroy blocks instantly including those which would normally be indestructible. Command and structure blocks can also be used in creative mode. Items also do not lose durability or disappear.
### **spectator**
`spectator = "spectator"`

World is in spectator mode. In spectator mode, spectators are always flying and cannot become grounded. Spectators can pass through solid blocks and entities without any collisions, and cannot use items or interact with blocks or mobs. Spectators cannot be seen by mobs or other players, except for other spectators; spectators appear as a transparent floating head.
### **survival**
`survival = "survival"`

World is in a survival mode, where players can take damage and entities may not be peaceful. Survival mode is where the player must collect resources, build structures while surviving in their generated world. Activities can, over time, chip away at player health and hunger bar.
