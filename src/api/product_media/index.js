import { apiRequest } from "../api-request";

class ProductMediaApi {
  async getProductMedia(ref) {
    const response = await apiRequest(`saleslayer/items/media/${ref}`, {
      method: "GET",
    });

    return response;
  }

  async getProductVideos(ref) {
    const response = await apiRequest(`saleslayer/items/videos/${ref}`, {
      method: "GET",
    });

    return response;
  }
}

export const productMediaApi = new ProductMediaApi();
