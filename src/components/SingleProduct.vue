<template>
    <div>
        <div class="jumbotron">
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-8" >
                        <img  src="../../public/empty.jpg" alt="" class="card-img-top"
                              style="width: 100%; height: auto;">
                    </div>
                    <div class="col-md-4">
                        <h1>{{ product.title }}</h1>
                        <h2>{{ product.mark }}, {{ product.model }}</h2>
                        <div class="text-primary">{{ product.formattedPrice }} €</div>
                        <button class="btn btn-primary" @click="sentArticleToCart">AJOUTER AU PANIER</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <p>
                {{ product.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleProduct",
    data() {
        return {
            product: {}
        }
    },
    methods: {
        sentArticleToCart() {
            this.addCart = this.product
            this.$store.commit('shop/addToCartList', this.addCart)
        }
    },
    created: function () {
        this.$http.get('products/' + this.$route.params.id, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
                this.product = response.data;
        }, error => {
            alert(error)
        });
    }
}
</script>

<style scoped>

</style>