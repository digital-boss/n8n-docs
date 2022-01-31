(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1551:function(e,t,o){"use strict";o.r(t);var s=o(26),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_3-filtering-orders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-filtering-orders"}},[e._v("#")]),e._v(" 3. Filtering Orders")]),e._v(" "),s("p",[e._v("In this step of the workflow you will learn how to filter data using conditional logic and how to use expressions in nodes using the "),s("em",[e._v("IF")]),e._v(" node.")]),e._v(" "),s("p",[e._v("To insert only processing orders into Airtable we need to filter our data by "),s("em",[e._v("orderStatus")]),e._v(". Basically, we want to tell the program that "),s("em",[e._v("if")]),e._v(" the "),s("em",[e._v("orderStatus")]),e._v(" is processing, "),s("em",[e._v("then")]),e._v(" insert all records with this status into Airtable; "),s("em",[e._v("else")]),e._v(", i.e. if the "),s("em",[e._v("orderStatus")]),e._v(" is not "),s("em",[e._v("processing")]),e._v(", calculate the sum of all orders with the other "),s("em",[e._v("orderStatus (booked)")]),e._v(".")]),e._v(" "),s("p",[e._v("This if-then-else command is conditional logic. In n8n workflows, conditional logic can be implemented with the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[s("strong",[e._v("IF node")])]),e._v(", which splits a workflow conditionally based on comparison operations.")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("💡 IF vs Switch")]),e._v(" "),s("p",[e._v("If you need to filter data on more than two conditional routes that are possible with the "),s("em",[e._v("IF")]),e._v(" node (true and false), use the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Switch/"}},[s("em",[e._v("Switch node")])]),e._v(". The "),s("em",[e._v("Switch node")]),e._v(" is similar to the "),s("em",[e._v("IF")]),e._v(" node, but supports up to four conditional routes.")],1)]),e._v(" "),s("p",[e._v("Back to your workflow, remove the connection between the "),s("em",[e._v("HTTP Request")]),e._v(" node and the "),s("em",[e._v("Airtable")]),e._v(" node. Add an "),s("em",[e._v("IF")]),e._v(" node connected to the "),s("em",[e._v("HTTP Request")]),e._v(" node.")]),e._v(" "),s("p",[e._v("In the "),s("em",[e._v("IF")]),e._v(" node window click on "),s("em",[e._v("Add Condition")]),e._v(" > "),s("em",[e._v("string")]),e._v(" and configure the parameters:")]),e._v(" "),s("div",{pre:!0},[s("ul",[s("li",[s("em",[e._v("Value 1")]),e._v(": Current Node > Input Data > JSON > orderStatus → "),s("code",[e._v('{{$json["orderStatus"]}}')]),e._v(" "),s("br"),e._v("\nTo select this value, click on the wheel icon “Add Expression” on the right side of the Value 1 field.")])]),e._v(" "),s("div",{pre:!0,attrs:{class:"custom-block tip"}},[s("p",{pre:!0,attrs:{class:"custom-block-title"}},[e._v("📖 Expressions")]),e._v(" "),s("p",[e._v("An "),s("RouterLink",{pre:!0,attrs:{to:"/reference/glossary.html#Expression"}},[e._v("expression")]),e._v(" is a string of characters and symbols in a programming language that represents a value depending upon its input. In n8n workflows, you can use expressions in a node to refer to another node for input data. In our example, the IF node references the data output by the HTTP Request node.")],1)])]),s("figure",[s("img",{staticStyle:{width:"100%"},attrs:{src:o(419),alt:"Expression Editor in the IF node"}}),s("figcaption",{attrs:{align:"center"}},[s("i",[e._v("Expression Editor in the IF node")])])]),e._v(" "),s("ul",[s("li",[s("em",[e._v("Operation:")]),e._v(" equal")]),e._v(" "),s("li",[s("em",[e._v("Value 2:")]),e._v(" processing")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("⚠️ Data Type")]),e._v(" "),s("p",[e._v("Make sure to select the correct data type (boolean, data & time, number, or string) of the referenced data in "),s("em",[e._v("Add Condition")]),e._v(".")])]),e._v(" "),s("p",[e._v("Now execute the IF node and have a look at the resulting data, which should look like this:")]),e._v(" "),s("figure",[s("img",{staticStyle:{width:"100%"},attrs:{src:o(420),alt:"IF node"}}),s("figcaption",{attrs:{align:"center"}},[s("i",[e._v("IF node")])])]),e._v(" "),s("p",[e._v("Next, we want to insert this data into Airtable. You already know how to do this from the previous chapter where we inserted all data into the "),s("em",[e._v("orders")]),e._v(" table.")]),e._v(" "),s("p",[e._v("At this stage, your workflow should look like this:")]),e._v(" "),s("figure",[s("img",{staticStyle:{width:"100%"},attrs:{src:o(421),alt:"Workflow with the IF node"}}),s("figcaption",{attrs:{align:"center"}},[s("i",[e._v("Workflow with the IF node")])])]),e._v(" "),s("h2",{attrs:{id:"what-s-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),s("p",[s("strong",[e._v("Nathan 🙋")]),e._v(": This IF node is really useful for filtering data! Now I have all the information about processing orders. I actually only need the employeeName and orderId, but I guess I can keep all the other fields just in case.")]),e._v(" "),s("p",[s("strong",[e._v("You 👩‍🔧")]),e._v(": Actually, I wouldn't recommend doing that. Inserting more data requires more computational power, the data transfer is slower and takes longer, and takes up more storage resources in your table. In this particular case, 14 records with 5 features might not seem like a lot to make a significant difference, but if your business grows to thousands of records and tens of features, things add up and even one extra column can affect performance.")]),e._v(" "),s("p",[s("strong",[e._v("Nathan 🙋")]),e._v(": Oh, that's good to know. So, can you select only two fields from the processing orders?")]),e._v(" "),s("p",[s("strong",[e._v("You 👩‍🔧")]),e._v(": Sure, I'll do that in the next step.")])])}),[],!1,null,null,null);t.default=n.exports},419:function(e,t,o){e.exports=o.p+"assets/img/If-node-expression-editor.5990ea53.png"},420:function(e,t,o){e.exports=o.p+"assets/img/If-node.f4e2a392.png"},421:function(e,t,o){e.exports=o.p+"assets/img/Workflow-with-If-node.8ff0eb2d.png"}}]);