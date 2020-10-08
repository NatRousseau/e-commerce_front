<template>
    <div class="container mt-4">
        <div class="jumbotron mb-4">
            <h1>Mon Profil</h1>
        </div>
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
<!--        <a href="" class="btn btn-primary mt-4">Modifier le profil</a>-->
<!--        <a href="" class="btn btn-primary mt-4">Voir mes commandes</a>-->
        <router-link class="btn btn-primary mt-4" to="/compte/commandes">Voir mes commandes</router-link>
    </div>
</template>

<script>
export default {
    name: "Profil",
    data() {
        return {
            user: [],
        }
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