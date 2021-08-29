<template>
    <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-info">Coin List</span>
            <!-- <span class="badge bg-primary rounded-pill">3</span> -->
        </h4>
        <div v-if="isBusy" class="d-flex flex-column align-items-center justify-content-center">
            <div class="row justify-content-center">
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="row justify-content-center">
                <strong class="text-info">Loading Crypto Market</strong>
            </div>
        </div>
        
        <ul class="list-group mb-3">
            <li v-for="coin in coins" :key="coin.id" class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <img :src="coin.image" width="35" />
                    <div class="p-3" style="display:inline-grid">
                        <h6>{{ coin.name }}</h6>
                        <small class="text-muted">{{ coin.symbol }}</small>
                    </div>
                </div>
                <div class="pt-3">
                    <b style="float: right;">₱{{ coin.current_price | numeral('0,0.00') }}</b>
                    <br>
                    <span :class="checkNegative(coin.price_change_percentage_24h)" style="float: right;">{{ coin.price_change_percentage_24h }}</span>
                </div>
            </li>
        </ul>

        <form class="card p-2">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code">
            <button type="submit" class="btn btn-secondary">Redeem</button>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
// import { gsap } from "gsap";

export default {
    name: 'CoinList',
    data(){
        return{
            coins: {},
            isBusy: true,
            coin_initial_value: {},
            coin_after_value: 0,
        }
    },
    mounted() {
        this.isBusy = true
        window.setInterval(() => {
            this.getCoinMarket()
            // console.log('price update')
            this.isBusy = false
        }, 3000) 
        
        // this.getCoinMarket()
    },
    computed: {
        
    },
    watch: {
        // coin_initial_value: {
        //     handler(val, oldVal){
        //     // do stuff
        //     console.log('val', val, oldVal)
        //     },
        //     deep: true
        // }
    },
    methods: {
        getCoinMarket() {
            let that = this;
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=bitcoin%2Cethereum%2Cripple%2Caxie-infinity%2Csmooth-love-potion%2Ccryptoblades%2Ccryptozoon%2Cholotoken%2Ctron%2Cmy-defi-pet&order=market_cap_desc&sparkline=false')
            .then(function (response) {
                that.coins = response.data;
                let coin_initial_value = []
                response.data.forEach(function (data) {
                    coin_initial_value.push( data.current_price );
                });
                that.coin_initial_value = coin_initial_value;
                // console.log(that.coin_initial_value);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                // that.isBusy = false;
            });
        },
        checkNegative(number) {
            if( number < 0){
                return 'text-danger'
            }else{
                return 'text-success'
            }
            
        }  
    }
}
</script>

<style scoped>
.text-info{
    color: #1badc7 !important;
}
</style>