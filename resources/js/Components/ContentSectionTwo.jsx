import Icon from "@/Components/Icon";

export default function ContentSectionTwo({ content, className = '' }) {
     let cover = content.cover;
     if (cover) {
          if (cover.url) {
               cover = content.cover.url.external ? content.cover.url.external : content.cover.url.large;
          }
     }
     
     return (<section id={content.id ?? ''} className={`w-full p-4 mt-4 ${className}`}>
          <div className="w-full py-4 md:container md:col-span-12 md:py-8 md:mx-auto">
               <div className="w-full md:flex md:space-x-4 text-slate-600">
                    <div className="w-full md:w-1/2">
                         <h1 className="text-2xl font-medium md:text-4xl">{content.name}</h1>
                         {content.intro ? <article className="w-full prose text-justify text-slate-500 max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.intro }}></article> : null}
                         {cover ? <img src={cover} className="object-cover object-center w-full mt-4 h-60 rounded-xl" /> : null}
                    </div>
                    <div className="relative w-full h-64 mt-4 md:mt-0 md:h-96 md:w-1/2">
                         <div className="absolute top-0 z-10 w-full h-[25px] bg-gradient-to-b from-white to-transparent"></div>
                         <div className="h-full overflow-y-auto md:h-96">
                              <article
                                   className="w-full prose text-justify max-w-none prose-md prose-p:bg-white prose-p:p-4 prose-p:border-l-4 prose-p:border-yellow-800"
                                   dangerouslySetInnerHTML={{ __html: content.body }}
                              ></article>
                         </div>
                         <div className="absolute bottom-0 z-10 w-full h-[25px] bg-gradient-to-t from-white to-transparent flex justify-end">
                              <Icon name={'chevron-up-and-down'} className={'w-8 h-8 mr-4 mb-2 stroke-yellow-700 stroke-2 animate-bounce'} />
                         </div>
                    </div>
               </div>
          </div>
     </section>);
}