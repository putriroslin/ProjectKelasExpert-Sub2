/* eslint-disable no-tabs */
import UrlParser from '../../routes/url-parser'
import DBrestaurant from '../../data/restaurant'
import templateCreator from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const DetailResto = {
  async render () {
    return `
	<section id="resto" tabindex="0">
		<div class="resto_detail"></div>
		<div tabindex="0" id="likeButtonContainer"></div>
	</section>
	`
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await DBrestaurant.DetailRestaurant(url.id)
    const restaurantDetail = document.querySelector('.resto_detail')
    restaurantDetail.innerHTML =
      templateCreator.createRestaurantDetailTemplate(resto)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        city: resto.city,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating,
        description: resto.description
      }
    })
  }
}
export default DetailResto
