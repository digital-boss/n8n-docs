(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1254:function(e,t,o){e.exports=o.p+"assets/img/workflow.1a804e1e.png"},1255:function(e,t,o){e.exports=o.p+"assets/img/Slack_node.a0dd3916.png"},1256:function(e,t,o){e.exports=o.p+"assets/img/Slack1_node.052e22ca.png"},1257:function(e,t,o){e.exports=o.p+"assets/img/Slack2_node.83459257.png"},1258:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.af6a045b.png"},1259:function(e,t,o){e.exports=o.p+"assets/img/Slack3_node.250d9c99.png"},2036:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"slack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slack"}},[e._v("#")]),e._v(" Slack")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://slack.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),n("OutboundLink")],1),e._v(" is a business communication platform offering many IRC-style features, including persistent chat rooms (channels), private groups, and direct messaging.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Slack/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.slack"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a channel, invite users to the channel, post a message, and upload a file to the channel. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/811",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Slack")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1254),alt:"A workflow with the Slack node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-slack-node-create-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-slack-node-create-channel"}},[e._v("#")]),e._v(" 2. Slack node (create: channel)")]),e._v(" "),n("p",[e._v("This node will create a new channel in your Slack workspace. This operation requires the "),n("code",[e._v("channel:manage")]),e._v(" scope. Add this scope under the "),n("em",[n("strong",[e._v("Bot Token Scopes")])]),e._v(" section on Slack. You can refer to the "),n("a",{attrs:{href:"#how-to-add-oauth-scopes-to-a-slack-app"}},[e._v("FAQs")]),e._v(" to learn how to add scopes.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'Access Token' from the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("You'll have to enter credentials for the Slack node. You can find out how to enter credentials for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Slack/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Channel' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a channel name in the "),n("em",[n("strong",[e._v("Channel")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that node creates a new channel in Slack.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1255),alt:"Using the Slack node to create a channel"}})]),e._v(" "),n("h3",{attrs:{id:"_3-slack1-node-invite-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-slack1-node-invite-channel"}},[e._v("#")]),e._v(" 3. Slack1 node (invite: channel)")]),e._v(" "),n("p",[e._v("This node will invite a member to the channel that we created in the previous node. This operation requires the "),n("code",[e._v("channel:read")]),e._v(" scope. Add this scope under the "),n("em",[n("strong",[e._v("Bot Token Scopes")])]),e._v(" section on Slack.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select 'Access Token' from the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Channel' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Invite' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Channel")])]),e._v(" field click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Slack > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Slack"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select the users from the "),n("em",[n("strong",[e._v("User IDs")])]),e._v(" dropdown list. The users you select in this field will be added to the channel.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that node invites the user to the channel we created using the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1256),alt:"Using the Slack node to invite a user to a channel"}})]),e._v(" "),n("h3",{attrs:{id:"_4-slack2-node-post-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-slack2-node-post-message"}},[e._v("#")]),e._v(" 4. Slack2 node (post: message)")]),e._v(" "),n("p",[e._v("This node will post a message in the channel with an attachment.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select 'Access Token' from the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Channel")])]),e._v(" field click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Slack > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Slack"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter a message in the "),n("em",[n("strong",[e._v("Text")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("As User")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". This option allows you to post a message as a bot.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add attachment")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Image URL' from the "),n("em",[n("strong",[e._v("Add attachment item")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the URL of an image in the "),n("em",[n("strong",[e._v("Image URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select 'Title' from the "),n("em",[n("strong",[e._v("Add attachment item")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a title in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that node sends a message with an attachment to the channel that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1257),alt:"Using the Slack node to send a message with an attachment to a channel"}})]),e._v(" "),n("h3",{attrs:{id:"_5-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-request-node-get"}},[e._v("#")]),e._v(" 5. HTTP Request node (GET)")]),e._v(" "),n("p",[e._v("This node will fetch a file from a URL. You can also use the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node to read a file from the path you specify.")],1),e._v(" "),n("ol",[n("li",[e._v("Enter the URL of a file in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select 'File' from the "),n("em",[n("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the HTTP Request node fetches the file from the URL. This file gets passed on as binary data to the next node in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1258),alt:"Using the HTTP Request node to fetch a file from a URL"}})]),e._v(" "),n("h3",{attrs:{id:"_6-slack3-node-upload-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-slack3-node-upload-file"}},[e._v("#")]),e._v(" 6. Slack3 node (upload: file)")]),e._v(" "),n("p",[e._v("This node will upload the file that we got from the previous node to a channel we specify.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'Access Token' from the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous Slack node.")]),e._v(" "),n("li",[e._v("Select 'File' from "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Upload' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Binary Data")])]),e._v(" to true.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add options")])]),e._v(" and select 'Channels'.")]),e._v(" "),n("li",[e._v("Select the channel from the "),n("em",[n("strong",[e._v("Channels")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node uploads the file to the channel that we created earlier.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1259),alt:"Using the Slack node to upload a file to a channel"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-to-create-a-private-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-private-channel"}},[e._v("#")]),e._v(" How to create a private channel?")]),e._v(" "),n("p",[e._v("To create a private channel, follow the steps mentioned below.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'Channel' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Is Private")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"how-to-add-oauth-scopes-to-a-slack-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-oauth-scopes-to-a-slack-app"}},[e._v("#")]),e._v(" How to add OAuth Scopes to a Slack app?")]),e._v(" "),n("p",[e._v("Your app needs appropriate scopes and permissions to perform actions. For example, if you want to create a new channel, your app requires the "),n("code",[e._v("channel:manage")]),e._v(" scope. To add scopes and permissions, follow the steps mentioned below.")]),e._v(" "),n("ol",[n("li",[e._v("Navigate to the "),n("a",{attrs:{href:"https://api.slack.com/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack App dashboard"),n("OutboundLink")],1),e._v(" page and select your app.")]),e._v(" "),n("li",[e._v("Click on 'OAuth & Permissions' under the "),n("em",[n("strong",[e._v("Feature")])]),e._v(" section on the left sidebar.")]),e._v(" "),n("li",[e._v("Scroll down to the "),n("em",[n("strong",[e._v("Scopes")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("If you're building a bot, click on "),n("em",[n("strong",[e._v("Add an OAuth Scope")])]),e._v(" under the "),n("em",[n("strong",[e._v("Bot Token Scopes")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the permissions you want to give to your bot from the dropdown list.")]),e._v(" "),n("li",[e._v("If you want the app to access user data and act on behalf of users that authorize them, add scopes under the "),n("em",[n("strong",[e._v("User Token Scopes")])]),e._v(".")]),e._v(" "),n("li",[e._v("When you add new scopes, Slack will ask you to reinstall the app. Click on 'reinstall your app' on the top of the page and reinstall the app.")])]),e._v(" "),n("p",[e._v("You can refer to the official documentation on "),n("a",{attrs:{href:"https://api.slack.com/scopes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scopes and permissions"),n("OutboundLink")],1),e._v(" to learn more.")]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=a.exports}}]);