// app/data/page.js
async function fetchData() {
    const requestBody = {
        databaseManager: "postgresql",
        host: "localhost",
        port: 5432,
        databaseName: "for-devs-university",
        user: "postgres",
        password: "toor"
    };

    const res = await fetch('http://localhost:8080/api/connect-database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    // Since the API returns a plain text response, we use .text() instead of .json()
    return res.text();
}

export default async function DataPage() {
    let data;

    try {
        data = await fetchData();
    } catch (error) {
        return (
            <div>
                <h1>Error fetching data</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Data fetched on the server-side</h1>
            <p>{data}</p>
        </div>
    );
}
