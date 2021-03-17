import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  sgMail.setApiKey(
    "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"
  );

  //console.log(req.body)
  const data = JSON.parse(req.body);

  const msg = {
    to: "enquiries@bendando.com",
    from: "your_website_contact_form@bendando.com",
    subject: "Message from BenDando Contact Form",
    text: "test text", //JSON.stringify(req.body),
    html:
      "Name: " +
      data.name +
      "<br />" +
      "Email: " +
      data.email +
      "<br />" +
      "Message: " +
      data.message +
      "<br />",
  };

  await sgMail
    .send(msg)
    .then(() => {
      //console.log('Email sent')
      res.statusCode = 200;
      res.json({ success: "true" });
    })
    .catch((error) => {
      res.statusCode = 500;
      res.json({ success: "false" });
      //console.error(error);
    });

  //res.status(200).json({ text: 'Hello' })
}
