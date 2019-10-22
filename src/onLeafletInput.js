// @flow
import type { Map } from "leaflet"
import { useState, useEffect } from "react"
import { useLeafletMap } from "./useLeafletMap"

export const useLeafletInput = (inputStartEvent: string, inputStopEvent: string, onGetInitialState: (map: Map) => boolean = getFalse): boolean => {
	const map: Map | void = useLeafletMap()

	const [isInput, setIsInput] = useState(onGetInitialState(map))

	useEffect(() => {
		let effectMounted = true

		const handleStart = () => effectMounted && setIsInput(true)
		const handleEnd = () => effectMounted && setIsInput(false)

		if (map) {
			map.on(inputStartEvent, handleStart)
			map.on(inputStopEvent, handleEnd)
		}

		return () => {
			effectMounted = false
			if (map) {
				map.on(inputStartEvent, handleStart)
				map.on(inputStopEvent, handleEnd)
			}
		}
	}, [inputStartEvent, inputStopEvent, map])

	return isInput
}

const getFalse = () => false
