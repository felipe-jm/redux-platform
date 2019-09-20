import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 25%;
  background: #00a9a4;

  .accordion {
    .accordion-item {
      .accordion-item-heading {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        line-height: 20px;
        padding: 10px 20px;
        margin-bottom: 5px;
      }

      .accordion-item-panel {
        background: #00909a;
        color: #fff;
        font-size: 16px;
        padding: 10px;
        line-height: 32px;
        font-weight: 600;

        ul {
          list-style: none;
        }
      }
    }
  }
`;
