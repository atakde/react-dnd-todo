import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #f2f4f7;
`;

export const SidebarWrapper = styled.div`
  min-width: 320px;
  background: #ffffff;
  padding: 24px 24px 16px;
  display: flex;
  flex-direction: column;
  color: #667085;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  .sidebar-header {
    display: flex;
    gap: 8px;
    padding: 12px 10px;
    align-items: center;
  }

  .sidebar-body {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin: 4px 0;
      color: #667085;

      & > div {
        display: flex;
        gap: 0.4rem;
      }

      .count {
        background: #F2F4F7;
        padding: 2.5px 6px;
        color: #344054;
        border-radius: 6px;
      }

      &.active, &:hover {
        background: #F2F4F7;
        color: #1D2939;
        border-radius: 8px;

        .count {
          background: #1D2939;
          color: #ffffff;
        }

      }
    }
  }
`;
