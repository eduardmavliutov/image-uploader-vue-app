export default {
  actions: {
    async fetchImages({commit, state}) {
      if(state.images.length === 0) {
        const IMAGES_COUNT = 15;
        const queries = new Array(IMAGES_COUNT);
        const images = [];
        commit('setLoading', true);
        for(let i = 0; i < queries.length; i++) {
          queries[i] = fetch(
            'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA'
          )
        }
        Promise.all(queries)
          .then((responses) => {
            responses.forEach(async (response) => {  
              const responseData = await response.json();
              const image = {};
              image.id = responseData.data.id;
              image.src = responseData.data.images.original.url;
              image.title = responseData.data.title.trim() ? responseData.data.title.trim() : 'random gif';
              images.push(image);
            })
          })
          .then(() => {
            commit('updateImages', images);
            commit('setLoading', false);
          });
      }
    },
  },
  mutations: {
    updateImages(state, images) {
      state.images = images;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    uploadImage(state, file) {
      const image = {
        id: Date.now(),
        timestamp: Date.now(),
        src: file,
        title: 'New Image ' + Date.now()
      }
      state.images.unshift(image);
    }
  },
  state: {
    images: [],
    loading: false,
    file: ''
  },
  getters: {
    images(state){
      return state.images;
    },
    loading(state) {
      return state.loading;
    }
  }
}