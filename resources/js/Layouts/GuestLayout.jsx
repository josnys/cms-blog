import { useEffect, useState, useRef } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import SiteTopNavigation from '@/Components/Front/SiteTopNavigation';
import Footer from '@/Components/Footer';

export default function Guest({ children }) {
    const { app, additional } = usePage().props;
    const application = app.data;
    const [sticky, setSticky] = useState(false);
    const navbarOffset = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const value = navbarOffset.current.clientHeight;
            setSticky(window.scrollY >= value);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white sm:pt-0">
            <div ref={navbarOffset} className={`flex items-center justify-between w-full sm:px-4 sm:py-4 bg-white ${sticky ? 'fixed top-0 left-0 z-50 transition ease-in-out duration-700 shadow shadow-slate-300' : ''}`}>
                <Link className="p-4 md:pl-10" href="/">
                    <ApplicationLogo logo={application.logo} name={application.name} showName={false} logoClass={`w-20 md:w-24 mr-4`} />
                </Link>
                <SiteTopNavigation />
            </div>

            <div className="w-full col-span-full">
                {children}
            </div>
            <Footer appData={app.data} copyrightYear={additional.current_year} />
        </div>
    );
}
