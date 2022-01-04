import "./Email-view.css";
import EmailToolbar from "./Email-toolbar/Email-toolbar";
import EmailContent from "./Email-content/Email-content";

function EmailView() {
	return (
		<main className="email-view">
			<EmailToolbar />
			<EmailContent />
		</main>
	);
}

export default EmailView;
