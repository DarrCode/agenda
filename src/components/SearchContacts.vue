<template>
    <div>
        <form class="form">
            <input type="text" v-model="query" @input="search()"
             class="form-control mt-5" placeholder="Buscar contacto">
        </form>            
    </div>
</template>
<script>
export default {
    data() {
        return {
            query: ''
        }
    },
    methods: {
        search(){
            this.$emit('query-change', this.query)
        }
    },
}
</script>