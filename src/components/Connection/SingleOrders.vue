<template>
    <div>
        <div class="jumbotron">
            <div class="container mt-4">
                <h1>Commande N°{{ order.id }}</h1>
            </div>
        </div>
        <div>
            <div class="container mt-4 d-flex flex-row ">
                <div class="col-md-8 d-flex flex-column">
                    <h2>Adresse de facturation</h2>
                    <h4>{{ order.billingAdress }}</h4>
                    <h4>{{ order.billingPostalCode }}, {{ order.billingCity }}</h4>
                </div>
                <div class="col-md-4 d-flex flex-column align-right">
                    <h2>Adresse de livraison</h2>
                    <h4>{{ order.shippingAdress }}</h4>
                    <h4>{{ order.shippingPostalCode }}, {{ order.shippingCity }}</h4>
                    <h4></h4>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <h2>Produits commandés :</h2>
            <table class="col-md-12">
                <thead>
                <tr>
                    <th> <h4>Produits</h4></th>
                    <th><h4>Quantité</h4></th>
                    <th><h4>Prix</h4></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products" :key="product.id" >
                    <td v-if="product.idOrder === order.id">
                        <h5>{{ product.productId }}</h5>
                    </td>
                    <td class="mr-4" v-if="product.idOrder === order.id">
                        <h5>{{ product.productQuantity }}</h5>
                    </td>
<!--                    <td v-if="product.idOrder === order.id">-->
<!--                        <h5>{{ product.price }}</h5>-->
<!--                    </td>-->
                </tr>
                </tbody>
            </table>
            <a href="" class="btn btn-primary mt-4">PDF</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleOrders",
    data() {
        return {
            order: {},
            products: [],
            tests: [],
            orderProducts: [],
        }
    },
    created: function () {
        this.$http.get('orders/' + this.$route.params.id, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            this.order = response.data;
        }, error => {
            alert(error)
        });
        this.$http.get('order_products/', {
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            for (let product in response.data) {
                this.products.push(response.data[product]);
            }

        }, error => {
            alert(error)
        });

    }
}
</script>

<style scoped>

</style>