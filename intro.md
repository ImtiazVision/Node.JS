### Apache

**Apache** : offers single threaded API requests for every instances. The single thread in Apache waits for the file system to complete reading files before doing anything else, which is known as blocking. In short, apache behaves like synchronous i.e. it blocks until the file system is done. Events are generated and stored in an event queue, where they are then processed in the order in which they were generated.

**Node.js** : is asynchronous in nature, since each API request is processed as a new event, and single threaded in nature, as all users share the same thread. Asynchronous means that it avoids clogging the file system by enabling several requests to be handled concurrently through multitasking.

**Fun Fact** : The first version of NPM enables the distribution of open source node libraries.