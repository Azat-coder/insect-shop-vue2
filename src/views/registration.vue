<template>
    <div class="form-block">
        <div class="link-block">
            <a class="registration-link" href="">Регистрация</a>
            <router-link class="login-link" to="/login">Войти</router-link>
        </div>
        <form>
            <div class="form-group">
                <div class="input-field">
                    <input class="registration-mail" type="text" placeholder="Введите адрес электронной почты">
                </div>
                <div class="input-field">
                    <input class="registration-password" type="text" placeholder="Пароль">
                </div>
                <button class="button">Зарегистрироваться</button>
            </div>
            <p class="registration-information">Регистрируясь на нашем сайте, вы соглашаетесь с 
                <a href="">Пользовательским соглашением</a> и 
                <a href="">Политикой конфиденциальности</a>
            </p>
        </form>        
    </div>
</template>



<style scoped>
    .form-block {
        position: fixed;
        left: 50%;
        margin-left: -200px;
        top: 100px;
        width: 400px;
        height: 400px;
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

    .registration-mail,
    .registration-password {
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
    }

    input[type="text"]:hover {
        border-color: #dfdfdf;
    }

    input[type="text"]:focus {
        border-color: #000000;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 50px;
        color: #ffffff;
        background-color: #fb565a;
        text-decoration: none;
        font-weight: 500;
        text-transform: uppercase;
        border: none;
        border-radius: 3px; 
        cursor: pointer;  
    }

    .button:hover,
    .button:focus {
        background-color: #e74246;
    }
        
    .button:active {
        background-color: #d7373b;
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
        color: #e74246;
    }

    .registration-information {
        font-size: 14px;
        padding-top: 10px;
    }

    .registration-information a {
        text-decoration: none;
    }

    .link-block .registration-link {
        border-bottom: 2px solid #fb565a;
        margin-bottom: -2px;
        color: #fb565a;
    }
</style>