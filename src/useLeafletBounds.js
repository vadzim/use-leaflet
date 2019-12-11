// @flow
import { useLeafletData } from "./onLeafletEvent"

/**
 * React hook for getting current bounds of visible area of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).
 *
 * ```javascript
 * const MyComponent = () => {
 *   const [[south, west], [north, east]] = useLeafletBounds()
 *   return ...
 * }
 * ```
 *
 * @returns [[south, west], [north, east]] for visible area.
 */

export const useLeafletBounds = (): [[number, number], [number, number]] => useLeafletData(getMapBounds, "moveend")

const getMapBounds = map => {
	if (!map)
		return [
			[Infinity, Infinity],
			[-Infinity, -Infinity],
		]
	const bounds = map.getBounds()
	return [
		[bounds.getSouth(), bounds.getWest()],
		[bounds.getNorth(), bounds.getEast()],
	]
}
