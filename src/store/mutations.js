import * as types from './mutation-type';

const mutations = {
	[types.set_fullscreen](state,isFullScreen) {
		state.fullScreen = isFullScreen;
	}
};

export default mutations;