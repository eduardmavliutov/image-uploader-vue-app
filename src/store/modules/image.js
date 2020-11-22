export default {
  actions: {
    async fetchImages({commit, state}) {
      if(!state.initialLoadingCompleted) {
        const IMAGES_COUNT = 15;
        const queries = new Array(IMAGES_COUNT);
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
              image.id = responseData.data.id + Date.now();
              image.src = responseData.data.images.original.url;
              image.title = responseData.data.title.trim() ? responseData.data.title.trim() : 'random gif';
              commit('addImage', image);
            })
          })
          .then(() => {
            commit('setLoading', false);
            commit('setInitialLoadingCompleted');
          });
      }
    },
  },
  mutations: {
    addImage(state, image) {
      state.images.push(image)
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
    },
    setInitialLoadingCompleted(state) {
      state.initialLoadingCompleted = true;
    },
    setLastUploadedImageUrl(state, src) {
      state.lastUploadedImageUrl = src;
    }
  },
  state: {
    images: [],
    loading: false,
    initialLoadingCompleted: false,
    lastUploadedImageUrl: ''
  },
  getters: {
    images(state) {
      return state.images;
    },
    loading(state) {
      return state.loading;
    },
    lastUploadedImageUrl(state) {
      return state.lastUploadedImageUrl;
    }
  }
}