// @flow
import { useLeafletInput } from "./onLeafletInput"

/**
 * React hook to see if a user is zooming the [react-leaflet map](https://react-leaflet.js.org/).
 *
 * ```javascript
 * const MyComponent = () => {
 *   const isZooming = useLeafletIsZooming()
 *   return ...
 * }
 * ```
 *
 * @returns true if a user is zooming the map.
 */

export const useLeafletIsZooming = (): boolean => useLeafletInput("zoomstart", "zoomend")
