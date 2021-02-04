<a name="module_GameTest"></a>

## GameTest

* [GameTest](#module_GameTest)
    * [~RegistrationBuilder](#module_GameTest..RegistrationBuilder)
        * [.batch(batchName)](#module_GameTest..RegistrationBuilder+batch) â‡’ <code>object\_handle\_todo</code>
        * [.required(isRequired)](#module_GameTest..RegistrationBuilder+required) â‡’ <code>object\_handle\_todo</code>
        * [.requiredSuccessfulAttempts(attemptCount)](#module_GameTest..RegistrationBuilder+requiredSuccessfulAttempts) â‡’ <code>object\_handle\_todo</code>
        * [.maxAttempts(attemptCount)](#module_GameTest..RegistrationBuilder+maxAttempts) â‡’ <code>object\_handle\_todo</code>
        * [.maxTicks(tickCount)](#module_GameTest..RegistrationBuilder+maxTicks) â‡’ <code>object\_handle\_todo</code>
        * [.setupTicks(tickCount)](#module_GameTest..RegistrationBuilder+setupTicks) â‡’ <code>object\_handle\_todo</code>
        * [.structureName(structureName)](#module_GameTest..RegistrationBuilder+structureName) â‡’ <code>object\_handle\_todo</code>
        * [.tag(tagName)](#module_GameTest..RegistrationBuilder+tag) â‡’ <code>object\_handle\_todo</code>
    * [~Helper](#module_GameTest..Helper)
        * [.succeed()](#module_GameTest..Helper+succeed)
        * [.succeedIf(callback)](#module_GameTest..Helper+succeedIf)
        * [.succeedWhen(callback)](#module_GameTest..Helper+succeedWhen)
        * [.failIf(callback)](#module_GameTest..Helper+failIf)
        * [.runAtTickTime(tickTime, callback)](#module_GameTest..Helper+runAtTickTime)
        * [.runAfterDelay(ticksToDelay, callback)](#module_GameTest..Helper+runAfterDelay)
        * [.succeedWhenActorPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+succeedWhenActorPresent)
        * [.succeedWhenActorNotPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+succeedWhenActorNotPresent)
        * [.succeedWhenBlockPresent(block, x, y, z)](#module_GameTest..Helper+succeedWhenBlockPresent)
        * [.setBlock(block, x, y, z)](#module_GameTest..Helper+setBlock)
        * [.pressButton(x, y, z)](#module_GameTest..Helper+pressButton)
        * [.killAllActors()](#module_GameTest..Helper+killAllActors)
        * [.spawn(actorTypeId, x, y, z)](#module_GameTest..Helper+spawn)
        * [.assertActorPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+assertActorPresent)
        * [.assertActorNotPresentInArea(actorTypeId)](#module_GameTest..Helper+assertActorNotPresentInArea)
        * [.assertActorNotPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+assertActorNotPresent)
        * [.assertBlockPresent(block, x, y, z)](#module_GameTest..Helper+assertBlockPresent)
        * [.assertBlockNotPresent(block, x, y, z)](#module_GameTest..Helper+assertBlockNotPresent)
        * [.assertItemActorPresent()](#module_GameTest..Helper+assertItemActorPresent)
        * [.assertItemActorNotPresent()](#module_GameTest..Helper+assertItemActorNotPresent)

<a name="module_GameTest..RegistrationBuilder"></a>

### GameTest~RegistrationBuilder
A utility class to set GameTest parameters for a test

**Kind**: inner class of [<code>GameTest</code>](#module_GameTest)  

* [~RegistrationBuilder](#module_GameTest..RegistrationBuilder)
    * [.batch(batchName)](#module_GameTest..RegistrationBuilder+batch) â‡’ <code>object\_handle\_todo</code>
    * [.required(isRequired)](#module_GameTest..RegistrationBuilder+required) â‡’ <code>object\_handle\_todo</code>
    * [.requiredSuccessfulAttempts(attemptCount)](#module_GameTest..RegistrationBuilder+requiredSuccessfulAttempts) â‡’ <code>object\_handle\_todo</code>
    * [.maxAttempts(attemptCount)](#module_GameTest..RegistrationBuilder+maxAttempts) â‡’ <code>object\_handle\_todo</code>
    * [.maxTicks(tickCount)](#module_GameTest..RegistrationBuilder+maxTicks) â‡’ <code>object\_handle\_todo</code>
    * [.setupTicks(tickCount)](#module_GameTest..RegistrationBuilder+setupTicks) â‡’ <code>object\_handle\_todo</code>
    * [.structureName(structureName)](#module_GameTest..RegistrationBuilder+structureName) â‡’ <code>object\_handle\_todo</code>
    * [.tag(tagName)](#module_GameTest..RegistrationBuilder+tag) â‡’ <code>object\_handle\_todo</code>

<a name="module_GameTest..RegistrationBuilder+batch"></a>

#### registrationBuilder.batch(batchName) â‡’ <code>object\_handle\_todo</code>
Sets the batch for the test to run in

**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type | Description |
| --- | --- | --- |
| batchName | <code>&#x27;night&#x27;</code> \| <code>&#x27;day&#x27;</code> | Name of the batch for the test |

<a name="module_GameTest..RegistrationBuilder+required"></a>

#### registrationBuilder.required(isRequired) â‡’ <code>object\_handle\_todo</code>
**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type |
| --- | --- |
| isRequired | <code>boolean</code> | 

<a name="module_GameTest..RegistrationBuilder+requiredSuccessfulAttempts"></a>

#### registrationBuilder.requiredSuccessfulAttempts(attemptCount) â‡’ <code>object\_handle\_todo</code>
Sets the number of successful test runs to be considered successful

**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type |
| --- | --- |
| attemptCount | <code>number</code> | 

<a name="module_GameTest..RegistrationBuilder+maxAttempts"></a>

#### registrationBuilder.maxAttempts(attemptCount) â‡’ <code>object\_handle\_todo</code>
Sets the maximum number of times a test will try to rerun if it fails

**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type |
| --- | --- |
| attemptCount | <code>number</code> | 

<a name="module_GameTest..RegistrationBuilder+maxTicks"></a>

#### registrationBuilder.maxTicks(tickCount) â‡’ <code>object\_handle\_todo</code>
Sets the maximum number of ticks a test will run for before timing out and failing

**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type |
| --- | --- |
| tickCount | <code>number</code> | 

<a name="module_GameTest..RegistrationBuilder+setupTicks"></a>

#### registrationBuilder.setupTicks(tickCount) â‡’ <code>object\_handle\_todo</code>
Sets the number of ticks for a test to wait before executing when the structure is spawned

**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type |
| --- | --- |
| tickCount | <code>number</code> | 

<a name="module_GameTest..RegistrationBuilder+structureName"></a>

#### registrationBuilder.structureName(structureName) â‡’ <code>object\_handle\_todo</code>
Sets the name of the structure for a test to use.  "Foo:bar" will load `/structures/Foo/bar.mcstructure` from the behavior pack stack

**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type |
| --- | --- |
| structureName | <code>string</code> | 

<a name="module_GameTest..RegistrationBuilder+tag"></a>

#### registrationBuilder.tag(tagName) â‡’ <code>object\_handle\_todo</code>
Adds a tag to a test.  You can run all tests with a given tag with `/gametest runall <tag>`

**Kind**: instance method of [<code>RegistrationBuilder</code>](#module_GameTest..RegistrationBuilder)  

| Param | Type |
| --- | --- |
| tagName | <code>string</code> | 

<a name="module_GameTest..Helper"></a>

### GameTest~Helper
**Kind**: inner class of [<code>GameTest</code>](#module_GameTest)  

* [~Helper](#module_GameTest..Helper)
    * [.succeed()](#module_GameTest..Helper+succeed)
    * [.succeedIf(callback)](#module_GameTest..Helper+succeedIf)
    * [.succeedWhen(callback)](#module_GameTest..Helper+succeedWhen)
    * [.failIf(callback)](#module_GameTest..Helper+failIf)
    * [.runAtTickTime(tickTime, callback)](#module_GameTest..Helper+runAtTickTime)
    * [.runAfterDelay(ticksToDelay, callback)](#module_GameTest..Helper+runAfterDelay)
    * [.succeedWhenActorPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+succeedWhenActorPresent)
    * [.succeedWhenActorNotPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+succeedWhenActorNotPresent)
    * [.succeedWhenBlockPresent(block, x, y, z)](#module_GameTest..Helper+succeedWhenBlockPresent)
    * [.setBlock(block, x, y, z)](#module_GameTest..Helper+setBlock)
    * [.pressButton(x, y, z)](#module_GameTest..Helper+pressButton)
    * [.killAllActors()](#module_GameTest..Helper+killAllActors)
    * [.spawn(actorTypeId, x, y, z)](#module_GameTest..Helper+spawn)
    * [.assertActorPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+assertActorPresent)
    * [.assertActorNotPresentInArea(actorTypeId)](#module_GameTest..Helper+assertActorNotPresentInArea)
    * [.assertActorNotPresent(actorTypeId, x, y, z)](#module_GameTest..Helper+assertActorNotPresent)
    * [.assertBlockPresent(block, x, y, z)](#module_GameTest..Helper+assertBlockPresent)
    * [.assertBlockNotPresent(block, x, y, z)](#module_GameTest..Helper+assertBlockNotPresent)
    * [.assertItemActorPresent()](#module_GameTest..Helper+assertItemActorPresent)
    * [.assertItemActorNotPresent()](#module_GameTest..Helper+assertItemActorNotPresent)

<a name="module_GameTest..Helper+succeed"></a>

#### helper.succeed()
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  
<a name="module_GameTest..Helper+succeedIf"></a>

#### helper.succeedIf(callback)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| callback | <code>closure</code> | 

<a name="module_GameTest..Helper+succeedWhen"></a>

#### helper.succeedWhen(callback)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| callback | <code>closure</code> | 

<a name="module_GameTest..Helper+failIf"></a>

#### helper.failIf(callback)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| callback | <code>closure</code> | 

<a name="module_GameTest..Helper+runAtTickTime"></a>

#### helper.runAtTickTime(tickTime, callback)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| tickTime | <code>number</code> | 
| callback | <code>closure</code> | 

<a name="module_GameTest..Helper+runAfterDelay"></a>

#### helper.runAfterDelay(ticksToDelay, callback)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| ticksToDelay | <code>number</code> | 
| callback | <code>closure</code> | 

<a name="module_GameTest..Helper+succeedWhenActorPresent"></a>

#### helper.succeedWhenActorPresent(actorTypeId, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| actorTypeId | <code>string</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+succeedWhenActorNotPresent"></a>

#### helper.succeedWhenActorNotPresent(actorTypeId, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| actorTypeId | <code>string</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+succeedWhenBlockPresent"></a>

#### helper.succeedWhenBlockPresent(block, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| block | <code>UNKNOWN</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+setBlock"></a>

#### helper.setBlock(block, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| block | <code>UNKNOWN</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+pressButton"></a>

#### helper.pressButton(x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+killAllActors"></a>

#### helper.killAllActors()
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  
<a name="module_GameTest..Helper+spawn"></a>

#### helper.spawn(actorTypeId, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| actorTypeId | <code>string</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+assertActorPresent"></a>

#### helper.assertActorPresent(actorTypeId, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| actorTypeId | <code>string</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+assertActorNotPresentInArea"></a>

#### helper.assertActorNotPresentInArea(actorTypeId)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| actorTypeId | <code>string</code> | 

<a name="module_GameTest..Helper+assertActorNotPresent"></a>

#### helper.assertActorNotPresent(actorTypeId, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| actorTypeId | <code>string</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+assertBlockPresent"></a>

#### helper.assertBlockPresent(block, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| block | <code>UNKNOWN</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+assertBlockNotPresent"></a>

#### helper.assertBlockNotPresent(block, x, y, z)
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  

| Param | Type |
| --- | --- |
| block | <code>UNKNOWN</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="module_GameTest..Helper+assertItemActorPresent"></a>

#### helper.assertItemActorPresent()
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  
<a name="module_GameTest..Helper+assertItemActorNotPresent"></a>

#### helper.assertItemActorNotPresent()
**Kind**: instance method of [<code>Helper</code>](#module_GameTest..Helper)  