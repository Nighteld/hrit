const userManagement = "/api/UserManagement/";
const utlity = "/api/Utility/";
const adminUser = "/api/AdminUser/";
const API_ENDPOINTS = {
  registerUser: userManagement + "RegisterUser",
  login: userManagement + "Login",
  generateToken: userManagement + "GenerateToken",
  changeUserPassword: userManagement + "ChangeUserPassword",
  uploadProfileImage: userManagement + "UploadProfileImage",
  getUserDetails: userManagement + "GetUserDetail",
  getDdl: utlity + "GetDDLList",
  registerAgent: adminUser + "RegisterAgent",
  getAgents: adminUser + "GetAgentDetails",
};

export default API_ENDPOINTS;
