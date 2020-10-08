<template>
    <div class="container">
        <div class="bg-light p-3">
            <h1>Valider ma commande</h1>
        </div>
        <div class="d-flex flex-row recap">
            <div class="d-flex flex-column recap_user" style="margin-right: 100px;">
                <h1>Information de livraison</h1>
                <div class="form-group">
                    <h2>Adresse de facturation</h2>
                    <p>{{user.lastname}} {{user.firstname}}</p>
                    <p>{{user.billingAdress}}</p>
                    <p>{{user.billingCity}}, {{user.billingPostalCode}}</p>
                </div>
                <div class="form-group">
                    <h2>Adresse de livraison</h2>
                    <p>{{user.lastname}} {{user.firstname}}</p>
                    <p>{{user.shippingAdress}}</p>
                    <p>{{user.shippingCity}}, {{user.shippingPostalCode}}</p>
                </div>
            </div>
            <div class="d-flex flex-column recap_panier">
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
                        <td>1</td>
                        <td>{{ cartArticle.price }} €</td>
                        <td>
                            <button class="delete btn btn-danger btn-sm"
                                    @click="deleteArticle(cartArticle)">X
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button @click="submit" class="btn btn-primary">Passer la commande</button>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    name: "Validation",
    data() {
        return {
            cart: [],
            cartArticles: [],
            loader: false,
            user: [],
            form: {
                userId: 9,
                billingAdress: "99 Avenue de Caen",
                billingCity: "Rouen",
                billingPostalCode: "76100",
                shippingAddress: "99 Avenue de Caen",
                shippingCity: "Rouen",
                shippingPostalCode: "76100",
                paiementStatus: "En cours de paiement"
            },
        }
    },
    methods: {
        deleteArticle(cartArticle) {
            this.$store.commit('shop/removeToCartList', cartArticle)
        },
        submit() {
            this.$refs.elementsRef.submit();
        },
    },
    mounted() {
        this.loader = true;
        this.cartArticles = this.$store.getters["shop/listToCart"]
        // this.calculSingleTotal(this.cartArticles);
        this.loader = false;
    },
    created: function () {
        this.$http.get('users/9', {
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            this.user = response.data;
        }, error => {
            alert(error)
        });
    }
}

</script>

<style scoped>

</style>