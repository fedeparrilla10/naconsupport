import { apiRequest } from "../api-request";

class WarrantyApi {
  async storeWarranty(formData) {
    const response = await apiRequest("repairments/support", {
      method: "POST",
      body: formData, // Pasa el FormData directamente sin stringify
    });

    return response;
  }
}

export const warrantyApi = new WarrantyApi();
