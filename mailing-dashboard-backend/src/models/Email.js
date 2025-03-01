const emails = [
    {
        id: 1,
        subject: "Meeting Tomorrow",
        sender: "Alicia Koch",
        timestamp: "over 1 year ago",
        content:
            "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to it.",
        folder: "Inbox",
        tags: ["work", "important"],
    },
    {
        id: 2,
        subject: "Re: Project Update",
        sender: "Alice Smith",
        timestamp: "over 1 year ago",
        content:
            "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in. I have a few minor suggestions that I'll include in the attached document. Let's discuss these during our next meeting.",
        folder: "Inbox",
        tags: ["work", "important"],
    },
    {
        id: 3,
        subject: "Weekend Plans",
        sender: "Bob Johnson",
        timestamp: "almost 2 years ago",
        content:
            "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun. If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature. Looking forward to your response! Best, Bob",
        folder: "Inbox",
        tags: ["personal"],
    },
    {
        id: 4,
        subject: "Re: Question about Budget",
        sender: "Emily Davis",
        timestamp: "almost 2 years ago",
        content:
            "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your review.",
        folder: "Inbox",
        tags: ["work"],
    },
    {
        id: 5,
        subject: "Draft: Project Proposal",
        sender: "Alicia Koch",
        timestamp: "3 days ago",
        content:
            "Here's a draft of the project proposal. Please review it and let me know if you have any feedback or suggestions. I'll finalize it once we incorporate everyone's input.",
        folder: "Drafts",
        tags: ["work"],
    },
    {
        id: 6,
        subject: "Sent: Quarterly Report",
        sender: "Alice Smith",
        timestamp: "1 week ago",
        content:
            "I've sent the quarterly report to the stakeholders. Let me know if you need any additional information or if there are any follow-up actions required.",
        folder: "Sent",
        tags: ["work"],
    },
    {
        id: 7,
        subject: "Trash: Old Newsletter",
        sender: "Newsletter Team",
        timestamp: "1 month ago",
        content:
            "This is an old newsletter that is no longer relevant. It has been moved to the trash.",
        folder: "Trash",
        tags: [],
    },
];

module.exports = {
    getEmails: () => emails,
    getEmailById: (id) => emails.find((email) => email.id === id),
};