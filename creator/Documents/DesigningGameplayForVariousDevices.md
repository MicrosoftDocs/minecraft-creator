---
author: JimSeaman42
ms.author: mikeam
title: Designing Gameplay for Various Devices
description: "An overview covering how to design gameplay content for the many devices used to play Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---
# Designing Gameplay for Various Devices

When creating content, it's important to consider that it will be played on many different devices varying wildly in control scheme, screen size, and processing power. Only a small percentage of Bedrock Edition users play on a PC, while the rest use the variety of cell phones and consoles that the engine supports. This means that, although content development likely takes place almost entirely on a PC, keyboard-and-mouse users are statistically the *last* group you should be designing around.

This article outlines some common problems creators may run into in the multi-platform ecosystem, but is by no means an exhaustive list. Ultimately, your biggest takeaway should be that you are developing content for an ever-expanding platform which will be interacted with in a multitude of ways. Integrate the design concepts of playability and flexibility into the core of your development process.

## Performance

Bedrock Edition is available on most cell phones, and obviously these devices have a harder time running more intensive content, such as mini games with multiple commands or adventure maps with custom models. One important skill as a creator is balancing the complexity and quality of the content required to meet your vision while keeping in mind that as content becomes more complex, it becomes less playable for certain audiences.

## Render Distance

Users on low-performance devices may be restricted to a shorter maximum render distance than what you develop with. For example, low-end devices may only be able to render a six or eight-chunk radius. Keep in mind when you're designing and building worlds that players may have limited vision. Whenever possible, design vital information to be visible from the shortest possible render distance. Rather than telling your players to walk towards a beacon in the far distance, give them "breadcrumbs" to follow, such as a pathway or a series of beacons so the path can be followed from short render distances. This extends to building style as well. Consider how your map *looks* to players on short render distances.

## Sound

People use their cell phones almost everywhere, and it's common when playing a mobile game to mute your phone; keep this in mind when designing sounds.

In general, players should never be stuck because they couldn't or didn't hear something. In most cases, such as voice acting or important sound effects, you can simply mirror what's heard with a chat message. This is a basic concept in good, inclusive game design. If a player forgets what an NPC said, they should be able to check the chat or open a quest book to double-check. Captioning your audio not only helps users who choose to mute their game, it ensures your content is accessible to players with hearing loss or disabilities which should always be a consideration.

## Interactions and Controls

A big difference in the way different control schemes interact with the world is how users interact with entities. On touchscreen devices interactions like breeding, feeding, and trading use a secondary button that appears on the screen when the player looks at the entity. This raises a few special considerations for creators.

First, be sure to should use the `interact_text` or equivalent parameter on any [interaction components](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_interact.md) in custom [entity behaviors](EntityBehaviorIntroduction.md) to set the text that appears on the interaction button when touchscreen players look at the entity. This is vital for letting players know that an entity can be interacted with, and allows you to clearly communicate what happens when they do interact with it.

Second, consider building your custom entities with touch-friendly behaviors in mind. For example, if a mob can be interacted with using a certain item, consider giving the mob a high-priority goal to move towards players when they are holding that item type. This keeps the entity from unexpectedly walking away while the player is reaching for the interact button and accidentally punching the entity.

Touchscreen devices present another unique situation to creators as they have fewer buttons than other devices. For example, players using a keyboard press **Q** (by default) to drop a held item on the ground, while players on touchscreens must press and hold on the item in their hotbar for over two seconds to drop an item. Players on touchscreen devices also have no `pick block` button like console or mouse-and-keyboard players.

## Fine Motor Controls

Map elements that require exact timing, such as difficult parkour courses, can be more challenging than expected when played on a touch screen or console. As a general rule, if something is "difficult" with a mouse and keyboard, it's nearly impossible for users on a touchscreen.

This is obviously a generalization, and many touchscreen or console users are incredible with their respective devices. A touchscreen isn't an inherently worse device, just one with a potentially steeper learning curve to reach the level of accuracy a PC player might take for granted. This is where testing on multiple devices is critical. Most creators will be surprised what you take for granted when you experience the game in a different way than usual.

Consider the difficulty some players may have with jumps that require pixel-perfect timing, turning corners mid-air, or other difficult maneuvers. Complex combat situations, like a player fighting a large number of enemies at once, may also prove difficult depending on control scheme.

In the end, of course, the content you design is completely up to you. No one's going to stop you from making "Max-Distance Parkour on Glass Panes Over the Void: The Map," but we want to make sure you're cautious about decisions that may alienate portions of your player base.

## What's Next?

These are a small sampling of the considerations to keep in mind when designing content for Bedrock Edition. Incorporating cross-platform design decisions is a key skill to developing content that's fun and engaging for all players. Pick up some devices to test on and get to work!

There are many next steps towards making content, from using command blocks for increased interaction with the game world to controlling a variety of entity actions with behavior packs. There are also plenty of tools to help you create your content. Coincidentally, here are some links to articles detailing all of those ideas!

> [!div class="nextstepaction"]
> [Introduction to Command Blocks](CommandsIntroduction.md)

> [!div class="nextstepaction"]
> [Introduction to Resource Packs](ResourcePack.md)

> [!div class="nextstepaction"]
> [Introduction to Behavior Packs](BehaviorPack.md)

> [!div class="nextstepaction"]
> [Commonly Used Tools](CommonlyUsedTools.md)
