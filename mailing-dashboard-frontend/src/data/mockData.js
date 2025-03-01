export const folders = [
    { name: "Inbox", count: 128 },
    { name: "Drafts", count: 9 },
    { name: "Sent", count: 0 },
    { name: "Junk", count: 23 },
    { name: "Trash", count: 0 },
    { name: "Archive", count: 0 },
    { name: "Social", count: 972 },
    { name: "Updates", count: 342 },
    { name: "Forums", count: 128 },
    { name: "Shopping", count: 8 },
    { name: "Promotions", count: 21 },
];

export const mockEmails = {
    Inbox: [],
    Drafts: [
        { id: 3, subject: "Draft: Project Proposal", sender: "user@mail.com", timestamp: "2023-10-03T12:00:00Z", content: "This is a draft email." },
    ],
    Sent: [],
    Junk: [
        { id: 4, subject: "You won a prize!", sender: "spam@mail.com", timestamp: "2023-10-04T13:00:00Z", content: "This is a junk email." },
    ],
    Trash: [],
    Archive: [],
    Social: [],
    Updates: [],
    Forums: [],
    Shopping: [],
    Promotions: [],
};