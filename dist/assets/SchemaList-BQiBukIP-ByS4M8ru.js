import{M as j,Q as N,Y as v,d as e,t as r,v as y,y as o,E as l,H as c,I as b,K as w,L as C,al as S,as as $,P as z}from"./entry.client-D61HS_XT.js";import{f as m}from"./index-LNp6rxyU-DbAr6ntG.js";import{R as A}from"./Toc-BnN4zBb3-Dvb_KHHV.js";import{C as M,a as O,p as D}from"./SchemaView-Bt95NiyQ-BjG0NWkC.js";import"./circular-tOWjsgLZ-AiaybH8Y.js";const I=z(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function U(){var i;const{input:d,type:p,versions:h,version:x,options:t}=j(),u=N(I,{input:d,type:p}),{data:a}=v(u),n=((i=a.schema.components)==null?void 0:i.schemas)??[];if(!n.length)return e.jsx("div",{children:"No schemas found"});const f=Object.entries(h).length>1,g=(t==null?void 0:t.showVersionSelect)==="always"||f&&(t==null?void 0:t.showVersionSelect)!=="hide";return e.jsxs("div",{className:"grid grid-cols-[--sidecar-grid-cols] gap-8 justify-between","data-pagefind-filter":"section:openapi","data-pagefind-meta":"section:openapi",children:[e.jsxs("div",{className:"pt-[--padding-content-top] pb-[--padding-content-bottom]",children:[e.jsxs(r,{className:"w-full",children:[e.jsxs("div",{className:"flex flex-col gap-y-4 sm:flex-row justify-around items-start sm:items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(y,{children:a.schema.title}),e.jsxs(o,{level:1,id:"schemas",registerSidebarAnchor:!0,className:"mb-0",children:["Schemas",g&&e.jsxs("span",{className:"text-xl text-muted-foreground ms-1.5",children:["(",x,")"]})]})]}),a.schema.description&&e.jsxs(l,{className:"flex items-center gap-1 text-sm font-medium text-muted-foreground group",children:[e.jsx("span",{children:"API information"}),e.jsx(M,{className:"group-data-[state=open]:hidden translate-y-px",size:14}),e.jsx(O,{className:"group-data-[state=closed]:hidden translate-y-px",size:13})]})]}),a.schema.description&&e.jsx(c,{className:"CollapsibleContent",children:e.jsx("div",{className:b(C,"pt-4 max-w-full prose-img:max-w-prose"),children:e.jsx(w,{className:"border rounded bg-muted/25 border-border px-2.5 md:px-4",content:a.schema.description})})})]}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-col gap-y-5",children:n.map(s=>e.jsxs(r,{className:"group",defaultOpen:!0,children:[e.jsxs(o,{registerSidebarAnchor:!0,level:2,className:"flex items-center gap-1 justify-between w-fit",id:m(s.name),children:[s.name," ",e.jsx(l,{asChild:!0,children:e.jsx(S,{variant:"ghost",size:"icon",className:"size-6",children:e.jsx($,{size:16,className:"group-data-[state=open]:rotate-90 transition cursor-pointer"})})})]}),e.jsx(c,{className:"mt-4 CollapsibleContent",children:e.jsx(D,{schema:s.schema})})]},s.name))})]}),e.jsx(A,{entries:n.map(s=>({id:m(s.name),value:s.name,depth:1}))})]})}export{U as SchemaList};
//# sourceMappingURL=SchemaList-BQiBukIP-ByS4M8ru.js.map
