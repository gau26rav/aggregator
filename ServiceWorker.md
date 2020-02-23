# Service worker

    A javascript worker that can run without user intervention in separate background thread.

## Worker Life cycle

![Web worker life cycle](https://developers.google.com//web/fundamentals/primers/service-workers/images/sw-lifecycle.png)

- Install --> To precache the material for future usage.
- Activate -> To clear the unused cache.
- Idle --> If no service is used from service worker it will get terminated to save the memory and will come back to life when needed
- Intercept FETCH --> This will intercept the fetch request to make the call whether to serve it from cache or network etc.

## Points to note

- The directory where you place service worker is placed helps you to intercept the fetch request from that root level

- The fetch request does not fly with credentials by defaults we need to explicitly define it.

`fetch(url, { credentials: 'include' })`
