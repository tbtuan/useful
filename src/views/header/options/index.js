
import { ThemeSwitch } from "./themeSwitch";
import {
    Container,
    EditButton,
    OptionsWrapper,
    StyledEdit,
    StyledGithub,
    StyledLink,
} from "./style"

const OptionsLayout = ({ docsLocation }) => (
    <OptionsWrapper>
        <Container>
            <StyledLink to={"https://github.com/tbtuan/useful"}>
                <StyledGithub />
            </StyledLink>
            <ThemeSwitch />
            <EditButton to={docsLocation}>
                <StyledEdit />Edit
            </EditButton>
        </Container>
    </OptionsWrapper>
);

export default OptionsLayout;