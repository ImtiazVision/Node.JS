### Apache

**Apache** : offers single threaded API requests for every instances. The single thread in Apache waits for the file system to complete reading files before doing anything else, which is known as blocking. In short, apache behaves like synchronous i.e. it blocks until the file system is done.

**Node.js** : operates asynchronously, as each API call is handled as a new event.
It implies that it does not clog the file system by allowing several requests to be processed at the same time. 
