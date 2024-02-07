import React from "react";

export default ({ name, className }) => {
     if(name === 'home'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>);
     }

     if(name === 'user') {
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>);
     }

     if(name === 'user-group'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>);
     }

     if(name === 'edit'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>);
     }

     if(name === 'key'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>);
     }

     if(name === 'vertical-dots'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>);
     }

     if(name === 'chevron-down'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>);
     }

     if (name === 'chevron-left') {
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>);
     }

     if (name === 'chevron-right') {
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>);
     }

     if(name === 'plus-small'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>);
     }

     if(name === 'finger-print'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
          </svg>);
     }

     if(name === 'cake'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
          </svg>);
     }

     if(name === 'mail'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>);
     }

     if(name === 'news-paper'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
          </svg>);
     }

     if(name === 'rectangle-stack'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
          </svg>);
     }

     if(name === 'photo'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>);
     }

     if(name === 'cog') {
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>);
     }

     if(name === 'clipboard-document'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
          </svg>);
     }

     if(name === 'facebook') {
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
          </svg>);
     }

     if (name === 'twitter') {
          // return (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          //      <path d="M 13.6875 9.734375 L 22.25 0 L 20.222656 0 L 12.785156 8.453125 L 6.847656 0 L 0 0 L 8.980469 12.78125 L 0 22.988281 L 2.027344 22.988281 L 9.878906 14.0625 L 16.152344 22.988281 L 23 22.988281 Z M 10.910156 12.894531 L 10 11.621094 L 2.761719 1.492188 L 5.875 1.492188 L 11.71875 9.667969 L 12.628906 10.9375 L 20.222656 21.5625 L 17.105469 21.5625 Z M 10.910156 12.894531"></path>
          // </svg>);
          return (<div className="p-2 rounded-md bg-cyan-100">
               <svg width="1.5em" height="1.5em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4.2145C18.3385 4.5075 17.627 4.703 16.8765 4.7955C17.6395 4.3425 18.2265 3.62 18.502 2.7665C17.788 3.185 16.997 3.4925 16.1555 3.6545C15.4835 2.942 14.525 2.5 13.463 2.5C11.423 2.5 9.76954 4.139 9.76954 6.16C9.76954 6.446 9.80304 6.7245 9.86604 6.995C6.79704 6.841 4.07504 5.382 2.25404 3.168C1.93404 3.709 1.75403 4.3425 1.75403 5.011C1.75403 6.2815 2.40454 7.4 3.39654 8.059C2.79104 8.0405 2.22104 7.872 1.72203 7.602C1.72203 7.613 1.72203 7.6295 1.72203 7.645C1.72203 9.4205 2.99553 10.899 4.68353 11.2355C4.37503 11.32 4.04903 11.367 3.71303 11.367C3.47453 11.367 3.24204 11.34 3.01704 11.2995C3.48704 12.7505 4.85053 13.811 6.46603 13.8425C5.20203 14.8225 3.61003 15.4095 1.87903 15.4095C1.58003 15.4095 1.28754 15.3925 0.998535 15.3575C2.63404 16.393 4.57603 17 6.66053 17C13.453 17 17.169 11.422 17.169 6.583C17.169 6.4245 17.164 6.2665 17.1565 6.1105C17.8815 5.5985 18.5065 4.9525 19 4.2145Z" fill="#03A9F4" />
               </svg>
          </div>);
     }

     if (name === 'instagram') {
          // return (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          //      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
          // </svg>);
          return (<div className="p-2 bg-pink-100 rounded-md">
               <svg width="1.5em" height="1.5em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_303)">
                         <path d="M15.5649 19.9946L4.45383 20.0052C2.00939 20.0074 0.00771998 18.0096 0.0049422 15.5652L-0.00561338 4.45408C-0.0078356 2.00963 1.98994 0.00796412 4.43439 0.00518634L15.5455 -0.00536924C17.9899 -0.00759146 19.9916 1.99019 19.9944 4.43463L20.0049 15.5457C20.0077 17.9907 18.0094 19.9924 15.5649 19.9946Z" fill="url(#paint0_radial_78_303)" />
                         <path d="M15.5649 19.9946L4.45383 20.0052C2.00939 20.0074 0.00771998 18.0096 0.0049422 15.5652L-0.00561338 4.45408C-0.0078356 2.00963 1.98994 0.00796412 4.43439 0.00518634L15.5455 -0.00536924C17.9899 -0.00759146 19.9916 1.99019 19.9944 4.43463L20.0049 15.5457C20.0077 17.9907 18.0094 19.9924 15.5649 19.9946Z" fill="url(#paint1_radial_78_303)" />
                         <path d="M9.99997 13.8891C7.85608 13.8891 6.11108 12.1447 6.11108 10.0002C6.11108 7.85577 7.85608 6.11133 9.99997 6.11133C12.1439 6.11133 13.8889 7.85577 13.8889 10.0002C13.8889 12.1447 12.1439 13.8891 9.99997 13.8891ZM9.99997 7.22244C8.46831 7.22244 7.2222 8.46855 7.2222 10.0002C7.2222 11.5319 8.46831 12.778 9.99997 12.778C11.5316 12.778 12.7778 11.5319 12.7778 10.0002C12.7778 8.46855 11.5316 7.22244 9.99997 7.22244Z" fill="white" />
                         <path d="M14.1666 6.66667C14.6268 6.66667 14.9999 6.29357 14.9999 5.83333C14.9999 5.3731 14.6268 5 14.1666 5C13.7063 5 13.3333 5.3731 13.3333 5.83333C13.3333 6.29357 13.7063 6.66667 14.1666 6.66667Z" fill="white" />
                         <path d="M13.3333 17.2223H6.6666C4.52271 17.2223 2.77771 15.4778 2.77771 13.3334V6.66672C2.77771 4.52228 4.52271 2.77783 6.6666 2.77783H13.3333C15.4772 2.77783 17.2222 4.52228 17.2222 6.66672V13.3334C17.2222 15.4778 15.4772 17.2223 13.3333 17.2223ZM6.6666 3.88894C5.13493 3.88894 3.88882 5.13505 3.88882 6.66672V13.3334C3.88882 14.8651 5.13493 16.1112 6.6666 16.1112H13.3333C14.8649 16.1112 16.111 14.8651 16.111 13.3334V6.66672C16.111 5.13505 14.8649 3.88894 13.3333 3.88894H6.6666Z" fill="white" />
                    </g>
                    <defs>
                         <radialGradient id="paint0_radial_78_303" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.43328 20.0196) scale(24.9439)">
                              <stop stopColor="#FFDD55" />
                              <stop offset="0.328" stopColor="#FF543F" />
                              <stop offset="0.348" stopColor="#FC5245" />
                              <stop offset="0.504" stopColor="#E64771" />
                              <stop offset="0.643" stopColor="#D53E91" />
                              <stop offset="0.761" stopColor="#CC39A4" />
                              <stop offset="0.841" stopColor="#C837AB" />
                         </radialGradient>
                         <radialGradient id="paint1_radial_78_303" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.21439 -0.255201) scale(16.5628 11.0358)">
                              <stop stopColor="#4168C9" />
                              <stop offset="0.999" stopColor="#4168C9" stopOpacity="0" />
                         </radialGradient>
                         <clipPath id="clip0_78_303">
                              <rect width="20" height="20" fill="white" />
                         </clipPath>
                    </defs>
               </svg>
          </div>);
     }

     if(name === 'tiktok'){
          // return (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          //      <path d="M17.0725 0.5H13.0278V16.8478C13.0278 18.7957 11.4722 20.3957 9.53626 20.3957C7.60034 20.3957 6.04469 18.7957 6.04469 16.8478C6.04469 14.9348 7.56577 13.3695 9.43257 13.3V9.19567C5.31872 9.2652 2 12.6391 2 16.8478C2 21.0913 5.38786 24.5 9.57085 24.5C13.7538 24.5 17.1416 21.0565 17.1416 16.8478V8.4652C18.6627 9.57827 20.5295 10.2391 22.5 10.2739V6.16957C19.4579 6.06522 17.0725 3.56087 17.0725 0.5Z"></path>
          // </svg>);
          return (<div className="p-2 bg-gray-200 rounded-md">
               <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 290" >
                    <path fill="#FF004F" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67.115 67.115 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40.008 40.008 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.313 40.313 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.268 40.268 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9" />
                    <path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z" />
                    <path fill="#00F2EA" d="M242.075 76.63V66.516a66.285 66.285 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a67.788 67.788 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a88.787 88.787 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833" />
               </svg>
          </div>);
     }

     if(name === 'youtube'){
          return (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
               <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
          </svg>);
     }

     if(name === 'linkedin'){
          return (<div className="p-2 bg-blue-100 rounded-md">
               <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256">
                    <g fill="none">
                         <rect width="256" height="256" fill="#fff" rx="60" />
                         <rect width="256" height="256" fill="#0A66C2" rx="60" />
                         <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
                    </g>
               </svg>
          </div>);
     }

     if(name === 'enpak'){
          return (<div className="p-2 rounded-md bg-neutral-200">
               <svg width="1.5em" height="1.5em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.69792 8.22772C7.63126 8.46105 3.31792 9.46771 2.59792 11.6277C1.87792 13.7877 5.17508 13.7603 6.57508 13.627C5.47508 14.427 3.91791 15.2877 4.79791 16.7277C5.77508 18.3267 8.07508 18.827 10.1979 18.6277C12.1664 18.443 16.0667 18.1333 16.6667 13.3333C16.7865 12.3746 17.0834 10.4167 16.6667 9.16667C14.2386 8.49455 13.8 6.09983 13.8 6.09983C11.7249 7.1727 10.6 6.79983 9.27511 5.12695C8.10002 6.39983 7.20002 6.69983 5.47511 6.22697C5.09791 7.12697 3.86074 7.89983 2.47512 7.99983C2.30004 8.49983 2.35227 9.02695 2.47509 9.52695" stroke="#745E27" strokeWidth="1.25"/>
                    <path d="M3.51721 6.21196C3.22749 6.4082 2.87723 6.47679 2.5624 6.43969C2.23723 6.40137 2.01859 6.26165 1.9265 6.12569C1.8412 5.99976 1.8089 5.80313 1.90166 5.54529C1.99424 5.28794 2.20281 5.00779 2.52291 4.79097C2.84301 4.57415 3.18055 4.48441 3.45388 4.49391C3.72773 4.50343 3.89835 4.60638 3.98365 4.73231C4.08241 4.87812 4.13303 5.13286 4.05853 5.43458C3.98615 5.72772 3.80521 6.01689 3.51721 6.21196Z" stroke="#745E27"/>
                    <path d="M7.09136 4.82868C6.62595 4.95706 6.11702 4.87282 5.69102 4.65411C5.25303 4.42925 4.98571 4.10773 4.91521 3.85213C4.8497 3.61466 4.91188 3.31705 5.1597 3.01173C5.40676 2.70736 5.81486 2.43245 6.33386 2.28929C6.85285 2.14614 7.34418 2.17295 7.71234 2.30762C8.08164 2.44272 8.2876 2.66636 8.35311 2.90384C8.42843 3.17691 8.37433 3.58965 8.1426 3.98976C7.9165 4.38015 7.55284 4.70139 7.09136 4.82868Z" stroke="#745E27"/>
                    <path d="M15.6727 6.54482C15.3904 6.22564 15.3358 5.933 15.3747 5.68747C15.4164 5.42355 15.5769 5.15584 15.8206 4.94022C15.9824 4.79714 16.239 4.72825 16.5733 4.80098C16.9072 4.87363 17.2805 5.08417 17.5916 5.43589C17.865 5.74489 18.0054 6.20248 18.0012 6.66115C17.9969 7.13531 17.8422 7.48477 17.6791 7.62903C17.6492 7.65549 17.5922 7.68665 17.4613 7.67854C17.3234 7.67001 17.1391 7.61811 16.9197 7.51225C16.4813 7.30071 16.0098 6.92593 15.6727 6.54482Z" stroke="#745E27"/>
                    <path d="M11.8511 5.00914C11.3053 4.9033 10.8342 4.54092 10.5144 4.07937C10.186 3.60532 10.0758 3.11462 10.1339 2.81529C10.1849 2.55229 10.3996 2.28754 10.8202 2.10828C11.2375 1.93039 11.808 1.86445 12.4258 1.98426C13.0437 2.10407 13.5481 2.37846 13.8687 2.69945C14.1918 3.02291 14.292 3.34873 14.241 3.61174C14.1823 3.91434 13.8992 4.32934 13.4244 4.64589C12.9619 4.95429 12.3961 5.11482 11.8511 5.00914Z" stroke="#745E27"/>
               </svg>
          </div>);
     }

     if(name === 'bars-3'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>);
     }

     if(name === 'search'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>);
     }

     return null;
}