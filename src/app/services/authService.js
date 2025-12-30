const API_BASE_URL = "http://localhost:8080/user";

class AuthService {
  async signup(userData) {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await response.json();
  }

  async login(credentials) {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  }

  async verifyEmail(code) {
    const response = await fetch(`${API_BASE_URL}/verify-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    return await response.json();
  }

  async forgotPassword(email) {
    const response = await fetch(`${API_BASE_URL}/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return await response.json();
  }

  async resetPassword(resetData) {
    const response = await fetch(`${API_BASE_URL}/reset-password`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resetData),
    });
    return await response.json();
  }

  async getUserData() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/login-data`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  removeToken() {
    localStorage.removeItem("token");
  }
}

export default new AuthService();
