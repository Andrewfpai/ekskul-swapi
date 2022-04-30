import {useState, useEffect} from "react"
import {Skeleton, Heading, Text, HStack, VStack, Box, Stack, Flex } from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'

import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

// import axios from 'axios';



function People(): JSX.Element {
    const [state, setState] = useState<any[]>([])
    const [isLoading, SetIsLoading] = useState(false)

    // function getUser() {
       
    //       axios.get('https://swapi.dev/api/people')
    //         .then(function (response) {
    //         setState(response);
    //       })
    //         .catch(function (error){
    //         console.error(error);
    //         }
    //         )}

    useEffect(() => {
      async function fetchData() {
        SetIsLoading(true)
        fetch('https://swapi.dev/api/people')
        .then((res) => res.json())
        .then((res) => {
          
          setState(res.results)
          console.log(state)

          SetIsLoading(false)
        
          })  
      }
      fetchData()
    }, [])



    // async function fetchData(){
    //   SetIsLoading(true)
    //   fetch('https://swapi.dev/api/people')
    //     .then((res) => res.json())
    //     .then((res) => {
          
    //       setState(res.results)
    //       console.log(state)

    //       SetIsLoading(false)
        
    //       })
    // }

    function skeletonText(item:any){
      let items = []
      for (var i = 0; i < item; i++) {
        items.push(<Skeleton height='20px' width='15em'/>)
      }
      
      return items.map(skeleton => {
        return skeleton
    })
    }

    return (
     <div>
         <Flex className="Login" justify={'center'} backgroundColor='#EDF2F7' height="50em">
        <Box w="md" className="login-container" p={8} backgroundColor='white' borderRadius="xl" mt="10">

        <Stack mb={2} >
            <Link to="/"><ArrowBackIcon w={7} h={7} ml={-5} mt={-5}/></Link>
        </Stack>

        <Stack spacing={7}  align={'center'} >
            
            <VStack spacing={1}  align={'center'}>
                <Heading>People In Starwars</Heading>
                <Text fontSize='md'>
                    What's in here?
                </Text>
            </VStack>


            <Stack>
            
      
              {isLoading ? (
                <HStack gap='2'>
                <Stack spacing={4}>
                 
                 {skeletonText(10)}   
                </Stack>

                
                </HStack>
                
              ) : (
            <Accordion allowToggle >
             
            
               {state.map((person,i)=>{
                    return (

                  
                    
              <AccordionItem width='15em' key={i}>
                      <h2>      
              <AccordionButton>
              
                <Box flex='1' textAlign='left' >
                  {person['name']}
                  
                    
                </Box>
               
                <AccordionIcon />
              </AccordionButton>
              </h2>
              
              <AccordionPanel pb={4}>
                  <Text>Mass: {person['mass']}</Text>
                  <Text>Height: {person['height']}</Text>
                  <Text>Gender: {person['gender']}</Text>
                  <Text>Birth year: {person['birth_year']}</Text>
                  <Text>Hair color: {person['hair_color']}</Text>
               
              </AccordionPanel>
              </AccordionItem>
              )
                })}  
           </Accordion> 
              )}
            </Stack>
        </Stack>
        </Box>
      </Flex>

     </div>
    )}

        
  
export default People;

  