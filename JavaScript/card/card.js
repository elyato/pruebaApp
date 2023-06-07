import {
  createButtonIcon,
  contentInfoUser,
  createUserAvatar,
  createVotes,
} from "./index.js";
import { createElement } from "../utilities-ui.js";
import contentBodyCard from "./cardBody.js";
import icon from "../data/svg.js";

const createCard = (comentario, isreply = false) => {
  const { id, score, user, createdAt, content } = comentario;
  const contentCard = createElement("article", "content-card");
  contentCard.setAttribute("id", id);
  const contentLikes = createElement("aside");

  const contentHeader = contentInfoUser();
  const buttonLikes = createVotes(id, score);
  let iconAction;
  iconAction = createButtonIcon(icon.reply, "Reply");
  if (isreply) {
    const contentIconDelete = createElement("div", "content-icons");
    const iconDelete = createButtonIcon(icon.delete, "DELETE");
    const iconEdit = createButtonIcon(icon.edit, "EDIT");
    contentIconDelete.append(iconDelete, iconEdit);
    iconAction = contentIconDelete;
  }

  const dateRegister = createElement("p", "text-title-comment");
  dateRegister.textContent = createdAt;

  const contentComment = createElement("section", "content-comment");
  const avatar = createUserAvatar(user);

  const textComment = contentBodyCard(content);

  contentCard.append(contentLikes, contentComment);
  contentLikes.append(buttonLikes);
  contentComment.append(contentHeader, textComment);
  contentHeader.append(avatar, iconAction);
  contentCard.replyButton = iconAction;
  avatar.append(dateRegister);
  return contentCard;
};

export default createCard;
