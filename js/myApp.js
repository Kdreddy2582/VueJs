const myApp = Vue.createApp({
    data(){
        return{
            myText: 'My Small appication',
            hobbies: [],
            hobby: '',
        }
    },
    methods:{
        onAddHobby(){
            this.hobbies.push(this.hobby);
            this.hobby = "";
        },
        onRemoveHobby(index){
            this.hobbies.splice(index, 1);
        }
    }
})
myApp.mount("#myApp")