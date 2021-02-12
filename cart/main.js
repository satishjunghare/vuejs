const app = Vue.createApp({
    data: function() {
        return { 
            cart: 0,
            premium: false
        }
    },
    methods: {
        updateCart() {
            this.cart += 1
        }
    }
})