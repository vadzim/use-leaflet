// @flow
import type { Map } from "leaflet"
import { useState, useEffect } from "react"
import { useLeafletMap } from "./use-leaflet-map"

export const useLeafletData = <T>(getLeafletData: (map: Map | void) => T, event: string): T => {
	const map: Map | void = useLeafletMap()

	const [data, setData] = useState(() => getLeafletData(map))

	useEffect(() => {
		let effectMounted = true

		const doCallback = () => effectMounted && setData(getLeafletData(map))

		setImmediate(doCallback)

		if (map) map.on(event, doCallback)

		return () => {
			effectMounted = false
			if (map) map.off(event, doCallback)
		}
	}, [event, getLeafletData, map])

	return data
}
