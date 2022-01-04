import "./Email-content.css";
import EmailTitle from "./Email-title/Email-title";
import EmailHeader from "./Email-header/Email-header";
import EmailBody from "./Email-body/Email-body";
import EmailActions from "./Email-actions/Email-actions";

function EmailContent() {
	return (
		<article className="email-content">
			<EmailTitle />
			<EmailHeader />
			<EmailBody />
			<EmailActions />
		</article>
	);
}
export default EmailContent;
