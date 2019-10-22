# use-leaflet

[![NPM version](https://img.shields.io/npm/v/use-leaflet.svg?style=flat-square)](https://npmjs.org/package/use-leaflet)
[![Build Status](https://img.shields.io/travis/vadzim/use-leaflet/master.svg?style=flat-square)](https://travis-ci.org/vadzim/use-leaflet)
[![Coverage Status](https://img.shields.io/codecov/c/github/vadzim/use-leaflet/master.svg?style=flat-square)](https://codecov.io/gh/vadzim/use-leaflet/branch/master)

Some hooks for using with [react-leaflet](https://www.npmjs.com/package/react-leaflet).

Example of usage: <https://codesandbox.io/embed/use-leaflet-jbftf>

Installation: `npm i use-leaflet`

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [useLeafletZoom](#useleafletzoom)
-   [useLeafletMap](#useleafletmap)
-   [useLeafletCenter](#useleafletcenter)
-   [useLeafletBounds](#useleafletbounds)
-   [useLeafletIsMoving](#useleafletismoving)
-   [useLeafletIsZooming](#useleafletiszooming)
-   [Map](#map)

### useLeafletZoom

React hook for getting current zoom of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).

```javascript
const MyLayer = () => {
  const zoom = useLeafletZoom()
  return zoom > 10 ? (<GeoJSON ... />) : (<GridLayer ... />)
}
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** current zoom.

### useLeafletMap

React hook for getting current leaflet [map](https://leafletjs.com/reference.html#map). Returns the same value as the `map` member of the `leaflet` prop when using [withLeaflet](https://react-leaflet.js.org/docs/en/context.html) HOC from react-lealfet [module](https://www.npmjs.com/package/react-leaflet).

Usage:

```javascript
import React from "react"
import { Map } from "react-leaflet"
import { useLeafletMap } from "use-leaflet"

const MyLeafletComponent = (props) => {
  const map = useLeafletMap()
  return (
    <... onClick={() => map.fitBounds(turf.bbox(props.activeShape))}>
      ...
    </...>
  )
}

const App = () => (
  <Map>
    <MyLeafletComponent />
  </Map>
)
```

Keep in mind, that `useLeafletMap` hook will work only in components which are used within [Map](https://react-leaflet.js.org/docs/en/components.html#map) component, the same as `withLeaflet` HOC from `react-leaflet`.

Returns **([Map](#map) | void)** current leaflet map.

### useLeafletCenter

React hook for getting current center of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).

```javascript
const MyComponent = () => {
  const [lat, lng] = useLeafletCenter()
  return ...
}
```

Returns **\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]** [lat, lng] of the map center.

### useLeafletBounds

React hook for getting current bounds of visible area of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).

```javascript
const MyComponent = () => {
  const [[south, west], [north, east]] = useLeafletBounds()
  return ...
}
```

Returns **\[\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)], \[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]]** \[[south, west], [north, east]] for visible area.

### useLeafletIsMoving

React hook to see if a user is moving the [react-leaflet map](https://react-leaflet.js.org/).

```javascript
const MyComponent = () => {
  const isMoving = useLeafletIsMoving()
  return ...
}
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if a user is moving the map.

### useLeafletIsZooming

React hook to see if a user is zooming the [react-leaflet map](https://react-leaflet.js.org/).

```javascript
const MyComponent = () => {
  const isZooming = useLeafletIsZooming()
  return ...
}
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if a user is zooming the map.

### Map

-   **See: leaflet [Map](https://leafletjs.com/reference.html#map) type.**
