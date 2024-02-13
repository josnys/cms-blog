import { useForm } from "@inertiajs/react";
import TextInputButtonIcon from '@/Components/Front/TextInputButtonIcon';
import InputError from "@/Components/InputError";
export default function GlobalSearch({ searchQuery }){
     const { data, setData, errors, post, processing } = useForm({
          query: ''
     });
     const handleSubmit = (e) => {
          e.preventDefault();
          searchQuery(data.query);
     }

     return (<form onSubmit={handleSubmit} className="w-full">
          <div className="w-full">
               <TextInputButtonIcon
                    id="query"
                    name="query"
                    icon="search"
                    value={data.query}
                    className="block w-full"
                    autoComplete="query"
                    isFocused={false}
                    placeholder="Search Publication"
                    onChange={(e) => setData('query', e.target.value)}
                    required
               />
               <InputError message={errors.query} className="mt-2" />
          </div>
     </form>);
}