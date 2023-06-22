import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { useSelector } from '../../services/types/hooks';

type BurgerIngredientCategory = {
  innerRef: any, 
  ingr_type: string, 
  name: string,
  style: string,
}

export default function BurgerIngredientCategory({ innerRef, ingr_type, name, style }: BurgerIngredientCategory) {
  const data = useSelector((store) => store.ingredients.items!);
  console.log(data)
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