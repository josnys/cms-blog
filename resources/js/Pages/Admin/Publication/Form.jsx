import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';

export default function Form({ auth, publicationData, formSuccess }) {
     const { data, setData, post, put, errors, processing, reset } = useForm({
          name: publicationData.name || '',
          website: publicationData.website || '',
          address_1: publicationData.address?.one || '',
          address_2: publicationData.address?.two || '',
          city: publicationData.city || '',
          state: publicationData.state || '',
          country: publicationData.country || '',
          zipcode: publicationData.zipcode || '',
          gps: publicationData.gps_location || '',
          status: publicationData.status?.value || false
     });

     const submit = (e) => {
          e.preventDefault();
          if (publicationData.id){
               put(route('admin.publication.update', publicationData.id), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          } else {
               post(route('admin.publication.store'), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          }
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
                                   <div className="w-1/3">
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
                                   <div className="w-1/3">
                                        <InputLabel htmlFor="zipcode" value="Zip Code" />
                                        <TextInput
                                             id="zipcode"
                                             name="zipcode"
                                             value={data.zipcode}
                                             className="block w-full mt-1"
                                             autoComplete="zipcode"
                                             isFocused={false}
                                             onChange={(e) => setData('zipcode', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.zipcode} className="mt-2" />
                                   </div>
                                   <div className="w-1/3">
                                        <InputLabel htmlFor="gps" value="GPS Coordinate" />
                                        <TextInput
                                             id="gps"
                                             name="gps"
                                             value={data.gps}
                                             className="block w-full mt-1"
                                             autoComplete="gps"
                                             isFocused={false}
                                             onChange={(e) => setData('gps', e.target.value)}
                                        />
                                        <InputError message={errors.gps} className="mt-2" />
                                   </div>
                              </div>
                              <div className="block mt-4">
                                   <label className="flex items-center">
                                        <Checkbox
                                             name="status"
                                             checked={data.status}
                                             onChange={(e) => setData('status', !data.status)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Is Active</span>
                                        <InputError message={errors.status} className="mt-2" />
                                   </label>
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
