


var Vm = new Vue({
    el: '#app',
    data(){
        return {
            timer:'' , // 1，定义一个定时器
            isshow:false,
            list:[
                {id:101,title:'薪水推荐',icon:'220'},
                {id:102,title:'六合大神',icon:'1101'},
                {id:103,title:'六合图库',icon:'1201'},
                {id:104,title:'公式杀号',icon:'1301'},
              
            ],
            bodylist:[
                {id:11,title:'薪水推荐',icon:'220',tit:'全天59期'},
                {id:12,title:'六合大神',icon:'1101',tit:'全天59期'},
                {id:13,title:'六合图库',icon:'1201',tit:'全天59期'},
                {id:14,title:'公式杀号',icon:'1301',tit:'全天59期'},
                {id:15,title:'公式杀号',icon:'9901',tit:'全天59期'},
                {id:16,title:'公式杀号',icon:'img_gdzx',tit:'全天59期'},
                {id:17,title:'公式杀号',icon:'sg',tit:'全天59期'},
                {id:18,title:'公式杀号',icon:'ebg',tit:'全天59期'},
                {id:19,title:'公式杀号',icon:'dzpk',tit:'全天59期'},
              
            ]
        }
    },
    methods:{
        handacticity(){
            alert("点击跳转活动页")
        },
        handclose(){
            console.log('点我，红包就关闭了哦')
        },
        handSumbit(){
            console.log('点击跳转到领取红包页面')
        },
        cancle(){
            console.log("关闭提醒")
            this.isshow = false;
        },


        //  2，
        getTime() {
            this.isshow = true
        }
    },
    mounted(){
        // 3.  setTimeout二个参数 接收一个函数名fn() 时间 也可以有多个参数
        this.timer=setTimeout (this.getTime,1000)    // 让最外一层的弹框延迟1秒再出现
    },
    created(){
       
    // f1 和 f2 是二个函数   　　　　setTimeout只执行一次 
    // 采用这种方式，我们把同步操作变成了异步操作，f1不会堵塞程序运行
    //     function f1(callback){
    // 　　　　setTimeout(function () {
    // 　　　　　　// f1的任务代码
    // 　　　　　　callback();
    // 　　　　}, 1000);
    // 　　}
    // 执行 : f1(f2)
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
})