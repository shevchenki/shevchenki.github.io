"use strict";(self.webpackChunkshevchenki_github_io=self.webpackChunkshevchenki_github_io||[]).push([[4397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4,sidebar_label:"Using Service Mesh - Istio"},l="Using Service Mesh - Istio",o={unversionedId:"kubernetes-workshop/add-service-mesh",id:"kubernetes-workshop/add-service-mesh",title:"Using Service Mesh - Istio",description:"I. What is a Service Mesh?",source:"@site/docs/kubernetes-workshop/04.add-service-mesh.md",sourceDirName:"kubernetes-workshop",slug:"/kubernetes-workshop/add-service-mesh",permalink:"/docs/kubernetes-workshop/add-service-mesh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes-workshop/04.add-service-mesh.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Using Service Mesh - Istio"},sidebar:"tutorialSidebar",previous:{title:"Manifest Control with Helm and Kustomize",permalink:"/docs/kubernetes-workshop/manifest-control"},next:{title:"Monitoring EKS Cluster",permalink:"/docs/kubernetes-workshop/monitoring-eks-cluster"}},s={},p=[{value:"I. What is a Service Mesh?",id:"i-what-is-a-service-mesh",level:2},{value:"II. Istio Configuration",id:"ii-istio-configuration",level:2},{value:"1. Download Istio",id:"1-download-istio",level:3},{value:"2. Install Istio",id:"2-install-istio",level:3},{value:"II. Traffic routing with Istio",id:"ii-traffic-routing-with-istio",level:2},{value:"1. Deploy sample",id:"1-deploy-sample",level:3},{value:"2. Change weight specific for each service",id:"2-change-weight-specific-for-each-service",level:3},{value:"3. Restrict access for special header",id:"3-restrict-access-for-special-header",level:3},{value:"4. Limit IP &amp; Port",id:"4-limit-ip--port",level:3},{value:"5. B/G Deploy",id:"5-bg-deploy",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-service-mesh---istio"},"Using Service Mesh - Istio"),(0,n.kt)("h2",{id:"i-what-is-a-service-mesh"},"I. What is a Service Mesh?"),(0,n.kt)("p",null,"Modern applications are typically architected as distributed collections of microservices, with each collection of microservices performing some discrete business function. A service mesh is a dedicated infrastructure layer that you can add to your applications. It allows you to transparently add capabilities like observability, traffic management, and security, without adding them to your own code. The term \u201cservice mesh\u201d describes both the type of software you use to implement this pattern, and the security or network domain that is created when you use that software."),(0,n.kt)("p",null,"You can refer ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/latest/about/service-mesh/"},"here")," to more information!"),(0,n.kt)("h2",{id:"ii-istio-configuration"},"II. Istio Configuration"),(0,n.kt)("h3",{id:"1-download-istio"},"1. Download Istio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/setup/getting-started/#download"},"Home Page"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://istio.io/downloadIstio | sh -\ncd istio-1.17.2/\nexport PATH=$PWD/bin:$PATH\n")))),(0,n.kt)("h3",{id:"2-install-istio"},"2. Install Istio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Installation Configuration Profiles:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"default"),(0,n.kt)("th",{parentName:"tr",align:null},"demo"),(0,n.kt)("th",{parentName:"tr",align:null},"minimal"),(0,n.kt)("th",{parentName:"tr",align:null},"remote"),(0,n.kt)("th",{parentName:"tr",align:null},"empty"),(0,n.kt)("th",{parentName:"tr",align:null},"preview"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Core components")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"istio-egressgateway"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"istio-ingressgateway"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"istio-pilot"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2714"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install Istio"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ istioctl install --set profile=demo -y\n\u2714 Istio core installed\n\u2714 Istiod installed\n\u2714 Egress gateways installed\n\u2714 Ingress gateways installed\n\u2714 Installation complete\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Inject Envoy sidecar proxies to namespace"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label namespace vote-dog-cat-api istio-injection=enabled\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm what namespaces are injecting Envoy sidecar"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get namespace -L istio-injection\n")),(0,n.kt)("p",{parentName:"li"},"Example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get namespace -L istio-injection\nNAME               STATUS   AGE     ISTIO-INJECTION\ndefault            Active   49m     \nistio-system       Active   2m32s   disabled\nkube-node-lease    Active   49m     \nkube-public        Active   49m     \nkube-system        Active   49m     \nvote-dog-cat-api   Active   3m31s   enabled\n")))),(0,n.kt)("h2",{id:"ii-traffic-routing-with-istio"},"II. Traffic routing with Istio"),(0,n.kt)("h3",{id:"1-deploy-sample"},"1. Deploy sample"),(0,n.kt)("h3",{id:"2-change-weight-specific-for-each-service"},"2. Change weight specific for each service"),(0,n.kt)("h3",{id:"3-restrict-access-for-special-header"},"3. Restrict access for special header"),(0,n.kt)("h3",{id:"4-limit-ip--port"},"4. Limit IP & Port"),(0,n.kt)("h3",{id:"5-bg-deploy"},"5. B/G Deploy"))}u.isMDXComponent=!0}}]);