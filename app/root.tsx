import { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet } from "@remix-run/react";
import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </nav>
        <div className="p-4">
          <Outlet />
        </div>
        <LiveReload />
      </body>
    </html>
  );
}
