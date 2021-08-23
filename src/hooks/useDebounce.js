import { useCallback, useRef } from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();

    const debouncedCallback = useCallback(
        (...args) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay]
    );

    return debouncedCallback;
}

/*  ==========================Example
	const Component = () => {
    const [value, setValue] = useState();
    const debouncedCallback = useDebounce(search, 500);

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
    }

    function onChange(e) {
        setValue(e.target.value);
        debouncedCallback(e.target.value);
    }

	return (
		<input value={value} onChange={onChange}></input>
	)

} */
