/**
 * The ContactTab function returns a list of contact information.
 * @returns The ContactTab component is being returned, which renders a paragraph and an unordered list
 * with two list items containing an email address and a phone number.
 */
const ContactTab = () => {
  return (
    <>
      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
};

export default ContactTab;
