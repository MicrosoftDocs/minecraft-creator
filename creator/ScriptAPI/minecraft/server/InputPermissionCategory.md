---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .InputPermissionCategory Enumeration
description: Contents of the .InputPermissionCategory enumeration.
---
# InputPermissionCategory Enumeration

Input permission categories. Used by [*@minecraft/server.PlayerInputPermissionCategoryChangeAfterEvent*](../../minecraft/server/PlayerInputPermissionCategoryChangeAfterEvent.md) to specify which category was changed and [*@minecraft/server.PlayerInputPermissions*](../../minecraft/server/PlayerInputPermissions.md) to get or set permissions.

## Constants
### **Camera**
`Camera = 1`

Player input relating to camera movement.
### **Movement**
`Movement = 2`

Player input relating to all player movement. Disabling this is equivalent to disabling jump, sneak, lateral movement, mount, and dismount.
### **LateralMovement**
`LateralMovement = 4`

Player input for moving laterally in the world. This would be WASD on a keyboard or the movement joystick on gamepad or touch.
### **Sneak**
`Sneak = 5`

Player input relating to sneak. This also affects flying down.
### **Jump**
`Jump = 6`

Player input relating to jumping. This also affects flying up.
### **Mount**
`Mount = 7`

Player input relating to mounting vehicles.
### **Dismount**
`Dismount = 8`

Player input relating to dismounting. When disabled, the player can still dismount vehicles by other means, for example on horses players can still jump off and in boats players can go into another boat.
### **MoveForward**
`MoveForward = 9`

Player input relating to moving the player forward.
### **MoveBackward**
`MoveBackward = 10`

Player input relating to moving the player backward.
### **MoveLeft**
`MoveLeft = 11`

Player input relating to moving the player left.
### **MoveRight**
`MoveRight = 12`

Player input relating to moving the player right.
