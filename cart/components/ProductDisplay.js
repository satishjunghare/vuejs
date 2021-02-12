app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/ 
    `
    <div 
        v-for="(variant, index) in variants" 
        :key="variant.id"
        @mouseover="updateVariant(index)"
        >{{ variant.color }}</div>
    <p>Shipping: {{ shipping }}</p>
    <div class="product-image">
        <img v-bind:src="image" alt="" class="src" style="width:100px;">
    </div>
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>

    <ul v-if="details.length > 0">
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    
    <button class="button" v-on:click="addToCart">Add to Cart</button>
    `,
    data: function() {
        return {
            product: 'Stock',
            details: [
                'one',
                'two',
                'three'
            ],
            cart:0,
            selectedVariant: 0,
            variants: [
                {id:123, color:'Green', quantity:30, instock: true, image:'https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2FIntro%20Vue3_x2.png?alt=media&token=39896c85-09de-42bf-b9d5-8df841819bc5'},
                {id:654, color:'Blue', quantity:20, instock: false, image:'https://geekflare.com/wp-content/uploads/2018/10/request-response-in-php-e1542398057451.png'},
                {id:568, color:'Red', quantity:10, instock: true, image:'https://geekflare.com/wp-content/uploads/2018/10/php-and-nginx-1200x350.png'}
            ]
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].instock
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})