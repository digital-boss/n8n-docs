(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1353:function(e,o,t){e.exports=t.p+"assets/img/workflow.73717948.png"},1354:function(e,o,t){e.exports=t.p+"assets/img/WooCommerce_node.aa644000.png"},1355:function(e,o,t){e.exports=t.p+"assets/img/WooCommerce1_node.ff01a5b1.png"},1356:function(e,o,t){e.exports=t.p+"assets/img/WooCommerce2_node.1b552d6e.png"},2069:function(e,o,t){"use strict";t.r(o);var r=t(26),n=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"woocommerce"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#woocommerce"}},[e._v("#")]),e._v(" WooCommerce")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://woocommerce.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WooCommerce"),r("OutboundLink")],1),e._v(" is a customizable, open-source e-commerce plugin for WordPress.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/WooCommerce/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.wooCommerce"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create, update, and get a product from WooCommerce. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/847",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("WooCommerce")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(1353),alt:"A workflow with the WooCommerce node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-woocommerce-node-create-product"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-woocommerce-node-create-product"}},[e._v("#")]),e._v(" 2. WooCommerce node (create: product)")]),e._v(" "),r("p",[e._v("This node will create a new product in WooCommerce.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the WooCommerce node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/WooCommerce/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Enter the product name in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Description'.")]),e._v(" "),r("li",[e._v("Enter a description in the "),r("em",[r("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Regular Price'.")]),e._v(" "),r("li",[e._v("Enter the price in the "),r("em",[r("strong",[e._v("Regular Price")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new product.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(1354),alt:"Using the WooCommerce node to create a new product"}})]),e._v(" "),r("h3",{attrs:{id:"_3-woocommerce1-node-update-product"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-woocommerce1-node-update-product"}},[e._v("#")]),e._v(" 3. WooCommerce1 node (update: product)")]),e._v(" "),r("p",[e._v("This node will update the product that we created in the previous node. We will update the quantity of the product.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Product ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > WooCommerce > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["WooCommerce"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Stock Quantity'.")]),e._v(" "),r("li",[e._v("Set the quantity in the "),r("em",[r("strong",[e._v("Stock Quantity")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node updates the quantity of the product that we created in the previous node.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(1355),alt:"Using the WooCommerce node to update the quantity of a product"}})]),e._v(" "),r("h3",{attrs:{id:"_4-woocommerce2-node-get-product"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-woocommerce2-node-get-product"}},[e._v("#")]),e._v(" 4. WooCommerce2 node (get: product)")]),e._v(" "),r("p",[e._v("This node will get the information about the product that we created using the WooCommerce node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Product ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > WooCommerce > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["WooCommerce"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns the information about the product that we created using the WooCommerce node.")]),e._v(" "),r("p",[r("img",{pre:!0,attrs:{src:t(1356),alt:"Using the WooCommerce node to get the information of a product"}})])])],1)}),[],!1,null,null,null);o.default=n.exports}}]);