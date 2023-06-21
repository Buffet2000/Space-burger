import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";
import { useSelector } from "../../services/types/hooks";

type BurgerBun = {
  containerType: "top" | "bottom" | undefined,
  isLocked: boolean,
  hideIco: string,
  nameType: string | undefined,
  className?: string,
}

export default function BurgerBun({ containerType, isLocked, hideIco, nameType }: BurgerBun) {

  const buns = useSelector((store) => store.constructorIngredients.buns);

  return (
    <div className={styles.ingredient_container}>
      <div className={hideIco}>
        <DragIcon type="primary" />
      </div>
      {buns.length !== 0 &&
        <ConstructorElement
          type={containerType}
          isLocked={isLocked}
          text={`${buns[0].name} ${nameType}`}
          price={buns[0].price}
          thumbnail={buns[0].image}
        />
      }
    </div>
  );
}

BurgerBun.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  hideIco: PropTypes.string,
  nameType: PropTypes.string,
};