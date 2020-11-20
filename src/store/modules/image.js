export default {
  actions: {
    async fetchImages(ctx) {
      const IMAGES_COUNT = 15;
      const images = new Array(IMAGES_COUNT);

      
      for(let i = 0; i < images.length; i++) {
        const response = await fetch(
          'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA'
        );
        const responseData = await response.json();
        const image = {};
        image.id = responseData.data.id;
        image.src = responseData.data.images.original.url;
        image.alt = responseData.data.title.trim() ? responseData.data.title.trim() : 'random gif';
        images[i] = image;
      }


      ctx.commit('updateImages', images);
    }
  },
  mutations: {
    updateImages(state, images) {
      state.images = images;
    }
  },
  state: {
    images: []
  },
  getters: {
    images(state) {
      return state.images;
    }
  }
}