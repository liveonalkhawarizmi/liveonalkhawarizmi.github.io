import{_ as g,u as m,w as h,r as v,o as c,c as o,a as r,F as y,b,d as f,l as x,D as k,t as w,p as I,e as D,f as S}from"./main.e093d87f.js";const d=a=>(I("data-v-27c73c5b"),a=a(),D(),a),B={key:0,class:"signature"},A={class:"block"},C=d(()=>r("h3",null,"Tanda tangan digital",-1)),F=d(()=>r("small",{class:"notation-legal"}," Tanda tangan digital ini menjadi bukti sah dan legal dari PK IMM Al-Khawarizmi ",-1)),K={__name:"signature",async setup(a){let t,i;const l=m(),s=l.currentRoute.value.params.pattern,e=s.slice(15,20)+s.slice(6,15)+s.slice(0,6),u=e.slice(15,20)+e.slice(6,15)+e.slice(0,6);console.log(s+"-----"+e+"-----"+u);const _=([t,i]=h(()=>x(k(S,"signature",e))),t=await t,i(),t),n=v({});return _.exists()?n.data=_.data():l.push({name:"home"}),(M,N)=>n.data.type?(c(),o("div",B,[r("div",A,[C,(c(!0),o(y,null,b(n.data.signature,p=>(c(),o("p",null,w(p),1))),256))]),F])):f("",!0)}},T=g(K,[["__scopeId","data-v-27c73c5b"]]);export{T as default};
