import { useState } from 'react';
// material
import { styled } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Container,
  Typography,
  CardMedia,
  CardContent,
  Paper,
  CardActionArea,
  Modal
} from '@material-ui/core';
//
import { MotionInView, varZoomIn } from '../../animate';

// ----------------------------------------------------------------------

const IndustryData = [
  {
    title: 'BFSI',
    icon: '/static/industry/whiteicons/2bfsi.png',
    description: 'Plug-in disrupting banking solutions for new-age customers.',
    content: 'Our banking software solutions, financial software solutions, and insurance IT solutions are specially meant to focus on client-centric requirements, fast-track operational competence, lessen risks and offer high-quality value-added services. We ensure that our BFSI based IT solutions assist clients in classifying and understanding business goals with advantages such as efficient operations, novel pricing models, lessened security risks, improvised business agility, and maximized RoI. '
  },
  {
    title: 'Construction',
    icon: '/static/industry/whiteicons/3construction.png',
    description: 'Walk on the path of construction innovation blended with technology.',
    content: 'Technozis construction software development service offers custom solutions that facilitates all construction-related business processes. We excel at construction software development and build construction industry software applications based on specific business demands. With our turn-key software solutions, you will be able to enjoy improved project management, audit costs and efficiency, ramp up communication flexibility, manage resources more effectively, and share documentation with all stakeholders.'
  },
  {
    title: 'Aviation',
    icon: '/static/industry/whiteicons/3construction.png',
    description: 'Take off your business to newer heights by digitizing the future of yor aviation solutions.',
    content: 'We deliver software development services to airlines, airports, and aviation technology providers. Our dedicated development teams help industry members implement digital transformations faster and more efficiently with secure and robust digital solutions. Technozis software development services cover a diverse set of aviation’s digital needs.'
  },
  {
    title: 'Automobile',
    icon: '/static/industry/whiteicons/14-automobile.png',
    description: 'Enhance safe, simplified, and streamlined public transit experience–digitally.',
    content: 'We support our automotive industry clients with in-depth consulting and apply digital & tech innovations. Rethink and advance your traditional auto business model to win and retain customers at every touchpoint. Our user-centered solutions, from trader websites and new car configurators to the in-car and connected car systems, to improve security, optimize processes and deliver exceptional customer experience.'
  },
  {
    title: 'Engineering/Heavy Equipment',
    icon: '/static/industry/whiteicons/1bank.png',
    description: 'Empower innovation and engineering-centric technology solution–Optimized. Reliable. Efficient.',
    content: 'Our collaborative manufacturing solution helps you unify global design, engineering and manufacturing teams so they are able to work on the same requirements, models and manufacturing process plans, while having the flexibility to meet local requirements.'
  },
  {
    title: 'Education & Training',
    icon: '/static/industry/whiteicons/10education.png',
    description: 'Achieve unparallel learning experience to simplify learning and enhance education.',
    content: 'We offer solutions to enhance and maintain the support systems of educational institutions and universities. These education IT solutions have been implemented by well-known and recognized technology driven universities across the globe, leveraging the potential of the below key focus areas, through our eLearning app development solutions like Learning Simulations, App-Driven, Learning & Assessment, Self-Directed Learning Platforms, and Institution Management.'
  },
  {
    title: 'Media',
    icon: '/static/industry/whiteicons/9media.png',
    description: 'Engage with audience to offer next-gen experience with cutting-edge media technologies.',
    content: 'We provide cutting-edge software solutions for publishing houses, independent software vendors, digital agencies, media companies, and game producers. We cover software development and maintenance helping our clients focus entirely on excellent content, new thrilling ideas, and better user engagement.'
  },
  {
    title: 'FMCG',
    icon: '/static/industry/whiteicons/bank.png',
    description: 'Description about industry.'
  },
  {
    title: 'Engineering',
    icon: '/static/industry/whiteicons/11engineering.png',
    description: 'Description about industry.'
  },
  {
    title: 'Pharmaceutical',
    icon: '/static/industry/whiteicons/13-pharma.png',
    description: 'Pop-in the right dose of digitalization for an agile development and distribution process.',
    content: 'Do you need to speed up drug development cycles, introduce real-time insights on sales and user data, enhance operational efficiency, engage customers, improve control and security compliance, and deliver first-rate patient outcomes. We deliver full-spectrum services to Life Science and Pharma enterprises globally and make innovation happen. We help our clients drive digital transformation to face tomorrow’s challenges in introducing new drugs, and to cure what is not curable today.'
  },
  {
    title: 'Information Technology',
    icon: '/static/industry/whiteicons/12it.png',
    description: 'Unlock your way to speed up the digital transformation with right software & applications.',
    content: "Technozis' experts deliver comprehensive high-tech software solutions that boost the agility of businesses. We help enterprises reinvent their customer experiences with the latest digital technologies to become more responsive to the growing demands of their tech-savvy clients."
  },
  {
    title: 'Consultancy',
    icon: '/static/industry/whiteicons/7consultancy.png',
    description: 'Work smarter, faster and more efficiently and take your cosulting business to next level with right digital solutions.',
    content: 'As your client’s needs change, your management consultancy must adapt quickly with services and operations. The faster your firm adapts to the changes within your industry, and to the needs of your clients and staff, the more you’ll ensure your competitive edge and long-term growth. The key is to harness your knowledge via software so it can be shared across the entire team and the managers they consult. '
    
  },
  {
    title: 'Retail',
    icon: '/static/industry/whiteicons/bank.png',
    description: 'Deliver round-the-clock shopping experience and take your retail business to newer heights.',
    content: 'We provides end-to-end retail software development services for leading companies. Our software developers have delivered multiple solutions for Lebara, a global telecom operator, including a mobile app that has helped Lebara to significantly boost conversions and ensured seamless omnichannel user experiences. Also, we provided Lebara with BI development and reporting to improve efficiency of their marketing campaigns.'
  },
  {
    title: 'Healthcare',
    icon: '/static/industry/whiteicons/6healthcare_pharma.png',
    description: 'Get your jab of technology today for an effective healthcare management solutions.',
    content: 'Healthcare industry is undergoing a transformational change with heavy penetration of emerging technology in both providers as well as patient segments. The time is now to transform your current systems to cloud, mobility, and IoT driven experiences for consumers. Recuperate the health systems with aptly designed solutions by Technozis. Some of the key services we have been offering to our healthcare clients include IT Strategy Consulting, Tailored Healthcare Applications, Data Integration & Management, Patient Engagement.'
  },
  {
    title: 'Telecom',
    icon: '/static/industry/whiteicons/bank.png',
    description: 'Become the most reliable telecommunication network with right technoloy.',
    content: 'Modern telcos require a whole array of solutions that meet the ever-growing demands of the tech-savvy customers. The list includes mobile applications, web platforms, mobile e-commerce solutions, streaming services, and much more. We have been designing omnichannel systems and unique digital solutions for telecom companies. Our dedicated development teams ensure entire system and their separate services work flawlessly to deliver smooth digital experiences to telecom users.'
  },
]

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  // border: '2px solid',
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Paper)(({ theme }) => {
  return {
    // minWidth: 320,
    height: 280,
    color: 'common.white',
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 800 : 800]
    },
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.02, 1.02, 1)",
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 700 : 800],
    },
  };
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '4px solid lightblue',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  // const isLight = theme.palette.mode === 'light';
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  console.log(title);

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container>
          {IndustryData.map((card) => (
            <Grid key={card.title} item xs={12} md={4} sx={{
              p: 3,
              // border: '2px solid',
            }}>
              <MotionInView variants={varZoomIn}>
                <CardActionArea onClick={() => { setOpen(true); setTitle(card.title); }}>
                  <CardStyle sx={{ borderBottom: '5px solid lightcoral', color: 'common.white' }}>
                    {/* <CardContent sx={{ backgroundColor: 'primary.main' }} /> */}
                    <CardContent>
                      <CardMedia
                        component='img'
                        image={card.icon}
                        sx={{ height: 50, width: 50, mb: 2 }}
                      />
                      <Typography variant="subtitle2" sx={{ mb: 1, color: 'lightcoral' }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardStyle>
                </CardActionArea>
              </MotionInView>
            </Grid>
          ))}
        </Grid>

        {IndustryData.map((industry) => (
          <Box key={industry.title}>
            {title === industry.title
              ? (
                <Modal
                  open={open}
                  onClose={() => { setOpen(false); setTitle(); }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <>
                      <Typography variant="h6" component="h2" sx={{ borderBottom: '4px solid lightblue'}}>
                        {industry.title}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: 'Raleway', fontStyle: 'italic' }}>
                        {industry.content}
                      </Typography>
                    </>
                  </Box>
                </Modal>
              )
              : null}
          </Box>
        ))}

      </Container>
    </RootStyle>
  );
}
