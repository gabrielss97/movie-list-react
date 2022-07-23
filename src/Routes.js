import { Home } from "./views/Home"
import {Route} from 'react-router'
import { MovieDetail } from "./views/MovieDetail"
import { Favorites } from "./views/Favorites"

export const Routes = () => {
    return(
    <>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/movie/:id" component={MovieDetail}></Route>
    <Route exact path="/favorites" component={Favorites}></Route>
    {/* React Router cria as rotas da minha aplicação se baseando nos componentes */}
    </>
    )
}