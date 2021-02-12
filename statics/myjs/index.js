
 let app = new Vue({
     el:"#box",
     data:{
         title:"mymall商城",
         showIndex:true,
         showProduct:false,
         showMine:false,
         currentPage:0,

         //计时
         hour:'00',
         min:'00',
         sec:'00',


     },
     methods:{
        showPage(flag){

            if(flag!=this.currentPage){
                switch(flag){
                    case 0:
                        this.showProduct=false;
                        this.showMine=false;
                        this.showIndex=true;
                        break;
                    case 1:
                        this.showIndex=false;
                        this.showMine=false;
                        this.showProduct=true;
                        break;
                    case 2:
                        this.showProduct=false;
                        this.showIndex=false;
                        this.showMine=true;
                        break;
                    default:
                        this.showProduct=false;
                        this.showMine=false;
                        this.showIndex=true;
                }
                this.currentPage=flag;
            }
            
        },

        //mine
        turnToMineDetail(){
            alert("test vue");
        },
        toFootSteps(){
            alert("toFootSteps");
        },
        toAddressManager(){
            alert("toAddressManager");
        },
        toMyOrder(){
            console.log("toMyOrder");
        },
        toWaitPay(){
            console.log("toWaitPay");
        },
        toWaitReceive(){
            console.log("toWaitReceive");
        },


        //product


        //
        getProducts(){
            let page={
                "categoryId":7,
                "pageNum":1,
                "pageSize":10
            };
            axios.post(product_url+'product/getProduct', page
            )
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
        },

        //秒杀活动
        findFlashSale(){

        },

        //倒计时
        countTime() {  
            //获取当前时间  
            let date = new Date();  
            let now = date.getTime();  
            //设置截止时间  
            let str="2021-02-12 17:20:00";
            let endDate = new Date(str); 
            let end = endDate.getTime();  
            
            //时间差  
            let leftTime = end-now; 
            //定义变量 d,h,m,s保存倒计时的时间  
            // let d,h,m,s;  
            //let h,m,s;
            if (leftTime>=0) {  

                this.hour = Math.floor(leftTime/1000/60/60%24);  
                this.min = Math.floor(leftTime/1000/60%60);  
                this.sec= Math.floor(leftTime/1000%60);  

                this.hour>=10?this.hour:"0"+this.hour;
                this.min>=10?this.min:"0"+this.min;
                this.sec>=10?this.sec:"0"+this.sec;
            } 
            //递归每秒调用countTime方法，显示动态时间效果  
            setTimeout(this.countTime,1000);  
  
        },

     },
     mounted: function() {
        this.getProducts();
        this.findFlashSale();
        //倒计时
        this.countTime();
        
     },
 });