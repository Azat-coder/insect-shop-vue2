<template>
    <div class="container">
        <h2 class="visually-hidden">Категории товара</h2>
        <form class="filter" action="">
            <fieldset class="categories">
                <legend>Категория товара:</legend>
                    <ul class="categories-list">
                        <li class="categories-list-item">
                            <input 
                                class="visually-hidden categories-list-item-checkbox" 
                                type="checkbox" 
                                name="category" 
                                v-model="category"
                                @change="changeCategory(category)" 
                                value="insectCollections" 
                                id="insect-collections-item"
                            >
                            <label 
                                for="insect-collections-item">
                                Коллекции насекомых
                            </label>
                        </li>
                        <li class="categories-list-item">
                            <input 
                                class="visually-hidden categories-list-item-checkbox" 
                                type="checkbox" 
                                name="category" 
                                v-model="category"
                                @change="changeCategory(category)"  
                                value="singleInsects" 
                                id="insects-item"
                            >
                            <label 
                                for="insects-item">
                                Отдельные насекомые в рамках
                            </label>
                        </li>
                        <li class="categories-list-item">
                            <input 
                                class="visually-hidden categories-list-item-checkbox" 
                                type="checkbox" 
                                name="category" 
                                v-model="category"
                                @change="changeCategory(category)"  
                                value="entomological-boxes" 
                                id="entomological-boxes-item"
                            >
                            <label for="entomological-boxes-item">
                                Энтомологические коробки
                            </label>
                        </li>
                        <li class="categories-list-item">
                            <input 
                                class="visually-hidden categories-list-item-checkbox" 
                                type="checkbox" 
                                name="category" 
                                v-model="category"
                                @change="changeCategory(category)"  
                                value="entomological-pins" 
                                id="entomological-pins-item"
                            >
                            <label for="entomological-pins-item">
                                Энтомологические булавки
                            </label>
                        </li>
                        <li class="categories-list-item">
                            <input 
                                class="visually-hidden categories-list-item-checkbox" 
                                type="checkbox" 
                                name="category" 
                                v-model="category"
                                @change="changeCategory(category)"  
                                value="tools" 
                                id="tools-item"
                            >
                            <label for="tools-item">
                                Всё для сбора материала
                            </label>
                        </li>
                        <li class="categories-list-item">
                            <input 
                                class="visually-hidden categories-list-item-checkbox" 
                                type="checkbox" 
                                name="category" 
                                v-model="category"
                                @change="changeCategory(category)"  
                                value="books" 
                                id="books-item"
                            >
                            <label for="books-item">
                                Книги по энтомологии
                            </label>
                        </li>
                        <li class="categories-list-item">
                            <input 
                                class="visually-hidden categories-list-item-checkbox" 
                                type="checkbox" 
                                name="category" 
                                v-model="category"
                                @change="changeCategory(category)"  
                                value="defence-tools" 
                                id="defence-tools-item"
                            >
                            <label for="defence-tools-item">
                                Средства для защиты коллекций
                            </label>
                        </li>
                    </ul>
            </fieldset>
            <fieldset class="ordos">
                <legend>Отряды насекомых:</legend>
                    <ul class="ordo-list">
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="mantodea" 
                                id="mantodea-item"
                            >
                            <label for="mantodea-item">Богомоловые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="diptera" 
                                id="diptera-item"
                            >
                            <label for="diptera-item">Двукрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="coleoptera" 
                                id="coleoptera-item"
                            >
                            <label for="coleoptera-item">Жесткокрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="dermaptera" 
                                id="dermaptera-item"
                            >
                            <label for="dermaptera-item">Кожистокрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="hymenoptera" 
                                id="hymenoptera-item"
                            >
                            <label for="hymenoptera-item">Перепончатокрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="hemiptera" 
                                id="hemiptera-item"
                            >
                            <label for="hemiptera-item">Полужесткокрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="orthoptera" 
                                id="orthoptera-item"
                            >
                            <label for="orthoptera-item">Прямокрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="neuroptera" 
                                id="neuroptera-item"
                            >
                            <label for="neuroptera-item">Сетчатокрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="odonata" 
                                id="odonata-item"
                            >
                            <label for="odonata-item">Стрекозы</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="lepidoptera" 
                                id="lepidoptera-item"
                            >
                            <label for="lepidoptera-item">Чешуекрылые</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="scorpiones" 
                                id="scorpiones-item"
                            >
                            <label for="scorpiones-item">Скорпионы</label>
                        </li>
                        <li class="ordo-list-item">
                            <input 
                                class="visually-hidden ordo-list-item-checkbox" 
                                type="checkbox" 
                                name="ordo"
                                v-model="ordo"
                                @change="chooseOrdo(ordo)" 
                                value="scolopendromorpha" 
                                id="scolopendromorpha-item"
                            >
                            <label for="scolopendromorpha-item">Сколопендровые</label>
                        </li>
                    </ul>
            </fieldset>
<p>Список отрядов: {{ordo}}</p>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   name: 'aside-block',
   data () {  
    return {  
      category: [],
      ordo: []   
      }
    },
    methods: {
        ...mapActions([
            'GET_GOODS_CATEGORY_TO_STATE',
            'GET_ORDOS_CATEGORY_TO_STATE'
        ]),
        changeCategory(category) {
            this.GET_GOODS_CATEGORY_TO_STATE(category)
        },
        chooseOrdo(ordo) {
            this.GET_ORDOS_CATEGORY_TO_STATE(ordo)
        }
    }
}
</script>

<style scoped>
.container {
        background-color:rgb(187, 233, 169);  
        min-width: 300px;  
    } 

.categories,
.ordos {
	margin: 0;
	padding: 0;
	border: none;
	margin-bottom: 45px;
}

.categories {
    margin-top: 50px;
}

.categories legend,
.ordos legend {
	margin-bottom: 20px;
}

.categories-list,
.ordo-list {
	margin: 0;
	padding: 0;
}

.categories-list-item,
.ordo-list-item {
	margin-bottom: 10px;
	padding-left: 35px;
}

.categories-list-item label,
.ordo-list-item label {
	position: relative;
	display: block;
	cursor: pointer;
	user-select: none;
}

.categories-list-item-checkbox + label::before,
.ordo-list-item-checkbox + label::before {
	content: "";
	position: absolute;
	width: 27px;
	height: 23px;
	background-image: url("../assets/checkbox-off.svg");
	background-repeat: no-repeat;
	background-position: 0 0;
	left: -35px;
}

.categories-list-item-checkbox:checked + label::after,
.ordo-list-item-checkbox:checked + label::after {
	content: "";
	position: absolute;
	width: 27px;
	height: 23px;
	background-image: url("../assets/checkbox-on.svg");
	background-repeat: no-repeat;
	background-position: 0 0;
	left: -35px;
}

input[type="checkbox"] {
    display: none;
}

legend {
    font-weight: bold;
}

ul {
    list-style: none;
}
</style> scoped>
