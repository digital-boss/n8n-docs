(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1834:function(e,o,t){"use strict";t.r(o);var n=t(26),s=Object(n.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"respond-to-webhook"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#respond-to-webhook"}},[e._v("#")]),e._v(" Respond to Webhook")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("Respond to Webhook")]),e._v(" node can be used in workflows with a "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Webhook/"}},[e._v("Webhook")]),e._v(" node. It allows controlling the response to incoming webhooks. In the Webhook node, the "),n("strong",[e._v("Using 'Respond to Webhook' node")]),e._v(" option would need to be selected in the "),n("strong",[e._v("Response")]),e._v(" dropdown for the "),n("em",[e._v("Respond to Webhook")]),e._v(" node to work.")],1),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Expressions")]),e._v(" "),n("p",[e._v("When using "),n("RouterLink",{attrs:{to:"/nodes/expressions.html"}},[e._v("expressions")]),e._v(", the "),n("em",[e._v("Respond to Webhook")]),e._v(" node will only run for the first item in the input data")],1)]),e._v(" "),n("h2",{attrs:{id:"node-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node reference")]),e._v(" "),n("p",[e._v("The node supports the following modes through the "),n("strong",[e._v("Respond With")]),e._v(" field:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("First Incoming Item")]),e._v(": Respond with the first incoming item's JSON.")]),e._v(" "),n("li",[n("strong",[e._v("Text")]),e._v(": Respond with a text defined in the "),n("strong",[e._v("Response Body")]),e._v(" field.")]),e._v(" "),n("li",[n("strong",[e._v("JSON")]),e._v(": Respond with a JSON object defined in the "),n("strong",[e._v("Response Body")]),e._v(" field.")]),e._v(" "),n("li",[n("strong",[e._v("Binary")]),e._v(": Respond with a binary file defined in the "),n("strong",[e._v("Response Data Source")]),e._v(" field.")]),e._v(" "),n("li",[n("strong",[e._v("No Data")]),e._v(": No response payload is sent.")])]),e._v(" "),n("p",[e._v("Available options:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Response Code")]),e._v(": Set the "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[e._v("response code"),n("OutboundLink")],1),e._v(" to be used.")]),e._v(" "),n("li",[n("strong",[e._v("Response Headers")]),e._v(": Define response headers to be sent.")])]),e._v(" "),n("h2",{attrs:{id:"workflow-behaviour"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#workflow-behaviour"}},[e._v("#")]),e._v(" Workflow behaviour")]),e._v(" "),n("p",[e._v("When using the "),n("em",[e._v("Respond to Webhook")]),e._v(" node, workflows will behave as follows:")]),e._v(" "),n("ul",[n("li",[e._v("When the workflow finishes without executing the "),n("em",[e._v("Respond to Webhook")]),e._v(" node, a standard message is returned with a 200 status.")]),e._v(" "),n("li",[e._v("If a second "),n("em",[e._v("Respond to Webhook")]),e._v(" node is executed after the first one, it is ignored.")]),e._v(" "),n("li",[e._v("If the workflow errors before the first "),n("em",[e._v("Respond to Webhook")]),e._v(" node is executed, an error message is returned with a 500 status.")]),e._v(" "),n("li",[e._v("If a "),n("em",[e._v("Respond to Webhook")]),e._v(" node is executed but there was no webhook, the "),n("em",[e._v("Respond to Webhook")]),e._v(" node is ignored.")])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows serves an HTML page when receiving a GET requests. You can find the complete workflow "),n("a",{attrs:{href:"https://n8n.io/workflows/1306",target:"_blank",rel:"noopener noreferrer"}},[e._v("here on n8n.io"),n("OutboundLink")],1),e._v(". The example workflow uses the following nodes:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Webhook/"}},[e._v("Webhook")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Respond to Webhook")])])]),e._v(" "),n("p",[n("img",{attrs:{src:t(715),alt:"The workflow using the Respond to Webhook node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-webhook-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-webhook-node"}},[e._v("#")]),e._v(" 1. Webhook node")]),e._v(" "),n("p",[e._v("This node will receive incoming requests (for example, when the webhook URL is opened with a browser).")]),e._v(" "),n("ol",[n("li",[e._v("Enter a human-readable value in the "),n("strong",[e._v("path")]),e._v(" field, for example "),n("code",[e._v("my-form")]),e._v(".")]),e._v(" "),n("li",[e._v("Choose the "),n("strong",[e._v("Using 'Respond to Webhook' node")]),e._v(" option "),n("strong",[e._v("Response")]),e._v(" dropdown.")]),e._v(" "),n("li",[e._v("Click on "),n("strong",[e._v("Execute Node")]),e._v(" to run the node.")]),e._v(" "),n("li",[e._v("Open the URL shown in the "),n("strong",[e._v("Test URL")]),e._v(" field under "),n("strong",[e._v("Webhook URLs")]),e._v(" in a new browser tab.")])]),e._v(" "),n("p",[n("img",{attrs:{src:t(716),alt:"The Webhook node"}})]),e._v(" "),n("h3",{attrs:{id:"_2-respond-to-webhook-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-respond-to-webhook-node"}},[e._v("#")]),e._v(" 2. Respond to Webhook node")]),e._v(" "),n("p",[e._v("This node will define the response to the request received in the previous step.")]),e._v(" "),n("ol",[n("li",[e._v("Connect the "),n("em",[e._v("Webhook")]),e._v(" node from the previous step to the new "),n("em",[e._v("Respond to Webhook")]),e._v(" node.")]),e._v(" "),n("li",[e._v("Choose the "),n("strong",[e._v("Text")]),e._v(" option in the "),n("strong",[e._v("Respond With")]),e._v(" dropdown.")]),e._v(" "),n("li",[e._v("Enter some basic HTML into the "),n("strong",[e._v("Response Body")]),e._v(" field (for example the "),n("a",{attrs:{href:"https://getbootstrap.com/docs/5.1/getting-started/introduction/#starter-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap Starter template"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("li",[e._v("Click "),n("strong",[e._v("Add Option")]),e._v(" > "),n("strong",[e._v("Response Headers")]),e._v(" > "),n("strong",[e._v("Add Response Header")]),e._v(" to add a header to the response.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Content-Type")]),e._v(" in the "),n("strong",[e._v("Name")]),e._v(" field and "),n("code",[e._v("text/html; charset=UTF-8")]),e._v(" in the value field of the new header.")]),e._v(" "),n("li",[e._v("Close the "),n("em",[e._v("Respond to Webhook")]),e._v(" modal and click the "),n("strong",[e._v("Execute Workflow")]),e._v(" button.")]),e._v(" "),n("li",[e._v("Open the "),n("strong",[e._v("Test URL")]),e._v(" from the "),n("em",[e._v("Webhook")]),e._v(" node in a new browser tab. The browser should now show the page added defined in the "),n("strong",[e._v("Response Body")]),e._v(" field of the "),n("em",[e._v("Respond to Webhook")]),e._v(" node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:t(717),alt:"The Respond to Webhook node"}})])])}),[],!1,null,null,null);o.default=s.exports},715:function(e,o,t){e.exports=t.p+"assets/img/workflow.c22c6313.png"},716:function(e,o,t){e.exports=t.p+"assets/img/webhook_node.55c103f6.png"},717:function(e,o,t){e.exports=t.p+"assets/img/respond_to_webhook_node.a622769c.png"}}]);