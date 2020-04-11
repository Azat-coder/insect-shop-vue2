<template>
    <div class="container">
        <h2 class="visually-hidden">Категории товара</h2>
        <form class="filter" action="">
            <fieldset class="filter-item">
                <legend>Стоимость:</legend>
                <div class="range-filter">
                    <div class="range-controls">
                        <input 
                            type="range"
                            class="range-controls-input" 
                            min="0" 
                            max="50000" 
                            step="500" 
                            v-model.number="minPrice"
                            @change="setRangeSlider(minPrice, maxPrice)"
                        >
                        <input 
                            type="range" 
                            class="range-controls-input range-controls-input-max" 
                            min="0" 
                            max="50000" 
                            step="500" 
                            v-model.number="maxPrice"
                            @change="setRangeSlider(minPrice, maxPrice)"
                        >
                    </div>
                    <div class="price-controls">
                        <p>Min: {{minPrice}}</p>
                        <p>Max: {{maxPrice}}</p>
                    </div>
                </div>
            </fieldset>
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
      ordo: [],
      minPrice: 0,
      maxPrice: 50000   
      }
    },
    methods: {
        ...mapActions([
            'GET_GOODS_CATEGORY_TO_STATE',
            'GET_ORDOS_CATEGORY_TO_STATE',
            'GET_MIN_PRICE_TO_STATE',
            'GET_MAX_PRICE_TO_STATE'
        ]),
        changeCategory(category) {
            this.GET_GOODS_CATEGORY_TO_STATE(category)
        },
        chooseOrdo(ordo) {
            this.GET_ORDOS_CATEGORY_TO_STATE(ordo)
        },
        setRangeSlider(minPrice, maxPrice) {
            this.GET_MIN_PRICE_TO_STATE(minPrice),
            this.GET_MAX_PRICE_TO_STATE(maxPrice)
      
            if (this.minPrice > this.maxPrice) {
                let temp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = temp;
            }
            
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

.filter-item {
	margin: 0;
	padding: 0;
	border: none;
	margin-bottom: 60px;
}

.range-filter {
	width: 260px;
	margin-top: 49px;
}

.filter-item legend {
	font-size: 18px;
	line-height: 24px;
	text-transform: uppercase;
	font-weight: 700;
}

.range-controls {
	position: relative;
	height: 41px;
	background-color: #f1f1f1;
	border-radius: 5px;
	margin-bottom: 15px;
	padding-top: 39px;
	padding-right: 20px;
	padding-left: 20px;
}

.price-controls {
	font-size: 0;
    display: flex;
}

.price-controls p {
	display: block;
	width: 50%;
	font-size: 16px;
	text-transform: uppercase;
    text-align: center;
	color: #283136;
    border-radius: 5px;
	background-color: #f1f1f1;
    margin-right: 10px;
    width: 110px;
    padding: 8px 10px;
}

.price-controls p:last-child {
    margin-right: 0px;
}

.max-price {
	text-align: right;
}

.range-controls input[type="range"] {
    width: 100%;
    position: relative;
    top: -15px;
}

.range-controls input[type="range"]:last-child  {
    top: -55px;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  cursor: pointer;
  background: green;
  border-radius: 1.3px;
}

input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}

.range-controls input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width:18px;
    height:18px;
    position: relative;
    bottom: -7px;
    background:#D4D4D4;
    border-radius:18px;
    cursor:pointer;
    margin-top: -14px;
    z-index: 2;
}
</style> scoped>
