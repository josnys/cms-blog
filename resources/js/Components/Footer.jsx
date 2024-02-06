import Icon from "@/Components/Icon";

export default function Footer({ appData, copyrightYear }) {
     function mediaBrand(media){
          let socialClass = {logo: '', bg: ''};

          switch (media.toLowerCase()) {
               case 'twitter':
                    socialClass = {logo: 'stroke-white', bg: 'bg-black'};
                    break;
               case 'facebook':
                    socialClass = { logo: 'fill-blue-700', bg: 'bg-blue-300' }
                    break;
               case 'instagram':
                    socialClass = { logo: 'stroke-white stroke-1', bg: 'bg-gradient-to-tr from-red-600 to-yellow-400' }
                    break;
               case 'tiktok':
                    socialClass = { logo: 'fill-white', bg: 'bg-gray-800' }
                    break;
               case 'youtube':
                    socialClass = { logo: 'fill-red-700', bg: 'bg-gray-100' }
                    break;
          
               default: socialClass = { logo: 'stroke-slate-500', bg: 'bg-slate-100' }
                    break;
          }
          return socialClass;
     }

     return (<section className="w-full p-2 bg-white md:p-8">
          <div className="w-full border-t md:container md:mx-auto border-slate-200">
               <div className="w-full pt-4 md:grid md:grid-cols-3 md:gap-1 md:pt-8">
                    <h1 className="font-bold text-yellow-700 uppercase">{appData.name}</h1>
                    <div className="hidden md:flex md:justify-between text-slate-600">
                         <a href="#" className="w-full md:w-auto hover:underline">We're hiring</a>
                         <a href="#" className="w-full md:w-auto hover:underline">Terms of use</a>
                         <a href="#" className="w-full md:w-auto hover:underline">Enpak Media Kit</a>
                    </div>
                    <ul className="block mt-4 md:hidden">
                         <li><a href="#" className="w-full md:w-auto hover:underline">We're hiring</a></li>
                         <li><a href="#" className="w-full md:w-auto hover:underline">Terms of use</a></li>
                         <li><a href="#" className="w-full md:w-auto hover:underline">Enpak Media Kit</a></li>
                    </ul>
                    <div className="">
                         <p className="text-sm font-thin text-right text-yellow-800">Social Media Connect</p>
                         {appData.socials.length ? <ul className="flex justify-end mt-4 space-x-4">
                              {appData.socials.map((social, i) => {
                                   return <li key={`social${i}`} className={`p-1 md:p-2 rounded ${mediaBrand(social.name).bg}`}>
                                        <a href={social.value} target="_blank">
                                             <Icon name={social.name.toLowerCase()} className={`stroke-1 fill-none w-4 md:w-6 h-4 md:h-6 ${mediaBrand(social.name).logo}`} />
                                        </a>
                                   </li>
                              })}
                         </ul> : null}
                    </div>
               </div>
               <div className="w-full p-4 mt-4 text-sm text-center md:mt-6 text-slate-400">&copy; {copyrightYear} {appData.name} - All rights reserved</div>
          </div>
     </section>);
}