import React from "react";
import ChatMembersList from "./ChatMembersList";
import ChatView from "./ChatView";

export default function ChatContainer() {
return (
<div fluid className="p-5" style={{ backgroundColor: "#eee" , height: "70%" }}>
    <div className="row">
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
        <div className="card">
        <div className="card-body">
            <ChatMembersList />
        </div>
        </div>
    </div>
        <ChatView />
    </div>
</div>
);
}
