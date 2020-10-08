<template>
    <div class="container">
        <div class="bg-light p-3">
            <h1>Votre panier</h1>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>Produit</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="cartArticle in cartArticles" :key="cartArticle.id">
                <td>{{ cartArticle.title }}</td>
                <td>{{ cartArticle.price }} €</td>
                <td>1 </td>
                <td>{{ cartArticle.price }} €</td>
                <td>
                    <button class="delete btn btn-danger btn-sm" @click="deleteArticle(cartArticle)">X</button>
                </td>
            </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary" to="/validation">Passer la commande</router-link>
<!--        <a href="" class="btn btn-primary">Passer la commande</a>-->
    </div>
</template>

<script>

export default {
    name: "Cart",
    data() {
        return {
            cart: [],
            cartArticles: [],
            loader: false,
        }
    },
    methods: {
        deleteArticle(cartArticle) {
            this.$store.commit('shop/removeToCartList', cartArticle)
        },
        // quantityLess(cartArticle) {
        //     cartArticle.meta_data[0].value -= 1
        //     this.calculSingleTotal(this.cartArticles)
        // },
        // quantityMore(cartArticle) {
        //     cartArticle.meta_data[0].value += 1
        //     this.calculSingleTotal(this.cartArticles)
        // },
        // calculSingleTotal(cartArticle) {
        //     cartArticle.forEach(price => {
        //         if (price.sale_price === '') {
        //             let quantity = price.meta_data[0].value
        //             let singleprice = price.regular_price * quantity
        //             price.meta_data[2].value = singleprice
        //         } else {
        //             let quantity = price.meta_data[0].value
        //             let singleprice = price.sale_price * quantity
        //             price.meta_data[2].value = singleprice
        //         }
        //     })
        // },
    },
    mounted() {
        this.loader = true;
        this.cartArticles = this.$store.getters["shop/listToCart"]
        // this.calculSingleTotal(this.cartArticles);
        this.loader = false;
    },
}

</script>

<style scoped>

</style>