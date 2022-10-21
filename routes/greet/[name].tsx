import { Handlers, PageProps } from '$fresh/server.ts';

export const handler: Handlers = {
    async GET(req: Request, ctx): Promise<Response>
    {
        const resp = await ctx.render();

        resp.headers.set('X-Custom-Header', 'Hello');

        return resp;
    },
};

export default function GreetPage({ params }: PageProps)
{
    const { name } = params;

    return <main>
        <p>Greetings to you, {name}!</p>
    </main>;
}