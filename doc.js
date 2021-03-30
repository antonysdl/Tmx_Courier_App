/* */
Tookan npm module
This node library is a client to interact with the Tookan API

Usage
Install the npm module:


    npm install tookan - api
A simple example to create client:

    Tookan = require('tookan-api');

var client = new Tookan.Client({ api_key: "69616586f71342011c116e6a559626531fxg478ecc7fb23da733e5a15" });

Initialization
The Tookan Client constructor accepts an configuration object as an argument.

Tookan = require('tookan-api');

client = new Tookan.Client(options);
Valid options:

    api_key: User 's key to use for authenticated operations. This must be the user'
s api key.
Operations
Function Calls
Refer to Tookan API Docs
for details.All the functions
return a Promise object in response.

Example to call a Tookan API.

var response = client. < Function_Name > (options);
Function_Name can be:

    Agent

addAgent: To add an agent / driver / fleet to your account.
editAgent: To edit agent 's details.
getAllAgents: To view agents.
viewAgentProfile: To view an agent 's profile.
blockAndUnblockAgent: To block or unblock an agent.
getAgentTags: To view tags related to agents.
updateAgentTags: To update tags related to an agent.
getAgentLogs: To view agent 's logs.
getAgentLocation: To view agent 's location.
sendNotificationToAgent: To send push notifications to logged in agent(s).
getAgentSchedule: To get the agent schedule
for a particular date.
assignAgentToTask: To assign a task to agent.
deleteAgent: To delete an agent.
Task

createTask: To create a Pickup / Delivery / Appointment / FOS task.
createMultipleTasks: To create multiple Pickup - Delivery / Appointment / Fos tasks.
getTaskDetails: To view task details.
getTaskDetailsFromOrderId: To view task details from order Id.
editTask: To edit a task.
editMultipleTask: To edit multiple tasks.
updateTaskStatus: To update a task 's status.
startTask: To change task 's status to start.
cancelTask: To cancel a task.
assignTask: To manually assign a task.
autoAssignTask: To auto - assign task.
getAllTasks: To view all tasks.
getTaskStatistics: To view task related statistics.
deleteTask: To delete a task.
Mission

createMission: To create a Mission.
missionList: To view list of missions.
deleteMission: To delete a mission.
Team

createTeam: To create a team.
updateTeam: To update a team.
deleteTeam: To delete a team.
getTeamDetails: To view team details.
getJobAndAgentDetails: To get task / agent details
for a team.
Manager

createManager: To create a manager.
viewManager: To view manager details.
deleteManager: To delete a manager.
Customer

addCustomer: To add a customer.
getCustomers: To view list of customers.
editCustomer: To edit a customer 's details.
findCustomerWithPhone: To search
for customer using phone number.
findCustomerWithName: to search
for customer using name.
viewCustomerProfile: To view a customer 's profile.
deleteCustomer: To delete a customer.
Merchant

createMerchant: To create a merchant.
viewMerchant: To view merchants.
editMerchant: To edit merchant details.
getMerchantDetails: To view a merchant 's details.
getMerchantReport: To view a merchant 's report.
blockAndUnblockMerchant: To block or unblock a merchant.
getAvailableMerchantAgents: To get a list of available merchant 's agents.
assignMerchantAgentToTask: To assign a task to merchant 's agent.
createMerchantTask: To create a task
for merchant.
createMultipleMerchantTasks: To create connected tasks
for merchant.
editMerchantTask: To edit a task of merchant.
assignMerchantToTask: To assign a merchant to task.
getMerchantTeams: To view merchant 's teams.
Geofence

addRegion: To add a geofence.
editRegion: To edit a geofence.
viewRegions: to view geofences.
viewRegionDetails: To view a geofence 's details.
removeRegionForAgent: To remove a region
for agent.