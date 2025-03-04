import*as se from"@dropins/tools/preact-compat.js";import{useState as Q,Children as re,useRef as ye,useMemo as ve,useEffect as ee,useCallback as X}from"@dropins/tools/preact-compat.js";import{debounce as ge,classes as g,VComponent as U,toLanguageTag as Ne,Slot as z}from"@dropins/tools/lib.js";import{Button as we,Icon as be,Price as Se,Picker as Ve,ColorSwatch as He,ImageSwatch as qe,TextSwatch as ze,Incrementer as Ge,Breadcrumbs as je,Image as xe}from"@dropins/tools/components.js";import{jsxs as W,jsx as r,Fragment as Pe}from"@dropins/tools/preact-jsx-runtime.js";import{useText as V}from"@dropins/tools/i18n.js";import{c as $e,d as Oe}from"../chunks/getRefinedProduct.js";import{events as Fe}from"@dropins/tools/event-bus.js";import{c as Be}from"../chunks/initialize.js";import"@dropins/tools/fetch-graphql.js";const Ke=e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Qe=e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),se.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),me=({show:e=1,scrollbar:o=!1,peak:p=!1,arrows:b=!1,controls:s="dots",arrowsOnMainImage:P=!1,loop:u=!1,gap:A=null,direction:l="horizontal",width:G="100%",height:i="100%",defaultIndex:v=0,className:R,children:H,thumbnails:Z=null,isZoomed:N,...w})=>{const m=V("PDP.Carousel.label").label,n=V("PDP.Carousel.Slide.label").label,D=V("PDP.Carousel.Previous.label").label,M=V("PDP.Carousel.Next.label").label,y=V("PDP.Carousel.Controls.label").label,J=V("PDP.Carousel.Controls.Button.label").label,[t,te]=Q(()=>Ie(e)),O=Math.ceil(re.toArray(H).length/t),j={small:16,medium:24,large:64},T=p?24:0,F=A?j[A]:0,x=re.toArray(H).length%t,ne=16,C=2,le="32",[E,Y]=Q(u?v+1:v),q=ye([]),[K,he]=Q(0),[de,pe]=Q(0),oe=ve(()=>re.toArray(Z),[Z]),a=ve(()=>{const c=re.toArray(H).reduce((d,L,S)=>S%t===0?[...d,[L]]:[...d.slice(0,-1),[...d[d.length-1],L]],[]);return!u||c.length===1?c:u&&re.toArray(H).length%t===0?[c[O-1]].concat(c).concat([c[0],c[1]]):[re.toArray(H).slice(-t)].concat(c).concat([c[0],c[1]])},[H,t,O,u]),_=ye(null),f=ye(null),h=s==="thumbnailsRow"||s==="thumbnailsColumn";ee(()=>{const c=document.body,d=ge(()=>{var k,Ae;he(((k=_.current)==null?void 0:k.offsetWidth)??0),pe(((Ae=_.current)==null?void 0:Ae.offsetHeight)??0);const S=window.innerWidth,B=Ie(e,S);B!==t&&te(B)},50),L=new ResizeObserver(d);return L.observe(c),()=>{L.unobserve(c)}},[t,e]);const $=X(c=>{const d=u?c-1:c,L=q==null?void 0:q.current[0],S=(L==null?void 0:L.offsetWidth)+ne,B=(L==null?void 0:L.offsetHeight)+ne,k=f.current;s==="thumbnailsRow"&&(k!=null&&k.offsetWidth)&&(S*(d+1)>k.offsetWidth&&(k.style.scrollBehavior="smooth",k.scrollLeft=(d+C)*S),k.scrollLeft>S*d&&(k.style.scrollBehavior="smooth",k.scrollLeft=(d-C)*S)),s==="thumbnailsColumn"&&(k!=null&&k.offsetHeight)&&(B*(d+1)>k.offsetHeight&&(k.style.scrollBehavior="smooth",k.scrollTop=(d+C)*B),k.scrollTop>B*d&&(k.style.scrollBehavior="smooth",k.scrollTop=(d-C)*B))},[s,u]),I=X((c,d,L)=>{(s==="thumbnailsRow"||s==="thumbnailsColumn")&&$(c);const S=_.current,B=T?S.offsetWidth-T:S.offsetWidth-T+F;if(!Array.from(S.querySelectorAll("[data-index]")).filter(_e=>{const ie=Number(_e.getAttribute("data-index"));return!isNaN(ie)&&ie>-1})[c])return;if(L){const _e=c===0?O:0,ie=B*(O+(x||t)/t);if(S.scrollLeft>=0&&S.scrollLeft<B-5){I(1,!0);return}if(S.scrollLeft>ie-B&&S.scrollLeft<=ie){I(O,!0);return}S.style.scrollBehavior="auto",S.scrollLeft=_e===0?0:ie,I(_e===0?1:O,!0);return}const Ue=(S.offsetWidth-F)/t*a[c].length-T;S.style.scrollBehavior=d?"smooth":"auto",S.scrollLeft=a[c].length===t?B*c:B*(c-1)+Ue},[F,O,T,t,x,a,$,s]),ae=X(()=>{if(u){const d=E-1;I(d,!0,E===1);return}const c=E<=0?0:E-1;I(c,!0)},[E,I,u]),ce=X(()=>{const c=a.length-1;if(u){const L=E+1;I(L,!0,E===O);return}const d=E>=c?c:E+1;I(d,!0)},[a.length,u,E,I,O]);ee(()=>{const c=d=>{d.key==="ArrowLeft"&&(d.preventDefault(),ae()),d.key==="ArrowRight"&&(d.preventDefault(),ce())};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[ce,ae]),ee(()=>{I(u?v+1:v,!1)},[v,I,u]);const fe=ge(()=>{const c=_.current,d=T?c.offsetWidth-T:c.offsetWidth-T+F,L=c.scrollLeft/d,S=Math.round(L)-L<1?Math.round(L):Math.ceil(L);if(h&&$(S),u){const B=d*(O+(x||t)/t);if(Math.ceil(c.scrollLeft)>=Math.ceil(B)-5){c.style.scrollBehavior="auto",c.scrollLeft=c.offsetWidth*1+(Math.ceil(c.scrollLeft)-Math.ceil(B)-T);return}if(c.scrollLeft===0){c.style.scrollBehavior="auto",c.scrollLeft=B-c.offsetWidth+T;return}}E!==S&&Y(S)},100);ee(()=>{const c=_.current;return c==null||c.addEventListener("scroll",fe),()=>{c==null||c.removeEventListener("scroll",fe)}},[fe]);const ue=(c,d,L)=>r(we,{className:g([["pdp-carousel__button",!c],[`pdp-carousel__button--${d}`,!c],[`pdp-carousel__button--${s}`,c]]),style:{"--height":`${de}px`},variant:"tertiary","aria-label":d==="next"?M:D,onClick:L,disabled:u?!1:d==="next"?E>=a.length-1:E<1,children:r(be,{className:g([["pdp-carousel__button__icon",!c],[`pdp-carousel__button__icon--${d}`,!c],[`pdp-carousel__button__icon--${s}--${d}`,c]]),size:le,source:Ke})}),Le=b&&a.length!=1&&ue(h,"prev",ae),De=b&&a.length!=1&&ue(h,"next",ce),We=b&&a.length!=1&&ue(!1,"prev",ae),Te=b&&a.length!=1&&ue(!1,"next",ce);return W("div",{role:"region","aria-roledescription":m,className:g(["pdp-carousel",["pdp-carousel--main-image-controls",P],["pdp-carousel--arrows",b&&!h],[`pdp-carousel--${s}`,h],R]),style:{"--flex-carousel":s==="thumbnailsColumn"?"row-reverse":"column","--gap":h?"0":"var(--spacing-small)","--width":G},...w,children:[r("div",{ref:_,className:g(["pdp-carousel__wrapper",`pdp-carousel__wrapper--${l}`,["pdp-carousel__wrapper--scrollbar",o],["pdp-carousel__wrapper--peak",p]]),style:{"--total-width":s==="thumbnailsColumn"?"81.6%":"100%","--height":s==="thumbnailsColumn"?"auto":i,"--gap":A?`var(--spacing-${A})`:"0px","--per-page":t},tabIndex:0,children:a.map((c,d)=>{const L=c.length<t;return r("div",{role:"group","aria-roledescription":n,"data-index":d,className:g(["pdp-carousel__slide",`pdp-carousel__slide--${l}`,["pdp-carousel__slide--active",E===d],["pdp-carousel__slide--orphan",L]]),style:{"--length":c.length},children:c},d)})}),!h&&W(Pe,{children:[Le,De]}),h&&P&&W(Pe,{children:[We,Te]}),s&&a.length!=1&&W("div",{className:g([[`pdp-carousel__controls__container--${s}`,h],["pdp-carousel__controls__container--no-arrows",!b||P]]),style:{"--width":s==="thumbnailsRow"?`${K}px`:G,"--height":`${de}px`,"--nr-thumbnails":oe.length},children:[(h||N)&&!P&&Le,r("div",{ref:f,className:g([[`pdp-carousel__controls__wrapper--${s}`,h],["pdp-carousel__controls__wrapper",h]]),children:r("div",{role:"group","aria-label":y,className:g(["pdp-carousel__controls",[`pdp-carousel__controls--${s}`,h]]),children:(u?a.slice(0,O):a).map((c,d)=>{const L=u?O:a.length,S=u?E-1===d:E===d;return h?W("label",{className:g(["pdp-carousel__thumbnail__container"]),ref:B=>{B&&(q.current[d]=B)},children:[r("input",{type:"radio",name:"carousel-thumbnails","aria-label":J.replace("{key}",String(d+1)).replace("{total}",String(L)),checked:S&&K!==0,onChange:()=>{I(u?d+1:d,!0)},...w,className:g(["pdp-carousel__thumbnail",["pdp-carousel__thumbnail--selected",S&&K!==0]])}),r("span",{className:g(["pdp-carousel__thumbnail__span"]),children:oe[d]})]},d):r("button",{"aria-label":J.replace("{key}",String(d+1)).replace("{total}",String(L)),onClick:()=>{I(u?d+1:d,!0)},className:g(["pdp-carousel__controls__button",["pdp-carousel__controls__button--active",S]])},d)})})}),(h||N)&&!P&&De]})]})};function Ie(e,o=0){if(typeof e=="number")return e;const{small:p,medium:b,large:s}=e,P=786;return o>1024?s:o>P?b:p}const Xe=({title:e,breadcrumbs:o,galleryContent:p,infoContent:b,productContent:s,sku:P,outOfStock:u,shortDescription:A,description:l,attributes:G,images:i,options:v,price:R,specialPrice:H,className:Z,children:N,quantity:w,actions:m,carouselConfig:n,...D})=>{var F,x,ne,C,le,E;const M=V("PDP.Product.RegularPrice.label").label,y=V("PDP.Product.SpecialPrice.label").label,J=V("PDP.Product.OutOfStock.label").label,t=V("PDP.Product.Image.label").label,[te,O]=Q(null),j=i!=null&&i.length?i.map((Y,q)=>{var K;return r(U,{node:Y,loading:q===0?"eager":"lazy",alt:((K=e==null?void 0:e.props)==null?void 0:K.children)&&(t==null?void 0:t.replace("{product}",e.props.children.toString()).replace("{key}",String(q+1)).replace("{total}",String(i.length))),onClick:()=>O(q)},q)}):r("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0}),T=(F=n==null?void 0:n.thumbnails)!=null&&F.length?n.thumbnails.map((Y,q)=>{var K;return r(U,{node:Y,loading:(n==null?void 0:n.thumbnailsLoadingMode)||"lazy",alt:((K=e==null?void 0:e.props)==null?void 0:K.children)&&(t==null?void 0:t.replace("{product}",e.props.children.toString()).replace("{key}",String(q+1)).replace("{total}",String(i.length)))},q)}):r("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0});return W("div",{...D,className:g(["pdp-product",Z]),children:[o&&r(U,{node:o,className:"pdp-product__breadcrumbs"}),W("div",{className:"pdp-product__column-container pdp-product__gallery-column",children:[r("div",{className:"pdp-product__column-body",children:n!=null&&n.controls?r(me,{className:"pdp-product__overlay__carousel",arrows:(i==null?void 0:i.length)>1,controls:(i==null?void 0:i.length)>1?n.controls:"dots",arrowsOnMainImage:n==null?void 0:n.arrowsOnMainImage,loop:(n==null?void 0:n.loopable)&&(i==null?void 0:i.length)>1,peak:((x=n==null?void 0:n.thumbnails)==null?void 0:x.length)>1&&((ne=n==null?void 0:n.peak)==null?void 0:ne.desktop)||!1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"100%",defaultIndex:te||0,thumbnails:T,children:j}):r(Ze,{className:"pdp-product__images",gap:"small",children:j})}),p&&r(U,{node:p,className:"pdp-product__gallery-content"})]}),W("div",{className:"pdp-product__column-container pdp-product__content-column",children:[W("div",{className:"pdp-product__column-body",children:[W("div",{className:"pdp-product__header",children:[e&&r(U,{node:e,className:"pdp-product__title"}),P&&r(U,{node:P,className:"pdp-product__sku"})]}),W("div",{className:"pdp-product__prices",children:[H&&r(U,{node:H,className:g(["pdp-product__price-special","pdp-product__price"]),"aria-label":y,role:"text"}),R&&r(U,{node:R,className:g(["pdp-product__price-regular","pdp-product__price--grey"]),"aria-label":M,role:"text"})]}),n!=null&&n.mobile?r(me,{className:"pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails",width:"100%",height:"auto",arrows:(i==null?void 0:i.length)>1,controls:(i==null?void 0:i.length)>1?"thumbnailsRow":null,loop:(n==null?void 0:n.loopable)&&(i==null?void 0:i.length)>1,peak:((C=n==null?void 0:n.thumbnails)==null?void 0:C.length)>1&&((le=n==null?void 0:n.peak)==null?void 0:le.mobile)||!1,gap:(n==null?void 0:n.gap)||null,thumbnails:T,children:j}):r(me,{className:"pdp-product__images pdp-product__images--carousel",peak:((E=n==null?void 0:n.peak)==null?void 0:E.mobile)&&(i==null?void 0:i.length)>1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"auto",arrows:(i==null?void 0:i.length)>1,controls:(i==null?void 0:i.length)>1?"dots":null,loop:(n==null?void 0:n.loopable)&&(i==null?void 0:i.length)>1,children:j}),W("div",{className:g(["pdp-product__actions",["pdp-product__actions--out-of-stock",u]]),children:[u&&r("div",{className:"pdp-product__out-of-stock__text",children:J}),v&&r(U,{node:v,className:g(["pdp-product__options"])}),w&&r("div",{className:"pdp-product__quantity",children:r(U,{node:w})}),m&&r(U,{node:m,className:g(["pdp-product__buttons"])})]}),A&&r(U,{node:A,className:g(["pdp-product__short_description"])}),l&&r(U,{node:l,className:g(["pdp-product__description"])}),G?r("div",{className:"pdp-product__attributes",children:G}):null]}),b&&r(U,{node:b,className:"pdp-product__info-content"})]}),s&&r(U,{node:s,className:"pdp-product__content"}),te===null?null:r(Je,{className:"pdp-product__overlay",onClose:()=>O(null),centered:!0,children:r(me,{className:"pdp-product__overlay__carousel",arrows:(i==null?void 0:i.length)>1,width:"100%",height:"100%",defaultIndex:te||0,loop:(i==null?void 0:i.length)>1,controls:(i==null?void 0:i.length)>1?"dots":null,isZoomed:!0,children:j})})]})},Ze=({children:e,gap:o=null,className:p,style:b,...s})=>{const P=re.count(e);return r("div",{...s,className:g(["pdp-gallery-grid",p]),style:{"--gap":o?`var(--spacing-${o})`:"0px",...b},children:re.map(e,(u,A)=>r("div",{className:"pdp-gallery-grid__item",children:r(U,{node:u,loading:A===0?"eager":"lazy"},u.props.src)},P+A))})},ke=({amount:e,currency:o,locale:p,variant:b,sale:s,minimumAmount:P,maximumAmount:u,className:A,...l})=>r(Pe,{children:e||P===u?r("div",{className:"pdp-price-range",...l,children:r(Se,{amount:e||P,currency:o,locale:p,variant:b,sale:s,className:A})}):W("div",{className:"pdp-price-range",...l,children:[r(Se,{amount:P,currency:o,locale:p,className:A}),r("span",{className:"pdp-price-range__label",children:"-"}),r(Se,{amount:u,currency:o,locale:p,className:A})]})}),Je=({centered:e,onClose:o,className:p,children:b,...s})=>{const P=V("PDP.Overlay.Close.label").label,u=X(()=>{o==null||o()},[o]);return ee(()=>{const A=l=>{l.key==="Escape"&&u()};return document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}},[u]),ee(()=>{const A=document.scrollingElement,l=A.style.overflow;return A.style.overflow="hidden",()=>{A.style.overflow=l}},[]),W("div",{...s,className:g(["pdp-overlay",["pdp-overlay--centered",e],p]),children:[r("div",{className:"pdp-overlay__content",children:b}),r(we,{"aria-label":P,variant:"tertiary",className:"pdp-overlay__close-button",onClick:u,icon:r(Qe,{})})]})},Ye=["text","image","color","dropdown"],Ce=e=>e.map(o=>({...o,text:o.label,disabled:!o.inStock})),et=({options:e,hideSelectedValue:o,onValues:p,onErrors:b,defaultOptions:s,selectionsToUpdate:P,className:u,children:A,...l})=>{const G=V("PDP.Swatches.Required.label").label,[i,v]=Q(()=>e==null?void 0:e.reduce((w,m)=>{const{items:n}=m,D=n==null?void 0:n.find(y=>s==null?void 0:s.includes(y.id)),M=n==null?void 0:n.find(y=>y.selected);return D?{...w,[m.id]:{label:D.label,value:D.id}}:M?{...w,[m.id]:{label:M.label,value:M.id}}:w},{}));ee(()=>{P==null||P.forEach(N=>{v(w=>{var D;const m=(D=N==null?void 0:N.items)==null?void 0:D.find(M=>M.selected);return m?{...w,[N.id]:{label:m==null?void 0:m.label,value:m==null?void 0:m.id}}:w})})},[P,v]),ve(()=>{const N=e==null?void 0:e.reduce((w,m)=>{var n;return(n=m==null?void 0:m.items)==null||n.forEach(D=>{var y;const M=((y=i[m.id])==null?void 0:y.value)===D.id;m.required&&!M&&(w[m.id]=G)}),w},{});return b==null||b(N),N},[i]);const R=X((N,w,m)=>{v(n=>{const D={...n,[N]:{label:w,value:m}};return p==null||p(D,m),D})},[p]),H=(N,w)=>{var n;const m=((n=w.selectedOptions[0])==null?void 0:n.label)??"";R(N,m,w.value)},Z=X(({items:N,id:w,required:m,type:n,selected:D,label:M})=>r("div",{className:g(["pdp-swatches__options"]),children:(n==null?void 0:n.toLowerCase())==="dropdown"?r(Ve,{"aria-label":M,handleSelect:y=>H(w,y.target),options:Ce(N),value:D}):N==null?void 0:N.map(y=>{const J={key:y.id,id:y.id,name:w,value:y.value,label:y.label,groupAriaLabel:M,selected:D===y.id,outOfStock:!y.inStock,required:m===null?!0:m,onValue:()=>{R(w,y.label,y.id)}};switch(n){case"text":return r(ze,{...J,label:y.label});case"image":return r(qe,{...J,src:y.value,alt:y.label});case"color":return r(He,{...J,size:"large",color:y.value});default:return console.warn(`Invalid swatch type ${n}`),null}})}),[R]);return r("div",{...l,className:g(["pdp-swatches",u]),children:e==null?void 0:e.map(({type:N,label:w,id:m,multiple:n,required:D,items:M})=>{var y;if(!N){console.warn("Bundle product not supported on UI.");return}return Ye.includes(N)||console.warn(`Invalid swatch type ${N}`),n&&console.warn("Multiple selection swatches are not currently supported."),W("div",{id:`swatch-item-${m}`,"data-slot-key":`product-swatch--${m}`,className:"pdp-swatches__field",children:[r("div",{className:"pdp-swatches__field__label",children:i[m]?o?`${w}`:`${w}: ${i[m].label}`:w}),r(Z,{id:m,type:N,required:D,items:M,label:w,selected:(y=i[m])==null?void 0:y.value})]},`swatch-item-${m}`)})})};function tt(e,o="en_US"){if(!Re(e))throw Error("Invalid date string");return e.split(" ")[1]||(e=`${e} 00:00:00`),new Date(e).toLocaleDateString(Ne(o)).toString()}function Re(e){if(![/^\d{4}-\d{2}-\d{2}$/,/^\d{1,2}\/\d{1,2}\/\d{4}$/,/^\d{2}\/\d{2}\/\d{4}$/,/^\d{4}\/\d{2}\/\d{2}$/,/^\d{1,2}\.\d{1,2}\.\d{4}$/,/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/].some(b=>b.test(e)))return!1;const p=new Date(e);return!isNaN(p.getTime())}function rt(e){const o=new URLSearchParams(window.location.search);Object.entries(e).forEach(([b,s])=>{s===null?o.delete(b):o.set(b,String(s))});let p=window.location.pathname;p+=`?${o.toString()}`,p+=window.location.hash,window.history.replaceState({},"",p)}function nt(){const e=new URLSearchParams(window.location.search),o={};return e.forEach((p,b)=>{o[b]=p}),o}function lt(e){var o,p,b,s,P,u,A,l,G,i,v,R;return{productId:Number(e==null?void 0:e.externalId),name:e==null?void 0:e.name,sku:e==null?void 0:e.sku,topLevelSku:e==null?void 0:e.externalParentId,specialToDate:void 0,specialFromDate:void 0,newToDate:void 0,newFromDate:void 0,createdAt:void 0,updatedAt:void 0,manufacturer:void 0,countryOfManufacture:void 0,categories:void 0,productType:void 0,pricing:{regularPrice:((p=(o=e==null?void 0:e.prices)==null?void 0:o.regular)==null?void 0:p.amount)||0,minimalPrice:(s=(b=e==null?void 0:e.prices)==null?void 0:b.final)==null?void 0:s.minimumAmount,maximalPrice:(u=(P=e==null?void 0:e.prices)==null?void 0:P.final)==null?void 0:u.maximumAmount,specialPrice:(l=(A=e==null?void 0:e.prices)==null?void 0:A.final)==null?void 0:l.amount,tierPricing:void 0,currencyCode:((i=(G=e==null?void 0:e.prices)==null?void 0:G.final)==null?void 0:i.currency)||"USD"},canonicalUrl:e==null?void 0:e.url,mainImageUrl:(R=(v=e==null?void 0:e.images)==null?void 0:v[0])==null?void 0:R.url}}const at={PRODUCT_CONTEXT:"productContext"},ct={PRODUCT_PAGE_VIEW:"product-page-view"};function Me(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function it(e,o){const p=Me();p.push({[e]:null}),p.push({[e]:o})}function dt(e,o){Me().push(b=>{const s=b.getState?b.getState():{};b.push({event:e,eventInfo:{...s,...o}})})}function Ee(e){const o=lt(e);it(at.PRODUCT_CONTEXT,o),dt(ct.PRODUCT_PAGE_VIEW)}const ot=({sku:e,hideSku:o,hideQuantity:p,hideShortDescription:b,hideDescription:s,hideAttributes:P,hideURLParams:u,hideSelectedOptionValue:A,slots:l,children:G,initialData:i,carousel:v,optionsConfig:R,useACDL:H,onAddToCart:Z,...N})=>{var he,de,pe,oe;const w=V("PDP.Product.AddToCart.label").label,m=V("PDP.Product.Incrementer.label").label,n=V("PDP.Product.Details.label").label,[D,M]=Q(Be.getConfig().defaultLocale||"en-US"),[y,J]=Q(),[t=null,te]=Q(i),[O,j]=Q(()=>{const a={sku:e,quantity:1};return t!=null&&t.optionUIDs&&(a.optionsUIDs=t.optionUIDs),a}),[T,F]=Q(()=>{var a,_;return!(t!=null&&t.options&&((a=t==null?void 0:t.options)==null?void 0:a.length)>0&&((_=t==null?void 0:t.optionUIDs)==null?void 0:_.length)!==(t==null?void 0:t.options.length))}),x={data:t,values:O,valid:T};ee(()=>{const a=Fe.on("locale",_=>{_!==D&&(M(_),$e(e).then(te))});return()=>{a==null||a.off()}},[D,e]),ee(()=>{H&&i&&Object.keys(i).length>0&&Ee(i)},[i]);const ne=X(a=>{j(_=>({..._,...a}))},[]),C=X(a=>{var f;let _=Object.keys(a).map(h=>a[h].value).filter(h=>h!==void 0);u||rt({optionsUIDs:_.join(",")}),j(h=>({...h,optionsUIDs:_})),F((_==null?void 0:_.length)===((f=t==null?void 0:t.options)==null?void 0:f.length)),Oe(e,_,R==null?void 0:R.anchorOptions).then(h=>{var $;te(h),($=R==null?void 0:R.anchorOptions)!=null&&$.length&&le(h,_),H&&(h==null?void 0:h.sku)!==e&&Ee(h)})},[e]),le=X((a,_)=>{var $;const f=(a==null?void 0:a.optionUIDs)??[];_.every(I=>f.includes(I))||(J(a==null?void 0:a.options),j(I=>({...I,optionsUIDs:f})),F((f==null?void 0:f.length)===(($=a==null?void 0:a.options)==null?void 0:$.length)))},[e]),E=X(a=>{Object.keys(a).length!==0&&F(!1)},[]),Y=ve(()=>{var a;return(a=t==null?void 0:t.attributes)==null?void 0:a.map(({label:_,value:f},h)=>{const $=Re(f)?tt(f,D):f.toString();return W("li",{children:[_,": ",r("span",{dangerouslySetInnerHTML:{__html:$}})]},h)})},[t==null?void 0:t.attributes,D]),q=!p&&(t!=null&&t.inStock)?r(z,{name:"Quantity",slot:l==null?void 0:l.Quantity,context:{...x},children:r(Ge,{name:"quantity",defaultValue:O.quantity.toString(),min:1,"aria-label":m,className:"pdp-product__quantity",onValue:a=>{ne({quantity:Number(a)})}},"quantity")}):void 0,K=()=>{if(t!=null&&t.options)return r(z,{name:"Options",slot:l==null?void 0:l.Options,context:{...x},children:r(et,{options:t.options,defaultOptions:O.optionsUIDs,selectionsToUpdate:y,hideSelectedValue:A,onValues:C,onErrors:E})})};return r("div",{...N,children:r(Xe,{title:r(z,{name:"Title",slot:l==null?void 0:l.Title,context:{...x},children:t==null?void 0:t.name}),sku:o?void 0:r(z,{name:"SKU",slot:l==null?void 0:l.SKU,context:{...x},children:t==null?void 0:t.sku}),options:K(),breadcrumbs:(l==null?void 0:l.Breadcrumbs)&&r(z,{name:"Breadcrumbs",slot:l==null?void 0:l.Breadcrumbs,context:{...x,setSeparator(a){this._registerMethod((..._)=>{const f=a(..._),h=f&&r(be,{source:f});this._setProps($=>({...$,separator:h}))})},appendLink(a){this._registerMethod((..._)=>{const{text:f,...h}=a(..._),$=r("a",{...h,children:f});this._setProps(I=>({...I,categories:[...I.categories||[],$]}))})},appendHTMLElement(a){this._registerMethod((..._)=>{const f=a(..._),h=this._htmlElementToVNode(f);this._setProps($=>({...$,categories:[...$.categories||[],h]}))})}},render:({separator:a,categories:_})=>r(je,{separator:a,categories:_})}),quantity:q,actions:r(z,{name:"Actions",slot:l==null?void 0:l.Actions,context:{...x,appendButton(a){this._registerMethod((..._)=>{const f=a(..._);if(!f)return;const{text:h,icon:$,...I}=f,ae=r(we,{type:"button",...I,icon:$&&r(be,{source:$}),children:h});this._setProps(ce=>({children:[...ce.children||[],ae]}))})}},children:!(l!=null&&l.Actions)&&r(we,{size:"medium",type:"submit",icon:r(be,{source:"Cart"}),disabled:!(t!=null&&t.inStock)||!T,"aria-label":w,onClick:()=>Z==null?void 0:Z(O),children:w})}),shortDescription:b?void 0:r(z,{name:"ShortDescription",slot:l==null?void 0:l.ShortDescription,context:{...x},children:r("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.shortDescription)??""}})}),description:s?void 0:r(z,{name:"Description",slot:l==null?void 0:l.Description,context:{...x},children:r("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.description)??""}})}),images:((he=t==null?void 0:t.images)==null?void 0:he.map(({label:a,url:_})=>{var f,h;return r(xe,{title:a,alt:a,src:_,width:((f=v==null?void 0:v.imageParams)==null?void 0:f.width)??960,height:((h=v==null?void 0:v.imageParams)==null?void 0:h.height)??1191,params:(v==null?void 0:v.imageParams)??{width:960}},_)}))??[],specialPrice:(de=t==null?void 0:t.prices)!=null&&de.visible?r(z,{name:"SpecialPrice",slot:l==null?void 0:l.SpecialPrice,context:{...x},children:r(ke,{...t.prices.final,locale:Ne(D)})}):void 0,price:(pe=t==null?void 0:t.prices)!=null&&pe.visible&&t.prices.regular&&t.prices.final.amount!==(t==null?void 0:t.prices.regular.amount)?r(z,{name:"RegularPrice",slot:l==null?void 0:l.RegularPrice,context:{...x},children:r(ke,{...t.prices.regular,locale:Ne(D)})}):void 0,carouselConfig:{...v,thumbnails:v?((oe=t==null?void 0:t.images)==null?void 0:oe.map(({label:a,url:_})=>{var f,h;return r(xe,{title:a,alt:a,src:_,width:((f=v==null?void 0:v.thumbnailParams)==null?void 0:f.width)??200,height:((h=v==null?void 0:v.thumbnailParams)==null?void 0:h.height)??248,params:(v==null?void 0:v.thumbnailParams)??{width:200}},_)}))??[]:[]},outOfStock:!(t!=null&&t.inStock),attributes:P?void 0:r(z,{name:"Attributes",slot:l==null?void 0:l.Attributes,context:{...x},children:Y!=null&&Y.length?W(Pe,{children:[n,r("ul",{children:Y})]}):null}),galleryContent:(l==null?void 0:l.GalleryContent)&&r(z,{name:"GalleryContent",slot:l.GalleryContent,context:{...x}}),infoContent:(l==null?void 0:l.InfoContent)&&r(z,{name:"InfoContent",slot:l.InfoContent,context:{...x}}),productContent:(l==null?void 0:l.Content)&&r(z,{name:"Content",slot:l.Content,context:{...x}})})})};ot.getInitialData=async function({sku:e,optionsConfig:o}){var b,s,P,u,A,l;const p=((b=nt().optionsUIDs)==null?void 0:b.split(","))||((l=(A=(u=(P=(s=Be)==null?void 0:s.getConfig())==null?void 0:P.models)==null?void 0:u.ProductDetails)==null?void 0:A.initialData)==null?void 0:l.optionsUIDs);return p!=null&&p.length?await Oe(e,p,o==null?void 0:o.anchorOptions):await $e(e)};export{ot as ProductDetails,ot as default};
