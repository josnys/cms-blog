import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FlashMessage from '@/Components/FlashMessage';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <FlashMessage />
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="firstname" value="First Name" is_required={true} />
                    <TextInput
                        id="id_firstname"
                        name="firstname"
                        value={data.firstname}
                        className="block w-full mt-1"
                        autoComplete="firstname"
                        isFocused={true}
                        onChange={(e) => setData('firstname', e.target.value)}
                        required
                    />
                    <InputError message={errors.firstname} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="lastname" value="Last Name" />
                    <TextInput
                        id="id_lastname"
                        name="lastname"
                        value={data.lastname}
                        className="block w-full mt-1"
                        autoComplete="lastname"
                        isFocused={false}
                        onChange={(e) => setData('lastname', e.target.value)}
                    />
                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="username" value="Username" is_required={true} />
                    <TextInput
                        id="id_username"
                        type="text"
                        name="username"
                        value={data.username}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />
                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" is_required={true} />
                    <TextInput
                        id="id_email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" is_required={true} />
                    <TextInput
                        id="id_password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" is_required={true} />
                    <TextInput
                        id="id_password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
