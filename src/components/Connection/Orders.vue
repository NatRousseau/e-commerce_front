<template>
    <div class="container mt-4">
        <div class="jumbotron mb-4">
            <h1>Mes Commandes</h1>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Commandes N°</th>
                <th>Adresse de Livraison</th>
                <th>Adresse de Facturation</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="order in orders" :key="order.id">
                <td>{{ order.id }}</td>
                <td>
                    <div>
                        {{ order.shippingAdress }}, {{ order.shippingCity }} {{ order.shippingPostalCode }}
                    </div>
                </td>
                <td>
                    <div>
                        {{ order.billingAdress }}, {{ order.billingCity }} {{ order.billingPostalCode }}
                    </div>
                </td>
                <td>{{ order.paiementStatus }}</td>
                <td><router-link class="btn btn-primary mt-4" :to="'/compte/commandes/' + order.id">Detail</router-link></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Orders",
    data() {
        return {
            orders: [],
        }
    },
    created: function () {
        this.$http.get('orders?userId=9', {
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            for (let order in response.data) {
                this.orders.push(response.data[order]);
            }
        }, error => {
            alert(error)
        });
    }
}
</script>

<style scoped>

</style>