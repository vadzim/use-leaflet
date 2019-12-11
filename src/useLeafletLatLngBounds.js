// @flow
import { useLeafletData } from "./onLeafletEvent"
import type { LatLngBounds } from "leaflet"

/**
 * React hook for getting current latlng bounds of visible area of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).
 * This hook is different from useLeafletBounds because it returns the Leaflet LatLngBounds object
 *
 * ```javascript
 * const MyComponent = () => {
 *   const latLngBounds = useLeafletBounds()
 *   return ...
 * }
 * ```
 *
 * @returns LatLngBounds for visible area.
 */

export const useLeafletLatLngBounds = (): LatLngBounds | null => useLeafletData(getMapBounds, "moveend")

const getMapBounds = map => {
	if (!map) return null
	return map.getBounds()
}
