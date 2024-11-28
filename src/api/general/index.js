import { apiRequest } from "../api-request";

class GeneralQuestionApi {
  async storeGeneralQuestion(request = {}) {
    const response = await apiRequest("repariments/generalquestion", {
      method: "POST",
      body: JSON.stringify(request),
    });

    return response;
  }
}

export const generalQuestionApi = new GeneralQuestionApi();
