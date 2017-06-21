/*
 *@file mutation
 *
 *
 */

 const mutations = {
   addHotmovie(state,payload) {
   	state.hotmovie = payload.data;
   	// state.info = payload.data;
   },
   addPiaofang(state,payload) {
   	state.piaofang = payload.data;
   },
   addFuturemovie(state,payload) {
   	state.futuremovie = payload.data;
   }
 };

 export default mutations;