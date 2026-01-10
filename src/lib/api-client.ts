/**
 * =============================================================================
 * API CLIENT
 * =============================================================================
 *
 * WHAT IS THIS?
 * -------------
 * The API client is our "messenger" to the backend server. Whenever we need
 * to get data from the server or send data to it, we use this client.
 *
 * WHAT IS AN API?
 * ---------------
 * API stands for "Application Programming Interface". It's like a waiter
 * in a restaurant:
 * - You (the frontend) tell the waiter (API) what you want
 * - The waiter goes to the kitchen (backend server) and gets it
 * - The waiter brings back your food (data)
 *
 * HOW IT WORKS:
 * -------------
 * We use the "fetch" function (built into browsers) to make HTTP requests.
 * HTTP requests are how browsers talk to servers.
 *
 * There are different types of requests:
 * - GET    = "Give me data" (like getting a list of users)
 * - POST   = "Here's new data, save it" (like creating a new user)
 * - DELETE = "Remove this data" (like deleting a user)
 *
 * CONFIGURATION:
 * --------------
 * The API_URL is read from environment variables (.env file).
 * If not set, it defaults to 'http://localhost:8080'.
 *
 * You can change this in the .env file:
 *   VITE_API_URL=https://your-production-server.com
 *
 * =============================================================================
 */

/**
 * The base URL for all API calls.
 *
 * import.meta.env is how Vite (our build tool) reads environment variables.
 * Environment variables are settings that can change between environments
 * (development vs production).
 */
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * The API client object.
 *
 * This object has three methods: get, post, and delete.
 * Each method handles a different type of HTTP request.
 */
export const apiClient = {
    /**
     * GET request - Fetches data from the server
     *
     * @param endpoint - The URL path (like '/api/users')
     * @returns The data from the server
     *
     * Example:
     *   const users = await apiClient.get<User[]>('/api/users');
     *
     * The <T> is a "generic type" - it tells TypeScript what shape
     * the returned data will have.
     */
    get: async <T>(endpoint: string): Promise<T> => {
        // Make the request to the server
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Check if the request was successful
        // response.ok is true if status code is 200-299
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        // Parse the JSON response and return it
        return response.json();
    },

    /**
     * POST request - Sends new data to the server
     *
     * @param endpoint - The URL path (like '/api/users')
     * @param data - The data to send
     * @returns The response from the server (usually the created item)
     *
     * Example:
     *   const newUser = await apiClient.post<User>('/api/users', {
     *     email: 'john@example.com',
     *     username: 'john'
     *   });
     */
    post: async <T, D = unknown>(endpoint: string, data: D): Promise<T> => {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Convert our JavaScript object to a JSON string
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return response.json();
    },

    /**
     * DELETE request - Removes data from the server
     *
     * @param endpoint - The URL path with ID (like '/api/users/123')
     *
     * Example:
     *   await apiClient.delete('/api/users/abc-123');
     */
    delete: async (endpoint: string): Promise<void> => {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        // DELETE requests usually don't return data, so we don't parse JSON
    },

    put: async <T, D = unknown>(endpoint: string, data: D): Promise<T> => {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return response.json();
    }
}