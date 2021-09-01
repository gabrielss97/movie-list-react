import { Home } from "./views/Home"
import {Route} from 'react-router'
import { MovieDetail } from "./views/MovieDetail"

export const Routes = () => {
    return(
    <>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/movie/:id" component={MovieDetail}></Route>
    {/* React Router cria as rotas da minha aplicação se baseando nos componentes */}
    </>
    )
}