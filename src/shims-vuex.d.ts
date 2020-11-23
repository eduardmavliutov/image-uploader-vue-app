// import state from './src/store/modules/image';// path to store file
import { Store } from 'vuex';
import { ImageState } from './types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<ImageState>
  }
}