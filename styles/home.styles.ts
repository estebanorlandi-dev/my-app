import styled from "styled-components";
import Layout from "components/Layouts";
import colors from "./colors";

export const HomeContainer = styled(Layout)`
  .clock-overlay {
    font-size: 25em;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-30%, 0%) rotate(-45deg);
    font-weight: bold;
    opacity: 0.15;
  }

  .middle {
    display: flex;
    flex-flow: column;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    width: 60%;
    margin: 0 auto;
    width: 480px;
    max-width: 480px;

    .shortcuts {
      width: 100%;
      margin: 2em 0 0 0;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1em;
    }
  }

  .clock {
    display: flex;
    flex-flow: column;
    gap: 0.25em;
    align-items: center;

    time {
      font-weight: 700;
      font-size: 4em;
    }
    .date {
      font-weight: 500;
      font-size: 1em;
    }

    .day,
    .month {
      text-transform: capitalize;
    }
  }

  .form {
    display: flex;
    flex-flow: column;
    gap: 0.25em;
  }
`;

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
`;
