---
author: chipotle
ms.author: mikeam
title: Deep Link Handlers
description: "Controlling the Minecraft: Bedrock Edition client through URIs."
ms.service: minecraft-bedrock-edition
ms.date: 01/27/2026
---

# Deep Link Handlers

You may sometimes see URIs that look like web addresses, but don't start with `https:`, like `ms-settings:` or `shortcuts:`. Instead of giving an address to a web page, these "deep link" URIs launch features or subsections within applications. Minecraft: Bedrock Edition has its own set of URI-based deep link handlers that respond to HTTP GET requests made with the `minecraft://` URI prefix.

> [!CAUTION]
>
> These handlers are primarily designed for internal functional use rather than as creator-facing features. They link Minecraft features internally, or allow launching from official Mojang websites and apps. They may be removed or altered at any time and can change from release to release, so you shouldn't depend on them for critical parts of your creations. Also note that some argument values, like IDs, are not publicly documented, so while the arguments may be listed here for completeness, they're not going to be useful for third-party tools.

The launch handlers for Minecraft: Bedrock Edition all follow this format:

```text
minecraft://command[?argument=value[&argument2=value2...][#]]
```

This form, essentially a standard web request with a query string, gives a `command` optionally followed by a `?` separator and one or more argument/value pairs. If more than one argument is given, the argument/value pairs are separated by `&` characters. A `#` character after an argument/value pair stops processing.

Arguments, however, are a little more complicated:

- Some commands have their own required arguments, such as `joinExperience` requiring an `experienceId` argument.
- Some arguments are parsed after nearly any command, such as `showHowToPlayScreen`; these arguments are effectively commands themselves.
- Since you may _only_ want to use one of the arguments that acts as a command, you may use a nonexistent command before it, such as `minecraft://domain?importpack=<packname>` (where `domain` is the nonexistent command), or leave the command out entirely. In examples in this document, we'll leave the command out entirely: `minecraft://?importpack=<packname>`.

> [!WARNING]
>
> Launch handlers report no visible error messages. Some handlers log errors to the console, but many will simply fail silently when given unknown arguments or invalid ID values!

## Commands

### openStore

Opens the Store Home screen. This command is often used in conjunction with a store-related argument:

- [`showStoreOffer`](#showstoreoffer)
- [`getLayoutPage`](#getlayoutpage)
- [`openMarketplaceInventory`](#openmarketplaceinventory)
- [`openCsbPDPScreen`](#opencsbpdpscreen)

When you use it this way, the screen specified by the argument opens as the front screen, with the main Store Home open behind it. That way, when the screen in the argument is closed, the Store Home will be showing. With no arguments, only the Store Home screen opens.

```text
minecraft://openStore?openMarketplaceInventory=Subscriptions
```

### openServersTab

This opens the Play screen with the Servers tab selected.

```text
minecraft://openServersTab
```

### showProfileScreen

This opens the Persona Dressing Room screen.

```text
minecraft://showProfileScreen
```

### showDressingRoomOffer

This opens the Persona Dressing Room screen with an offer selected. It has one required argument, `offerID`, whose value is a product ID.

```text
minecraft://showDressingRoomOffer?offerId=id
```

### joinExperience

This command launches the client directly into a specified Experience, Gathering, or Event. It has one required argument, and two optional ones:

- `experienceId=UUID`: an Experience specified by ID.
- `worldId=UUID` (optional): A world to join in.
- `friendID=ID` (optional): A friend to join with, specified by ID.

```text
minecraft://joinExperience?experienceId=8c0495bf-aaf0-483e-b488-1b37e8c74745
```

> [!NOTE]
>
> The similar `joinGathering` command is deprecated.

### connectToRealm

Connects to a Realm. This has one required argument, `realmId`.

```text
minecraft://connectToRealm?realmId=123456ABCD
```

### acceptRealmInvite

Accepts an invitation to a Realm using an invite code. This has one required argument, `inviteID`.

```text
minecraft://acceptRealmInvite?inviteID=123456ABCD
```

### openRealmsStories

Opens Realms Stories on the default tab for the specified Realm ID.

```text
minecraft://openRealmsStories?realmId=123456ABCD
```

### connect

Connects to a Minecraft world. This can take one or more of several arguments:

- `serverUrl`:  the URL (or IP address) of the world to connect to.
- `serverPort`: the port to connect to on the server. If this is not specified, the default of `19132` will be used.
- `deeplinkToken`: a JSON token specifying the world and related parameters. (The format of these tokens is not publicly documented.)

## Arguments

### showHowToPlayScreen

Triggers a specific topic in the "How to Play" screen. This requires a value that specifies the starting tab, such as

```text
minecraft://?showHowToPlayScreen=crafting_table
```

The possible values include:

- `adventure_mode`
- `anvil`
- `armor_stand`
- `armor`
- `banners`
- `beacons`
- `beds`
- `blocks`
- `book_and_quill`
- `brewing_stand`
- `cauldron`
- `chat`
- `chests`
- `command_blocks`
- `commands`
- `conduits`
- `controls`
- `crafting_table`
- `crafting`
- `creative_mode`
- `difficulty`
- `dispensers`
- `droppers`
- `dyes`
- `elytra`
- `enchanting_table`
- `end_cities`
- `ender_chest`
- `eye_of_ender`
- `farming`
- `fireworks`
- `fishing`
- `furnace`
- `game_settings`
- `hoppers`
- `host_and_player_options`
- `hud`
- `inventory`
- `jukebox`
- `loom`
- `mounts`
- `multiplayer`
- `navigation`
- `nether_portals`
- `nightfall`
- `pets`
- `raids`
- `ranching`
- `realms`
- `redstone`
- `resource_and_behavior_packs`
- `scaffolding`
- `servers`
- `shulker_boxes`
- `structure_blocks`
- `the_end`
- `the_store`
- `tools`
- `trading`
- `transportation`
- `vr`
- `weapons`

### addExternalServer

Adds an external server to the client. The value for this argument uses a special form:

```text
minecraft://?addExternalServer=name|address:port
```

- `name` is the name of the serve to manually add.
- `address` is the URL or IP address for the server.
- `port` is the server's port number.

For example, to add a server named `coyote` at `https://example.com` port `19132`:

```text
minecraft://?addExternalServer=coyote|https://example.com:19132
```

> [!IMPORTANT]
>
> All three parts of the value&mdash;name, address, and port&mdash;are required.

### import

Specify an **.mcworld** or **.mcproject** file to import.

```text
minecraft://?import=c:\myWorld.mcworld
```

If the optional `fromtempfile` boolean argument is given along with `import`, the specified import file will be copied to a temporary directory first before importing.

```text
minecraft://?import=c:\myWorld.mcworld&fromtempfile=1
```

> [!TIP]
>
> The `fromtempfile=1` argument can be supplied with any of the `import*` arguments below.

### importaddon

Specifies an **.mcaddon** add-on file, pack, or template to import.

```text
minecraft://?import=c:\myAddOn.mcaddon
```

### load

Specifies a locally-stored world to load, using its its local level ID.

```text
minecraft://?load=levelid
```

### showStoreOffer

Shows an offer specified by product ID. The possible offer IDs include `Internal_Realms10pSubscription` and `Internal_Realms2pSubscription`. This is often used in conjunction with the [openStore](#openstore) command.

```text
minecraft://?showStoreOffer=Internal_Realms2pSubscription`
```

### openMarketplaceInventory

Opens the Marketplace Inventory Page at a specific tab. Possible ID values are `Owned`, `RealmsPlusCurrent`, `RealmsPlusRemoved`, and `Subscriptions`. This is often used in conjunction with the [openStore](#openstore) command.

```text
minecraft://?openMarketplaceInventory=Subscriptions
```

> [!CAUTION]
>
> The `openMarketplaceInventory` option is deprecated and will be replaced by a new option in the future.

### getLayoutPage

Opens a specific Marketplace Store Screen, specified by the page ID. This is often used in conjunction with the [openStore](#openstore) command.

```text
minecraft://?getLayoutPage=storeRoot
```

> [!NOTE]
>
> There is no external documentation of page IDs for this command.

### openCsbPDPScreen

Opens the Marketplace Pass on a specific screen. Possible page ID values are `Home`, `Content`, `Faq`, and `Subscribe`. This is often used in conjunction with the [openStore](#openstore) command.

```text
minecraft://?openCsbPDPScreen=Home
```

## Education Edition

The Minecraft: Education Edition also responds to a different protocol handler, `minecraftedu://`, with its own set of commands and arguments.

As with the retail edition, some Education Edition commands are in the form of arguments. Unlike the retail edition, these arguments are intended to be used alone rather than in combination with the `open` or `servers` command (their actions are exclusive, not additive).

### open

This simply opens Minecraft: Education Edition to its main menu, if it is not already open.

```text
minecraftedu://open
```

### servers

Opens Education Edition to its servers screen, optionally adding or joining a server depending on the value of the `do` argument:

- `do=<action>`: takes one of the following actions:
  - `do=view`: opens Education Edition's server screen with no action. If `id` is not specified, the `servers` command will act as if `view` was supplied to `do`.
  - `do=add`: attempts to add the specified server to the user's server list.
  - `do=join`: attempts to join the specified server _without_ adding it to the user's server list.
- `id=serverid`: specifies the ID of the server to operate on. Requires `do=add` or `do=join` to have any effect.

```text
minecraftedu://servers?do=add&id=123456ABCD
```

### ?openlibrary=libraryItemId

(Note the argument form.) Navigates to a world in the content library. This takes multiple optional arguments:

- `resourcelink=linkUri`
- `resourceName=buttonName`

```text
minecraftedu://?openlibrary=libraryItemId&resourcelink=uri
```

### ?openworld=libraryItemId

(Note the argument form.) Navigates to a world in the content library, and immediately launches it if the user has access. This takes multiple optional arguments:

- `resourcelink=linkUri`
- `resourceName=buttonName`

```text
minecraftedu://?openworld=libraryItemId&resourcelink=uri
```

### ?joinworld=joincode

(Note the argument form.) Joins a world hosted by another client in a peer-to-peer session.

The `joincode` is a base64-encoded comma-separated list of three integers representing the join code icons in the Join menu:

:::image type="content" source="./media/join-code-base64.png" alt-text="A 6-by-3 grid of pixel icons that specify join codes, numbered 0 to 17":::

If the join code is "donut", "carrot", "fish", that corresponds to `7,12,5`. Base64-encoding that string gives us this join code:

```text
minecraftedu://?joinworld=NywxMiw1
```
