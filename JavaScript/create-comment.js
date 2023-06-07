import createCard from "./card/card.js";
import createCommetary from "./card/commentary.js";
import { createElement } from "./utilities-ui.js";
export const createComment = (comentario) => {
  const containerCard = createElement("section", "container-card");
  const card = createCard(comentario);
  const commentary = createCommetary(comentario);
  const contentHome = document.getElementById("content-home");
  contentHome.append(containerCard);

  containerCard.append(card, commentary);

  containerCard.commentary = commentary;
  card.replyButton.addEventListener("click", () => {
    commentary.classList.toggle("hidden");
    // commentary.parentNode.append(prueba);
  });
  return containerCard;
};
