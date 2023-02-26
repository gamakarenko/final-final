import styled from '@emotion/styled';

import { Modal } from '@mui/material';

export const StyledYaMapInput = styled(Modal)`
  .ya-map-input {
    &__section {
      width: 100%;
      max-width: 420px;
      height: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    &__content {
      background-color: var(--bgc);
      border-radius: 10px 10px 0 0;
      overflow: hidden;
    }

    &__close-btn {
      justify-self: center;
    }

    &__input-box {
      position: relative;
      z-index: 0;
    }

    &__input {
      display: block;
      width: 100%;
      background-color: var(--bgc);
      font-size: 16px;
      border: none;
      border-bottom: 1px solid hsl(0, 0%, 70%);
      padding: 10px 59px 10px 10px;
      resize: none;
    }

    &__input:focus-visible {
      outline: none;
      border-bottom: 1px solid var(--primary-color);
    }

    &__input-box:focus {
      outline: none;
    }

    &__btn-done {
      position: absolute;
      right: 0;
      top: 5px;
      bottom: 5px;
      align-self: center;
    }

    &__suggest {
      font-size: 14px;
      display: block;
      width: calc(100%);
      margin: 0 auto;
      text-align: left;
      padding: 0.8em 1em;
    }

    &__suggest:not(:last-of-type) {
      border-bottom: 1px solid hsl(0, 0%, 85%);
    }

    &__suggest:active {
      background-color: var(--primary-color-lighter);
    }
  }
`;
