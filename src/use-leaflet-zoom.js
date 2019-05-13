// @flow
import type { Map } from "leaflet"
import { useState, useCallback, useEffect } from "react"
import { useLeafletMap } from "./use-leaflet-map"

/**
 * React hook for getting current zoom of react-leaflet [Map](https://react-leaflet.js.org/docs/en/components.html#map).
 *
 * ```javascript
 * const MyLayer = () => {
 *   const zoom = useLeafletZoom()
 *   return zoom > 10 ? (<GeoJSON ... />) : (<GridLayer ... />)
 * }
 * ```
 *
 * @returns zoom.
 */

export const useLeafletZoom = (): number => {
	const map: Map | void = useLeafletMap()
	const [zoom, setZoomState] = useState(() => map && map.getZoom())
	const onLeafletZoom = useCallback(() => setZoomState(map && map.getZoom()), [setZoomState, map])
	useEffect(() => {
		if (map) map.on("zoomend", onLeafletZoom)
		return () => {
			if (map) map.off("zoomend", onLeafletZoom)
		}
	}, [map, onLeafletZoom])
	return zoom || 0
}
