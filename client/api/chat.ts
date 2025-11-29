
export const sendMessageToChat = async (message: string): Promise<string> => {
    const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    if (!res.ok) {
        throw new Error("Failed to fetch response");
    }

    const data = await res.json();
    return data.message;
};
