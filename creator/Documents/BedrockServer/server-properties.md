---
author: chipotle
ms.author: mikeam
title: Bedrock Dedicated Server Properties
description: "A reference list for the server.properties configuration file used by Bedrock Dedicated Server."
ms.service: minecraft-bedrock-edition
ms.date: 06/02/2025
---

# Bedrock Dedicated Server Properties

The **server.properties** file controls most of the options for your Bedrock Dedicated Server. This is an INI-style file: a list of keys and values separated by an equals sign, one per line. Comments start with `#`.

* `server-name`

    Default: `Dedicated Server`

    Used as the server name.

    Allowed values: Any string without a semicolon symbol.

* `gamemode`

    Default: `survival`

    Sets the game mode for new players.

    Allowed values: `survival`, `creative`, or `adventure`.

* `force-gamemode`

    Default: `false`

    When `force-gamemode` is set to `true`, the server will always send clients the game mode set by the `gamemode` property above, even if that value is different from the value saved by the server during world creation. When it is `false`, the server will always send the client the value saved during creation, even if the value of the `gamemode` property is changed after creation.

* `difficulty`

    Default: `easy`

    Sets the difficulty of the world.

    Allowed values: `peaceful`, `easy`, `normal`, or `hard`.

* `allow-cheats`

    Default: `false`

    If `true`, cheat commands can be used.

    Allowed values: `true` or `false`.

* `max-players`

    Default: `10`

    The maximum number of players that can play on the server. _Note that higher values have a performance impact._

    Allowed values: any positive integer.

* `online-mode`

    Default: `true`

    If `true`, all connected players must be authenticated to Xbox Live. Clients connecting to remote (non-LAN) servers will always require Xbox Live authentication regardless of this setting.

    If the server accepts connections from the Internet, it's highly recommended to enable online-mode!

    Allowed values: `true` or `false`.

* `allow-list`

    Default: `false`

    If `true`, all connected players must be listed in the separate [**allowlist.json**](./getting-started.md#allowlistjson) file.

    Allowed values: `true` or `false`.

* `server-port`

    Default: `19132`

    Which IPv4 port the server should listen to.

    Allowed values: integers in the range `1`&ndash;`65535`. Ports under `1024` are usually reserved for well-known applications.

* `server-portv6`

    Default: `19133`

    Which IPv6 port the server should listen to.

    Allowed values: integers in the range `1`&mdash;`65535`. Ports under `1024` are usually reserved for well-known applications.

* `enable-lan-visibility`

    Default: `true`

    Listen and respond to clients that are looking for servers on the LAN. This will cause the server to bind to the default ports (`19132` and `19133`) even when `server-port` and `server-portv6` have non-default values. Consider turning this off if LAN discovery is not desirable, or when running multiple servers on the same host may lead to port conflicts.

    Allowed values: `true` or `false`.

* `view-distance`

    Default: `32`

    The maximum allowed view distance in number of chunks.

    Allowed values: positive integers equal to `5` or greater. _Higher values have a performance impact._

* `tick-distance`

    Default: `4`

    The world will be ticked this many chunks away from any player. _Higher values have a performance impact._

    Allowed values: integers in the range `4`&ndash;`12`.

* `player-idle-timeout`

    Default: `30`

    After a player has idled for this many minutes they will be kicked. If set to `0`, players can idle indefinitely.

    Allowed values: any non-negative integer.

* `max-threads`

    Default: `8`

    Maximum number of threads the server will try to use. If set to `0` or removed, it will use as many as possible.

    Allowed values: any positive integer.

* `level-name`

    Default: `Bedrock level`

    The level of the name to be used/generated. Each level has its own folder in **worlds/**.

    Allowed values: any string that is valid for a filename on the host OS.

* `level-seed`

    Default: none

    The seed to be used for randomizing the world. If left empty, a seed will be generated at random.

    Allowed values: any string

* `default-player-permission-level`

    Default: `member`

    Permission level for new players joining for the first time.

    Allowed values: `visitor`, `member`, or `operator`.

* `texturepack-required`

    Default: `false`

    If the world uses specific texture packs, setting this to `true` forces the clients to use them.

    Allowed values: `true` or `false`.

* `content-log-file-enabled`

    Default: `false`

    Enables logging content errors to a file.

    Allowed values: `true` or `false`.

* `compression-threshold`

    Default: `1`

    Determines the smallest size of raw network payload to compress. This can be used to experiment with CPU-bandwidth tradeoffs.

    Allowed values: integers in the range `0`&mdash;`65535`.

* `compression-algorithm`

    Default: `zlib`

    Determines the compression algorithm to use for networking.

    Allowed values: `zlib` or `snappy`.

* `server-authoritative-movement-strict`

    Default: `false`

    If set to `true`, the server will track the player position more strictly and be less permissive in accepting client information. _This will impact the player's movement if there is high latency._

    Allowed values: `true` or `false`.

* `server-authoritative-dismount-strict`

    Default: `false`

    If set to `true`, the server will be more strict with regard to player dismount positions, and clients will receive a correction on their dismount positions in higher latency situations.

    Allowed values: `true` or `false`.

* `server-authoritative-entity-interactions-strict`

    Default: `false`

    If set to `true`, clients will be more strict towards entity interactions. _This will impact players interacting with each other in higher latency situations._

    Allowed values: `true` or `false`.

* `player-position-acceptance-threshold`

    Default: `0.5`

    This is the tolerance of discrepancies between the client and server player position. This helps prevent sending corrections too frequently for non-cheating players in cases where the server and client have different perceptions about when a motion started, for example, damage knockback or being pushed by pistons. The higher the number, the more tolerant the server will be before asking for a correction. Values beyond `1.0` increase chances of allowing cheating.

    Allowed values: any positive float.

* `player-movement-action-direction-threshold`

    Default: `0.85`

    The amount that the player's attack direction and look direction can differ. This can be a value between `0.0` and `1.0`. A value of `1.0` means the direction of the player's view and the direction the player is attacking must match exactly, while a value of `0.0` means the two directions can differ by up to 90 degrees.

    Allowed values: any positive float between `0.0` and `1.0`.

* `server-authoritative-block-breaking`

    Default: `false`

    When set to `true`, the server will compute block mining operations in sync with the client, so it can verify the client should be able to break blocks when it thinks it can.

    Allowed values: `true` or `false`.

* `server-authoritative-block-breaking-range-scalar`

    Default: `1.5`

    This increases the range of block breaking. The value is squared and multiplied by the default range.

    Allowed values: any float above `1.0`.

* `chat-restriction`

    Default: `None`

    This represents the level of restriction applied to the chat for each player that joins the server.

    Allowed values:

  * `None`: regular free chat.
  * `Dropped`: chat messages are dropped and never sent to any client. Players receive a message to let them know the feature is disabled.
  * `Disabled`: unless the player is an operator, the chat UI does not even appear. No information is sent to the player.

* `disable-player-interaction`

    Default: `false`

    If `true`, the server will inform clients that they should ignore other players when interacting with the world. This is not server authoritative.

    Allowed values: `true` or `false`.

* `client-side-chunk-generation-enabled`

    Default: `true`

    If `true`, the server will inform clients that they have the ability to generate visual level chunks outside of player interaction distances.

    Allowed values: `true` or `false`.

* `block-network-ids-are-hashes`

    Default: `true`

    If `true`, the server will send hashed block network IDs instead of consecutive IDs starting at `0`. These IDs are stable and won't change regardless of other block changes.

* `disable-custom-skins`

    Default: `false`

    If `true`, disable players customized skins that were customized outside of the Minecraft store assets or in game assets.  This is used to disable possibly offensive custom skins players make.

    Allowed values: `true` or `false`.

* `server-build-radius-ratio`

    Default: `Disabled`

    If "Disabled" the server will dynamically calculate how much of the player's view it will generate, assigning the rest to the client to build. Otherwise, the ratio tells the server how much to generate (`0.0` being none and `1.0` being all), disregarding client hardware capability. This is only used when `client-side-chunk-generation-enabled` is `true`.

    Allowed values: `Disabled` or any float value in the range `0.0`&ndash;`1.0`.

* `allow-outbound-script-debugging`

    Default: `false`

    Enables the script debugger `connect` command and the `connect` mode for `script-debugger-auto-attach`.

    Allowed values: `true` or `false`.

* `allow-inbound-script-debugging`

    Default: `false`

    Enables the script debugger `listen` command and the `listen` mode for `script-debugger-auto-attach`.

    Allowed values: `true` or `false`.

* `force-inbound-debug-port`

    Default: `19144`

    Locks the inbound (listen) debugger port to a specific value. If not set, the default of `19144` will be used. Required when using `listen` mode for `script-debugger-auto-attach`.

    Allowed values: integers in the range of `1`&ndash;`65535`.

* `script-debugger-auto-attach`

    Default: `disabled`

    Automatically attach the script debugger on level load. This requires that either the inbound port or the connect address is set, and that either inbound or outbound connections are enabled.

    Allowed values:

  * `disabled`: Do not automatically attach.
  * `connect`: Attempt to connect to the debugger in listening mode on the host and port specified by `script-debugger-auto-attach-connect-address`.
  * `listen`: Listen for inbound connect attempts from the debugger using `connect` mode on the port specified by `force-inbound-debug-port`.

* `script-debugger-auto-attach-connect-address`

    Default: `localhost:19144`

    When auto attach mode is set to 'connect', use this address in the form `hostname:port`. Required when using `connect` mode for `script-debugger-auto-attach`.

    Allowed values: string specifying hostname and port in `hostname:port` format.

* `script-debugger-auto-attach-timeout`

    Default: `0`

    Amount of time to wait at world load for debugger to attach in seconds.

    Allowed values: non-negative integers.

* `script-debugger-passcode`

    Default: none

    If this is set, Visual Studio Code will prompt the user for the specified passcode in order to connect to the debugger.

    Allowed values: string.

* `script-watchdog-enable`

    Default: `true`

    Enables the watchdog.

    Allowed values: `true` or `false`.

* `script-watchdog-enable-exception-handling`

    Default: `true`

    Enables watchdog exception handling via the events.beforeWatchdogTerminate event.

    Allowed values: `true` or `false`.

* `script-watchdog-enable-shutdown`

    Default: `true`

    Enables server shutdown in the case of an unhandled watchdog exception.

    Allowed values: `true` or `false`.

* `script-watchdog-hang-exception`

    Default: `true`

    Throws a critical exception when a hang occurs, interrupting script execution.

    Allowed values: `true` or `false`.

* `script-watchdog-hang-threshold`

    Default: `10000`

    Sets the watchdog threshold for single tick hangs.

    Allowed values: `true` or `false`.

* `script-watchdog-spike-threshold`

    Default: `100`

    Sets the watchdog threshold for single tick spikes. The warning is disabled if the property is left unset.

    Allowed values: positive integers.

* `script-watchdog-slow-threshold`

    Default: `10`

    Sets the watchdog threshold for slow scripts over multiple ticks. The warning is disabled if the property is left unset.

    Allowed values: positive integers.

* `script-watchdog-memory-warning`

    Default: `100`

    Produces a content log warning when the combined memory usage exceeds the given threshold in megabytes. Setting this value to `0` disables the warning.

    Allowed values: integers in the range of `0`&mdash;`2000`.

* `script-watchdog-memory-limit`

    Default: `250`

    Saves and shuts down the world when the combined script memory usage exceeds the given threshold in megabytes. Setting this value to `0` disables the limit.

    Allowed values: integers in the range of `0`&mdash;`2000`.

* `diagnostics-capture-auto-start`

    Default: `false`

    Starts a diagnostics capture session at level load.

    Allowed values: `true` or `false`.

* `diagnostics-capture-max-files`

    Default: `5`

    Maximum number of diagnostics capture files to keep before cycling.

    Allowed values: non-negative integers.

* `diagnostics-capture-max-file-size`

    Default: `2097152` (2 megabytes)

    Maximum size in bytes of current diagnostics capture file before system will cycle to a new file.

    Allowed values: positive integers.

* `disable-client-vibrant-visuals`

    Default: `true`

    If `true`, the server will tell clients to use the next best available graphics setting instead of Vibrant Visuals.

    Allowed settings: `true` or `false`.
