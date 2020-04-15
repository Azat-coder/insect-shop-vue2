import firebase from 'firebase/app'

export default {
    state: {
        image: '',
        isCompleted: false
    },
    mutations: {
        setImage(state, image) {
            state.image = image
        },
        reloaded(state) {
            state.isCompleted = false
        }
    },
    actions: {
        uploadImage(context, image) {
            context.commit('setImage', image);
            let storageRef = firebase.storage().ref('commentImages/' + `${image.name}`).put(image)
            storageRef.on(`state_changed`, () => {                
            }, error => {
                console.log(error.message)
            }, 
               () => {
                context.state.isCompleted = true
                console.log('complete')
            })
        }
    },
    getters: {
        uploaded(state) {
            return state.isCompleted
        }
    } 
}