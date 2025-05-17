const userManagement = "/api/UserManagement/";
const utility = "/api/Utility/";
const adminUser = "/api/AdminUser/";
const user = "/api/User/";
const cms = "/api/CMS/";
const API_ENDPOINTS = {
  registerUser: userManagement + "RegisterUser",
  login: userManagement + "Login",
  generateToken: userManagement + "GenerateToken",
  changeUserPassword: userManagement + "ChangeUserPassword",
  uploadProfileImage: userManagement + "UploadProfileImage",
  getUserDetails: userManagement + "GetUserDetail",

  getDdl: utility + "GetDDLList",
  getJsonFromExcel: utility + "GetJsonFromExcel",

  registerAgent: adminUser + "RegisterAgent",
  getAgents: adminUser + "GetAgentDetails",
  registerStaff: adminUser + "RegisterStaff",
  getStaff: adminUser + "GetStaffDetails",
  GetStakeHolderDetails: adminUser + "GetStakeHolderDetails",
  RegisterStakeHolder: adminUser + "RegisterStakeHolder",

  saveUser: user + "InsertPreRegistration",
  getUsers: user + "GetPreRegistration",
  saveLeadsDetails: user + "InsertUpdateLeadDetails",
  getLeadsLists: user + "GetLeadDetails",
  saveEvents: user + "InsertUpdateEvents",
  getEvents: user + "GetEvents",
  GetLeadFollowUpDetails: user + "GetLeadFollowUpDetails",
  InsertUpdateFollowUp: user + "InsertUpdateFollowUp",
  GetFollowupDetails: user + "GetFollowupDetails",

  getEventsCMS: cms + "GetEvents",
};

export default API_ENDPOINTS;
