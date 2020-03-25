<template>
    <div class="header-block">
        <div class="header-container">
            <img src="../assets/logo.svg" alt="Логотип магазина" width="200" height="100">
            <div class="searchBlock">
                <div class="input-container">
                    <input type="text" placeholder="Бабочки в рамке" v-model="searchName">
                    <input class="search-categories" type="text" placeholder="Все категории">
                </div>
            </div>
            <a href="">
                <div class="shopping-cart">
                    <span class="cart-text">Корзина</span>
                    <span class="cart-number">0</span>
                </div>
            </a>
            <a href="">
                <div class="wishlist">
                    <span class="wishlist-text">Мои <br/>желания</span>
                </div>
            </a>
            
            <div class="nav-user-block">
                <a href="" class="button">Войти</a>
                <a href="" class="button">Зарегистрироваться</a>
                <a href="">Мои заказы</a>
                <a href="">Мои желания</a>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    data () {
        return {
            searchname: ''
        }
    }
  
}
</script>

<style scoped>
    .header-block {
        background-color:rgb(81, 238, 18, 0.5);
    }

    .header-block div {
        border: 1px dashed grey;
    }

    .header-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 1200px;
        margin: 0 auto;
    }

    .nav-user-block {
        display: flex;
        flex-direction: column;
    }

    .cart-text {
        position: relative;
        margin-left: 50px;
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
    }

    .cart-number {
        display: block;
        position: absolute;
        top: 15px;
        left: 70px;
    }

    .wishlist-text {
        position: relative;
        top: -18px;
        margin-left: 50px;
        display: block;
    }


    .wishlist-text::before {
        position: absolute;
        top: -6px;
        left: -45px;
        overflow: hidden;
        content: '';
        width: 40px;
        height: 40px;
        background: url(../assets/heart.svg);
    }

    .searchBlock,
    .shopping-cart,
    .wishlist {
        padding: 30px 0;
    }

    .searchBlock {
        position: relative;
    }

    .input-container {
        margin-right: 40px;

    }

    .input-container::before {
        position: absolute;
        top: 20px;
        left: 400px;
        overflow: hidden;
        content: '';
        width: 40px;
        height: 40px;
        background: url(../assets/lens.svg);
    }

      
</style> 
