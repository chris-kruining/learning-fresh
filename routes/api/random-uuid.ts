import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
    GET()
    {
        return new Response(JSON.stringify(crypto.randomUUID()), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
};