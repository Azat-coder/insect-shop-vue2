<template>
    <div class="header-block">
        <div class="header-container">
            <router-link to="/">
                <img 
                src="../assets/logo.svg" 
                alt="Логотип магазина" 
                width="200" 
                height="100">
            </router-link>           
            <div class="searchBlock">
                <div class="input-container">
                    <input 
                        type="text" 
                        placeholder="Бабочки в рамке"
                        v-model="searchValue"
                        @change="changeSearchValue(searchValue)"
                    >
                </div>
            </div>           
            <div class="shopping-cart">
                <router-link class="shopping-cart-link" to="/cart">
                    <span class="cart-text">Корзина</span>
                    <span class="cart-number">{{CART.length}}</span>
                </router-link>
            </div>      
            <div class="wishlist">
                <router-link to="/wishlist" class="wishlist-link">
                    <p class="wishlist-text">Мои <br/>желания</p>
                </router-link>
            </div>
            <div class="nav-user-block">
                <div @mouseover="dropdown" @mouseleave="dropup">
                    <div 
                        v-if="userMail"
                        class="auth-block">
                        {{userMail}}
                    </div>
                    <div 
                        v-if="!userMail"
                        class="reg-block"
                    >
                        <div>
                            <router-link 
                                to="/login" 
                                class="button"
                            >
                            Войти
                            </router-link>
                        </div>
                        <div>
                            <router-link
                                to="/registration" 
                                class="button registration-button"
                                >
                                Зарегистрироваться
                            </router-link>
                        </div>
                    </div>
                    
                    <div>
                        <ul class="profile-block" id="profile-block">
                            <li>
                                <router-link to="/myOrders">Мои заказы</router-link>
                            </li>
                            <li>
                                <router-link to="/wishlist">Мои желания</router-link>
                            </li>
                            <li>
                                <a href="" @click.prevent="logout">Выйти</a>
                            </li>
                        </ul>   
                    </div>
                </div>               
            </div>           
        </div>
    </div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            searchValue: ''
        }
    },
    methods: {
        async logout() {
            console.log('Logout')
            await this.$store.dispatch('logout')
            this.$router.push('/login?message=logout')
        },
        ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX'
        ]),
        changeSearchValue(searchValue) {
            this.GET_SEARCH_VALUE_TO_VUEX(searchValue)
        },
        dropdown() {
            const el = document.getElementById('profile-block');
            el.style.display = "block"
        },
        dropup() {
            const el = document.getElementById('profile-block');
            el.style.display = "none"
        }
    },
    computed: {
        ...mapGetters([
            'CART',
            'SEARCH_VALUE'
        ]),
        userMail() {
            return this.$store.getters.info.email
        }
    }
}
</script>

<style scoped>
    input[type="text"] {
        font: inherit;
        padding: 10px;
        border: lawngreen 2px solid;
        border-radius: 15px;
    }
    .search-categories {
        width: 100px;
        position: relative;
    }
    .search-categories::before {
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: #fff;
        border: 2px solid #000;
        top: 10px;
        left: 10px;
    }
    
    .header-block {
        background-color: #739e0c;
    }

    .header-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .nav-user-block {
        display: flex;
        flex-direction: column;
        position: relative;
        padding-left: 50px;
    }

    .nav-user-block a {
        text-decoration: none;
        font-weight: bold;
    }

    .nav-user-block::before {
        position: absolute;
        top: 0px;
        left: 5px;
        overflow: hidden;
        content: '';
        width: 40px;
        height: 40px;
        background: url(../assets/login.svg);
    }

    .auth-block {
        width: 120px;
        height: 50px;
        position: relative;
        bottom: -5px;
    }

    .cart-text {
        position: relative;
        margin-left: 50px;
        text-decoration: none;
        color: #ffffff;
    }
    
    .cart-text::before {
        position: absolute;
        top: -22px;
        left: -45px;
        overflow: hidden;
        content: '';
        width: 40px;
        height: 40px;
        background: url(../assets/cart.svg);
    }

    .shopping-cart {
        position: relative;
        top: 10px;
    }

    .shopping-cart-link {
        text-decoration: none;
        font-weight: bold;
    }

    .cart-number {
        display: block;
        position: absolute;
        top: 15px;
        left: 70px;
        color: #ffffff;
    }

    .wishlist {
        position: relative;
        width: 70px;
        padding-left: 50px;
    }

    .wishlist-link {
        text-decoration: none;
        font-weight: bold;
    }

    .wishlist-text {
        color: #ffffff;
    }

    .wishlist-text::before {
        position: absolute;
        top: 20px;
        left: 5px;
        overflow: hidden;
        content: '';
        width: 40px;
        height: 40px;
        background: url(../assets/heart.svg);
    }

    .searchBlock,
    .shopping-cart {
        padding: 30px 0;
    }

    .searchBlock {
        position: relative;
    }

    .input-container {
        margin-right: 50px;
        position: relative;
    }

    .profile-block {
        position: absolute;
        top: 45px;
        display: flex;
        flex-direction: column;
        display: none;
        background-color: #739e0c;
        z-index: 10;
        padding: 10px;
        width: 150px;
    }

    .profile-block a {
        text-decoration: none;
        font-weight: bold;
        color: #ffffff;
    }   

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    } 

    .auth-block {
        color: #ffffff;
        font-weight: bold;
    }

    .reg-block a {
        color: #ffffff;
    }
</style> 
