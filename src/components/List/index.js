import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useRef, useState } from "react";
import Card from "../Card";
import * as S from "./styles";

const List = () => {
  const [todoList, setTodoList] = useState([
    {
      id: Math.random().toString(),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);
  const [inProgressList, setInProgressList] = useState([
    {
      id: Math.random().toString(),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);
  const [completedList, setCompletedList] = useState([
    {
      id: Math.random().toString(),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);

  const itemInput = useRef(null);

  const handleGetListWithSetter = (listName) => {
    switch (listName) {
      case "todoList":
        return { list: todoList, setList: setTodoList };
      case "inProgressList":
        return { list: inProgressList, setList: setInProgressList };
      case "completedList":
        return { list: completedList, setList: setCompletedList };
      default:
        return { list: todoList, setList: setTodoList };
    }
  };

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const listDetails = handleGetListWithSetter(source.droppableId);
      const orderResult = handleReOrder(
        listDetails.list,
        source.index,
        destination.index
      );
      listDetails.setList(orderResult);
    } else {
      console.log("handleMove", source, destination);
      handleMove(
        source.droppableId,
        destination.droppableId,
        source,
        destination
      );
    }
  };

  const handleMove = (
    sourceId,
    destId,
    droppableSource,
    droppableDestination
  ) => {
    const sourceListDetails = handleGetListWithSetter(sourceId);
    const destListDetails = handleGetListWithSetter(destId);
    const sourceClone = Array.from(sourceListDetails.list);
    const destClone = Array.from(destListDetails.list);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    console.log(sourceListDetails.list, destListDetails.list);

    sourceListDetails.setList(sourceClone);
    destListDetails.setList(destClone);
  };

  const handleReOrder = (list, sourceIndex, destinationIndex) => {
    const listClone = Array.from(list);
    const [removed] = listClone.splice(sourceIndex, 1);
    listClone.splice(destinationIndex, 0, removed);

    return listClone;
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: "20px 0",
    background: "transparent",
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: "transparent",
    width: "320px",
  });

  const createDroppable = (listName, list) => {
    return (
      <S.DroppableStyle>
        <h2>{createHumanReadableTitle(listName)}</h2>

        <Droppable droppableId={listName}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={getListStyle(snapshot.isDragging)}
            >
              {createDraggable(list)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </S.DroppableStyle>
    );
  };

  const createDraggable = (list) => {
    return list.map((item, index) => {
      return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
              {...provided.draggableProps}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <Card
                title={item.content}
                priority="high"
                tags={["tag1", "tag2"]}
              />
            </div>
          )}
        </Draggable>
      );
    });
  };

  const createHumanReadableTitle = (listName) => {
    const result = listName.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (itemInput.current.value === "") return;

    // setItems([
    //   ...items,
    //   {
    //     id: Math.random().toString(),
    //     content: (
    //       <Card
    //         title={itemInput.current.value}
    //         priority="high"
    //         tags={[123, 123, 555]}
    //       />
    //     ),
    //   },
    // ]);

    itemInput.current.value = "";
  };

  const handleRemoveItem = (id) => console.log("handleRemoveItem", id);

  return (
    <S.ListWrapper>
      {/* <div>
        <form onSubmit={handleAddItem}>
          <input type="text" ref={itemInput} />
          <button type="submit">Add</button>
        </form>
      </div> */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {createDroppable("todoList", todoList)}
        {createDroppable("inProgressList", inProgressList)}
        {createDroppable("completedList", completedList)}
      </DragDropContext>
    </S.ListWrapper>
  );
};

export default List;
