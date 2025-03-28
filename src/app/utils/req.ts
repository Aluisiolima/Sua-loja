async function fetchApi(data: []|null, method: string = "GET", url: string) {
    try {
        const token = sessionStorage.getItem("token");

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const options: RequestInit = {
            method,
            headers,
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        return await response.json();

    } catch (error) {
        console.error("Erro ao chamar a API:", error);
        throw error;
    }
}

export default fetchApi;