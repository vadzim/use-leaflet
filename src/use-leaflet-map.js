// @flow
import type { Map } from "leaflet"
import { useLeaflet } from "react-leaflet"

/**
 * @external Map
 * @see leaflet {@link https://leafletjs.com/reference.html#map Map} type.
 */

/**
 * React hook for getting current leaflet [map](https://leafletjs.com/reference.html#map). Returns the same value as the `map` member of the `leaflet` prop when using [withLeaflet](https://react-leaflet.js.org/docs/en/context.html) HOC from react-lealfet [module](https://www.npmjs.com/package/react-leaflet).
 * @returns leaflet map.
 */
export const useLeafletMap = (): Map | void => useLeaflet().map

/**
 * Usage:
 *
 * ```javascript
 * import React from "react"
 * import { Map } from "react-leaflet"
 * import { useLeafletMap } from "use-leaflet-context"
 *
 * const MyLeafletComponent = (props) => {
 *   const map = useLeafletMap()
 *   ...
 * }
 *
 * const App = () => (
 *   <Map>
 *     <MyLeafletComponent />
 *   </Map>
 * )
 * ```
 *
 * Keep in mind, that `useLeafletMap` hook will work only in components which are used within [Map](https://react-leaflet.js.org/docs/en/components.html#map) component, the same as `withLeaflet` HOC from `react-leaflet`.
 */
