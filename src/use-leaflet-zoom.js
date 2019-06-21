// @flow
import { useLeafletData } from "./on-leaflet-event"

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
 * @returns current zoom.
 */

export const useLeafletZoom = (): number => useLeafletData(getMapZoom, "zoomend")

const getMapZoom = map => (map && map.getZoom()) || 0
