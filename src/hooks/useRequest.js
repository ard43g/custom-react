import { useEffect, useState } from "react";

export function useRequest(request) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        request()
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return [data, loading, error];
}

/*  ==========================Example
	const Component = () => {
    const [data, loading, error] = useRequest(fetchTodos);

	async function fetchTodos() {
        return await fetch(`https://jsonplaceholder.typicode.com/todos`);
    }

    if (loading) {
        return <h1> loading...</h1>;
    }

    if (error) {
        return <div> error message</div>;
    }

	return (
        <div>
            

            {data && (
                <div>
                    {data.map((i) => {
                        return (
                            <div key={i.id}>
                                {i.id} : {i.title}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );

} */
