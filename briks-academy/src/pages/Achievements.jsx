import { Box, Typography, Divider, Grid, Card, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const images = [
	'https://static.wixstatic.com/media/f87a8f_ac3f8c235ace4090a07b17850630ca98~mv2.jpg/v1/fit/w_2164,h_1082,q_90,enc_avif,quality_auto/f87a8f_ac3f8c235ace4090a07b17850630ca98~mv2.jpg',
	'https://static.wixstatic.com/media/f87a8f_f000982102b2401992815f215ea0d381~mv2.png/v1/fit/w_1106,h_458,q_90,enc_avif,quality_auto/f87a8f_f000982102b2401992815f215ea0d381~mv2.png',
	'https://static.wixstatic.com/media/f87a8f_5af872d5bb0f4980ad0a78d4e0fd9b86~mv2.jpg/v1/fill/w_1707,h_880,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0001_edited.jpg',
	'https://static.wixstatic.com/media/f87a8f_ffaa9513551a4075b081a1d26f55f752~mv2.jpg/v1/fit/w_1920,h_1000,q_90,enc_avif,quality_auto/f87a8f_ffaa9513551a4075b081a1d26f55f752~mv2.jpg',
];

export default function Achievements() {
	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 1200, mx: 'auto' }}
		>
			<Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
				Achievements
			</Typography>
			<Typography variant="h4" fontWeight={700} gutterBottom>
				Celebrating Our Success
			</Typography>
			<Divider sx={{ my: 5 }} />
			<Grid container spacing={5}>
				{images.map((src, i) => (
					<Grid item xs={12} sm={6} md={4} key={i}>
						<Card
							component={motion.div}
							whileHover={{ scale: 1.03, boxShadow: 8 }}
							sx={{ borderRadius: 4, boxShadow: 4, overflow: 'hidden' }}
						>
							<CardMedia
								component="img"
								image={src}
								alt={`Achievement ${i + 1}`}
								sx={{ height: 260, objectFit: 'cover', transition: 'transform 0.3s' }}
							/>
						</Card>
					</Grid>
				))}
			</Grid>
			<Divider sx={{ my: 5 }} />
			<Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
				©{new Date().getFullYear()} by Briks Academy.
			</Typography>
		</Box>
	);
}
