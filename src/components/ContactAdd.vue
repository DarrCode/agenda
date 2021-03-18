<template>
    <div class="shadow p-3 mb-5 bg-body rounded">
        <h3 class="mt-2 mb-4">Crear contacto</h3>
        <form class="form">
            <div class="row">
                <div class="col">
                    <input type="text" v-model="contact.name" class="form-control" placeholder="Nombre" autofocus>
                </div>
                <div class="col">
                    <input type="text" v-model="contact.last_name" class="form-control" placeholder="Apellido">
                </div>
                </div>
                <div class="row">
                <div class="col">
                    <input type="text" v-model="contact.phone" 
                     maxlength="7"  
                     oninput="this.value = this.value.replace(/\D/g,'')"
                     class="form-control" placeholder="Número de teléfono">
                </div>
                <div class="col">
                    <input type="text" v-model="contact.email" class="form-control" placeholder="Email">
                </div>
            </div>
            <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
                <strong>{{error}}</strong>  
            </div>
            <button  @click.prevent="addContact()" 
                @keyup.enter.prevent="addContact()"
                class="btn-add">Agregar Contacto
            </button>
        </form> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: '',
            contact: {
                name: '',
                last_name: '',
                phone: '',
                email: '',
                active: true
            },
            contacts: []
        }
    },
    methods: {
        addContact() {        
            if (this.contact.name == '' || this.contact.phone == '') {
                
                this.error = 'El nombre y el número de teléfono deben estar completos'               
                
                setTimeout(() => {
                    this.error = ''
                }, 5000);
               
            } else{
                this.contacts.push({
                    contact: this.contact
                })
                this.contact = {name: ''}
                this.$emit('add-contact', this.contacts)
            }    
        },
    },
}
</script>

<style scoped>

input:focus,
.btn-add:focus {
	outline: none;
}

.btn-add:hover,
.reset:hover {
	opacity: .9;
}
.alert{
    width: 100% !important;
}


.form .btn-add{
    display: inline-block;
    text-decoration: none;
	background: #3a7fff;
	border: none;
    width: 100%;
	color: white;
	padding: 10px 25px;
	font-size: 1rem;
	border-radius: 3px;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	position: relative;
}
</style>

