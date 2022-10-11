---
ms.author: mikeam
title: Designing Gameplay for Various Devices
author: neonerz
ms.prod: gaming
description: "An overview covering how to design gameplay content for the many devices used to play Minecraft: Bedrock Edition"
---
# Designing Gameplay for Various Devices

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - A variety of concepts to be aware of when designing maps for different devices for Minecraft: Bedrock Edition.

This article discusses some key topics and considerations in designing content for Minecraft: Bedrock Edition that will be experienced on the broad range of devices that the engine supports.

When making maps, it's important to keep in mind that your content will be played on many different devices, varying wildly in control scheme, screen size, and processing power. When making maps for Minecraft: Java Edition, map makers can reasonably assume the majority of their audience is using a device fairly capable of handling whatever intensive tech they throw at it. Bedrock Edition map makers must be more discerning.

Only a relatively small percentage of Bedrock Edition users play on a Windows 10 PC. The rest use the variety of cell phones and consoles that the engine supports. This means that, although your content development likely takes place almost entirely on a PC, keyboard-and-mouse users are statistically the *last* group you should be designing around.

This article outlines some common problems content may run into in the multi-platform ecosystem, but is by no means an exhaustive list. Learn these concepts, but your biggest takeaway should be that you are developing content for an ever-expanding platform which will be interacted with in a multitude of ways. Integrate the design concepts of playability and flexibility into the core of your development process.

## Performance

Bedrock Edition is available on most cell phones, including those with less RAM than you would find in a PC. Obviously, these devices will have a harder time running more intensive content, such as minigames with lots of commands or adventure maps with lots of custom models. One important skill as a creator is balancing the complexity of the content required to meet your creative vision and producing a high-quality product while keeping in mind that as a product becomes more complex, it becomes less playable to certain players.

## Render Distance

Users on low-performance devices may be restricted to a shorter maximum render distance than what you develop with. For example, low-end devices may only be able to render a six or eight-chunk radius. Keep in mind when you're designing and building worlds that players may have limited vision. Whenever possible, design vital information, such as scoreboards, signs, and other displays, to be viewable from the shortest possible render distance. Rather than telling your players to walk towards a beacon in the far distance, give them "breadcrumbs" to follow, such as a pathway or a series of beacons so the path can be followed from short render distances. This may require some planning and iteration when designing your worlds so you don't accidentally design an entire map around assumptions of large render distances.

This extends to building style as well. You may consider how your map *looks* to players on short render distances. If you turn your render distance to eight, does your skyscraper still look decent? If not, you may consider how you can incorporate smaller details into your building style to provide a stronger experience for players who can't see an entire map at once.

## Sound

People use their cell phones in all kinds of places — doctors' offices, public transit, long car rides. It's common when playing a mobile game to mute your phone or keep its volume turned down. Keep this in mind when designing sounds in your map.

In general, players should never be stuck because they didn't hear something. In most cases, such as voice acting or important sound effects, you can simply mirror what's heard in the audio with a chat message. This is simply good game design. If a player forgets what an NPC said, they should be able to just check the chat or open a quest book to double-check. Finally, captioning your audio ensures your content is accessible to players with hearing loss or disabilities.

If a feature simply *must* rely on a sound that cannot be captioned with a chat message, consider ways players may be able to interact with the feature differently, or skip it altogether.

## Interactions and Controls

One striking difference in the way different control schemes interact with the world is when interacting with entities. On touchscreen devices, mob interactions like breeding, feeding, and trading all use a secondary button that appears on the screen when the player looks at the entity. This raises a few special concerns.

First, a map creator should use the `interact_text` or equivalent parameter on any [interaction components](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_interact.md) in custom [entity behaviors](EntityBehaviorIntroduction.md) to set the text that appears on the interaction button when touchscreen players look at the entity. This is vital for allowing your players to know that an entity can be interacted with, and allows you to clearly communicate what will happen when they do interact with it.

Second, consider building your custom entities with touch-friendly behaviors in mind. For example, if a mob can be interacted with using a certain item, consider giving the mob a high-priority goal to move towards the player when they are holding that item type. This keeps them from unexpectedly walking away while the player is reaching for the interact button and accidentally punching the mob.

Touchscreen devices present another unique situation to map makers in that they have fewer buttons than other devices. For example, players using a keyboard press **Q** (by default) to drop a held item on the ground, while players on touchscreens must press and hold on the item in their hotbar for over two seconds to drop an item. Players on touchscreen devices also have no "pick block" button like console or mouse-and-keyboard players.

## Fine Motor Controls

Map elements that require exact motor control or timing, such as difficult parkour courses, can be more challenging than you might expect when played on a touch screen or console. As a general rule, if something is "difficult" with a mouse and keyboard, you might as well consider it impossible for many users on a touchscreen.

This is of course a generalization; many lifelong touchscreen or console users are extremely adept and accurate with their respective devices. A touchscreen isn't an inherently worse device, just one that may have a steeper learning curve to reach the level of accuracy a mouse-and-keyboard player might take for granted. This is another case where testing on multiple devices is critical. If you're a lifelong mouse-and-keyboard user, you'll be surprised what you take for granted when you experience the game the way most of your audience does.

Consider the difficulty some players may have with jumps that require pixel-perfect timing, turning corners mid-air, or other difficult maneuvers. Complex combat situations, such as those in which a player must fight a large number of enemies at once, may also prove difficult for some control schemes to manage. Of course, how you decide to design your game is up to you. No one's going to stop you from making "Max-Distance Parkour on Glass Panes Over the Void: The Map," but be cautious about decisions that may alienate huge portions of your player base.

## What's Next?

These are only some of the concrete considerations you should keep in mind when designing content for Bedrock Edition. Incorporating cross-platform play into your map design decisions is a key skill to developing content that's fun and engaging for all players. Pick up some devices to test on and get to work!

With all this in mind, there are many next steps towards making maps, ranging from using command blocks for increased interaction with the game world to controlling a variety of actions from entities with behavior packs. There are also plenty of tools to help ease the creation of custom maps.

> [!div class="nextstepaction"]
> [Introduction to Command Blocks](CommandsIntroduction.md)

> [!div class="nextstepaction"]
> [Introduction to Resource Packs](ResourcePack.md)

> [!div class="nextstepaction"]
> [Introduction to Behavior Packs](BehaviorPack.md)

> [!div class="nextstepaction"]
> [Commonly Used Tools](CommonlyUsedTools.md)
