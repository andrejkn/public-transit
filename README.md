# Public Transit
Public Transit is an web app that finds the near by transits and provides a
list of the upcoming busses or street cars and their arrival times in minutes.

It first locates the user's coordinates, and then it sends a request to a
public transit endpoint with those coordinates.
The server responds with the data of the close-by transits.
Each transit object contains:
- agency (ID - i.e. TTC, title, etc.)
- route (ID and title)
- stop (ID, distance and title)
- values (of when the next vehicle will approach the stop)

## Getting Started

### Dev
```bash
$ npm run dev
```

To run a development mode server with live reload:

Open `http://localhost:8080` in your browser.

### Production

```bash
npm run build
npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
```bash
$ npm run cover
```
