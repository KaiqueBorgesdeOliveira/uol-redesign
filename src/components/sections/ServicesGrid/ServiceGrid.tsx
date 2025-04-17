// src/components/sections/ServicesGrid.tsx
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`

export const ServicesGrid = () => (
  <GridContainer>
    {/* Adicione os cards de serviços aqui */}
  </GridContainer>
)