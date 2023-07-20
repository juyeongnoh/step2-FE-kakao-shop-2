import React from "react";
import Box from "./Box";
import { comma } from "../../utils/convert";
import Card from "./Card";
import Counter from "./Counter";

const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box border w-96 p-4">
      <h5 className="font-bold mb-4">{item.productName}</h5>
      {item.carts.map((cart) => (
        <Card key={cart.id} className="cart">
          <div className="option border p-4 my-4">
            <div className="option-name">{cart.option.optionName}</div>
            <div className="row flex justify-between">
              <Counter
                initCount={cart.quantity}
                onIncrease={(count) => {
                  onChange(cart.id, count, cart.option.price);
                }}
                onDecrease={(count) => {
                  onChange(cart.id, count, -cart.option.price);
                }}
              ></Counter>
              <div className="price font-bold">
                <span>{comma(cart.option.price * cart.quantity)}원</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
      <Card className="total-price">
        <div className="row border p-4 mt-4 flex justify-between">
          <h5>주문금액</h5>
          <div className="price text-sky-600 font-bold">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default CartItem;
