import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Dashboard = () => {
    const [emails, setEmails] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [selectedFolder, setSelectedFolder] = useState("Inbox");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const folders = [
        { name: "Inbox", count: 128 },
        { name: "Sent", count: 9 },
        { name: "Drafts", count: 5 },
        { name: "Trash", count: 23 },
    ];

    useEffect(() => {
        if (!user) {
            navigate("/signin");
            return;
        }

        const fetchEmails = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/emails", {
                    headers: { Authorization: `Bearer ${user.token}` },
                });
                setEmails(response.data);
            } catch (error) {
                console.error("Failed to fetch emails", error);
            }
        };

        fetchEmails();
    }, [user, navigate]);

    const handleEmailClick = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/emails/${id}`, {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            setSelectedEmail(response.data);
        } catch (error) {
            console.error("Failed to fetch email details", error);
        }
    };

    const handleFolderClick = (folderName) => {
        setSelectedFolder(folderName);
        setSelectedEmail(null); // Clear selected email
        setIsSidebarOpen(false); // Close sidebar on folder click
    };

    const filteredEmails = emails.filter((email) => email.folder === selectedFolder);

    return (
        <div className="flex h-screen">
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 left-4 p-2 bg-gray-200 rounded-lg md:hidden z-50"
            >
                <Menu className="w-6 h-6" />
            </button>

            <div
                className={`fixed md:relative w-64 bg-gray-100 p-4 h-screen transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 z-40 mt-[3rem] md:mt-0`}
            >
                <h2 className="font-bold mb-4">Folders</h2>
                <ul>
                    {folders.map((folder) => (
                        <li
                            key={folder.name}
                            onClick={() => handleFolderClick(folder.name)}
                            className={`flex justify-between items-center p-2 hover:bg-gray-200 rounded cursor-pointer ${selectedFolder === folder.name ? "bg-gray-200" : ""
                                }`}
                        >
                            <span>{folder.name}</span>
                            {folder.count > 0 && (
                                <span className="bg-gray-300 text-sm px-2 rounded-full">
                                    {folder.count}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
                <button onClick={logout} className="mt-4 text-red-500 hover:underline">
                    Logout
                </button>
            </div>

            <div className="flex-1 mt-[3rem] md:mt-0 p-4 overflow-y-auto">
                <h2 className="font-bold mb-4 text-xl md:hidden">{selectedFolder}</h2>

                <div className="w-full md:w-1/3 border-r p-0 md:p-4">
                    <h2 className="font-bold mb-4 hidden md:block">Inbox</h2>
                    {filteredEmails.length > 0 ? (
                        <ul>
                            {filteredEmails.map((email) => (
                                <li
                                    key={email.id}
                                    onClick={() => handleEmailClick(email.id)}
                                    className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                                >
                                    <div className="font-bold">{email.subject}</div>
                                    <div className="text-sm text-gray-500">{email.sender}</div>
                                    <div className="text-xs text-gray-400">{email.timestamp}</div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No {selectedFolder.toLowerCase()} available</p>
                    )}
                </div>

                {selectedEmail && (
                    <div className="w-full md:w-2/3 p-4">
                        <h2 className="font-bold text-xl">{selectedEmail.subject}</h2>
                        <div className="text-sm text-gray-500">{selectedEmail.sender}</div>
                        <div className="text-xs text-gray-400">{selectedEmail.timestamp}</div>
                        <p className="mt-4">{selectedEmail.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;