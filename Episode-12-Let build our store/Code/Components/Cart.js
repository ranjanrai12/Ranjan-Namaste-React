import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../Utils/cartSlice";
import { EMPTY_CART_IMG } from "../../Utils/constant";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="w-6/12 mx-auto flex flex-col">
        <button
          className="p-2 m-2 ml-auto bg-orange-300 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList cards={cartItems} />
        {cartItems.length === 0 && (
          <div className="flex flex-col items-center">
            <img src={EMPTY_CART_IMG} className="h-64" />
            <h2 className="text-lg font-bold">Your cart is empty</h2>
            <label>
              Good food is always cooking! Go ahead, order some yummy items from
              the menu.
            </label>
            <h3 className="m-2 p-2 bg-orange-400 w-auto text-center rounded-lg">
              <Link to="/">SEE RESTAURANTS NEAR YOU</Link>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
