import{O as i,j as e}from"./entry.client-D61HS_XT.js";const s="Welcome to the official documentation for the Multi Store E-Commerce API. This RESTful API powers our multi-vendor e-commerce platform, allowing developers to integrate with our system for various operations including user management, product listings, order processing, and more.",d=[{depth:2,value:"API Overview",id:"api-overview"},{depth:2,value:"Authentication",id:"authentication"},{depth:2,value:"Error Handling",id:"error-handling"},{depth:2,value:"Getting Started",id:"getting-started"}],c={title:"Multi Store E-Commerce API",description:"Documentation for the Multi Store E-Commerce RESTful API"};function r(t){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Welcome to the official documentation for the Multi Store E-Commerce API. This RESTful API powers our multi-vendor e-commerce platform, allowing developers to integrate with our system for various operations including user management, product listings, order processing, and more."}),`
`,e.jsx(n.h2,{id:"api-overview",children:"API Overview"}),`
`,e.jsx(n.p,{children:"The Multi Store E-Commerce API is organized around REST principles. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs."}),`
`,e.jsx(n.h2,{id:"authentication",children:"Authentication"}),`
`,e.jsx(n.p,{children:"The API uses JSON Web Tokens (JWT) for authentication. To access protected endpoints, you need to include the token in the token header of your requests."}),`
`,e.jsx(n.h2,{id:"error-handling",children:"Error Handling"}),`
`,e.jsx(n.p,{children:"The API uses conventional HTTP response codes to indicate the success or failure of an API request:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:!0,children:"2xx"})," - Success"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:!0,children:"4xx"})," - Error that failed given the information provided (e.g., bad request, not found)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:!0,children:"5xx"})," - Server errors"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Error responses include a JSON object with an ",e.jsx(n.code,{inline:!0,children:"error"})," field that provides additional information about the error."]}),`
`,e.jsx(n.p,{children:"Example error response:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{\r
  "error": "Invalid input parameters",\r
  "msg": "Product name is required"\r
}
`})}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"To start using the API, you need to:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Register a user account using the ",e.jsx(n.code,{inline:!0,children:"/api/signup"})," endpoint"]}),`
`,e.jsxs(n.li,{children:["Authenticate using the ",e.jsx(n.code,{inline:!0,children:"/api/signin"})," endpoint to obtain a JWT token"]}),`
`,e.jsx(n.li,{children:"Include this token in subsequent requests that require authentication"}),`
`]}),`
`,e.jsx(n.p,{children:"Detailed information about each endpoint, including request parameters, response formats, and examples, can be found in the API Reference section of this documentation."})]})}function a(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default,s as excerpt,c as frontmatter,d as tableOfContents};
//# sourceMappingURL=introduction-nEY5MH9Y.js.map
