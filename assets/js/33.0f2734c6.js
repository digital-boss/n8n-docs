(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1342:function(e,t,o){e.exports=o.p+"assets/img/workflow.a04084f9.png"},1343:function(e,t,o){e.exports=o.p+"assets/img/Wekan_node.c9d8dce4.png"},1344:function(e,t,o){e.exports=o.p+"assets/img/Wekan1_node.e704121e.png"},1345:function(e,t,o){e.exports=o.p+"assets/img/Wekan2_node.da678065.png"},1346:function(e,t,o){e.exports=o.p+"assets/img/Wekan3_node.0ff6e13a.png"},1347:function(e,t,o){e.exports=o.p+"assets/img/Wekan4_node.f8fff042.png"},2067:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"wekan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wekan"}},[e._v("#")]),e._v(" Wekan")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://wekan.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wekan"),n("OutboundLink")],1),e._v(" is an open-source kanban board that allows a card-based task and to-do management.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Wekan/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.wekan"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a board and two lists called "),n("code",[e._v("To Do")]),e._v(" and "),n("code",[e._v("Done")]),e._v(" using the Wekan node. It also allows you to create a card and update the list ID of the card, enabling you to move it from the "),n("code",[e._v("To Do")]),e._v(" list to the "),n("code",[e._v("Done")]),e._v(" list. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/728",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Wekan")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1342),alt:"A workflow with the Wekan node"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_1-start-node"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")])]),n("h3",{attrs:{id:"_2-wekan-node-create-board"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-wekan-node-create-board"}},[e._v("#")]),e._v(" 2. Wekan node (create: board)")]),e._v(" "),n("p",[e._v("This node will create a board called "),n("code",[e._v("Documentation")]),e._v(" in Wekan. To create a board with a different name, you can enter the name of your board instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Wekan node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Wekan/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[e._v("Select 'Board' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Documentation")]),e._v(" in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select the owner of the board from the "),n("em",[n("strong",[e._v("Owner")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new board with the title "),n("code",[e._v("Documentation")]),e._v(".")])]),n("p",[n("img",{attrs:{src:o(1343),alt:"Using the Wekan node to create a board"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_3-wekan1-node-create-list"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-wekan1-node-create-list"}},[e._v("#")]),e._v(" 3. Wekan1 node (create: list)")]),e._v(" "),n("p",[e._v("This node will create a list with the title "),n("code",[e._v("To Do")]),e._v(" in the "),n("code",[e._v("Documentation")]),e._v(" board, which was created using the previous node.")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'List' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Board ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("To Do")]),e._v(" in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new list called "),n("code",[e._v("To Do")]),e._v(" in the "),n("code",[e._v("Documentation")]),e._v(" board.")])]),n("p",[n("img",{attrs:{src:o(1344),alt:"Using the Wekan node to create a list with the title To Do"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_4-wekan2-node-create-list"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-wekan2-node-create-list"}},[e._v("#")]),e._v(" 4. Wekan2 node (create: list)")]),e._v(" "),n("p",[e._v("This node will create a list with the title "),n("code",[e._v("Done")]),e._v(" in the "),n("code",[e._v("Documentation")]),e._v(" board, which was created using the Wekan node.")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'List' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Board ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Done")]),e._v(" in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new list called "),n("code",[e._v("Done")]),e._v(" in the "),n("code",[e._v("Documentation")]),e._v(" board.")])]),n("p",[n("img",{attrs:{src:o(1345),alt:"Using the Wekan node to create a list with the title Done"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_5-wekan3-node-create-card"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-wekan3-node-create-card"}},[e._v("#")]),e._v(" 5. Wekan3 node (create: card)")]),e._v(" "),n("p",[e._v("This node will create a card in the "),n("code",[e._v("Documentation")]),e._v(" board under the list titled "),n("code",[e._v("To Do")]),e._v(", which was created using the Wekan1 node.")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Board ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("List ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan1 > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan1"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Document Wekan node")]),e._v(" in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select 'Default' from the "),n("em",[n("strong",[e._v("Swimlane ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select an author from the "),n("em",[n("strong",[e._v("Author ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new card with the title "),n("code",[e._v("Document Wekan node")]),e._v(" in the "),n("code",[e._v("To Do")]),e._v(" list of the "),n("code",[e._v("Documentation")]),e._v(" board.")])]),n("p",[n("img",{attrs:{src:o(1346),alt:"Using the Wekan node to create a card in the To Do list"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_6-wekan4-node-update-card"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_6-wekan4-node-update-card"}},[e._v("#")]),e._v(" 6. Wekan4 node (update: card)")]),e._v(" "),n("p",[e._v("This node will update the list ID of the card created by the previous node and move it from the "),n("code",[e._v("To Do")]),e._v(" list to the "),n("code",[e._v("Done")]),e._v(" list.")]),e._v(" "),n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Board ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("List ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan1 > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan1"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Card ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan3 > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan3"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'List ID'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("List ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan2 > Output Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$node["Wekan2"].json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node updates the list id of the card that we created in the previous node and moves it from the "),n("code",[e._v("To Do")]),e._v(" list to the "),n("code",[e._v("Done")]),e._v(" list.")])]),n("p",[n("img",{attrs:{src:o(1347),alt:"Using the Wekan node to update the card"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-to-load-all-the-parameters-for-the-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-load-all-the-parameters-for-the-node"}},[e._v("#")]),e._v(" How to load all the parameters for the node?")]),e._v(" "),n("p",[e._v("To load all the parameters, for example, Author ID, you need to give admin permissions to the user. Refer to the "),n("a",{attrs:{href:"https://github.com/wekan/wekan/wiki/Features#members-click-member-initials-or-avatar--permissions-adminnormalcomment-only",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wekan documentation"),n("OutboundLink")],1),e._v(" to learn how to change permissions.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);