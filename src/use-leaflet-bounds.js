// @flow
import { useState, useCallback, useEffect } from "react"
import { useLeafletMap } from "./use-leaflet-map"

const getMapBounds = map => {
	const bounds = map.getBounds()
	return [[bounds.getSouth(), bounds.getWest()], [bounds.getNorth(), bounds.getEast()]]
}

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
 * @returns bounds of visible area.
 */

export const useLeafletBounds = (): [[number, number], [number, number]] => {
	const map = useLeafletMap()
	const [bounds, setBoundsState] = useState(() => map && getMapBounds(map))
	const onLeafletMove = useCallback(() => setBoundsState(map && getMapBounds(map)), [setBoundsState, map])
	useEffect(() => {
		if (map) map.on("moveend", onLeafletMove)
		return () => {
			if (map) map.off("moveend", onLeafletMove)
		}
	}, [map, onLeafletMove])
	return bounds || [[Infinity, Infinity], [-Infinity, -Infinity]]
}
