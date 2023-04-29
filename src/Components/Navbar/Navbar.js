import CartWidget from "../CartWidgets/CartWidget"
import {Button} from "react-bootstrap"


const Navbar = ()=>{
    return(
        <nav>
            {<h2>Tienda de Ron</h2>}
            <div>
                <Button variant="light">Tradicionales</Button>{' '}
                <Button variant="light">Premium</Button>{' '}
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar