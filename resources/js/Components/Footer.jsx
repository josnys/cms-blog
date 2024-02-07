import Icon from "@/Components/Icon";

export default function Footer({ appData, copyrightYear }) {
     function mediaBrand(media){
          let socialClass = {logo: '', bg: ''};

          switch (media.toLowerCase()) {
               case 'twitter':
                    socialClass = {logo: 'stroke-white', bg: ''};
                    break;
               case 'facebook':
                    socialClass = { logo: 'fill-white stroke-blue-900', bg: 'bg-blue-900 p-2' }
                    break;
               case 'instagram':
                    socialClass = { logo: 'stroke-white stroke-1', bg: '' }
                    break;
               case 'tiktok':
                    socialClass = { logo: 'fill-white', bg: '' }
                    break;
               case 'youtube':
                    socialClass = { logo: 'fill-red-700', bg: 'bg-gray-100 p-2' }
                    break;
          
               default: socialClass = { logo: 'stroke-slate-500', bg: '' }
                    break;
          }
          return socialClass;
     }

     return (<footer className="w-full p-2 bg-white md:p-8">
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
                                   return <li key={`social${i}`} className={`flex items-center justify-center rounded ${mediaBrand(social.name).bg}`}>
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
     </footer>);
}