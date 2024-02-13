import { useForm } from '@inertiajs/react';
import GlobalSearch from "@/Components/GlobalSearch";
import Modal from '@/Components/Modal';
import AddButtonSimple from '@/Components/Front/AddButtonSimple';
import PublicationForm from '@/Components/Front/PublicationForm';
import Icon from '@/Components/Icon';

export default function CallToAction({appData, ctaData, gsearchPubData, ...props}){
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

     const searchQuery = (q) => {
          gsearchPubData(q);
     }
     
     return (<section className="w-full pt-10 pb-40 md:pb-56 bg-gradient-to-t from-orange-50 to-white">
          <div className="flex justify-center w-full">
               <div className="w-full p-4 text-center sm:w-1/2 sm:p-8 text-slate-700">
                    {appData.slogan ? <h2 className="w-3/4 mx-auto mt-4 text-5xl font-semibold sm:w-full">{appData.slogan}</h2> : null}
                    {appData.description ? <div className="mt-4 font-light sm:mt-8 text-slate-500" dangerouslySetInnerHTML={{ __html: appData.description }}></div> : null}
                    <div className="flex items-center justify-center w-full mt-8 space-x-4">
                         <a href={ctaData.android} className="flex items-center justify-center px-2 py-1 space-x-1 text-xs font-medium bg-white border rounded-full sm:text-sm sm:px-4 sm:py-2 border-slate-300">
                              <Icon name="android" className={'w-4 h-4 md:w-6 md:h-6'} /> <span>Get it on Google Play</span>
                         </a>
                         <a href={ctaData.ios} className="flex items-center justify-center px-2 py-1 space-x-1 text-xs font-medium bg-yellow-800 border border-yellow-700 rounded-full sm:text-sm sm:px-4 sm:py-2 text-yellow-50">
                              <Icon name="apple" className={'w-4 h-4 md:w-6 md:h-6 fill-white'} /> <span>Download on the App Store</span>
                         </a>
                    </div>
               </div>
          </div>
          <div className="w-full">
               <div className="container mx-auto">
                    <div className="w-full p-4 md:flex md:items-center">
                         <div className="font-medium text-center text-md md:text-lg lg:text-2xl text-slate-600 md:text-left md:w-2/5">{ctaData.extra}</div>
                         <div className="items-center w-full mt-4 space-x-2 md:mt-0 md:flex md:space-x-4 md:justify-between md:p-0 md:w-3/5">
                              <div className="w-full md:w-4/6">
                                   <GlobalSearch searchQuery={searchQuery} />
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
               <p className="px-4 text-slate-500">We're dedicated to providing comprehensive local news coverage on the Enpak app. If you don't see your preferred local publication featured, we encourage you to submit it for review. Your input helps us ensure that our platform reflects the diverse range of news sources in communities everywhere. Thank you for helping us make Enpak a valuable resource for all users.</p>
               <PublicationForm formSuccess={handleModal} />
          </Modal>
     </section>);
}