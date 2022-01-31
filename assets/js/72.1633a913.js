(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1502:function(t,e,o){t.exports=o.p+"assets/img/credentials_entity.80c5a314.png"},1503:function(t,e,o){t.exports=o.p+"assets/img/execution_entity.c5dabc58.png"},1504:function(t,e,o){t.exports=o.p+"assets/img/migrations.3911dded.png"},1505:function(t,e,o){t.exports=o.p+"assets/img/webhook_entity.84d7268a.png"},1506:function(t,e,o){t.exports=o.p+"assets/img/workflow_entity.e06c74ce.png"},2152:function(t,e,o){"use strict";o.r(e);var a=o(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"understanding-n8n-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-n8n-database"}},[t._v("#")]),t._v(" Understanding n8n Database")]),t._v(" "),a("p",[t._v("By default, n8n uses SQLite as the database. If you are using another database it will be similar, but the data-types will be different depending on the database.")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/reference/glossary.html#credentials"}},[t._v("credentials")]),t._v(", "),a("RouterLink",{attrs:{to:"/reference/glossary.html#workflow"}},[t._v("workflows")]),t._v(", "),a("RouterLink",{attrs:{to:"/reference/glossary.html#execution"}},[t._v("executions")]),t._v(", and "),a("RouterLink",{attrs:{to:"/reference/glossary.html#webhook"}},[t._v("webhook")]),t._v(" are decoupled and stored in different tables.")],1),t._v(" "),a("p",[t._v("To inspect the n8n database, you can use "),a("a",{attrs:{href:"https://dbeaver.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("DBeaver"),a("OutboundLink")],1),t._v(", which is an open-source universal database tool.")]),t._v(" "),a("h2",{attrs:{id:"credentials-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credentials-entity"}},[t._v("#")]),t._v(" Credentials entity")]),t._v(" "),a("p",[t._v("Based on the node you use in a workflow, you may have to use credentials to connect the node with the respective service. These credentials get stored in the "),a("code",[t._v("credentials_entity")]),t._v(" table with the following fields.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Column Name")]),t._v(" "),a("th",[t._v("Data Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("INTEGER")]),t._v(" "),a("td",[t._v("Auto-incremented and unique for each row")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the name of the credentials given by the user")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("Text")]),t._v(" "),a("td",[t._v("Stores the encrypted data")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Refers to the credential type used by the node")])]),t._v(" "),a("tr",[a("td",[t._v("nodeAccess")]),t._v(" "),a("td",[t._v("TEXT")]),t._v(" "),a("td",[t._v("Stores the information of the nodes that have access to these credentials")])]),t._v(" "),a("tr",[a("td",[t._v("createdAt")]),t._v(" "),a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("Stores the date and time when a credential gets created")])]),t._v(" "),a("tr",[a("td",[t._v("updatedAt")]),t._v(" "),a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("Stores the date and time when a credential gets updated")])])])]),t._v(" "),a("p",[t._v("Below is an example of how n8n stores the credentials in the credentials_entity table in the SQLite database. The example below shows the data stored in the table for the "),a("em",[t._v("Pipedrive Trial")]),t._v(" credentials.")]),t._v(" "),a("p",[t._v("The "),a("em",[a("strong",[t._v("name")])]),t._v(" field contains the credentials name, and the "),a("em",[a("strong",[t._v("data")])]),t._v(" field stores the credentials by encrypting them.\nThe "),a("RouterLink",{attrs:{to:"/nodes/credentials/Pipedrive/"}},[t._v("Pipedrive")]),t._v(" node has two authentication methods - OAuth and Access Token. The "),a("em",[a("strong",[t._v("type")])]),t._v(" field indicates the method the credentials belong to. The "),a("em",[a("strong",[t._v("nodeAccess")])]),t._v(" field stores information about the nodes that have access to these credentials. In the example below, both the Pipedrive node and the Pipedrive Trigger node have access to the Pipedrive Trial credentials.")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(1502),alt:"Data stored in the credentials_entity table"}})]),t._v(" "),a("h2",{attrs:{id:"execution-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution-entity"}},[t._v("#")]),t._v(" Execution entity")]),t._v(" "),a("p",[t._v("Depending on the settings, the executions are stored in the "),a("code",[t._v("execution_entity")]),t._v(" table with the following fields.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Column Name")]),t._v(" "),a("th",[t._v("Data Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("INTEGER")]),t._v(" "),a("td",[t._v("Auto-incremented and unique for each row")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("Text")]),t._v(" "),a("td",[t._v("Stores the execution data")])]),t._v(" "),a("tr",[a("td",[t._v("finished")]),t._v(" "),a("td",[t._v("BOOLEAN")]),t._v(" "),a("td",[t._v("Indicates if the execution was finished successfully or not ( 1 = finished successfully)")])]),t._v(" "),a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Refers to the type of node that "),a("RouterLink",{attrs:{to:"/reference/glossary.html#Trigger"}},[t._v("triggered")]),t._v("  the workflow (for example, webhook, trigger, error)")],1)]),t._v(" "),a("tr",[a("td",[t._v("retryOf")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Indicates if the execution was a retry of a previous execution")])]),t._v(" "),a("tr",[a("td",[t._v("retrySuccessId")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the ID of a retry execution if it was a success")])]),t._v(" "),a("tr",[a("td",[t._v("startedAt")]),t._v(" "),a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("Stores the date and time when execution gets started")])]),t._v(" "),a("tr",[a("td",[t._v("stoppedAt")]),t._v(" "),a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("Stores the date and time when execution gets stopped")])]),t._v(" "),a("tr",[a("td",[t._v("workflowData")]),t._v(" "),a("td",[t._v("TEXT")]),t._v(" "),a("td",[t._v("Stores the workflow data with the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/#method-getworkflowstaticdata-type"}},[t._v("static data")]),t._v(" (if any)")],1)]),t._v(" "),a("tr",[a("td",[t._v("workflowId")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the ID of the workflow that got executed")])])])]),t._v(" "),a("p",[t._v("Below is an example of how n8n stores the execution information in the "),a("code",[t._v("execution_entity")]),t._v(" table in the SQLite database. The example below shows the execution data stored in the table for the "),a("a",{attrs:{href:"https://n8n.io/workflows/880",target:"_blank",rel:"noopener noreferrer"}},[t._v("Receive updates of the position of the ISS every minute"),a("OutboundLink")],1),t._v(" workflow.")]),t._v(" "),a("p",[t._v("The "),a("em",[a("strong",[t._v("data")])]),t._v(" field contains the data returned by the nodes after the execution of the workflow. The "),a("em",[a("strong",[t._v("finished")])]),t._v(" field contains the value "),a("code",[t._v("1")]),t._v(", indicating that the execution got completed successfully. The example workflow uses a Trigger node to start the workflow. This information gets stored in the "),a("em",[a("strong",[t._v("mode")])]),t._v(" field. The "),a("em",[a("strong",[t._v("workflowData")])]),t._v(" field stores information about the workflow and static data. The "),a("em",[a("strong",[t._v("workflowId")])]),t._v(" field refers to the workflow that got executed.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1503),alt:"Data stored in the execution_entity table"}})]),t._v(" "),a("h2",{attrs:{id:"migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/typeorm/typeorm/blob/master/docs/migrations.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migration"),a("OutboundLink")],1),t._v(" is a file with SQL queries to update a database schema. For example, if a new column gets added to a database, n8n creates a migration. On startup, n8n checks for new migrations. The logs of the migrations that ran get stored in the "),a("code",[t._v("migrations")]),t._v(" table. n8n uses this table to check for the migrations that got executed earlier. The "),a("code",[t._v("migrations")]),t._v(" table has the following fields.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Column Name")]),t._v(" "),a("th",[t._v("Data Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("INTEGER")]),t._v(" "),a("td",[t._v("Auto-incremented and unique for each row")])]),t._v(" "),a("tr",[a("td",[t._v("timestamp")]),t._v(" "),a("td",[t._v("BIGINT")]),t._v(" "),a("td",[t._v("Stores the timestamp when the migration ran")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the name of the migration that ran")])])])]),t._v(" "),a("p",[t._v("Below is an example of how n8n logs the migrations that ran in the "),a("code",[t._v("migrations")]),t._v(" table.")]),t._v(" "),a("p",[t._v("The timestamp when the migration got executed is stored in the "),a("em",[a("strong",[t._v("timestamp")])]),t._v(" field. The "),a("em",[a("strong",[t._v("name")])]),t._v(" field stores the name of the migration that got executed.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1504),alt:"Logs stored in the migrations table"}})]),t._v(" "),a("h2",{attrs:{id:"webhook-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook-entity"}},[t._v("#")]),t._v(" Webhook entity")]),t._v(" "),a("p",[t._v("You may have to use a Trigger node (for example, Webhook node, Pipedrive Trigger node, ClickUp Trigger node, etc.) to trigger your workflow. The information of active webhooks used by these trigger nodes gets stored in the "),a("code",[t._v("webhook_entity")]),t._v(" table with the following fields.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Column Name")]),t._v(" "),a("th",[t._v("Data Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("workflowId")]),t._v(" "),a("td",[t._v("INTEGER")]),t._v(" "),a("td",[t._v("Stores the ID of the workflow")])]),t._v(" "),a("tr",[a("td",[t._v("webhookPath")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the webhook path")])]),t._v(" "),a("tr",[a("td",[t._v("method")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the information about the HTTP Method")])]),t._v(" "),a("tr",[a("td",[t._v("node")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the name of the trigger node")])])])]),t._v(" "),a("p",[t._v("Below is an example of how n8n stores information about webhook in the "),a("code",[t._v("webhook_entity")]),t._v(" table in the SQLite database. The example below shows the data stored in the table for an example workflow that uses the Webhook node.")]),t._v(" "),a("p",[t._v("The "),a("em",[a("strong",[t._v("workflowId")])]),t._v(" field contains the id of the workflow that contains the Webhook node. The "),a("em",[a("strong",[t._v("webhookPath")])]),t._v(" field stores the path used by the Webhook node. Generally, the webhook path gets generated by n8n. If you enter a custom path, the "),a("em",[a("strong",[t._v("webhookPath")])]),t._v(" field will store that instead.")]),t._v(" "),a("p",[t._v("Based on your use-case, you can configure the HTTP request method in the Webhook node. The information about the HTTP request method you use with the Webhook node gets stored in the "),a("em",[a("strong",[t._v("method")])]),t._v(" field. The "),a("em",[a("strong",[t._v("node")])]),t._v(" field stores the name of the node.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1505),alt:"Data stored in the webhook_entity table"}})]),t._v(" "),a("h2",{attrs:{id:"workflow-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow-entity"}},[t._v("#")]),t._v(" Workflow entity")]),t._v(" "),a("p",[t._v("The saved workflows get stored in the "),a("code",[t._v("workflow_entity")]),t._v(" table with the following fields.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Column Name")]),t._v(" "),a("th",[t._v("Data Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("INTEGER")]),t._v(" "),a("td",[t._v("Auto-incremented and unique for each row")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("Stores the name of the workflow given by the user")])]),t._v(" "),a("tr",[a("td",[t._v("active")]),t._v(" "),a("td",[t._v("BOOLEAN")]),t._v(" "),a("td",[t._v("Stores the information about the active state of the workflow (1 = active)")])]),t._v(" "),a("tr",[a("td",[t._v("nodes")]),t._v(" "),a("td",[t._v("TEXT")]),t._v(" "),a("td",[t._v("Stores the information about nodes and their configurations in a workflow")])]),t._v(" "),a("tr",[a("td",[t._v("connections")]),t._v(" "),a("td",[t._v("TEXT")]),t._v(" "),a("td",[t._v("Stores the "),a("RouterLink",{attrs:{to:"/reference/data/glossary.html#connection"}},[t._v("connection")]),t._v(" information between nodes in a workflow")],1)]),t._v(" "),a("tr",[a("td",[t._v("createdAt")]),t._v(" "),a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("Stores the date and time when a workflow gets created")])]),t._v(" "),a("tr",[a("td",[t._v("updatedAt")]),t._v(" "),a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("Stores the date and time when a workflow gets updated")])]),t._v(" "),a("tr",[a("td",[t._v("settings")]),t._v(" "),a("td",[t._v("TEXT")]),t._v(" "),a("td",[t._v("Stores the information about additional settings of a workflow. For example, timezone, error workflow etc.")])]),t._v(" "),a("tr",[a("td",[t._v("staticData")]),t._v(" "),a("td",[t._v("TEXT")]),t._v(" "),a("td",[t._v("Stores the static data of the workflow")])])])]),t._v(" "),a("p",[t._v("Below is an example of how n8n stores the workflow data in the workflow_entity table in the SQLite database. The example below shows the data stored in the table for the workflow "),a("em",[t._v("Example Workflow")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("em",[a("strong",[t._v("name")])]),t._v(" field contains the workflow name. The "),a("em",[a("strong",[t._v("active")])]),t._v(" field has the value "),a("code",[t._v("0")]),t._v(", indicating that the workflow is not active. If the workflow was set to active, the "),a("em",[a("strong",[t._v("active")])]),t._v(" field would contain the value "),a("code",[t._v("1")]),t._v(". The information about the nodes used in the workflow with their configurations gets stored in the "),a("em",[a("strong",[t._v("nodes")])]),t._v(" field.")]),t._v(" "),a("p",[t._v("The "),a("em",[a("strong",[t._v("connections")])]),t._v(" field stores information about the connection between the nodes. We can notice that the Start node is connected to the Set node. The "),a("em",[a("strong",[t._v("settings")])]),t._v(" field stores information about the additional setting of the workflow. In the example, we can notice that the timezone was changed and set to Asia/Calcutta, and an error workflow was also configured for this workflow. This example workflow doesn't store static data. If a workflow stores data, the "),a("em",[a("strong",[t._v("staticData")])]),t._v(" field would contain that information.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1506),alt:"Data stored in the workflow_entity table"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);