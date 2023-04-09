const watchApp = Vue.createApp({
    data(){
        return{
            watcherMessage: "This is my first watcher program",
            firstName: "",
            lastName: "",
            fullName: "",
            activeClass: false,
            //activeValueColor: 'green',
            boxClassObject:{
                box: true,
                active: false
            }
           
        }
    },
    watch:{
       
        firstName(){
            this.fullName = "Hello" +' '+ this.firstName +' '+ this.lastName;
        },
        lastName(){
            this.fullName = "Hello" +' '+ this.firstName +' '+ this.lastName
        },
        activeClass(){
            this.boxClassObject.active = this.activeClass;
        },
      
    },
    methods:{
        onBoxClick(){
            this.activeClass = !this.activeClass;
        },
        // onStyleClick(){
        //     this.activeValueColor = 'blue'
        // }
        
    },
    computed:{
        boxClassObject(){
            return{
                box: true,
                active: this.activeClass
            }
        },  
        // styleBinding(){
        //     return{
        //         backgroundColor: this.activeValueColor 
        //     }
        // }     
    }
});
watchApp.mount("#watchApp");