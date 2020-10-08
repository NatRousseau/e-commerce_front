<template>
    <div class="container">
        <h2>Les derniers produits</h2>
        <div class="row flex">
            <div class="col-3" v-for="product in products" :key="product.id">
                <div class="card">
                    <img  src="../../public/empty.jpg" alt="" class="card-img-top"
                          style="width: 100%; height: auto;">
                    <div class="card-body">
                        <h5 class="card-title">
                            <router-link class="is-tab nav-item article_link " :to="'/boutique/' + product.id">{{ product.title }}</router-link>
                        </h5>
                        <p class="card-text">{{product.mark}} {{product.model}}</p>
                        <div class="text-primary" style="font-weight:bold;font-size: 2rem;">{{product.price}}€</div>
                        <a href="" class="btn btn-primary">Ajouter au panier</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Boutique",
    data() {
        return {
            products: []
        }
    },
    created: function () {
        this.$http.get('products', {
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