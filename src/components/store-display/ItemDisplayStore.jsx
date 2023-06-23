import { useState } from "react";
import ItemDisplayModal from "./ItemDisplayModal";
import useEditCart from "../../utils/useEditCart";

const ItemDisplayStore = ({ item }) => {
  const [open, setOpen] = useState(false);

  const realPrice = item.onSale ? item.price - item.discount : item.price;
  const { addToCart } = useEditCart();

  const addOneToCart = () => {
    addToCart(item, 1);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="block w-[25vw] md:w-[40vw] border-[1px] justify-center align-center">
      {item.clearance ? (
        <h3>Clearance Item!</h3>
      ) : item.onSale ? (
        <h3>On Special! Save ${item.discount}</h3>
      ) : (
        <h3>Great Deal!</h3>
      )}
      <div className="flex justify-center align-center">
        <img src={item.imageUrl} className="max-w-[20vw] max-h-10vh" />
      </div>
      <div>
        <p>{item.name}</p>
        <br />
        {item.onSale ? (
          <p>
            ${realPrice} <s>${item.price}</s>
          </p>
        ) : (
          <p>${item.price}</p>
        )}

        <br />
      </div>
      <button onClick={() => addOneToCart()}>Add to Cart</button>
      <button onClick={() => setOpen(true)}>Show More</button>
      <ItemDisplayModal open={open} close={closeModal} item={item} />
    </div>
  );
};

export default ItemDisplayStore;
