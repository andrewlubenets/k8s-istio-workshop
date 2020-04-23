(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{279:function(t,s,a){t.exports=a.p+"assets/img/istio.a24267ed.svg"},337:function(t,s,a){t.exports=a.p+"assets/img/bookinfo_v1.b5fab228.jpg"},338:function(t,s,a){t.exports=a.p+"assets/img/bookinfo_v2.b2277875.jpg"},358:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"istio-configuring-request-routing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istio-configuring-request-routing"}},[t._v("#")]),t._v(" Istio - Configuring Request Routing")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Screencast: "),e("a",{attrs:{href:"https://asciinema.org/a/229605?autoplay=0&t=427",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://asciinema.org/a/229605?t=427"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://istio.io/docs/tasks/traffic-management/request-routing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/traffic-management/request-routing/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("This task shows you how to route requests dynamically to multiple versions\nof a microservice.")]),t._v(" "),e("h2",{attrs:{id:"apply-a-virtual-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apply-a-virtual-service"}},[t._v("#")]),t._v(" Apply a virtual service")]),t._v(" "),e("p",[t._v("Apply the virtual services which will route all traffic to "),e("code",[t._v("v1")]),t._v(" of each microservice:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl apply -f samples/bookinfo/networking/virtual-service-all-v1.yaml\n")])])]),e("p",[t._v("Display the defined routes:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl get virtualservices -o yaml\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VirtualService\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" details\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" details\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" details\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VirtualService\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" productpage\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateways")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bookinfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gateway\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" mesh\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" productpage\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" productpage\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VirtualService\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ratings\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ratings\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ratings\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VirtualService\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" reviews\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n")])])]),e("p",[t._v("Open the Bookinfo site in your browser "),e("code",[t._v("http://$GATEWAY_URL/productpage")]),t._v("\nand notice that the reviews part of the page displays with "),e("strong",[t._v("no rating stars")]),t._v(",\nno matter how many times you refresh.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(337),alt:"Bookinfo v1",title:"Bookinfo v1"}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"route-based-on-user-identity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#route-based-on-user-identity"}},[t._v("#")]),t._v(" Route based on user identity")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://istio.io/docs/tasks/traffic-management/request-routing/#route-based-on-user-identity",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/traffic-management/request-routing/#route-based-on-user-identity"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("All traffic from a user named "),e("code",[t._v("jason")]),t._v(" will be routed to the service "),e("code",[t._v("reviews:v2")]),t._v("\nby forwarding HTTP requests with custom end-user header to the appropriate\nreviews service.")]),t._v(" "),e("p",[t._v("Enable user-based routing:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl apply -f samples/bookinfo/networking/virtual-service-reviews-test-v2.yaml\n")])])]),e("p",[t._v("Confirm the rule is created:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl get virtualservice reviews -o yaml\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VirtualService\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" reviews\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("headers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("end-user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jason\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v2\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n")])])]),e("p",[t._v("On the "),e("code",[t._v("/productpage")]),t._v(" of the Bookinfo app, log in as user "),e("code",[t._v("jason")]),t._v(" and refresh\nthe browser. The "),e("strong",[t._v("black star ratings")]),t._v(" appear next to each review.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(338),alt:"Bookinfo v2",title:"Bookinfo v2"}})]),t._v(" "),e("p",[t._v("Log in as another user (pick any name you wish) and refresh the browser. Now\nthe "),e("strong",[t._v("stars are gone")]),t._v(". This is because traffic is routed to "),e("code",[t._v("reviews:v1")]),t._v(" for\nall users except Jason.")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("You can do the same with "),e("code",[t._v("user-agent header")]),t._v(" or "),e("code",[t._v("URI")]),t._v(" for example:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("headers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user-agent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("regex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*Firefox.*'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /api/v1\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:a(279),alt:"Istio",title:"Istio"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);