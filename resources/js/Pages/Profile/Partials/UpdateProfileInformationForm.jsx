import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import FlashMessage from '@/Components/FlashMessage';

export default function UpdateProfileInformation({ mustVerifyEmail, formSuccess, profile, status, className = '' }) {
    const user = usePage().props.auth.user;
    const _profile = profile.data;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        firstname: _profile.related.person?.firstname || '',
        lastname: _profile.related.person?.lastname || '',
        username: _profile.username,
        email: _profile.email,
        dob: _profile.related.person?.dob || '',
        bio: _profile.related.person?.bio || '',
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('user.profile.update'), {
            onSuccess: () => {
                formSuccess();
            }
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>
            <FlashMessage />
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="First Name" />
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
                    <InputLabel htmlFor="dob" value="Date of Birth" />
                    <TextInput
                        id="id_dob"
                        name="dob"
                        type="date"
                        value={data.dob}
                        className="block w-full mt-1"
                        autoComplete="dob"
                        isFocused={false}
                        onChange={(e) => setData('dob', e.target.value)}
                    />
                    <InputError message={errors.dob} className="mt-2" />
                </div>
                    
                <div>
                    <InputLabel htmlFor="bio" value="Bio" />
                    <TextAreaInput
                        id="id_bio"
                        name="bio"
                        value={data.bio}
                        className="block w-full mt-1"
                        isFocused={false}
                        onChange={(e) => setData('bio', e.target.value)}
                    />
                    <InputError message={errors.bio} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="id_email"
                        type="email"
                        className="block w-full mt-1"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="id_username"
                        type="text"
                        className="block w-full mt-1"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.username} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center float-right gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
