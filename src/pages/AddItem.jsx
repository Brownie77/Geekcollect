import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCollectionItem } from "../store/ItemsCollection/actions";
import { addCollectionAction } from "../store/Collections/actions";
import HandleItemInfo from "../containers/HandleItemInfo";

function AddItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItem = (collectionItem, selectedOptionValue) => {
    dispatch(addCollectionItem(collectionItem));
   
    dispatch(addCollectionAction(selectedOptionValue));
import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { ImageUpload } from "../components/ImageUpload";
import Button from "../components/Button";
import Flex from "../components/Flex";
import Input from "../components/Input";
import TextArea from "../components/TextArea/TextArea";
import ComponentsWrapper from "../components/ComponentsWrapper";
import Select from "../components/Select/Select";
import Card from "../containers/Card";
import PageTitle from "../components/PageTitle";
import { useDispatch } from "react-redux";
import { addCollectionItem } from "../store/ItemsCollection/actions";

function AddItem() {
  const uniqueId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collectionItem, setCollectionItem] = useState({
    id: uniqueId,
    title: "",
    collection: "without collection",
    description: "",
    photo: "https://picsum.photos/200/300",
  });

  function addTitle(value) {
    setCollectionItem({ ...collectionItem, title: value });
  }

  function changeNewItemDescription(value) {
    setCollectionItem({ ...collectionItem, description: value });
  }
  function changeItemCollection(value) {
    setCollectionItem({ ...collectionItem, collection: value });
  }

  const addItem = () => {
    dispatch(addCollectionItem(collectionItem));
    navigate("/");
  };
  return (
    <>
      <HandleItemInfo
        pageTitle={"Add New Collection Item"}
        buttonText={"Add"}
        onSubmit={addItem}
      />

    </>
  );
}

export default AddItem;
