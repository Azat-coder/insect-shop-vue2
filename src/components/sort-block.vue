<template>
    <div class="container">
        <section class="sortblock">
            <p class="sortblock-sort">Сортировать:</p>
            <ul class="sortblock-sortby">
                <li 
					class="active"
					@click="sortParam = 'price'"
				>
				По цене
				</li>
                <li>По категории</li>
                <li>По названию</li>
            </ul>
        </section>
    </div>
</template>

// <script>
// export default {
// 	data() {
// 		sortParam: ''
// 	}
// }
// </script>

<style scoped>

.sortblock-sort {
	font-size: 18px;
	line-height: 18px;
	font-weight: 700;
	color: #000000;
	text-transform: uppercase;
}

.sortblock {
	position: relative;
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    padding: 10px;
}

.sortblock::before {
	content: "";
	position: absolute;
	top: 30px;
	left: 835px;
	width: 12px;
	height: 12px;
	background-image: url("../assets/icon-down-dir.png");
	background-repeat: no-repeat;
	background-position: 0 0;

}

.sortblock::after {
	content: "";
	position: absolute;
	top: 30px;
	left: 815px;
	width: 12px;
	height: 12px;
	background-image: url("../assets/icon-up-dir.png");
	background-repeat: no-repeat;
	background-position: 0 0;
}

.sortblock-sortby {
	list-style: none;
	display: flex;
}

.sortblock-sortby li {
	font-size: 14px;
	line-height: 18px;
	font-weight: 400;
	opacity: 0.3;
	text-transform: uppercase;
	margin-right: 27px;
}

.sortblock-sortby li:hover {
	opacity: 0.6;
}

.sortblock-sortby li:active {
	opacity: 1;
}

.sortblock-sortby li.active {
	opacity: 1;
}

</style>