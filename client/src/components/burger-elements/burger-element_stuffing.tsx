import { useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";
import { useDrag, useDrop } from "react-dnd/dist/hooks";
import { useDispatch } from "../../services/types/hooks";
import { moveIngredientInConstructor, deleteIngredient } from "../../services/actions/constructor-ingredients";
import { Ingredient } from "../../services/types/types";

export type BurgerStuffingProps = {
  data: Ingredient,
  id: string,
  index: number,
}

export default function BurgerStuffing({ data, id, index }: BurgerStuffingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: "filling",
    collect() { },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveIngredientInConstructor({ dragIndex, hoverIndex }))

      item.index = hoverIndex;
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: "filling",
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} className={styles.ingredient_container}>
      <div>
        <DragIcon type="primary" />
      </div>
      {data && (
        <ConstructorElement
          text={data.name}
          price={data.price}
          thumbnail={data.image}
          handleClose={() => dispatch(deleteIngredient(id))}
        />
      )}
    </div>
  );
}