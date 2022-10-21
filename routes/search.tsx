import { Handlers, PageProps } from '$fresh/server.ts';
import Countdown from '../islands/Countdown.tsx';

const names = [ 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank' ];

interface Data
{
    results: string[];
    query: string;
}

export const handler: Handlers<Data> = {
    GET(req, ctx)
    {
        const query = new URL(req.url).searchParams.get('q')?.toLowerCase() ?? '';
        const results = names.filter(name => name.toLowerCase().includes(query));
        return ctx.render({ results, query });
    },
};

export default function Page({ data }: PageProps<Data>)
{
    const { results, query } = data;
    const date = new Date();
    date.setHours(date.getHours() + 1);

    return <div>
        <form>
            <input type="text" name="q" value={query} />

            <button type="submit">Search</button>
        </form>

        <ul>
            {results.map((name) => <li key={name}>{name}</li>)}
        </ul>

        <Countdown target={date.toISOString()} />
    </div>;
}