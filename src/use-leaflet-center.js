// @flow
import { useLeafletData } from "./on-leaflet-event"

/**
 * React hook for getting current center of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).
 *
 * ```javascript
 * const MyComponent = () => {
 *   const [lat, lng] = useLeafletCenter()
 *   return ...
 * }
 * ```
 *
 * @returns [lat, lng] of the map center.
 */

export const useLeafletCenter = (): [number, number] => useLeafletData(getMapCenter, "moveend")

const getMapCenter = map => {
	if (!map) return [0, 0]
	const { lat, lng } = map.getCenter()
	return [lat, lng]
}
