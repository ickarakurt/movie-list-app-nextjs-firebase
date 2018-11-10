import { Menu , Container } from 'semantic-ui-react'
import Link from 'next/link';

const FixedMenuLayout = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item><Link href="/"><a>Login</a></Link></Menu.Item>
                <Menu.Item><Link href="/register"><a>Register</a></Link></Menu.Item>
                <Menu.Item><Link href="/addmovie"><a>Add Movie</a></Link></Menu.Item>
                <Menu.Item><Link href="/mylist"><a>My List</a></Link></Menu.Item>

            </Container>
        </Menu>
    </div>
);

export default  FixedMenuLayout;