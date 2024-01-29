export default function ContentSectionTwo({ content, className = '' }) {
     return (<section id={content.id ?? ''} className={`w-full p-4 mt-4 ${className}`}>
          <div className="w-full py-4 md:container md:col-span-12 md:py-8 md:mx-auto">
               <div className="w-full md:flex md:space-x-4 text-slate-600">
                    <div className="w-full md:w-1/2">
                         <h1 className="text-2xl font-medium md:text-4xl">{content.name}</h1>
                         {content.intro ? <article className="w-full prose text-justify text-slate-500 max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.intro }}></article> : null}
                         {content.cover ? <img src={content.cover} className="object-cover object-center w-full h-40 mt-4 rounded-xl" /> : null}
                    </div>
                    <div className="w-full mt-4 md:mt-0 md:w-1/2">
                         <article className="w-full prose text-justify max-w-none prose-md prose-p:bg-white prose-p:p-4 prose-p:border-l-4 prose-p:border-yellow-800" dangerouslySetInnerHTML={{ __html: content.body }}></article>
                    </div>
               </div>
          </div>
     </section>);
}