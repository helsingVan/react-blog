import * as types from './mutation-type';

const setFullScreen = ({commit},isFullScreen) => {
	commit(types.set_fullscreen,isFullScreen);
};

export { setFullScreen };