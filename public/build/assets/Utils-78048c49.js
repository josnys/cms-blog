function t(e){if(e.length==0)return"";for(var r={á:"a",à:"a",ä:"a",â:"a",Á:"A",À:"A",Â:"A",Ä:"A",é:"e",è:"e",ë:"e",ê:"e",É:"E",È:"E",Ê:"E",Ë:"E",í:"i",ì:"i",ï:"i",î:"i",Í:"I",Ì:"I",Ï:"I",Î:"I",ö:"o",ó:"o",ò:"o",ő:"o",ô:"o",Ö:"O",Ó:"O",Ő:"O",Ô:"O",ü:"u",ú:"u",ù:"u",ű:"u",û:"u",Ü:"U",Ú:"U",Ù:"U",Ű:"U",Û:"U",ç:"c",Ç:"C"," ":"-",".":"-","'":"","’":""},o=Object.keys(r),a=0;a<o.length;a++){var u=o[a],c=r[u];e=e.replace(u,c)}return e.toLowerCase().replace(/[^a-z0-9_-]/gi,"-")}export{t as createSlug};