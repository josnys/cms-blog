import Icon from '@/Components/Icon'; 

export default function CallToAction({ ctaData, ...props }) {
     return (<section className="w-full pt-20 pb-20 bg-white md:py-10">
          <div className="flex justify-center w-full">
               <div className="w-full p-2 text-center md:p-8 md:w-1/2 text-slate-700">
                    <h2 className="w-full mt-4 text-3xl font-semibold md:w-2/3 md:mx-auto md:text-5xl">Download the app</h2>
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
     </section>);
}