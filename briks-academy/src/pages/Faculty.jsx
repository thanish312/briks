import { Box, Typography, Grid, Paper, Divider, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const faculty = [
	{
		name: 'Mr. Hitendra Naik (HN) M.Sc',
		title: 'Director & Mathematics lecturer',
		desc: 'HN is a very proficient teacher with about 17 years of experience in teaching mathematics. He is a teacher who believes that learning is more fun when related to our daily life.',
		img: 'https://static.wixstatic.com/media/f87a8f_6f59d2210dfe4a85b425c42bdd8c7d22~mv2.jpeg/v1/crop/x_0,y_0,w_581,h_581/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hitendra%20Naik.jpeg'
	},
	{
		name: 'Mr. Lingegowda (LG), M.Sc',
		title: 'Mathematics lecturer',
		desc: 'LG has about 17 years of teaching experience in teaching mathematics. He is a very proficient teacher who teaches the concepts from the grassroot level which is very helpful for both board exams and competitive exam.',
		img: 'https://static.wixstatic.com/media/f87a8f_15f88c64e9a240adb106eea6fe6cd18b~mv2.jpeg/v1/crop/x_342,y_0,w_670,h_670/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Briks%20academy%20Lingegowda.jpeg'
	},
	{
		name: 'Mr. Santhosh S. V. (SVS) M.Sc',
		title: 'Physics lecturer',
		desc: 'Physics is essentially an intuitive and concrete science, making this concrete science simple is SVS sir. He makes sure he relates all the concepts in physics to our everyday activities and makes understanding easy.',
		img: 'https://static.wixstatic.com/media/f87a8f_9b81530d875c490a8a34a1f237696c4a~mv2.jpg/v1/crop/x_328,y_0,w_850,h_850/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Briks%20academy%20Santhosh.jpg'
	},
	{
		name: 'Mr. Narasimha Murthy M.Sc., B.Ed',
		title: 'Physics lecturer',
		desc: 'Having an experience of about 7 years in teaching physics. He makes sure that all the concepts are clear from the basics which instils interest in the minds of students.',
		img: 'https://static.wixstatic.com/media/f87a8f_e4cce90e15e0438898746f5dd220395c~mv2.jpg/v1/crop/x_242,y_0,w_754,h_754/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20210514-WA0012.jpg'
	},
	{
		name: 'Dr. Ranjit (RJ), M.Sc., PhD',
		title: 'Chemistry lecturer',
		desc: 'With over 17 years of experience in teaching chemistry, RJ sir makes learning a fun process which reduces the burden on the students. He makes sure the students are well trained to tackle both board exams and competitive exams.',
		img: 'https://static.wixstatic.com/media/f87a8f_d67765c564b34d0888e86fda819fafce~mv2.jpeg/v1/crop/x_0,y_21,w_813,h_813/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Briks%20academy%20Ranjith.jpeg'
	},
	{
		name: 'Mrs. Srividya M.Sc. in Zoology & Biotechnology, B.Ed',
		title: 'Biology lecturer',
		desc: 'With 9 years of teaching experience, she is a certified student counselor. Vidya ma’am is one such teacher who ensures students have a very friendly environment and enjoy the process of learning.',
		img: 'https://static.wixstatic.com/media/f87a8f_d205f18da02f4330920805079c36634f~mv2.jpeg/v1/crop/x_102,y_0,w_978,h_978/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Briks%20academy%20Srividhya.jpeg'
	}
];

export default function Faculty() {
	return (
		<Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
			sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 1100, mx: 'auto' }}>
			<Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
				Meet Our Staff
			</Typography>
			<Typography variant="h4" fontWeight={700} gutterBottom>
				Offering the Support that Students Need
			</Typography>
			<Divider sx={{ my: 5 }} />
			<Grid container spacing={5}>
				{faculty.map((f, i) => (
					<Grid item xs={12} md={6} key={i}>
						<Paper component={motion.div} whileHover={{ scale: 1.03, boxShadow: 8 }} elevation={3} sx={{ p: 4, height: '100%', display: 'flex', alignItems: 'flex-start', gap: 3, borderRadius: 4, boxShadow: 4 }}>
							<Avatar
								src={f.img}
								alt={f.name}
								sx={{ width: 100, height: 100, mr: 3, boxShadow: 2, border: '2px solid', borderColor: 'primary.main' }}
							/>
							<Box>
								<Typography variant="h6" fontWeight={700} gutterBottom>{f.name}</Typography>
								<Typography variant="subtitle1" color="text.secondary" gutterBottom>{f.title}</Typography>
								<Typography variant="body1" color="text.secondary">{f.desc}</Typography>
							</Box>
						</Paper>
					</Grid>
				))}
			</Grid>
			<Divider sx={{ my: 5 }} />
			<Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
				Guest lectures to be delivered by proficient lecturers from all over Karnataka
			</Typography>
		</Box>
	);
}
