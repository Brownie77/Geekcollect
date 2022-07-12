import React from "react";
import { Link } from "react-router-dom";
import UploadFileButton from "../../components/UploadFileButton";

import {
  CardWrapper,
  CardImage,
  CardDescription,
  CardInfoWrapper,
  CardPrice,
  MainCardInfo,
  CardTitle,
  IconBar,
} from "./styled";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useDispatch } from "react-redux";
import { deleteCollectionItem } from "../../store/ItemsCollection/actions";

function Card({ edited, id, price, title, description, collection }) {
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(deleteCollectionItem({ id }));
  }
  return (
    <CardWrapper>
      {!edited && (
        <IconBar>
          <Link to={`/item/change/${id}`}>
            <ModeEditIcon sx={{ fontSize: 25 }} />
          </Link>
          <DeleteForeverIcon
            onClick={deleteItem}
            sx={{ fontSize: 25, color: "white", cursor: "pointer" }}
          />
        </IconBar>
      )}
      <CardImage edited={edited}></CardImage>

      <CardInfoWrapper>
        <MainCardInfo>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{price ? price : "Not For Sale"}</CardPrice>
        </MainCardInfo>
        <CardDescription>{description}</CardDescription>
      </CardInfoWrapper>
    </CardWrapper>
  );
}

export default Card;
