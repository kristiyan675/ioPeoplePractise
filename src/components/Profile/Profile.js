import { Card, ListGroup, Button } from 'react-bootstrap'
import './profile.scss'
import Image from 'react-bootstrap/Image'
import Navigation from "../Homepage/Navigation/Navigation";

const Profile = () => {
    return (
        <>
        <div className='profile'>
            <Card className='border-0 mx-5 border-radius-20px' style={{ width: '25rem', height: '17rem'}}>
                <Card.Header className='card-header'>Profile</Card.Header>
                <div className='columns'>
                    <ListGroup style={{ width: '50%' }}>
                        <ListGroup.Item>Name</ListGroup.Item>
                        <ListGroup.Item>Date of birth</ListGroup.Item>
                        <ListGroup.Item>Birth Place</ListGroup.Item>
                        <ListGroup.Item>City</ListGroup.Item>
                        <ListGroup.Item>Country</ListGroup.Item>
                    </ListGroup>
                    <ListGroup style={{ width: '50%' }}>
                        <ListGroup.Item>  Empty  </ListGroup.Item>
                        <ListGroup.Item>  Empty  </ListGroup.Item>
                        <ListGroup.Item>  Empty  </ListGroup.Item>
                        <ListGroup.Item>  Empty  </ListGroup.Item>
                        <ListGroup.Item>  Empty  </ListGroup.Item>
                    </ListGroup>
                </div>
            </Card>
            <div className='d-flex flex-column align-item-between justify-content-between' style={{height: '17rem'}}>
                <Image src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' style={{ width: '10rem', height: '10rem', objectFit: 'cover', objectPosition:'center', marginTop:'20px'}} roundedCircle={true} fluid={true}/>
                <div className='buttons d-flex justify-content-between'>
                    <Button variant="outline-secondary "> Back </Button>
                    <Button variant="secondary"> Edit </Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;