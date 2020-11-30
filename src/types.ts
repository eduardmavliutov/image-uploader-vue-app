import { ActionTree, GetterTree, MutationTree, ModuleTree } from 'vuex';

export interface RootState {
  version: string;
}

export interface ImageData {
  id: string;
  src: string;
  title: string;
  timestamp: string;
}

export interface ImageState {
  images: ImageData[];
  loading: boolean;
  initialLoadingCompleted: boolean;
  lastUploadedImageUrl: string;
}

export interface Module<S, R> {
  namespaced?: boolean;
  state?: S | (() => S);
  getters?: GetterTree<S, R>;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>;
}

