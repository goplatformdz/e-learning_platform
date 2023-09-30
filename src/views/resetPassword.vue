<template>
    <div class="reset-page">
        <div class="container">
            <center>
                <h4>Enter your new Password</h4>
            </center>
            <h3><font-awesome-icon class="font-icon email-icon" icon="fa-solid fa-key" /> Password</h3>
            <div class="input-wrapper">
                <input :class="(v$.password.$error || credentials.invalidCredentials.value) ? 'input-error' : 'input'"
                    type="password" v-model="formData.password.value" />
                <span v-for="error in v$.password.$errors" :key="error.$uid" class="span-error">
                    {{ error.$message === 'Value is required' ? 'Password is required' : 'Password too short (8 at least)'
                    }}
                </span>
            </div>
            <br />
            <h3 class="confirm"><font-awesome-icon class="font-icon email-icon" icon="fa-solid fa-key" /> Confirm your
                Password</h3>
            <div class="input-container">
                <span class="input-description side-spans"><font-awesome-icon icon="fa-solid fa-key" /> Re-enter
                    password</span>
                <div class="input-wrapper">
                    <input
                        :class="(v$.confirmPassword.$error || credentials.invalidCredentials.value) ? 'input-error' : 'input'"
                        type="password" v-model="formData.confirmPassword.value" />
                    <span class="span-error problem-spans">
                        {{ getConfirmPasswordError() }}
                    </span>
                </div>
            </div>



            <div v-if="loadings.loading.value" class="btn-container">
                <button class="btn-loading">
                    <spinner class="spinner" />
                </button>
            </div>
            <div v-else-if="credentials.success.value" class="btn-container">
                <span class="valid-credentials"> Your password has been successfully
                    changed </span>
                <button @click="goToHomePage()" class="btn-success">
                    Go back
                </button>
            </div>
            <div v-else class="btn-container">
                <span v-if="credentials.invalidCredentials.value" class="invalid-credentials"> Token has expired </span>


                <button class="btn2" @click="resetPassword">Save</button>
                <button class="btn3" @click="goToHomePage()">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, sameAs } from '@vuelidate/validators'
import { ref, computed } from 'vue'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import spinner from '../components/spinner.vue'
import { useAuthStore } from '../store/auth';




export default {
    name: "resetPassword",
    components: {
        FontAwesomeIcon,
        spinner
    },
    setup() {
        const formData = {
            password: ref(""),
            confirmPassword: ref("")
        }

        const token = ref("")


        const loadings = {
            loading: ref(false)
        }

        const credentials = {
            invalidCredentials: ref(false),
            success: ref(false),
        }

        const authStore = useAuthStore()


        const rules = computed(() => ({
            password: { required, minLength: minLength(8) },
            confirmPassword: { required, sameAs: sameAs(formData.password.value) },
        }))

        const v$ = useVuelidate(rules, formData)

        const resetPassword = async () => {
            await v$.value.$validate();
            if (!v$.value.$pending) {
                if (v$.value.$invalid) {
                    return;
                }
            }

            const data = {
                password: formData.password.value,
            };

            loadings.loading.value = true


            try {
                await axios.patch(`http://localhost:8000/api/users/resetPassword/${token.value}`, data, { withCredentials: true });



                loadings.loading.value = false
                credentials.success.value = true;



            } catch (error) {
                console.error(error);
                loadings.loading.value = false
                if (error.response.data.message === "User not found") {
                    credentials.invalidCredentials.value = true;
                }


            }
        };

        console.log(v$)

        return { v$, formData, loadings, authStore, resetPassword, token, credentials };

    },
    methods: {
        getConfirmPasswordError() {
            const errors = this.v$.confirmPassword.$errors;
            return errors.length ? (errors[0].$message === 'The value must be equal to the other value' ? 'Doesnt match your password' : 'Confirm your password') : '';
        },
        goToHomePage() {
            this.$router.push({ name: 'home' });

        }
    },
    mounted() {
        this.token = this.$route.params.token
    }
}
</script>

<style scoped>
.reset-page {
    width: 100%;
    height: 600px;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    padding-top: 15%;
    padding-left: 30%;
}

.container {
    position: relative;
    left: 8%;
    top: 0%;
    height: 400px;
    width: 360px;
    padding: 50px 20px 0 20px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 18.829999923706055px 47.08000183105469px 0px rgba(47, 50, 125, 0.1);

}

.confirm {
    margin-bottom: -13px;
}

.btn {
    position: relative;
    width: 70%;
    height: 40px;
    flex-shrink: 0;
    border-radius: 33px;
    background: rgba(73, 187, 189, 0.6);
    margin-bottom: 25px;
}

.input-error {
    width: 84%;
    height: 40px;
    border-radius: 40px;
    border: 1px solid rgb(201, 8, 8);
    background: #FFF;
    padding-left: 3%;
    padding-right: 3%;
}


.input {
    width: 84%;
    height: 40px;
    border-radius: 40px;
    border: 1px solid #49BBBD;
    background: #FFF;
    padding-left: 3%;
    padding-right: 3%;

}

h3 {
    position: relative;
    left: 7%;
    margin-bottom: 5px;
    margin-top: 20px;
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.span-error {
    color: rgb(201, 8, 8);
    white-space: nowrap;
    position: absolute;
    left: 25px;
    bottom: -20px;
    /* Adjust this value as needed to position the error message */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}



.input-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


h4 {
    margin-bottom: 50px;
    margin-top: 10px;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #000;
}

.btn2 {
    margin-top: 30px;
    width: 30%;
    padding-top: 3%;
    padding-bottom: 3%;
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #49BBBD;
    border-radius: 36px;
    background: #49BBBD;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.btn3 {
    margin-top: 30px;
    margin-left: 30px;
    width: 30%;
    padding-top: 3%;
    padding-bottom: 3%;
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: red;
    border-radius: 36px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-loading {
    margin-top: 30px;
    width: 40%;
    padding-top: 3%;
    padding-bottom: 3%;
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #49BBBD;
    border-radius: 36px;
    cursor: not-allowed;
    opacity: 0.7;
    position: relative;
}

.btn-success {
    margin-top: 30px;
    width: 40%;
    padding-top: 3%;
    padding-bottom: 3%;
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #49BBBD;
    border-radius: 36px;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.btn-loading-send {
    margin-top: 5px;
    width: 40%;
    padding-top: 3%;
    padding-bottom: 3%;
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #49BBBD;
    border-radius: 36px;
    cursor: not-allowed;
    opacity: 0.7;
    position: relative;
}

.spinner {
    margin-left: 42%;
}

.invalid-credentials {
    position: absolute;
    bottom: 24%;
    color: rgb(201, 8, 8);
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.valid-credentials {
    position: absolute;
    bottom: 24%;
    color: #49BBBD;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.btn-send {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
}

.btn2:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
}

.btn2:active {
    background-color: rgb(40, 161, 163);
}

.btn-success:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
}

.btn-success:active {
    background-color: rgb(40, 161, 163);
}

.btn3:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
}

.btn3:active {
    background-color: rgb(40, 161, 163);
}
</style>