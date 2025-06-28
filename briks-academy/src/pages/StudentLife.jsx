import { Box, Typography, Divider, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Image data from the provided JSON
const studentLifeImages = [
  {
    url: "https://static.wixstatic.com/media/f87a8f_e49c58204db14cee90d2686c2a346faf~mv2.jpeg/v1/fit/w_1080,h_622,q_90,enc_avif,quality_auto/f87a8f_e49c58204db14cee90d2686c2a346faf~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_679a34ba890b4b8ebd1f530fc8278836~mv2.jpeg/v1/fit/w_960,h_655,q_90,enc_avif,quality_auto/f87a8f_679a34ba890b4b8ebd1f530fc8278836~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_01f6e81b99eb403e9a5f0d6d92c213fd~mv2.jpeg/v1/fit/w_960,h_716,q_90,enc_avif,quality_auto/f87a8f_01f6e81b99eb403e9a5f0d6d92c213fd~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_a23fefd42a0144499d8a2033a19062ac~mv2.jpeg/v1/fit/w_960,h_620,q_90,enc_avif,quality_auto/f87a8f_a23fefd42a0144499d8a2033a19062ac~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_7ef28cb4f2a34cb89d61f7102fc9d6ff~mv2.jpeg/v1/fit/w_960,h_657,q_90,enc_avif,quality_auto/f87a8f_7ef28cb4f2a34cb89d61f7102fc9d6ff~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_554b65b0f86046a7bc8feaa262746d71f000.jpg/v1/fill/w_739,h_422,al_c,lg_1,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/f87a8f_554b65b0f86046a7bc8feaa262746d71f000.jpg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_234cc465a4ad4b4d9daff3c658c10989~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_234cc465a4ad4b4d9daff3c658c10989~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_e646569d57b5439c99ce0744365ee502~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_e646569d57b5439c99ce0744365ee502~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_9072a96ce4e54bbab02f684c2fcb0ecc~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_9072a96ce4e54bbab02f684c2fcb0ecc~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_c76433ab0f7a443bae83c6330cc682ad~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_c76433ab0f7a443bae83c6330cc682ad~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_89be98b6dd1b45288cc7d5469d74f7bd~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_89be98b6dd1b45288cc7d5469d74f7bd~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_05c46e98ac0f4b078792724073466688~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_05c46e98ac0f4b078792724073466688~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_596602348eb6405e9b65db271145f0eb~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_596602348eb6405e9b65db271145f0eb~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_5b6c40db98644d4ea63a9630cda72c86~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_5b6c40db98644d4ea63a9630cda72c86~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_0c2ed08f8eea4b4b845286eaab66c8aa~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_0c2ed08f8eea4b4b845286eaab66c8aa~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_3c1e26935b6f4acdb2fd5445d4472d49~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_3c1e26935b6f4acdb2fd5445d4472d49~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_eabc8ab4fc7143158baff5086f2a2307~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_eabc8ab4fc7143158baff5086f2a2307~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_d07b6cbc81ad4dc583813d8afb1e9885~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_d07b6cbc81ad4dc583813d8afb1e9885~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_f553fd1db9e3444a95ee611430f50ad2~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_f553fd1db9e3444a95ee611430f50ad2~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_cbe2aea8af454d368fdf4d8ea172b30d~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_cbe2aea8af454d368fdf4d8ea172b30d~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_795cbc85284f478b8bb0c8662710d928~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_795cbc85284f478b8bb0c8662710d928~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_56dcdc265e914cf6a19e6054876abe74~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_56dcdc265e914cf6a19e6054876abe74~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_7a5a17d4a3dc47fbb9694c2540770613~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_7a5a17d4a3dc47fbb9694c2540770613~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_495dc0df96f34ce89641e1645a20ff27~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_495dc0df96f34ce89641e1645a20ff27~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_3314c2a09ac6411aa3700b205cb583d1~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_3314c2a09ac6411aa3700b205cb583d1~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_46e3bd41b016436dba2a35874e36960c~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_46e3bd41b016436dba2a35874e36960c~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_476d860098fe4563b7812fbc680fd021~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_476d860098fe4563b7812fbc680fd021~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_5a2d38b78f584091b3687fef26a68c75~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_5a2d38b78f584091b3687fef26a68c75~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_7f651e6beae846c98dc8840a6bef3070~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_7f651e6beae846c98dc8840a6bef3070~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_0f761831017c42a285053eab06f74c34~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_0f761831017c42a285053eab06f74c34~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_5052fdf5e8b84974a99ef910a5f6b21f~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_5052fdf5e8b84974a99ef910a5f6b21f~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_acd6a25d394b45c6bc4972ab3e844b81~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_acd6a25d394b45c6bc4972ab3e844b81~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_8668981018374c54b2846c9b2a339a94~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_8668981018374c54b2846c9b2a339a94~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_bda1a5c73edf4858bfb54eb922ec382c~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_bda1a5c73edf4858bfb54eb922ec382c~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_a9b01cd4b0d743d899991a924fe281ff~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_a9b01cd4b0d743d899991a924fe281ff~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_15a7d8e9f18344248f45cad2e5e1b9c8~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_15a7d8e9f18344248f45cad2e5e1b9c8~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_94023b73389f4340b0b9cfbdbce414ff~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_94023b73389f4340b0b9cfbdbce414ff~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_51b94696b9e34397b18329164e76323a~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_51b94696b9e34397b18329164e76323a~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_1432be15a8d44393be55f3450b6d9312~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_1432be15a8d44393be55f3450b6d9312~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_1c13d68c64d1454983050845ef2d80b4~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_1c13d68c64d1454983050845ef2d80b4~mv2.jpeg",
    alt: ""
  },
  {
    url: "https://static.wixstatic.com/media/f87a8f_e0af3f7dfde948fd8adaf618ebbcf228~mv2.jpeg/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/f87a8f_e0af3f7dfde948fd8adaf618ebbcf228~mv2.jpeg",
    alt: ""
  },

];

export default function StudentLife() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 1100, mx: 'auto' }}
    >
      <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom align="center">
        Life at College & Tuition
      </Typography>
      
      <Typography variant="h4" fontWeight={700} gutterBottom align="center">
        Get Involved
      </Typography>
      
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }} align="center">
        Experience our vibrant student life through activities, events, and academic excellence.
      </Typography>
      
      <Divider sx={{ my: 5 }} />

      {/* Collage Gallery */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 2,
          justifyItems: 'center',
        }}
      >
        {studentLifeImages.map((image, index) => (
          <Paper 
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            elevation={3}
            key={index}
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              height: { xs: '200px', md: '300px' },
              width: '100%',
              maxWidth: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3,
            }}
          >
            <img
              src={image.url}
              alt={image.alt || 'Student life image'}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Paper>
        ))}
      </Box>

      <Divider sx={{ my: 5 }} />
      
      <Typography variant="body2" color="text.secondary" align="center">
        ©{new Date().getFullYear()} Briks Academy
      </Typography>
    </Box>
  );
}
