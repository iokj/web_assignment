<template>
    <div class="container">
        <sui-segment vertical id="head">
            <h2 is="sui-header" text-align="left">
                Contact<sui-label color="teal" size="tiny"> Add </sui-label>
            </h2>

        </sui-segment>
        <br>
        <sui-form>
            <sui-form-field required>
                <label>Contact ID</label>
                <input placeholder="Contact ID" v-model="Contact.contactid" />
            </sui-form-field>
            <sui-form-field required>
                <label>Firast Name</label>
                <input placeholder="Firast Name" v-model="Contact.firstName" />
            </sui-form-field>
            <sui-form-field required>
                <label>Last Name</label>
                <input placeholder="Last Name" v-model="Contact.lastName" />
            </sui-form-field>
            <sui-form-field required>
                <label>Mobile No</label>
                <input placeholder="Mobile No" v-model="Contact.mobilenum" />
            </sui-form-field> 
            <sui-form-field>
                <label>Email</label>
                <input placeholder="Email" v-model="Contact.email" />
            </sui-form-field>
            <sui-form-field>
                <label>Facebook</label>
                <input placeholder="Facebook" v-model="Contact.facebook" />
            </sui-form-field>
            <sui-form-field>
                <label>Image URL</label>
                
                <input placeholder="Image URL" v-model="Contact.imgurl" />
                <!-- <input type="file" @change="onfileselect"> -->
            </sui-form-field>
            <div class="center">
                <sui-button-group>
                    <sui-button basic color="blue" @click="add">
                        <sui-icon name="save"  />Save</sui-button>
                    <router-link to="/contacts">
                        <sui-button basic color="blue">
                            <sui-icon name="close icon" color="red" />Close</sui-button>
                    </router-link>
                </sui-button-group>
            </div>

        </sui-form>


    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Newcontact',
        data() {
            return {
                Contact: {
                    contactid: '',
                    firstName: '',
                    lastName: '',
                    mobilenum: '',
                    email: '',
                    facebook: '',
                    imgurl: '',
                }
            }
        },
        methods: {
            add() {
                let newContact = {
                    contactid: this.Contact.contactid,
                    firstName: this.Contact.firstName,
                    lastName: this.Contact.lastName,
                    mobilenum: this.Contact.mobilenum,
                    email: this.Contact.email,
                    facebook: this.Contact.facebook,
                    imgurl: this.Contact.imgurl
                }

                console.log(newContact)

                axios.post('http://localhost:3000/contacts/add', newContact)
                    .then((response) => {
                        console.log(response)
                        this.$router.replace({path: '/contacts'})
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                
            },onfileselect(event){
                console.log(event)

            }
        }

    }
</script>

<style>
    .container {
        margin-left: auto;
        margin-right: auto;
        width: 600px;
        height: 1000px;
        text-align: left;
    }

    .center {
        text-align: center;
    }
</style>