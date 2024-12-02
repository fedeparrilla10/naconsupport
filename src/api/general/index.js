import { apiRequest } from "../api-request";

class GeneralQuestionApi {
  async storeGeneralQuestion(request = {}) {
    const response = await apiRequest("repairments/generalquestion", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
}

export const generalQuestionApi = new GeneralQuestionApi();
