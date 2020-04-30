<template>
    <div class="containers">
        <br>
        <sui-segment>
            <sui-segment color="teal" aligned="left">
                <h1 is="sui-label" color="teal" ribbon id="ribbon" size="long">
                    Contacts
                </h1>
                <sui-input placeholder="Search..." v-model="search" style="width: 86%;" />
                

                    
                    <router-link to="/newcontact">
                        <sui-button color="orange">
                            <sui-icon name="add" />Add</sui-button>
                    </router-link>

                
            </sui-segment>
            <sui-card-group :items-per-row="4">
            <sui-card v-for="acontact in filteredContacts" v-bind:key="acontact.id">
                <sui-image v-bind:src= "acontact.imgurl" />
                <sui-card-content>
                    <sui-card-header>{{acontact.firstName}} {{acontact.lastName}}</sui-card-header>
                    <sui-card-meta>Mobile: {{acontact.mobilenum}}</sui-card-meta>
                    <sui-card-meta>Email: {{acontact.email}} </sui-card-meta>
                    <sui-card-meta>Facebook: {{acontact.facebook}} </sui-card-meta>
                </sui-card-content>
                <sui-card-content extra>
                    <router-link :to="{path: 'editcontact/'+acontact._id}">
                    <sui-button icon="edit" color="blue" size="mini" />
                    </router-link>
                    <sui-button icon="erase" color="red" size="mini" @click="delContact(acontact._id)"/>
                </sui-card-content>
            </sui-card>
            </sui-card-group>
        </sui-segment>

    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from 'axios'

    export default {
        name: 'Home',
    data() {
         return {
                Contacts: [],
                search: '',
                returnContacts: [],
                conid: ''
            }
        },
        methods: {
            delContact(contactId) {
                var url = 'http://localhost:3000/contacts/delete/' + contactId
                axios.delete(url)
                    .then((response) => {
                        console.log('Delete ContactID: ' + contactId)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                window.location.reload()
            }
        },
        computed: {
            filteredContacts: function () {
                return this.Contacts.filter((contact) => {
                    if(contact.firstName.match(this.search) || contact.lastName.match(this.search))

                    return contact.firstName
                })
            }
        },
        mounted() {
           axios.get('http://localhost:3000/contacts/getMany')
                .then((response) => {
                    console.log(response.data)
                    this.Contacts = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }
</script>

<style>
    #segment {
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        height: 300px;
        text-align: left;

    }
</style>