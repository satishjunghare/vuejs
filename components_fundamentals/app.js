let cartItembuttonComponent = {
    template: '#cart-item-buttons-template',
    data () {
        return {
            selected: false
        }
    },
    methods: {
        select () {
            this.$emit('productSelected')
            this.selected = true
        }
    }
}

Vue.component('cart-item', {
    template: '#cart-item-template',
    components: {
        'cart-item-button': cartItembuttonComponent
    },
    props: {
        title: {
            type: String,
            default: 'Title',
            required: true
        },
        desc: {
            type: String,
            default: 'Short Description',
            required: true
        }
    }
})

new Vue({
    el: '#app',
    data: {
        cartItems: [
            {
                title: 'Title One',
                shortDesc: 'Some quick example text to build on the card title and make up the bulk of the..'
            },
            {
                title: 'Title Two',
                shortDesc: 'Sets the kind of text decoration to use (like underline, overline, line-through)'
            },
            {
                title: 'Title Three',
                shortDesc: 'Sets the style of the text decoration (like solid, wavy, dotted, dashed, double)'
            },
            {
                title: 'Title Four',
                shortDesc: 'The numbers in the table specify the first browser version that fully supports the property.'
            }
        ]
    }
})