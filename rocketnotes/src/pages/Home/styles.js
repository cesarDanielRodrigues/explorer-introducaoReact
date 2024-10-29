import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newNote content";
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;

`
export const Brand = styled.div`
  grid-area: brand;
`
export const Menu = styled.ul`
  grid-area: menu;
`
export const Search = styled.div`
  grid-area: search;
`
export const Content = styled.div`
  grid-area: content;
`
export const NewNote = styled.button`
  grid-area: newNote;
`
