import { Map } from "leaflet"

export function useLeafletZoom(): number
export function useLeafletMap(): Map | void
export function useLeafletBounds(): [[number, number], [number, number]]
export function useLeafletCenter(): [number, number]
export function useLeafletIsMoving(): boolean
export function useLeafletIsZooming(): boolean
