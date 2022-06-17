import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../containers/Card";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import ComponentsWrapper from "../../components/ComponentsWrapper";
import Select from "../../components/Select/Select";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeCollectionItem } from "../../store/ItemsCollection/actions";
import Flex from "../../components/Flex";
import { CardContainer } from "./styled";

function ChangeItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [selectedItem] = useSelector((state) =>
    state.сollectionItems.сollectionItems.filter((item) => item.id === id)
  );
  const [collectionItem, setCollectionItem] = useState(selectedItem);
  function addTitle(value) {
    setCollectionItem({ ...collectionItem, title: value });
  }

  function changeNewItemDescription(value) {
    setCollectionItem({ ...collectionItem, description: value });
  }
  function changeCollection(value) {
    setCollectionItem({ ...collectionItem, collection: value });
  }

  const changeItem = () => {
    dispatch(changeCollectionItem(collectionItem));
    navigate("/");
  };

  return (
    <>
      <PageTitle>Edit Your Collection Item</PageTitle>
      <Flex>
        <CardContainer>
          <Card
            id={collectionItem.id}
            title={collectionItem.title}
            description={collectionItem.description}
            edited
          />
        </CardContainer>
        <Flex direction={"column"} justify={"center"}>
          <ComponentsWrapper mb={"10"}>
            <Select select={changeCollection} />
          </ComponentsWrapper>
          <Input onChange={addTitle} />
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <TextArea changeDescription={changeNewItemDescription} />
          </ComponentsWrapper>
          <Button onClick={changeItem} warning>
            Change
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default ChangeItem;
