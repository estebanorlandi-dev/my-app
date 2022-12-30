import styled from "styled-components";
import colors from "styles/colors";

export const ShortcutContainer = styled.div`
  position: relative;

  .menu {
  }

  .options {
    position: absolute;
    top: 0;
    right: 0;
    height: 2em;
    width: 2em;
    z-index: 2;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .content {
    text-decoration: none;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    max-width: calc(480px / 5 - 1em);

    .shortcut-head {
      position: relative;
      width: 100%;
      height: 100%;
      background: #333;
      border-radius: 5px;
      overflow: hidden;
      aspect-ratio: 1/1;

      .overlay {
        position: absolute;
        display: grid;
        place-items: center;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0e0e10;
        opacity: 0;
        transition: opacity 0.15s;
      }
      :hover .overlay {
        opacity: 0.8;
      }

      .img {
        object-fit: cover;
        object-position: center;
      }
    }

    .shortcut-name {
      padding: 0.5em 0 0 0.25em;
      font-size: 0.75em;
      width: 100%;
      white-space: pre;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: bold;
    }
  }
  button[type="submit"] {
    background: transparent !important;
  }
`;
