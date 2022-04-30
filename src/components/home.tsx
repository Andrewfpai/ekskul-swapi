import {Link} from "react-router-dom";
import Illustration from '../images/Illustration.svg'
import {Heading, Text, Button, VStack, Box, Stack, Image, Flex } from '@chakra-ui/react'


function Home() {
 
    return (
      <div>
          <Flex className="Login" align={'center'} justify={'center'} backgroundColor='#EDF2F7' height="100vh">
                <Box w="xs" className="login-container" p={8} backgroundColor='white' borderRadius="xl">

                <Stack align={'center'} mb={12}>
            
                
                <Image
                    
                    boxSize='200px'
                    objectFit='cover'
                    src={Illustration}
                    alt='Illustration'
                    />    
                  
                </Stack>

                <Stack spacing={10}>
                
                    <VStack spacing={1} align={'center'}>
                        <Heading>Hello There!</Heading>
                        <Text fontSize='md' align={'center'}>
                            Let's get to know each other name!
                        </Text>
                    </VStack>

            

                    <VStack alignItems='center' spacing={4} mb={12}>
        
                        <Link to="/people">
                            <Button colorScheme='teal' width='200px'>See The People!</Button>
                        </Link>
                    </VStack>

                </Stack>
                </Box>
            </Flex>
        
   
      
      </div>
    );
  }
  
  export default Home;


  