import React, { useEffect, useRef } from 'react';

export default function MapDisplay({ mapData, ...props }) {
     console.log(mapData);
     const googleMapRef = useRef();
     useEffect(() => {
          const googleMapScript = document.createElement('script');
          googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${'AIzaSyBR3hWMipMRMEc8it4HQaP7Vm7isx8GPwQ'}&libraries=places&language=en`;
          googleMapScript.async = true;
          window.document.body.appendChild(googleMapScript);
          googleMapScript.addEventListener('load', () => { createGoogleMap() });
     }, [mapData]);

     function createGoogleMap(){
          let googleMap = new window.google.maps.Map(googleMapRef.current, {
               zoom: 5,
               center: { lat: 40.423584474953735, lng: - 99.95230011373597, },
               disableDefaultUI: true,
          });

          {
               mapData.map((dmap, i) => {
                    let contentString = `<div key='marker${i}' className="">
                         <h2 className="text-gray-700 font-bodl text-md">${dmap.name}</h2>
                    </div>`;

                    let infowindow = new window.google.maps.InfoWindow({ content: contentString });

                    let position = { lat: parseFloat(dmap.location?.lat), lng: parseFloat(dmap.location?.lon) };
                    let mapMarker = new window.google.maps.Marker({
                         position: position,
                         map: googleMap,
                         animation: window.google.maps.Animation.DROP,
                         title: `${dmap.name}`,
                         icon: dmap.marker,
                    });
                    mapMarker.addListener("click", () => {
                         infowindow.open(googleMap, mapMarker);
                    });
               })
          }
     }

     return <div className="w-full p-1 m-2 bg-white shadow-lg md:m-4 md:p-3 rounded-xl shadow-slate-300 h-[300px] md:h-[500px]">
          <div id="google-map" ref={googleMapRef} className="rounded-xl" style={{ width: '100%', height: '100%' }} />
     </div>
}