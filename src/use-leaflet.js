// @flow
import { useContext, type Context } from "react"
import { LeafletConsumer, type LeafletContext } from "react-leaflet"

// eslint-disable-next-line no-underscore-dangle
const leafletContext: Context<LeafletContext> = (LeafletConsumer: any)._context

/**
 * @external LeafletContext
 * @see {@link https://react-leaflet.js.org/docs/en/context.html LeafletContext} type.
 */

/**
 * React hook for getting react-leaflet [data](https://react-leaflet.js.org/docs/en/context.html). Returns the same value as [withLeaflet](https://react-leaflet.js.org/docs/en/context.html) HOC from the react-lealfet [module](https://www.npmjs.com/package/react-leaflet).
 * @returns leaflet context.
 */
export const useLeaflet = (): LeafletContext => useContext(leafletContext)

/**
 * Usage:
 *
 * ```javascript
 * import React from "react"
 * import { Map } from "react-leaflet"
 * import { useLeaflet } from "use-leaflet"
 *
 * const MyLeafletComponent = (props) => {
 *   const { map } = useLeaflet()
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
 * Keep in mind, that `useLeaflet` hook will work only in components which are used within [Map](https://react-leaflet.js.org/docs/en/components.html#map) component, the same as `withLeaflet` HOC from `react-leaflet`.
 */
