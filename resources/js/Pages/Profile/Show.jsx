import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';
import Profile from '@/Pages/Profile/Partials/Profile';

export default function Show({ auth, mustVerifyEmail, status, profile }) {
    return (
        <UserLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <Profile 
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                            profile={profile} 
                        />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
