// @flow
import { useLeafletInput } from "./onLeafletInput"

/**
 * React hook to see if a user is moving the [react-leaflet map](https://react-leaflet.js.org/).
 *
 * ```javascript
 * const MyComponent = () => {
 *   const isMoving = useLeafletIsMoving()
 *   return ...
 * }
 * ```
 *
 * @returns true if a user is moving the map.
 */

export const useLeafletIsMoving = (): boolean => useLeafletInput("movestart", "moveend")
