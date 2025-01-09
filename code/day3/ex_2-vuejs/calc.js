// 바인딩 할 모델(화면 지정)
Vue.createApp({
    data() {
        return {
            num1: 10,
            num2: 10,
            result: 20
        };
    },
    methods: {
        resultClickHandler() {
            this.result = this.num1 + this.num2;
        },
        resetHandler() {
            this.result = 20;
            this.num1 = 10;
            this.num2 = 10;
        }
    }
}).mount('#calc-app');

