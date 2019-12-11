import { Map, LatLngBounds } from "leaflet"

export function useLeafletZoom(): number
export function useLeafletMap(): Map | undefined
export function useLeafletBounds(): [[number, number], [number, number]]
export function useLeafletLatLngBounds(): LatLngBounds
export function useLeafletCenter(): [number, number]
export function useLeafletIsMoving(): boolean
export function useLeafletIsZooming(): boolean
