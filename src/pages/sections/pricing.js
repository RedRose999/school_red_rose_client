import React, { useState } from 'react'
import { Box, Grid, Container, Flex, Image, Heading, Text, Badge, Card } from 'theme-ui'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'
import BlockTitle from '../../@core/components/block-title'
import PriceCard from '../../@core/components/price-card'

const pricingMonthlyData = [
  {
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: false
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: false
      }
    ]
  },
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For startup enterprise',
    priceWithUnit: '$49.99/',
    pricePeriod: 'mo',
    buttonText: 'Subscribe Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: true
      }
    ]
  }
]

const pricingYearlyData = [
  {
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: false
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: false
      }
    ]
  },
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For startup enterprise',
    priceWithUnit: '$99.99/',
    pricePeriod: 'yr',
    buttonText: 'Subscribe Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: true
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: true
      }
    ]
  }
]

const Pricing = () => {
  const [plan, setPlan] = useState(false)
  const imageUrls = [
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg',
    'https://images.unsplash.com/photo-1684318551812-63d888cce300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  ];

  return (
<box>
 <BlockTitle sx={styles.pricing.blockTitle} tagline='Activities' heading='Our Gallery' />
<Grid>
    <div className="gallery" style={{display: 'flex'}}>
    {imageUrls.map((imageUrl, index) => (
      // <img key={index} src={imageUrl} height = "30%" width = "50%" alt={`Image ${index + 1}`} />
      <Card sx={{ borderRadius: '3', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)', }}>
  <Image src={imageUrl} sx={{ borderTopLeftRadius: '3', borderTopRightRadius: '3' }} />
  <Box sx={{ p: '3' }}>
    <Heading as='h2' mb={2} >The Beach Front</Heading>
    <Text mb={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Text>
    <Flex>
      <Badge mr={1}>summer</Badge><Badge mr={1}>photography</Badge><Badge mr={1}>travel</Badge>
    </Flex>
  </Box>
</Card>
    ))}
  </div>
  </Grid>
  </box>
    // <Box as='section' id='pricing' sx={styles.pricing}>
    //   <Container>
    //     <BlockTitle sx={styles.pricing.blockTitle} tagline='Pricing Plan' heading='Choose your pricing policy' />
    //     <Box sx={styles.pricing.btnWrap}>
    //       <Box as='ul' sx={styles.pricing.btnUl}>
    //         <Box
    //           as='li'
    //           className={` ${plan === false ? 'active' : ''}`}
    //           variant='buttons.primary'
    //           sx={styles.pricing.btn}
    //           onClick={() => {
    //             setPlan(false)
    //           }}
    //         >
    //           Monthly Plan
    //         </Box>
    //         <Box
    //           as='li'
    //           className={` ${plan === true ? 'active' : ''}`}
    //           variant='buttons.primary'
    //           sx={styles.pricing.btn}
    //           onClick={() => {
    //             setPlan(true)
    //           }}
    //         >
    //           Annual Plan
    //         </Box>
    //       </Box>
    //     </Box>

    //     <Grid sx={styles.pricing.wrapper}>
    //       {plan === true ? pricingYearlyData.map((price, index) => <PriceCard key={index} data={price} />) : null}
    //       {plan === false ? pricingMonthlyData.map((price, index) => <PriceCard key={index} data={price} />) : null}
    //     </Grid>
    //   </Container>
    // </Box>
  )
}

export default Pricing

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)'
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)'
      }
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s'
    },
    blockTitle: {
      textAlign: 'center',
      marginTop: '60px',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
        marginTop: '30px'
      }
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px'
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block'
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent'
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)'
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px'
      }
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px']
    }
  }
}
