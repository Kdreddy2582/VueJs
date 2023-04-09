const refsApp = Vue.createApp({
    data(){
        return{
            Message: 'Refs concept',
            //text: '',
            textMessage: '',
        }
    },
    beforeCreate(){
        console.log("Before Create");
        console.log(this.textMessage);
    },
    created(){
        console.log("Created");
        console.log(this.textMessage)
    },
    methods:{
        onAddMessageClick(){
            console.log(this.$refs.nameText.value)
            this.textMessage = this.text;
        },
        // setText(event){
        //     console.log('setting text')
        //     this.text = event.target.value;
        // }
    }
    
})
refsApp.mount("#refsApp")