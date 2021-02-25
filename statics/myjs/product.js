

let app = new Vue({
    el:"#box",
    data:{
        title:"商品详情",
        product:{},

    },

    methods: {
        findProduct(productId){
            axios.get(product_url+'product/findProduct/'+productId)
            .then(function (response) {
              console.log(response);
              //this.product=response.data.data;
              app.$data.product=response.data.data;
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        createOrder(productId){
            console.log(productId);
        },
        addProductToCart(productId){
            console.log(productId);
        },
        toMyCart(){
            console.log("toMyCart");
        }
    },

    mounted() {
        let productId=1;
        this.findProduct(productId);
    },
})