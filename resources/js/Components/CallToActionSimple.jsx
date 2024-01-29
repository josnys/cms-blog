export default function CallToAction({ ctaData, ...props }) {

     return (<section className="w-full pt-20 pb-20 bg-white md:py-10">
          <div className="flex justify-center w-full">
               <div className="w-full p-2 text-center md:p-8 md:w-1/2 text-slate-700">
                    <h2 className="w-full mt-4 text-3xl font-semibold md:w-2/3 md:mx-auto md:text-5xl">Download the app</h2>
                    <p className="mt-4 text-slate-500">Select your preferred app store to download our latest version.</p>
                    <div className="flex items-center justify-center w-full mt-4 space-x-4 md:mt-8">
                         <a href={ctaData.android} className="px-2 py-1 text-xs font-medium bg-white border rounded-full md:text-md md:px-4 md:py-2 border-slate-300">Download For Android</a>
                         <a href={ctaData.ios} className="px-2 py-1 text-xs font-medium bg-yellow-800 border border-yellow-700 rounded-full md:text-md md:px-4 md:py-2 text-yellow-50">Download For iOS</a>
                    </div>
               </div>
          </div>
     </section>);
}