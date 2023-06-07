import { createComment } from "../create-comment.js";
import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
// import createCard from "./card.js";
import createInputCommentary from "./contentCommentary.js";

const createCommetary = (comentario) => {
  const { image, username } = comentario.user;

  const contentCommentary = createElement("div", "content-card");
  contentCommentary.classList.add("hidden");

  const photoUser = createAvatar(image);

  const aside = createElement("aside", "avatar-commentary");

  const buttonReply = createBtn("REPLY");

  const validation = buttonReply.btn;
  validation.disabled = true;
  const arroba = `@${username}, `;
  const written = createInputCommentary(arroba);

  const txtComentario = written.textArea;

  contentCommentary.append(aside, written, buttonReply);

  txtComentario.addEventListener("keyup", () => {
    if (txtComentario.value == arroba || txtComentario.value <= 10) {
      validation.disabled = true;
    } else {
      validation.disabled = false;
    }
  });

  buttonReply.addEventListener("click", () => {
    const startTime = Date.now();
    function calcularTiempo() {
      const tiempoTranscurrido = Date.now() - startTime; // Calcular la diferencia de tiempo en milisegundos

      // Convertir el tiempo transcurrido a minutos
      const minutosTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60));
      return minutosTranscurridos;
    }

    const replyCommentary = {
      id: 3,
      content: txtComentario.value,

      createdAt: calcularTiempo(),
      score: 0,
      replyingTo: username,
      user: {
        image: {
          png: "./images/avatars/image-ramsesmiron.png",
          webp: "./images/avatars/image-ramsesmiron.webp",
        },
        username: "ramsesmiron",
      },
    };

    comentario.replies = replyCommentary;
    txtComentario.value = "";
    validation.disabled = true;

    const renderComment = createComment(replyCommentary);
    renderComment.classList.add("reply-container");
    contentCommentary.renderComment = renderComment;
    contentCommentary.innerHTML = "";
    contentCommentary.append(renderComment);
    contentCommentary.classList.remove("content-card");
    return renderComment;
  });

  aside.append(photoUser);
  return contentCommentary;
};

export default createCommetary;
