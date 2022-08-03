import styles from '../styles/footer.module.css';
import { IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <div className={styles.footer}>
    <p>Maintained by Ernest Lu</p>
	<a target="_blank" rel="noopener noreferrer" href={"https://codeforces.com/profile/Badint"}>
		<IconButton size="small">
			<Icon icon="simple-icons:codeforces" />
		</IconButton>
	</a>
	<a target="_blank" rel="noopener noreferrer" href={"https://github.com/ernest-lu"}>
		<IconButton size="small">
			<GitHubIcon />
		</IconButton>
	</a>
	<a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/badint/"}>
		<IconButton size="small">
			<LinkedInIcon />
		</IconButton>
	</a>
  </div>
);

export default Footer;