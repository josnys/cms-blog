import SubscribeForm from "@/Components/Front/SubscribeForm";

export default function NewsLetterUpdate({newsletters}) {
     let featured = {};
     let lists = [];
     for(let i = 0; i < newsletters.length; i++){
          if(i == 0){
               featured = newsletters[i];
          }else{
               lists.push(newsletters[i]);
          }
     }
     return <section className="w-full py-8">
          <div className="w-full md:container md:mx-auto text-slate-600">
               <h2 className="pl-4 text-2xl font-medium md:text-4xl md:p-0">Newsletter Updates</h2>
               <div className="w-full p-4 mt-0 md:mt-4 md:p-0 md:flex md:divide-x">
                    <div className="w-full md:w-2/3 md:pr-8">
                         {featured.cover ? <img src={featured.cover} className="object-cover object-center w-full h-64 mt-4 rounded-xl" /> : null}
                         <h3 className="mt-4 text-xl font-medium md:text-2xl">{featured.title}</h3>
                         <div className="w-full prose text-slate-500 max-w-none prose-md line-clamp-2" dangerouslySetInnerHTML={{ __html: featured.intro }}></div>
                    </div>
                    <div className="mt-2 md:mt-0 md:grid md:w-1/3 md:grid-cols-1 md:gap-2 md:pl-8">
                         {lists.map((content, i) => {
                              return <div className="py-2 border-t border-slate-200 md:border-none md:pt-0" key={`nlfeat${i}`}>
                                   <h3 className="text-lg font-medium md:text-xl">{content.title}</h3>
                                   <div className="w-full prose text-slate-500 max-w-none prose-md line-clamp-2" dangerouslySetInnerHTML={{ __html: content.intro }}></div>
                              </div>
                         })}
                         <SubscribeForm />
                    </div>
               </div>
          </div>
     </section>
}