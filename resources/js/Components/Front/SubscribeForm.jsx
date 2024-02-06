import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import TextInputButtonIcon from '@/Components/Front/TextInputButtonIcon';
import FlashMessage from '@/Components/FlashMessage';

export default function SubscribeForm(){
     const { data, setData, errors, post, processing } = useForm({
          email: ''
     });
     const handleSubmit = (e) => {
          e.preventDefault();
          post(route('newsletter.subscribe'));
     }

     return <div className="w-full p-4 rounded-lg bg-slate-100">
          <h3 className="text-lg font-medium md:text-xl">Sign up for our newsletter</h3>
          <p className="text-sm text-slate-500">As a subscriber, you'll be joining a movement that's dedicated to support local news.</p>
          <form onSubmit={handleSubmit} className="w-full mt-4">
               <FlashMessage />
               <div className="w-full">
                    <TextInputButtonIcon
                         id="email"
                         name="email"
                         icon="chevron-right"
                         value={data.email}
                         type="email"
                         className="block w-full"
                         autoComplete="email"
                         isFocused={false}
                         placeholder="Email Address"
                         onChange={(e) => setData('email', e.target.value)}
                         required
                    />
                    <InputError message={errors.email} className="mt-2" />
               </div>
          </form>
     </div>
}