### Apache

**Apache** : offers single threaded API requests for every instances. The single thread in Apache waits for the file system to complete reading files before doing anything else, which is known as blocking. In short, apache behaves like synchronous i.e. it blocks until the file system is done.

**Node.js** : is asynchronous. It means that it does not block the file system to process multiple requests at the same time.

