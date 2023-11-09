import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-gray-100 bg-center sm:flex sm:justify-center sm:items-center bg-dots-darker selection:bg-red-500 selection:text-white">
                <div className="p-6 text-right sm:fixed sm:top-0 sm:right-0">
                    {auth.user ? (
                        <Link
                            href={route('user.dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="flex items-center justify-center min-h-screen p-6">
                    <div className="w-full p-4 text-lg leading-loose text-center text-gray-500 bg-white rounded shadow-xl">
                        Laravel Starter with <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">Laravel 10 | Breeze | TailwindCSS 3 | InertiaJs / Reactjs</h1>
                        by <Link className="hover:text-purple-600" href="https://twitter.com/josnyS">JosnyS</Link><br />
                        <Link className="mr-2 text-sm hover:underline hover:text-blue-500" href={route('login')}>Login</Link>
                        <Link className="text-sm hover:underline hover:text-blue-500" href={route('register')}>Register</Link>
                        <div className="text-xs">PHP version {phpVersion} • Laravel version {laravelVersion}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
