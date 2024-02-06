import { useForm } from '@inertiajs/react';
import GlobalSearch from "@/Components/GlobalSearch";
import Modal from '@/Components/Modal';
import AddButtonSimple from '@/Components/Front/AddButtonSimple';
import PublicationForm from '@/Components/Front/PublicationForm';

export default function CallToAction({appData, ctaData, ...props}){
     const { data, setData } = useForm({
          openModal: false,
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {
          setData('openModal', !data.openModal);
     }
     
     return (<section className="w-full pt-10 pb-40 bg-gradient-to-t from-orange-50 to-white">
          <div className="flex justify-center w-full">
               <div className="w-full p-4 text-center sm:w-1/2 sm:p-8 text-slate-700">
                    {appData.slogan ? <h2 className="w-3/4 mx-auto mt-4 text-5xl font-semibold sm:w-full">{appData.slogan}</h2> : null}
                    {appData.description ? <div className="mt-4 font-light sm:mt-8 text-slate-500" dangerouslySetInnerHTML={{ __html: appData.description }}></div> : null}
                    <div className="flex items-center justify-center w-full mt-8 space-x-4">
                         <a href={ctaData.android} className="px-2 py-1 text-xs font-medium bg-white border rounded-full sm:text-sm sm:px-4 sm:py-2 border-slate-300">Download For Android</a>
                         <a href={ctaData.ios} className="px-2 py-1 text-xs font-medium bg-yellow-800 border border-yellow-700 rounded-full sm:text-sm sm:px-4 sm:py-2 text-yellow-50">Download For iOS</a>
                    </div>
               </div>
          </div>
          <div className="w-full">
               <div className="container mx-auto">
                    <div className="w-full p-4 md:flex md:items-center">
                         <div className="font-medium text-center text-md md:text-lg lg:text-2xl text-slate-600 md:text-left md:w-2/5">{ctaData.extra}</div>
                         <div className="items-center w-full mt-4 space-x-2 md:mt-0 md:flex md:space-x-4 md:justify-between md:p-0 md:w-3/5">
                              <div className="w-full md:w-4/6">
                                   <GlobalSearch />
                              </div>
                              <div className="flex justify-center w-full mt-4 md:w-2/6 md:mt-0">
                                   <AddButtonSimple link="#" onClick={handleModal}>Add Publication</AddButtonSimple>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <Modal show={data.openModal}>
               <div className="flex items-center justify-between w-full">
                    <h2 className="p-4 text-lg font-medium text-center text-gray-700 md:text-left">Add a publication</h2>
                    <div className="px-2 py-1 text-sm text-yellow-700 cursor-pointer" onClick={handleModal}>x close</div>
               </div>
               <p className="p-4 text-slate-500">Content to be added</p>
               <PublicationForm formSuccess={handleModal} />
          </Modal>
     </section>);
}