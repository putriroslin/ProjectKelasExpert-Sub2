import ListResto from '../views/pages/list-resto'
import FavoriteResto from '../views/pages/favorite-resto'
import DetailResto from '../views/pages/detail-resto'

const routes = {
  '/': ListResto,
  '/list-resto': ListResto,
  '/favorite': FavoriteResto,
  '/detail/:id': DetailResto
}
export default routes
