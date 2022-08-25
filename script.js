
// Root component option
const options ={
    data(){
        return {
            appName : 'kratik',
            count : 0,
            cls : 'cross',
            id : 'newId',
            dynamichtml : '<h1>V-html</h1>'
        }
    },
    methods: {
        showDate(){
            const date = new Date();
            return date.toUTCString();
        }   
    }
}

// Application instance 
const app = Vue.createApp(options);
// View model instance of component
const vm = app.mount('#app');