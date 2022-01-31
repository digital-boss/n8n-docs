(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1305:function(e,t,a){e.exports=a.p+"assets/img/workflow.591c8421.png"},1306:function(e,t,a){e.exports=a.p+"assets/img/TheHive_node.6e40d7d0.png"},1307:function(e,t,a){e.exports=a.p+"assets/img/TheHive1_node.203f863c.png"},1308:function(e,t,a){e.exports=a.p+"assets/img/TheHive2_node.17e55d04.png"},2051:function(e,t,a){"use strict";a.r(t);var o=a(26),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"thehive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#thehive"}},[e._v("#")]),e._v(" TheHive")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://thehive-project.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TheHive"),o("OutboundLink")],1),e._v(" is a scalable open-source and free security incident response platform.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/TheHive/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Alert")]),e._v(" "),o("ul",[o("li",[e._v("Count alerts")]),e._v(" "),o("li",[e._v("Create an alert")]),e._v(" "),o("li",[e._v("Execute a responder on a specified alert")]),e._v(" "),o("li",[e._v("Get an alert")]),e._v(" "),o("li",[e._v("Get all alerts")]),e._v(" "),o("li",[e._v("Mark an alert as read")]),e._v(" "),o("li",[e._v("Mark an alert as unread")]),e._v(" "),o("li",[e._v("Merge an alert into an existing case")]),e._v(" "),o("li",[e._v("Promote an alert into a case")]),e._v(" "),o("li",[e._v("Update an alert")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Case")]),e._v(" "),o("ul",[o("li",[e._v("Count cases")]),e._v(" "),o("li",[e._v("Create a case")]),e._v(" "),o("li",[e._v("Execute a responder on a specified case")]),e._v(" "),o("li",[e._v("Get all cases")]),e._v(" "),o("li",[e._v("Get a single case")]),e._v(" "),o("li",[e._v("Update a case")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Log")]),e._v(" "),o("ul",[o("li",[e._v("Create a task log")]),e._v(" "),o("li",[e._v("Execute a responder on a selected log")]),e._v(" "),o("li",[e._v("Get all task logs")]),e._v(" "),o("li",[e._v("Get a single log")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Observable")]),e._v(" "),o("ul",[o("li",[e._v("Count observables")]),e._v(" "),o("li",[e._v("Create an observable")]),e._v(" "),o("li",[e._v("Execute an analyzer")]),e._v(" "),o("li",[e._v("Execute a responder on selected observable")]),e._v(" "),o("li",[e._v("Get all observables of a specific case")]),e._v(" "),o("li",[e._v("Get a single observable")]),e._v(" "),o("li",[e._v("Search observables")]),e._v(" "),o("li",[e._v("Update an observable")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Task")]),e._v(" "),o("ul",[o("li",[e._v("Count tasks")]),e._v(" "),o("li",[e._v("Create a task")]),e._v(" "),o("li",[e._v("Execute a responder on a specified task")]),e._v(" "),o("li",[e._v("Get a single task")]),e._v(" "),o("li",[e._v("Search tasks")]),e._v(" "),o("li",[e._v("Update a task")])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to create, update, and get a case in TheHive. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/808",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("TheHive")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1305),alt:"A workflow with the TheHive node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-thehive-node-create-case"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-thehive-node-create-case"}},[e._v("#")]),e._v(" 2. TheHive node (create: case)")]),e._v(" "),o("p",[e._v("This node will create a new case in TheHive with the title "),o("code",[e._v("n8n")]),e._v(" and set its severity to "),o("code",[e._v("low")]),e._v(". You can create a case with a different title and severity.")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the TheHive node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/TheHive/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Select 'Case' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Create' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter a title in the "),o("em",[o("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter a description in the "),o("em",[o("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Select 'Low' from the "),o("em",[o("strong",[e._v("Severity")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Set the start date in the "),o("em",[o("strong",[e._v("Start Date")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter a case owner in the "),o("em",[o("strong",[e._v("Owner")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter tags in the "),o("em",[o("strong",[e._v("Tags")])]),e._v(" field. You can enter multiple tags separate by a comma.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node creates a new case with the title "),o("code",[e._v("n8n")]),e._v(" and "),o("code",[e._v("low")]),e._v(" severity .")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1306),alt:"Using TheHive node to create a new case"}})]),e._v(" "),o("h3",{attrs:{id:"_3-thehive-node-update-case"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-thehive-node-update-case"}},[e._v("#")]),e._v(" 3. TheHive node (update: case)")]),e._v(" "),o("p",[e._v("This node will update the case that we created in the previous node. We will update the severity of the case.")]),e._v(" "),o("div",{pre:!0},[o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Case' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Update' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Case ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > TheHive > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["TheHive"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" and select 'Severity' from the dropdown list.")]),e._v(" "),o("li",[e._v("Select 'High' from the "),o("em",[o("strong",[e._v("Severity")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[e._v("In the screenshot below, you will notice that the node updates the severity of the case that we created in the previous node.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1307),alt:"Using TheHive node to update the severity of a case"}})]),e._v(" "),o("h3",{attrs:{id:"_4-thehive-node-get-case"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-thehive-node-get-case"}},[e._v("#")]),e._v(" 4. TheHive node (get: case)")]),e._v(" "),o("p",[e._v("This node will return the information of the case that we created in the previous node.")]),e._v(" "),o("div",{pre:!0},[o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Case' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Get' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Case ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > TheHive > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["TheHive"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[e._v("In the screenshot below, you will notice that the node returns the information of the case that we created earlier.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(1308),alt:"Using TheHive node to return the information a case"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);