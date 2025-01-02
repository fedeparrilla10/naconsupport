import { apiRequest } from "../api-request";

class ClickLogsApi {
  async storeClickLogs(request = {}) {
    const response = await apiRequest(`repairments/sat_logs`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
}

export const clickLogsApi = new ClickLogsApi();
