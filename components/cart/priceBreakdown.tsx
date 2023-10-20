import styles from "./stylesheets/priceBreakdown.module.css";
import { useCartContext } from "@/context/cartContext";
import calculateSubTotal from "utilities/calculateSubTotal.ts";
import { useState, useEffect } from "react";
import { formatCurrency } from "@/utilities/formatCurrency";

export default function Checkout({
  buttonTag,
  href,
}: {
  buttonTag: string;
  href: string;
}) {
  const { cart } = useCartContext();
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    setSubTotal(calculateSubTotal(cart));
  }, [cart]);

  return (
    <div className={styles.checkout}>
      <div className={styles["price-breakdown"]}>
        <p>Subtotal</p>
        <p>{formatCurrency(subTotal)}</p>
      </div>
      <a href={href}>
        <button className={styles["checkout-button"]}>{buttonTag}</button>
      </a>
    </div>
  );
}
