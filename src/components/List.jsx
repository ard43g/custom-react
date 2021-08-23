import {  useRef, useState } from "react"
import useScroll from "../hooks/useScroll";

export const List = () => {
	const [items, setItems] = useState([])
	const [page, setPage] = useState(1)
	const limit = 20;
	const parentRef = useRef()
	const childRef = useRef()
	const intersected = useScroll(parentRef, childRef, () => fetchData(page, limit))


	function fetchData(page, limit) {
		fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
			.then(response => response.json())
			.then(json => {
				setItems(prev => [...prev, ...json])
				setPage(prev => prev + 1)
			})
	}


	return (
		<div ref={parentRef} style={{height: '70vh', overflow: 'auto'}}>
			{items.map((i) => {
				return <div key={i.id}>{i.id} : {i.title}</div>
			})}
			<div ref={childRef} style={{height: 10}}></div>
		</div>
	)
}