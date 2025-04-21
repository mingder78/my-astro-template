import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import useSWR from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function profile() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="mx-auto max-w-md text-4xl"> <span className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
    Loading...
  </span>
  </div>
  return <ul className="bg-white shadow-md rounded-lg p-4 space-y-2">
    {data.map((user: { id: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
      <li className="text-gray-700 hover:bg-gray-100 p-2 rounded"><a href={`/api/users/${user.id}`}>{user.name}</a></li>
    ))}
  </ul>
}
