import { Handlers, PageProps } from '$fresh/server.ts';

interface User
{
    login: string;
    name: string;
    avatar_url: string;
}

export const handler: Handlers<User|null> = {
    async GET(_, ctx)
    {
        const { username } = ctx.params;
        const resp = await fetch(`https://api.github.com/users/${username}`);

        if (resp.status === 404)
        {
            return ctx.render(null);
        }

        const user: User = await resp.json();

        return ctx.render(user);
    },
};

export default function Page({ data }: PageProps<Username|null>)
{
    if (!data)
    {
        return <h1>User not found</h1>;
    }

    const { name, login, avatar_url } = data;

    return <div>
        <img src={avatar_url} width={64} height={64} alt={name} />
        <h1>{name}</h1>
        <p>{login}</p>
    </div>;
}