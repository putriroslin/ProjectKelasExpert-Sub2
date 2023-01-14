/* eslint-disable no-tabs */
import CONFIG from '../../globals/config'

const ratting = (rating) => {
  if (rating >= 1 && rating < 2) {
    return '⭐'
  } else if (rating >= 2 && rating < 3) {
    return '⭐⭐'
  } else if (rating >= 3 && rating < 4) {
    return '⭐⭐⭐'
  } else if (rating >= 4 && rating < 5) {
    return '⭐⭐⭐⭐'
  } else if (rating === 5) {
    return '⭐⭐⭐⭐⭐'
  }
}

const createRestaurantItemTemplate = (resto) =>
`
	<article class="resto_item">
		<p tabindex="0" class="city">${resto.city}</p>
		<img tabindex="0" alt="${resto.name}" src="${CONFIG.BASE_IMAGE_URL_SMALL}${resto.pictureId}">
		
		<div class="resto_item_detail" idData=${resto.id}>
			<a href='/#/detail/${resto.id}' tabindex="0" class="name-item">${resto.name}</a>
			<p tabindex="0" class="rating">
				Rating : ${ratting(resto.rating)}
				<span>${resto.rating}</span>
			</p>
			<p tabindex="0" class="desc">${resto.description}</p>
		</div>
	</article>
`
const createRestaurantDetailTemplate = (resto) =>
`
	<article class="detail_resto">
		<img tabindex="0" alt="${resto.name}" src="${CONFIG.BASE_IMAGE_URL_SMALL}${resto.pictureId}">
		<h1 tabindex="0" class="name">${resto.name}<h1>	
		
		<div class="info_resto">
			<p tabindex="0" class="rating">Rating : ${ratting(resto.rating)}<span>${resto.rating}</span></p>
			<p tabindex="0" class="category">Kategori : ${resto.categories.map((element) => `${element.name}`).join('')}</p>
			<p tabindex="0" class="city">Kota : ${resto.city}</p>
			<p tabindex="0" class="address">Alamat : ${resto.address}</p>
		</div>

		<h2 tabindex="0">Description</h2>
		<p tabindex="0" class="desc">${resto.description}</p>
		
		<h2 tabindex="0" class="menus">MENU</h2>
			<div class="food">
				<h3 tabindex="0">Food</h3>
					<ul tabindex="0">${resto.menus.foods.map((element) => `<li>${element.name}</li>`).join('')}</ul>
			</div>
			<div class="drink">
				<h3 tabindex="0">Drink</h3>
					<ul tabindex="0">${resto.menus.drinks.map((element) => `<li>${element.name}</li>`).join('')}</ul>
			</div>

		<h2 tabindex="0">Review</h2>
			<section>
				${resto.customerReviews.map((element) => `
				<div class="review">
					<h3>${element.name}</h3>
					<p class="body">${element.review}</p>
					<p class="date">${element.date}</p>
				</div>
				`).join('')}
			</section>
	</article>
`
const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`
export default {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
