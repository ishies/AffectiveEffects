router.post("/api/ai", async ({ request }) => {
    try {
        const body = await request.json();
        const message = body.message;

        if (!message) {
            return new Response(
                JSON.stringify({
                    error: "Message is required."
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        const response = await me.puter.ai.chat(
            message,
            {
                model: "claude-sonnet-4-6"
            }
        );

        return response;

    } catch (error) {
        console.error(error);

        return new Response(
            JSON.stringify({
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
});

