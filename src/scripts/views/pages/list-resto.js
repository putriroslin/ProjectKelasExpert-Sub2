/* eslint-disable no-tabs */
import DBrestaurant from '../../data/restaurant'
import templateCreator from '../templates/template-creator'

const ListResto = {
  async render () {
    return `
	<section id="hero">
		<div class="hero_content">
		<h2 tabindex="0">Hits Restaurant</h2>
		<p tabindex="0">
			Temukan Berbagai Pilihan Restoran yang Kamu Inginkan
		</p>
		</div>
	</section>

	<section id="resto" tabindex="0">
		<h2 tabindex="0">Restaurant List</h2>
		<div class="resto_list"></div>
	</section>
		`
  },
  async afterRender () {
    const resto = await DBrestaurant.ListRestaurant()
    const restaurantList = document.querySelector('.resto_list')
    resto?.forEach((resto) => {
      restaurantList.innerHTML += templateCreator.createRestaurantItemTemplate(resto)
    })
  }
}
export default ListResto
