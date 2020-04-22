import firebase from 'firebase/app'

export default {
    state: {
        info: {},
        uid: ''
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
            console.log('setInfo', info)
        },
        clearInfo(state) {
            state.info = {}
            state.orders = []
        },
        setUID(state, uid) {
            state.uid = uid
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid');
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', info)
                commit('setUID', uid)
            } catch(e) {
                console.log(e)
            }
        }
    },
    getters: {
        info: s => s.info,
        uid: s => s.uid
    }
}