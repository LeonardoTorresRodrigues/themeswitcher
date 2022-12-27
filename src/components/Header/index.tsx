import ReactSwitch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import { shade } from 'polished';

export default function Header() {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      Hello World

      <ReactSwitch 
        onChange={() => {}}
        checked={false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}