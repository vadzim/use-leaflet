// @flow

import React from "react"
import ReactDOM from "react-dom"
import { Map } from "react-leaflet"
import { useLeafletIsMoving } from "../src/useLeafletIsMoving"

declare var describe: Function
declare var it: Function
declare var expect: Function

describe("useLeafletIsMoving", () => {
	let isMoving = -1

	const UseLeafletIsMoving = () => {
		isMoving = useLeafletIsMoving()
		return <></>
	}

	const div = global.document.createElement("div")

	it("should not throw", () => {
		ReactDOM.render(<UseLeafletIsMoving />, div)
		expect(isMoving).toBe(false)

		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={10}>
				<UseLeafletIsMoving />
			</Map>,
			div,
		)
		expect(isMoving).toBe(false)

		ReactDOM.render(
			<Map center={[2.2, 3.4]} zoom={12}>
				<UseLeafletIsMoving />
			</Map>,
			div,
		)
		expect(isMoving).toBe(false)

		ReactDOM.render(
			<Map center={[3.2, 3.4]} zoom={14}>
				{null}
			</Map>,
			div,
		)
		expect(isMoving).toBe(false)
	})
})
