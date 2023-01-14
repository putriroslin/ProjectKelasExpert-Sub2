import API_ENDPOINT from '../globals/api-endpoint'

class DBrestaurant {
  static async ListRestaurant () {
    const response = await fetch(API_ENDPOINT.LIST_RESTO)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async DetailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default DBrestaurant
