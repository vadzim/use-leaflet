# use-leaflet

[![NPM version](https://img.shields.io/npm/v/use-leaflet.svg?style=flat-square)](https://npmjs.org/package/use-leaflet)
[![Build Status](https://img.shields.io/travis/vadzim/use-leaflet/master.svg?style=flat-square)](https://travis-ci.org/vadzim/use-leaflet)
[![Coverage Status](https://img.shields.io/codecov/c/github/vadzim/use-leaflet/master.svg?style=flat-square)](https://codecov.io/gh/vadzim/use-leaflet/branch/master)

Some hooks for using with [react-leaflet](https://www.npmjs.com/package/react-leaflet).

This also solves <https://github.com/PaulLeCam/react-leaflet/issues/539>.

For some reasons the author of [react-leaflet](https://www.npmjs.com/package/react-leaflet) is not gonna support hooks in `react-leaflet@2`.

The discussion is here <https://github.com/PaulLeCam/react-leaflet/pull/571>.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [useLeafletBounds](#useleafletbounds)
-   [useLeafletCenter](#useleafletcenter)
-   [Map](#map)
-   [useLeafletMap](#useleafletmap)
-   [useLeafletZoom](#useleafletzoom)

### useLeafletBounds

React hook for getting current bounds of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).

Returns **\[\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)], \[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]]** bounds.

### 

Example:

```javascript
const MyComponent = () => {
  const [[south, west], [north, east]] = useLeafletBounds()
  return ...
}
```

### useLeafletCenter

React hook for getting current center of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).

Returns **\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]** center.

### 

Example:

```javascript
const MyComponent = () => {
  const [lat, lng] = useLeafletCenter()
  return ...
}
```

### Map

-   **See: leaflet [Map](https://leafletjs.com/reference.html#map) type.**

### useLeafletMap

React hook for getting current leaflet [map](https://leafletjs.com/reference.html#map). Returns the same value as the `map` member of the `leaflet` prop when using [withLeaflet](https://react-leaflet.js.org/docs/en/context.html) HOC from react-lealfet [module](https://www.npmjs.com/package/react-leaflet).

Returns **([Map](#map) | void)** leaflet map.

### 

Usage:

```javascript
import React from "react"
import { Map } from "react-leaflet"
import { useLeafletMap } from "use-leaflet-context"

const MyLeafletComponent = (props) => {
  const map = useLeafletMap()
  ...
}

const App = () => (
  <Map>
    <MyLeafletComponent />
  </Map>
)
```

Keep in mind, that `useLeafletMap` hook will work only in components which are used within [Map](https://react-leaflet.js.org/docs/en/components.html#map) component, the same as `withLeaflet` HOC from `react-leaflet`.

### useLeafletZoom

React hook for getting current zoom of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** zoom.

### 

Example:

```javascript
const MyLayer = () => {
  const zoom = useLeafletZoom()
  return zoom > 10 ? (<GeoJSON ... />) : (<GridLayer ... />)
}
```
