// @flow
import { useState, useCallback, useEffect } from "react"
import { useLeaflet } from "./use-leaflet"

/**
 * React hook for getting current zoom of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).
 * @returns zoom.
 */

export const useLeafletZoom = (): number => {
	const { map } = useLeaflet()
	const [zoom, setZoomState] = useState(() => map && map.getZoom())
	const onLeafletZoom = useCallback(() => setZoomState(map && map.getZoom()), [setZoomState, map])
	useEffect(() => {
		if (map) map.on("zoomend", onLeafletZoom)
		return () => map && map.off("zoomend", onLeafletZoom)
	}, [map, onLeafletZoom])
	return zoom || 0
}

/**
 * Example:
 *
 * ```javascript
 * const MyLayer = () => {
 *   const zoom = useLeafletZoom()
 *   return zoom > 10 ? (<GeoJSON ... />) : (<GridLayer ... />)
 * }
 * ```
 */
