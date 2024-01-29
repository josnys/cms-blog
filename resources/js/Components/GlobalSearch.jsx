import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
export default function GlobalSearch(){
     const { data, setData, errors, post, processing } = useForm({
          query: ''
     });
     const handleSubmit = (e) => {
          e.preventDefault();
     }

     return (<form onSubmit={handleSubmit} className="w-full">
          <div className="w-full">
               <TextInput
                    id="query"
                    name="query"
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