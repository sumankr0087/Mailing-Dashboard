const emails = [
    {
      id: 1,
      subject: "Welcome to the Mailing Dashboard",
      sender: "admin@mail.com",
      timestamp: "2023-10-01T10:00:00Z",
      content: "This is the content of the email.",
    },
    // Add more mock emails
  ];
  
  module.exports = {
    getEmails: () => emails,
    getEmailById: (id) => emails.find((email) => email.id === id),
  };