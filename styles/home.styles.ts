import styled from "styled-components";
import Layout from "components/Layouts";

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
    width: max-content;
    display: flex;
    flex-flow: column;
    gap: 0.5em;
    margin: 2em 0;

    .form-container {
      font-size: 0.8em;
      display: flex;
      align-items: center;
      gap: 1em;

      .form-right {
        display: flex;
        flex-flow: column;
        gap: 0.25em;
      }
    }

    label {
      width: 100%;

      .img-container {
        --size: 5em;
        cursor: pointer;
        position: relative;
        width: var(--size);
        height: var(--size);
        background: #fff1;
        border-radius: 9999px;
        overflow: hidden;
        border: 2px solid #555;

        .overlay {
          display: grid;
          place-items: center;
          background: #fff3;
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: opacity 0.15s;
          width: 100%;
          z-index: 2;
        }

        .img {
          object-fit: cover;
          object-position: center;
        }

        :hover {
          .overlay {
            opacity: 1;
          }
        }
      }

      .right {
        input {
          font-size: 0.95em;
          border-radius: 5px;
          padding: 0.5em 0.75em;
          border: none;
          background: #fff1;
          color: #fff;
        }
      }
    }
    .name {
      width: 13em;
    }
    .url {
      width: 17em;
    }
  }
`;
