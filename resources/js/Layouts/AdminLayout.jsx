import TopNavigation from '@/Pages/Admin/Components/TopNavigation';
import MainMenu from '@/Pages/Admin/Components/MainMenu';
import ErrorBoundary from '@/Components/ErrorBoundary';
import NetworkBoundary from '@/Components/NetworkBoundary';

export default function Admin({ user, header, children }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col h-screen bg-slate-100">
                <NetworkBoundary>
                    <div className="">
                        <TopNavigation user={user} />
                        {header && (
                            <header className="w-full bg-slate-50">
                                <div className="px-2 py-3 sm:px-3 lg:px-4">{header}</div>
                            </header>
                        )}
                    </div>

                    <main className="flex flex-grow w-full overflow-hidden">
                        <div className="flex flex-grow w-full overflow-hidden">
                            <MainMenu auth={user} className={`bg-slate-200 flex-shrink-0 w-24 p-2 hidden md:block overflow-y-auto`} />
                            <div className="w-full overflow-hidden overflow-y-auto">
                                <ErrorBoundary>
                                    {children}
                                </ErrorBoundary>
                            </div>
                        </div>
                    </main>
                </NetworkBoundary>
            </div>
        </div>
    );
}
