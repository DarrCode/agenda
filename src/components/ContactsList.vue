<template>
    <div class="shadow p-3 mb-5 bg-body rounded"> 
        <h3>Lista de contactos</h3>
        <div class="form">
            <input type="text" class="form-control mt-5" placeholder="BUSCAR CONTACTOS..."
            v-model="query" @input="searchContact()">
        </div>        
        <div class="container-fluid">
             <div class="row justify-content-center">
                <div class="col-sm-12">
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th>Estado</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Teléfono</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(contact, index) in contacts" :key="index" 
                                :class="{active: !contact.active }">
                                <td>
                                    <input type="checkbox" 
                                       @change="activeContact(index)" 
                                        :checked="!contact.active? 'checked':''" 
                                        class="form-check-input">
                                </td>                                
                                <td>{{contact.name}}</td>
                                <td v-if="contact.last_name">{{contact.last_name}}</td>
                                <td v-else class="text-danger">Sin Apellido</td>
                                <td >{{contact.phone}}</td>
                                <td v-if="contact.email">{{contact.email}}</td>
                                <td v-else class="text-danger">Sin Email</td>
                                <td>
                                    <button title="editar" @click="editContact(contact.id)" 
                                        :disabled="!contact.active"
                                        :class="{btnEdit: contact.active }"
                                        class="btn shadow p-1 mr-1 bg-body rounded" >
                                        <img src="../assets/edit.svg">
                                    </button>
                                     <button @click="deleteContact(index)"
                                        class="btn btn-delete shadow p-1 ml-1 bg-body rounded">
                                        <img src="../assets/delete.svg">
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>               
            </div>
        </div>   
        <!--div v-if="showModal">
            <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" @click="showModal = false">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </transition>
        </div> 
        <button-- @click="showModal = true">Click</button-->
    </div>
</template>

<script>

export default {
    name: 'ContactsList',
    props:['ContactsList'],
    data() {
        return {
            contacts: this.ContactsList,           
            showModal: false
                
        }
    },
    methods: {
        activeContact(id){             
            this.contacts[id].active = !this.contacts[id].active
        },
        editContact(id){
            alert(id)
        },
        deleteContact(index){
            this.contacts.splice(index, 1);      
        },
         searchContact(){
            if (this.query.trim() === '') {
                this.contacts = this.ContactsList
            }else{
                const temp = this.contacts.filter(contact => {                         
                    return contact.name.toLowerCase().includes(this.query) || contact.phone.includes(this.query)  
                });
                
                this.contacts = [... temp]  
            }
        }        
    },
}
</script>
<style scoped>

.active{
    color: #ccc;
    text-decoration: line-through;
}

.btnEdit:hover{ background-color: rgba(255, 214, 32, .2); }

.btn-delete:hover{ background-color: rgba(252, 41, 41, .2);
}

</style>
