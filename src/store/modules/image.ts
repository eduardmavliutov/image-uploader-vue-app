import { Module, ActionTree, GetterTree, MutationTree } from 'vuex';
import { ImageState, RootState, ImageData} from '../../types';

const state: ImageState = {
  images: [],
  loading: false,
  initialLoadingCompleted: false,
  lastUploadedImageUrl: ''
}

const actions: ActionTree<ImageState, RootState> = {
  async fetchImages({commit, state}) {
    if(!state.initialLoadingCompleted) {
      const IMAGES_COUNT = 4;
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
            const image: ImageData = {
              id: responseData.data.id + Date.now(),
              src: responseData.data.images.original.url,
              title: responseData.data.title.trim() ? responseData.data.title.trim() : 'random gif',
              timestamp: responseData.data['import_datetime']
            };
            commit('addImage', image);
          })
        })
        .then(() => {
          commit('setLoading', false);
          commit('setInitialLoadingCompleted');
        });
    }
  },
};

const getters: GetterTree<ImageState, RootState> =  {
  images(state): ImageData[] {
    return state.images;
  },
  loading(state): boolean {
    return state.loading;
  },
  lastUploadedImageUrl(state): string {
    return state.lastUploadedImageUrl;
  }
}

const mutations: MutationTree<ImageState> = {
  addImage(state, image: ImageData): void {
    state.images.push(image);
  },
  deleteImage(state, id: string): void {
    state.images = state.images.filter((image) => image.id !== id);
  },
  setLoading(state, loading: boolean): void {
    state.loading = loading;
  },
  uploadImage(state, url: string): void {
    const date = new Date();
    const image: ImageData = {
      id: String(date.getMilliseconds()),
      timestamp: `${date.toLocaleDateString().split('.').reverse().join('-')} ${date.toLocaleTimeString()}`,
      src: url,
      title: `New Image ${date.getMilliseconds()}`
    }
    state.images.unshift(image);
  },
  setInitialLoadingCompleted(state): void {
    state.initialLoadingCompleted = true;
  },
  setLastUploadedImageUrl(state, src: string): void {
    state.lastUploadedImageUrl = src;
  }
};

const image: Module<ImageState, RootState> = {
  state,
  getters,
  actions,
  mutations
};

export default image;
