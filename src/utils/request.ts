import axios from "axios";

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

export async function get(url: string) {
    try {
        const response = await axiosInstance.get(url);
        if (response.data) {
            return response;
        }
        throw new Error(response.data);
    } catch (error) {
        throw error;
    }
}
