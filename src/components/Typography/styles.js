import styled from 'styled-components'

export default styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};

  display: flex;
  align-items: center;
`
