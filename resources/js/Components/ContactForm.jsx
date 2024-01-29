import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FlashMessage from '@/Components/FlashMessage';
import TextAreaInput from '@/Components/TextAreaInput';

export default function Form({ bgData }) {
     const { data, setData, post, errors, processing, reset } = useForm({
          name: '',
          email: '',
          message: ''
     });

     const submit = (e) => {
          e.preventDefault();
          post(route('site.contact'));
     };

     return (
          <section className="w-full p-4">
               <FlashMessage />
               <div className="w-full md:container md:col-span-12 md:mx-auto">
                    <div className="w-full p-2 bg-right bg-no-repeat bg-contain rounded-lg md:p-8 bg-slate-200" style={{ backgroundImage: `url(${bgData})` }}>
                         <form onSubmit={submit} className="w-full space-y-4 md:w-2/3 md:space-y-6">
                              <div className="w-full bg-white/[.65] md:bg-transparent rounded md:rounded-none p-2">
                                   <h2 className="mt-2 text-xl font-medium text-center md:mt-4 md:text-4xl">We'd love to hear from you!</h2>
                                   <p className="text-xs text-slate-800 md:text-slate-500 md:text-sm">We welcome your inquiries and are here to provide you with more information about how Enpak can help keep you informed and engaged with you local community and the world at large.</p>
                              </div>
                              <div className="w-full md:flex md:space-x-4">
                                   <div className="w-full md:w-1/2">
                                        <InputLabel htmlFor="name" value="Name" />
                                        <TextInput
                                             id="name"
                                             name="name"
                                             value={data.name}
                                             className="block w-full mt-1"
                                             autoComplete="name"
                                             isFocused={false}
                                             onChange={(e) => setData('name', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                   </div>
                                   <div className="w-full mt-3 md:w-1/2 md:mt-0">
                                        <InputLabel htmlFor="email" value="Email" />
                                        <TextInput
                                             id="email"
                                             name="email"
                                             value={data.email}
                                             type="email"
                                             className="block w-full mt-1"
                                             autoComplete="email"
                                             isFocused={true}
                                             onChange={(e) => setData('email', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.email} className="mt-2" />
                                   </div>
                              </div>
                              <div className="w-full">
                                   <InputLabel htmlFor="message" value="Message" />
                                   <TextAreaInput
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        className="block w-full mt-1"
                                        onChange={(e) => setData('message', e.target.value)}
                                        required
                                   />
                                   <InputError message={errors.message} className="mt-2" />
                              </div>
                              <div className="flex justify-center">
                                   <PrimaryButton disabled={processing}>Submit</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
