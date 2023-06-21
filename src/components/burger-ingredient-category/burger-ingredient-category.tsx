import PropTypes from "prop-types";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { useSelector } from '../../services/types/hooks';
import { useLocation } from "react-router-dom";

export default function BurgerIngredientCategory({ innerRef, ingr_type, name, style }) {
  const location = useLocation();
  const data = useSelector((store) => store.ingredients.items);

  return (
    <div className="mt-10">
      <p ref={innerRef} id={ingr_type} className="text text_type_main-medium mb-6">{name}</p>
      <div className={style}>
        {data
          .filter((ingr) => ingr.type === ingr_type)
          .map((data) => (
            <BurgerIngredient key={data._id} data={data} />
          ))}
      </div>
    </div>
  );
}

BurgerIngredientCategory.propTypes = {
  innerRef: PropTypes.func,
  ingr_type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
