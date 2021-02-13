Vue.component('github-user-cart', {
    template: '#github-user-cart-template',
    props: {
        username: {
            type: String,
            default: 'NA',
            required: true
        }
    },
    data () {
        return {
            user: {}
        }
    },
    created () {
        axios.get(`https://api.github.com/users/${this.username}`)
        .then(response => {
            this.user = response.data
        })
    }
})

new Vue({
    el: '#app',
    data: {
        profiles : [
            {
                username: 'satishjunghare'
            },
            {
                username: 'hootlex'
            },
            {
                username: 'akryum'
            },
            {
                username: 'ratracegrad'
            },
            {
                username: 'krystalcampioni'
            },
            {
                username: 'ktquez'
            },
            {
                username: 'egoist'
            },
            {
                username: 'alexchopin'
            },
            {
                username: 'sdras'
            },
            {
                username: 'kenwheeler'
            },
            {
                username: 'znck'
            },
            {
                username: 'posva'
            }
        ]
    }
})