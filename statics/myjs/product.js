let app = new Vue({
    el:"#box",
    data:{
        title:"商品详情",
        product:{},

    },

    methods: {
        findProduct(productId){
            console.log(productId);
    
        }
    },

    mounted() {
        let productId=1;
        this.findProduct(productId);
    },
})