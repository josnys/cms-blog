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

     if (name === 'facebook') {
          return (
               <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M7.28,3.33a.08.08,0,0,1-.09.08H6.51a.31.31,0,0,0-.31.31v.7h1a.08.08,0,0,1,.08.09l-.08,1a.1.1,0,0,1-.09.08H6.2V8.9A.09.09,0,0,1,6.12,9H4.89A.09.09,0,0,1,4.8,8.9V5.59H4.19a.08.08,0,0,1-.08-.09v-1a.08.08,0,0,1,.08-.09H4.8v-1A1.23,1.23,0,0,1,6,2.25H7.19a.09.09,0,0,1,.09.08ZM5.7,0A5.67,5.67,0,0,0,0,5.61a5.67,5.67,0,0,0,5.7,5.62,5.67,5.67,0,0,0,5.7-5.62A5.67,5.67,0,0,0,5.7,0" />
               </svg>
          );
     }

     if (name === 'twitter') {
          return (
               <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2.36,7.68h.09a2.72,2.72,0,0,0,1.13-.15,1.73,1.73,0,0,0,.75-.38h0l-.14,0a1.48,1.48,0,0,1-1.09-.9s0-.06,0,0a1.48,1.48,0,0,0,.51,0,.49.49,0,0,1-.17-.06A1.37,1.37,0,0,1,2.61,5c0-.06,0-.1,0-.15s0,0,0,0A1.29,1.29,0,0,0,3.18,5L3,4.82A1.36,1.36,0,0,1,2.78,3.2s0,0,.07,0A4.28,4.28,0,0,0,5.59,4.57s0,0,0,0a1.5,1.5,0,0,1,0-.56,1.52,1.52,0,0,1,.27-.54,1.47,1.47,0,0,1,.46-.36A1.33,1.33,0,0,1,7.51,3a1.29,1.29,0,0,1,.39.23L8,3.32a0,0,0,0,0,0,0,3.21,3.21,0,0,0,.8-.3h0s0,0,0,0a1.27,1.27,0,0,1-.23.41c-.06.07-.22.27-.33.28A2.55,2.55,0,0,0,9,3.57s0,0,0,0H9a.16.16,0,0,1,0,.11,2.66,2.66,0,0,1-.52.54s-.09,0-.09.09A4,4,0,0,1,7.27,7.25a4,4,0,0,1-3.9.9,3.46,3.46,0,0,1-.75-.3l-.24-.13s0,0,0,0M5.7,11.23a5.67,5.67,0,0,0,5.7-5.62A5.67,5.67,0,0,0,5.7,0,5.67,5.67,0,0,0,0,5.61a5.67,5.67,0,0,0,5.7,5.62" />
               </svg>
          );
     }

     if (name === 'instagram') {
          return (
               <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor">
                    <path d="M18.06,14.8c-0.01,1.68-1.38,3.04-3.07,3.03c-0.01,0-0.01,0-0.02,0H9.07C7.38,17.84,6.01,16.49,6,14.8
                         c0,0,0,0,0,0V8.98c0.01-1.69,1.38-3.05,3.07-3.05h5.91c1.69-0.01,3.08,1.35,3.09,3.05c0,0,0,0,0,0V14.8z M19.46,8.98
                         c0.01-2.46-1.97-4.46-4.42-4.47c-0.02,0-0.04,0-0.06,0H9.07C6.61,4.49,4.6,6.46,4.58,8.92c0,0.02,0,0.04,0,0.06v5.82
                         c0.07,2.42,2.06,4.34,4.49,4.32h5.91c2.42,0.02,4.42-1.9,4.49-4.32V8.98z M12.05,14.3c-1.28-0.02-2.3-1.08-2.27-2.36
                         c0.02-1.28,1.08-2.3,2.36-2.27c1.26,0.02,2.27,1.05,2.28,2.32C14.4,13.28,13.34,14.31,12.05,14.3
                         C12.05,14.3,12.05,14.3,12.05,14.3 M12.05,8.35c-2.01,0.02-3.61,1.67-3.59,3.67s1.67,3.61,3.67,3.59
                         c1.99-0.02,3.59-1.64,3.59-3.63C15.71,9.97,14.07,8.34,12.05,8.35C12.05,8.35,12.05,8.35,12.05,8.35 M15.93,7.27
                         c-0.47-0.01-0.86,0.36-0.88,0.83c0,0.01,0,0.01,0,0.02c0,0.48,0.39,0.88,0.88,0.88c0.48,0,0.88-0.39,0.88-0.88
                         c0-0.47-0.38-0.86-0.86-0.86C15.95,7.27,15.94,7.27,15.93,7.27 M11.95,23.63C5.47,23.67,0.19,18.46,0.13,11.99
                         C0.19,5.51,5.47,0.3,11.95,0.34C18.42,0.3,23.7,5.51,23.76,11.99C23.7,18.46,18.42,23.67,11.95,23.63"/>
               </svg>
          );
     }

     if(name === 'bars-3'){
          return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>);
     }

     return null;
}