
 var app = new Vue({
     el:"#box",
     data:{
         title:"mymall商城",
         showIndex:false,
         showProduct:false,
         showMine:true,
         currentPage:0,
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


        //product

     }
 });