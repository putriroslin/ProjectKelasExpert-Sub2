/* eslint-disable no-tabs */
import FavoriteRestoIdb from '../../data/favorite-idb'
import templateCreator from '../templates/template-creator'

const FavoriteResto = {
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
		<h2 tabindex="0">Favorited Restaurant</h2>
		<div class="resto_list"></div>
	</section>
		`
  },
  async afterRender () {
    const resto = await FavoriteRestoIdb.getAllResto()
    const restoContainer = document.querySelector('.resto_list')

    resto?.forEach((resto) => {
      restoContainer.innerHTML += templateCreator.createRestaurantItemTemplate(resto)
    })
  }
}
export default FavoriteResto
