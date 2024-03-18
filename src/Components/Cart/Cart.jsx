import CreateCart from "./CreateCart";
import DisplayCart from "./DisplayCart";

// Main display page that has the create cart and the display cart imported into it

function Cart(){

    return (
        <div>
            <CreateCart/>
            <br></br>
            <DisplayCart/>
        </div>
    );
}

export default Cart;