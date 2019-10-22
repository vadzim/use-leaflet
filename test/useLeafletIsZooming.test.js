// @flow

import React from "react"
import ReactDOM from "react-dom"
import { Map } from "react-leaflet"
import { useLeafletIsZooming } from "../src/useLeafletIsZooming"

declare var describe: Function
declare var it: Function
declare var expect: Function

describe("useLeafletIsZooming", () => {
	let isZooming = -1

	const UseLeafletIsZooming = () => {
		isZooming = useLeafletIsZooming()
		return <></>
	}

	const div = global.document.createElement("div")

	it("should not throw", () => {
		ReactDOM.render(<UseLeafletIsZooming />, div)
		expect(isZooming).toBe(false)

		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={10}>
				<UseLeafletIsZooming />
			</Map>,
			div,
		)
		expect(isZooming).toBe(false)

		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={12}>
				<UseLeafletIsZooming />
			</Map>,
			div,
		)
		expect(isZooming).toBe(false)

		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={14}>
				{null}
			</Map>,
			div,
		)
		expect(isZooming).toBe(false)
	})
})
