const userManagement = "/api/UserManagement/";
const utility = "/api/Utility/";
const adminUser = "/api/AdminUser/";
const user = "/api/User/";
const API_ENDPOINTS = {
  registerUser: userManagement + "RegisterUser",
  login: userManagement + "Login",
  generateToken: userManagement + "GenerateToken",
  changeUserPassword: userManagement + "ChangeUserPassword",
  uploadProfileImage: userManagement + "UploadProfileImage",
  getUserDetails: userManagement + "GetUserDetail",
  getDdl: utility + "GetDDLList",
  registerAgent: adminUser + "RegisterAgent",
  getAgents: adminUser + "GetAgentDetails",
  saveUser: user + "InsertPreRegistration",
  getUsers: user + "GetPreRegistration",
  saveLeadsDetails: user + "InsertUpdateLeadDetails",
  getLeadsLists: user + "GetLeadDetails",
  getJsonFromExcel: utility + "GetJsonFromExcel",
  registerStaff: adminUser + "RegisterStaff",
  getStaff: adminUser + "GetStaffDetails",
  saveEvents: user + "InsertUpdateEvents",
  getEvents: user + "GetEvents",
};

export default API_ENDPOINTS;
