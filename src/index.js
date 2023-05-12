const appVue = Vue.createApp({
    data() {
        return {
            count:0
        }
    },
    methods: {
        add() {
            return this.count++
        },
        remove() {
            return this.count--
            
        }
    }
})

appVue.mount("#app")