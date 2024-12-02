import { apiRequest } from "../api-request";

class WarrantyApi {
  async storeWarranty(formData) {
    const response = await apiRequest("repairments/support", {
      method: "POST",
      body: formData,
    });

    return response;
  }
}

export const warrantyApi = new WarrantyApi();
