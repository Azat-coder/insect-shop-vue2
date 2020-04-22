<template>
    <div class="form-block">
        <div class="link-block">
            <router-link class="registration-link" to="/registration">Регистрация</router-link>
            <a class="login-link" href="">Войти</a>
        </div>
        <form @submit.prevent="submitHandler">
            <div class="form-group">
                <div class="input-field">
                    <input 
                    class="login-mail" 
                    id="email"
                    type="text" 
                    placeholder="Адрес электронной почты"
                    v-model.trim="email"
                    :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                    >
                    <small 
                    class="helper-text"
                    v-if="$v.email.$dirty && !$v.email.required"
                    >Введите адрес электронной почты</small>
                    <small 
                    class="helper-text"
                    v-else-if="$v.email.$dirty && !$v.email.email"
                    >Введите корректный адрес электронной почты</small>
                </div>
                <div class="input-field">
                    <input
                    type="password"
                    class="login-password"  
                    placeholder="Пароль"
                    v-model.trim="password"
                    :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.email.$dirty && !$v.password.minLength)}"
                    >
                    <small 
                    class="helper-text-password"
                    v-if="$v.password.$dirty && !$v.password.required"
                    >Введите пароль</small>
                     <small 
                    class="helper-text-password"
                    v-else-if="$v.password.$dirty && !$v.password.minLength"
                    >Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</small>
                </div>
                <button class="button" type="submit">Войти</button>
            </div>
            <a class="forgot-link" href="">Забыли пароль?</a>
        </form>        
    </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
    name: 'login',
    data: () => ({
        email: '',
        password: ''
    }),
    validations: {
        email: {email, required},
        password: {required, minLength: minLength(6)}
    },
    methods: {
        async submitHandler () {          
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }

            const formData = {
                email: this.email,
                password: this.password
            }

            try {
                await this.$store.dispatch('login', formData)
                this.$router.push('/')
            } catch (e) {
                console.log(e)
            }           
        }
    }
}
</script>

<style scoped>
    .form-block {
        position: fixed;
        left: 50%;
        margin-left: -200px;
        top: 100px;
        width: 400px;
        height: 335px;
        text-align: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .form-group {
        display: flex;
        flex-wrap: wrap;
    }

    .login-mail,
    .login-password {
        width: 400px;
        box-sizing: border-box;
        padding: 15px;
        margin-bottom: 35px;      
    }

    .login-password {
        margin-bottom: 45px;
    }

    
    input[type="text"] {
        font: inherit;
        font-size: 16px;
        line-height: 18px;
        color: #000000;
        border: 2px solid #eeeeee;
        border-radius: 3px;
        width: 400px;
    }

    input[type="text"]:hover {
        border-color: #dfdfdf;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 50px;
        color: #ffffff;
        background-color: #739e0c;
        text-decoration: none;
        font-weight: 500;
        text-transform: uppercase;
        border: none;
        border-radius: 3px; 
        cursor: pointer; 
        position: relative;
        top: -10px
    }

    .button:hover,
    .button:focus {
        background-color: #496704;
    }
        
    .button:active {
        background-color: #316129;
        color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 3px rgba(0, 0, 0, 0.1) inset;
    }

    .link-block {
        padding: 0 50px;
        display: flex;
        justify-content: space-around;
    }

    .link-block a {
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        color: #283136;
    }

    .link-block a:hover,
    .link-block a:focus {
        color: #496704;
    }

    .forgot-link {
        display: block;
        text-align: left;
        text-decoration: none;
        font-size: 14px;
        padding-top: 10px;
    }

    .link-block .login-link {
        border-bottom: 2px solid #739e0c;
        margin-bottom: -2px;
        color: #739e0c;
    }

    input[type="text"].invalid {
        border-color: red;
        color: red;
    }

    .helper-text {
        position: absolute;
        top: 104px;
        left: 10px;
        color: red;
    }

    .helper-text-password {
        position: absolute;
        top: 192px;
        left: 10px;
        color: red;
    }
</style>