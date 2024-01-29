import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FlashMessage from '@/Components/FlashMessage';

export default function Form({ auth, formSuccess }) {
     const { data, setData, post, errors, processing, reset } = useForm({
          name: '',
          website: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          country: '',
          zipcode: '',
          gps: null
     });

     const submit = (e) => {
          e.preventDefault();
          post(route('publication.store'), {
               onSuccess: () => {
                    reset();
                    formSuccess();
               }
          });
     };

     return (
          <section className="w-full p-4">
               <FlashMessage />
               <div className="w-full col-span-12">
                    <div className="w-full p-4 bg-white rounded-md">
                         <form onSubmit={submit} className="w-full space-y-6">
                              <div className="flex w-full space-x-4">
                                   <div className="w-1/2">
                                        <InputLabel htmlFor="name" value="Name" />
                                        <TextInput
                                             id="name"
                                             name="name"
                                             value={data.name}
                                             className="block w-full mt-1"
                                             autoComplete="name"
                                             isFocused={true}
                                             onChange={(e) => setData('name', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                   </div>
                                   <div className="w-1/2">
                                        <InputLabel htmlFor="website" value="Website Url" />
                                        <TextInput
                                             id="website"
                                             name="website"
                                             value={data.website}
                                             type="url"
                                             className="block w-full mt-1"
                                             autoComplete="website"
                                             isFocused={false}
                                             onChange={(e) => setData('website', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.website} className="mt-2" />
                                   </div>
                              </div>
                              <div className="">
                                   <InputLabel htmlFor="address_1" value="Address Line 1" />
                                   <TextInput
                                        id="address_1"
                                        name="address_1"
                                        value={data.address_1}
                                        className="block w-full mt-1"
                                        autoComplete="address_1"
                                        isFocused={false}
                                        onChange={(e) => setData('address_1', e.target.value)}
                                        required
                                   />
                                   <InputError message={errors.address_1} className="mt-2" />
                              </div>
                              <div className="">
                                   <InputLabel htmlFor="address_2" value="Address Line 2" />
                                   <TextInput
                                        id="address_2"
                                        name="address_2"
                                        value={data.address_2}
                                        className="block w-full mt-1"
                                        autoComplete="address_2"
                                        isFocused={false}
                                        onChange={(e) => setData('address_2', e.target.value)}
                                   />
                                   <InputError message={errors.address_2} className="mt-2" />
                              </div>
                              <div className="flex w-full space-x-4">
                                   <div className="w-1/2">
                                        <InputLabel htmlFor="city" value="City" />
                                        <TextInput
                                             id="city"
                                             name="city"
                                             value={data.city}
                                             className="block w-full mt-1"
                                             autoComplete="city"
                                             isFocused={false}
                                             onChange={(e) => setData('city', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.city} className="mt-2" />
                                   </div>
                                   <div className="w-1/2">
                                        <InputLabel htmlFor="state" value="State" />
                                        <TextInput
                                             id="state"
                                             name="state"
                                             value={data.state}
                                             className="block w-full mt-1"
                                             autoComplete="state"
                                             isFocused={false}
                                             onChange={(e) => setData('state', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.state} className="mt-2" />
                                   </div>
                              </div>
                              <div className="flex w-full space-x-4">
                                   <div className="w-1/2">
                                        <InputLabel htmlFor="country" value="Country" />
                                        <TextInput
                                             id="country"
                                             name="country"
                                             value={data.country}
                                             className="block w-full mt-1"
                                             autoComplete="country"
                                             isFocused={false}
                                             onChange={(e) => setData('country', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.country} className="mt-2" />
                                   </div>
                                   <div className="w-1/2">
                                        <InputLabel htmlFor="zipcode" value="Zip Code" />
                                        <TextInput
                                             id="zipcode"
                                             name="zipcode"
                                             value={data.zipcode}
                                             className="block w-full mt-1"
                                             autoComplete="zipcode"
                                             isFocused={true}
                                             onChange={(e) => setData('zipcode', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.zipcode} className="mt-2" />
                                   </div>
                              </div>
                              <div className="flex justify-center">
                                   <PrimaryButton disabled={processing}>Done</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
