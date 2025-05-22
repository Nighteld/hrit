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
  UploadProfileImage: userManagement + "UploadProfileImage",
  getUserDetails: userManagement + "GetUserDetail",
  GetUserDetail: userManagement + "GetUserDetail",

  getDdl: utility + "GetDDLList",
  getJsonFromExcel: utility + "GetJsonFromExcel",

  registerAgent: adminUser + "RegisterAgent",
  getAgents: adminUser + "GetAgentDetails",
  registerStaff: adminUser + "RegisterStaff",
  getStaff: adminUser + "GetStaffDetails",
  GetStakeHolderDetails: adminUser + "GetStakeHolderDetails",
  RegisterStakeHolder: adminUser + "RegisterStakeHolder",
  GetUserDetails: adminUser + "GetUserDetails",
  UpdateUserStatus: adminUser + "UpdateUserStatus",
  GetUserRoleMapping: adminUser + "GetUserRoleMapping",
  GetRoleList: adminUser + "GetRoleList",
  InsertUpdateUserRoleMapping: adminUser + "InsertUpdateUserRoleMapping",

  saveUser: user + "InsertPreRegistration",
  getUsers: user + "GetPreRegistration",
  saveLeadsDetails: user + "InsertUpdateLeadDetails",
  getLeadsLists: user + "GetLeadDetails",
  saveEvents: user + "InsertUpdateEvents",
  getEvents: user + "GetEvents",
  GetLeadFollowUpDetails: user + "GetLeadFollowUpDetails",
  InsertUpdateFollowUp: user + "InsertUpdateFollowUp",
  GetFollowupDetails: user + "GetFollowupDetails",
  StaffDashboard: user + "StaffDashboard",
  StakeholderDashboard: user + "StakeholderDashboard",
  getEventsCMS: cms + "GetEvents",
};

export default API_ENDPOINTS;
