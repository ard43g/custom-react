import { useState } from "react";

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange,
    };
}

/* const Component = () => {

	const inputOne = useInput('')
	const inputTwo = useInput('')

	const someFucntion (value1, value2) {
		// do something ...
	}

	return (
		<>
			<input {...inputOne} type="text"></input>
			<input {...inputTwo} type="text"></input>
			<button onClick={() => someFucntion(inputOne.value, inputTwo.value)}></button>
		</>
	)
} */
