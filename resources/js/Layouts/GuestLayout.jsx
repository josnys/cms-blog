import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import SiteTopNavigation from '@/Components/SiteTopNavigation';

export default function Guest({ children }) {
    const { app } = usePage().props;
    const application = app.data;
    // const [openNav, setOpenNav] = useState(false);

    // useEffect(() => {
    //     window.addEventListener(
    //         "resize",
    //         () => window.innerWidth >= 960 && setOpenNav(false),
    //     );
    // }, []);

    return (
        <div className="min-h-screen bg-gray-100 sm:pt-0">
            <div className="sticky flex items-center justify-between w-full px-4 py-4 bg-white">
                <Link href="/">
                    <ApplicationLogo logo={application.logo} name={application.name} showName={false} logoClass={`w-4 md:w-10`} />
                </Link>
                <SiteTopNavigation />
            </div>

            <div className="w-full col-span-full">
                {children}
            </div>
        </div>
    );
}
